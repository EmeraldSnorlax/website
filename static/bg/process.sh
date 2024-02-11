#!/bin/sh
rm 180.apng
ffmpeg -i pexels_videos_1531416\ \(1080p\).mp4 -vf "scale=180:-1:flags=lanczos,split[s0][s1];[s0]palettegen=max_colors=9:reserve_transparent=0[p];[s1][p]paletteuse=dither=sierra2_4a,select=not(mod(n\,3))" -vsync vfr -plays 0 -ss 0 -t 6 180.apng
