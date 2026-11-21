# Section editor for the handbooks: drag sections around, toggle page breaks, rebuild, preview the PDF.
# Run from repo root: uv run --with weasyprint --with markdown --with typst --with pypandoc_binary python _meta/editor/serve.py
# then open http://127.0.0.1:8765
import json, os, subprocess, sys
from http.server import ThreadingHTTPServer, BaseHTTPRequestHandler
from urllib.parse import urlparse, parse_qs

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
HERE = os.path.dirname(os.path.abspath(__file__))
DOCS = {'GM-HANDBOOK.md': 'GM-HANDBOOK.pdf', 'PLAYER-HANDBOOK.md': 'PLAYER-HANDBOOK.pdf'}
PDFS = set(DOCS.values())


class H(BaseHTTPRequestHandler):
    def send(self, code, body, ctype='application/json'):
        if not isinstance(body, bytes):
            body = json.dumps(body).encode()
        self.send_response(code)
        self.send_header('Content-Type', ctype)
        self.send_header('Content-Length', str(len(body)))
        self.send_header('Cache-Control', 'no-store')
        self.end_headers()
        self.wfile.write(body)

    def doc(self):
        f = parse_qs(urlparse(self.path).query).get('f', [''])[0]
        if f not in DOCS:
            self.send(404, {'error': 'unknown file'})
            return None
        return os.path.join(ROOT, f)

    def do_GET(self):
        p = urlparse(self.path).path
        if p == '/':
            self.send(200, open(os.path.join(HERE, 'index.html'), 'rb').read(), 'text/html; charset=utf-8')
        elif p == '/api/files':
            self.send(200, DOCS)
        elif p == '/api/doc':
            if path := self.doc():
                self.send(200, {'text': open(path, encoding='utf-8').read(), 'mtime': os.stat(path).st_mtime_ns})
        elif p.startswith('/pdf/') and p[5:] in PDFS and os.path.exists(os.path.join(ROOT, p[5:])):
            self.send(200, open(os.path.join(ROOT, p[5:]), 'rb').read(), 'application/pdf')
        else:
            self.send(404, {'error': 'not found'})

    def do_PUT(self):
        if not (path := self.doc()):
            return
        req = json.loads(self.rfile.read(int(self.headers['Content-Length'])))
        # Refuse to overwrite edits made elsewhere since the editor loaded the file.
        if os.stat(path).st_mtime_ns != req['mtime']:
            self.send(409, {'error': 'file changed on disk since it was loaded'})
            return
        with open(path, 'w', encoding='utf-8') as fh:
            fh.write(req['text'])
        self.send(200, {'mtime': os.stat(path).st_mtime_ns})

    def do_POST(self):
        if urlparse(self.path).path != '/api/build':
            return self.send(404, {'error': 'not found'})
        r = subprocess.run([sys.executable, 'build.py'], cwd=ROOT, capture_output=True, text=True)
        self.send(200, {'ok': r.returncode == 0, 'out': (r.stdout + r.stderr).strip()})

    def log_message(self, *a):
        pass


if __name__ == '__main__':
    port = int(os.environ.get('PORT', 8765))
    print(f'section editor: http://127.0.0.1:{port}')
    ThreadingHTTPServer(('127.0.0.1', port), H).serve_forever()
