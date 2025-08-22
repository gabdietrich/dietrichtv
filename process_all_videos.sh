#!/bin/bash

# Script to process all videos into square formats for desktop and mobile
# Desktop: 720x720 or 1080x1080 (based on original quality)  
# Mobile: 360x360 (always)

echo "🎬 Processing all videos into square formats..."

# Function to get video resolution
get_resolution() {
    ffprobe -v quiet -select_streams v:0 -show_entries stream=width,height -of csv=s=x:p=0 "$1"
}

# Function to determine best desktop resolution
get_desktop_resolution() {
    local width=$1
    local height=$2
    local min_dimension=$((width < height ? width : height))
    
    if [ $min_dimension -ge 1080 ]; then
        echo "1080"
    else
        echo "720"
    fi
}

# Function to process a single video
process_video() {
    local input_file="$1"
    local base_name="${input_file%.*}"
    
    # Skip if already processed
    if [[ "$input_file" == *"-desktop.mp4" ]] || [[ "$input_file" == *"-mobile.mp4" ]]; then
        return
    fi
    
    echo "  📹 Processing: $input_file"
    
    # Get original resolution
    resolution=$(get_resolution "$input_file")
    width=$(echo $resolution | cut -d'x' -f1)
    height=$(echo $resolution | cut -d'x' -f2)
    
    # Determine desktop resolution
    desktop_size=$(get_desktop_resolution $width $height)
    
    echo "    Original: ${width}x${height} → Desktop: ${desktop_size}x${desktop_size}, Mobile: 360x360"
    
    # Create desktop version (crop center to square)
    ffmpeg -i "$input_file" \
        -vf "crop=min(iw\,ih):min(iw\,ih),scale=${desktop_size}:${desktop_size}" \
        -c:v libx264 -crf 20 -preset medium -movflags +faststart -an \
        "${base_name}-desktop.mp4" -y -v quiet
    
    # Create mobile version (crop center to square)  
    ffmpeg -i "$input_file" \
        -vf "crop=min(iw\,ih):min(iw\,ih),scale=360:360" \
        -c:v libx264 -crf 23 -preset medium -movflags +faststart -an \
        "${base_name}-mobile.mp4" -y -v quiet
}

# Find all carousel directories and process videos
find public/media/projects -name "carousel" -type d | while read carousel_dir; do
    project_name=$(echo "$carousel_dir" | cut -d'/' -f4)
    echo "📁 Processing project: $project_name"
    
    cd "$carousel_dir"
    
    # Process all mp4 files in this directory
    for video in *.mp4; do
        if [[ -f "$video" ]]; then
            process_video "$video"
        fi
    done
    
    cd - > /dev/null
    echo "  ✅ Completed: $project_name"
done

echo "🎉 All videos processed into square formats!"
echo "📊 Summary:"
echo "   Desktop videos: Cropped to square, 720x720 or 1080x1080 based on quality"
echo "   Mobile videos: Cropped to square, 360x360 for optimal performance"
