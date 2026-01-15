#!/bin/bash

# Convert all AV1 videos to H.264 for Safari compatibility
# Requires ffmpeg to be installed locally

# Check if ffmpeg is installed
if ! command -v ffmpeg &> /dev/null || ! command -v ffprobe &> /dev/null; then
    echo "Error: ffmpeg is not installed."
    echo ""
    echo "Please install ffmpeg first:"
    echo ""
    echo "  macOS:   brew install ffmpeg"
    echo "  Ubuntu:  sudo apt install ffmpeg"
    echo "  Windows: choco install ffmpeg"
    echo ""
    echo "Or visit: https://ffmpeg.org/download.html"
    exit 1
fi

VIDEO_DIR="$(dirname "$0")/../static/video"
count=0
converted=0

echo "Checking videos in static/video..."
echo ""

while IFS= read -r video; do
    codec=$(ffprobe -v error -select_streams v:0 -show_entries stream=codec_name -of default=noprint_wrappers=1:nokey=1 "$video" 2>&1)
    count=$((count + 1))

    if [ "$codec" = "av1" ]; then
        echo "⚠ AV1 found: ${video##*/}"

        # Get video dimensions
        width=$(ffprobe -v error -select_streams v:0 -show_entries stream=width -of default=noprint_wrappers=1:nokey=1 "$video")
        height=$(ffprobe -v error -select_streams v:0 -show_entries stream=height -of default=noprint_wrappers=1:nokey=1 "$video")

        # Make width even if odd (required for H.264)
        if [ $((width % 2)) -ne 0 ]; then
            width=$((width - 1))
        fi

        # Create temp file for conversion
        temp="${video%.mp4}-temp.mp4"

        # Convert to H.264
        ffmpeg -i "$video" -vf "scale=${width}:${height}" -c:v libx264 -profile:v high -preset medium -crf 23 -pix_fmt yuv420p -movflags +faststart -an "$temp" -y -loglevel error

        if [ $? -eq 0 ]; then
            mv "$temp" "$video"
            echo "  ✓ Converted to H.264 (${width}x${height})"
            converted=$((converted + 1))
        else
            echo "  ✗ Conversion failed"
            rm -f "$temp"
        fi
    fi
done < <(find "$VIDEO_DIR" -name "*.mp4" -type f)

echo ""
echo "Done! Checked $count videos, converted $converted to H.264"

if [ $converted -eq 0 ] && [ $count -gt 0 ]; then
    echo "All videos are already Safari-compatible (H.264)"
fi
