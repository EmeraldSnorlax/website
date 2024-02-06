#!/bin/sh
ffmpeg -i pexels_videos_1531416\ \(1080p\).mp4 -vf "scale=240:-1:flags=lanczos,split[s0][s1];[s0]palettegen=max_colors=12:reserve_transparent=0[p];[s1][p]paletteuse=dither=bayer,select=not(mod(n\,4))" -vsync vfr %03d.png
mkdir frames
mv *.png frames/
oxipng -o max --strip safe -Z --scale16 --alpha --recursive frames
