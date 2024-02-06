#!/bin/sh
rm 240.apng
ffmpeg -i pexels_videos_1531416\ \(1080p\).mp4 -vf "scale=240:-1:flags=lanczos,split[s0][s1];[s0]palettegen=max_colors=12:reserve_transparent=0[p];[s1][p]paletteuse=dither=sierra2_4a,select=not(mod(n\,3))" -vsync vfr -plays 0 240.apng
