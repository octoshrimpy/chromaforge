## Organization

* wiki
* generators
  * player/
    * generate.md
  * DM/
    * tile/
      * generate.md
        * ```
                    color is _color
                    biome is color > _biome
                    landmarks[] is color > _landmarks
                     
                    tile is [color, biome, landmarks[]]

                    return tile

      * _biome.md
      * _landmark.md
        * ```
                    using color
                    options[] is color+-1
                    landcolor is 1%options[]
                    type is 1%2

                    land is landcolor/type

                    return land

      * landmarks/
        * yellow/
          * natural.md
          * manmade.md
        * blue/
          * natural.md
          * manmade.md
        * purple/
          * natural.md
          * manmade.md
        * red/
          * natural.md
          * manmade.md
        * green/
          * natural.md
          * manmade.md
      * _difficulty.md
      * _color.md
      * _
    * monster
    * item
    *

* Player Folder (everything the players can see)
* World Generation Folder
