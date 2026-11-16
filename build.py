# Build PLAYER-GUIDE.pdf and the rules pages of the character sheet from PLAYER-GUIDE.md.
# Run from repo root: uv run --with weasyprint --with markdown python build.py
import markdown, weasyprint, re
SHEET = 'ChromaForge_Alpha_Character_Sheet.html'
# tab_length=2: the guide nests specialty abilities with 2-space indents.
raw = markdown.markdown(open('PLAYER-GUIDE.md').read(), extensions=['tables', 'sane_lists'], tab_length=2)
# Never split a Fount symbol from its name.
raw = re.sub(r'([ᛄ∵ϟ△⌘]) (Seron|Orvik|Zhark|Drun|Veyra)', r'\1&nbsp;\2', raw)

# ---- Character sheet: one drawer page per group of guide sections ----
# Five Founts and Ancestries already have card pages in the sheet, so they are left out.
PAGES = {
    'rules': ('Rules', ['What you need', 'Character creation', 'Checks', 'Combat', 'Recovery', 'Magic', 'Advancement']),
    'archetypes': ('Archetypes', ['Starting archetypes']),
    'spells': ('Spells', ['Spells']),
    'items': ('Items', ['Items and prices']),
    'knacks': ('Knacks', ['Knacks']),
}
sections = dict(re.findall(r'<h2>(.*?)</h2>(.*?)(?=<h2>|$)', raw, re.S))
known = {t for _, ts in PAGES.values() for t in ts} | {'The Five Founts', 'Ancestries'}
if missing := set(sections) - known:
    print('warning: guide sections not on any sheet page:', ', '.join(sorted(missing)))
pages, nav = [], []
for view, (title, titles) in PAGES.items():
    body = ''.join(f'<h2>{t}</h2>{sections[t]}' if len(titles) > 1 else sections[t] for t in titles)
    pages.append(f'<main class="page info guide" data-view="{view}" hidden>\n'
                 f'<header class="page-head"><h1>{title.upper()}</h1></header>\n{body}</main>\n')
    nav.append(f'<a href="#{view}">{title}</a>')
sheet = open(SHEET).read()
def fill(name, content):
    global sheet
    sheet, n = re.subn(rf'(<!-- {name}:start -->).*?(<!-- {name}:end -->)',
                       lambda m: m[1] + '\n' + content + '\n' + m[2], sheet, flags=re.S)
    assert n == 1, f'{SHEET}: marker {name} not found'
fill('guide-nav', '\n'.join(nav))
fill('guide', ''.join(pages))
open(SHEET, 'w').write(sheet)

# ---- PDF ----
h = re.sub(r'<h([23])>(Ancestries|Starting archetypes|Spells|Items and prices|Supplies and services|Knacks)</h\1>', r'<h\1 class="pb">\2</h\1>', raw)
# Keep each archetype on one page.
a, b = h.split('<h2 class="pb">Starting archetypes</h2>')
b, c = b.split('<h2', 1)
b = re.sub(r'(<h3>.*?)(?=<h3>|$)', r'<div class="keep">\1</div>', b, flags=re.S)
h = a + '<h2 class="pb">Starting archetypes</h2>' + b + '<h2' + c
# Armor item names on one line.
h = re.sub(r'(<h3>Armor</h3>.*?<table)', r'\1 class="nw1"', h, count=1, flags=re.S)
css = '''@page{size:Letter;margin:18mm 16mm;@bottom-center{content:"ChromaForge player guide · " counter(page);font-size:8pt;color:#777}}
body{font-family:"DejaVu Serif","Noto Sans Symbols",serif;font-size:9.5pt;line-height:1.4;color:#222}
h1{font-size:24pt;border-bottom:3px solid #6a3fa0;padding-bottom:4pt;margin-top:0}
h2{font-size:15pt;color:#6a3fa0;border-bottom:1px solid #ccc;margin-top:18pt;break-after:avoid}
.pb{break-before:page;margin-top:0}
h3{font-size:11.5pt;margin:12pt 0 3pt;break-after:avoid}
.keep{break-inside:avoid}
table{border-collapse:collapse;width:100%;margin:6pt 0;font-size:8.8pt}
tr{break-inside:avoid}
.nw1 td:first-child{white-space:nowrap}
th,td{border:1px solid #ccc;padding:2pt 5pt;text-align:left}th{background:#f0eaf7}
ul{padding-left:14pt}li{margin:1pt 0;break-inside:avoid}p{margin:4pt 0}li>p{margin:0}hr{border:0}'''
weasyprint.HTML(string='<style>' + css + '</style>' + h).write_pdf('PLAYER-GUIDE.pdf')
