#!/bin/bash

# Script to reorganize and rename all carousel media with clean, consistent names

echo "🎬 Reorganizing carousel media with clean names..."

# Function to process images (create 1:1 versions)
process_image() {
    local input_file="$1"
    local output_base="$2"
    
    echo "  🖼️  Processing image: $input_file"
    
    # Create desktop version (720x720) using ffmpeg
    ffmpeg -i "$input_file" -vf "crop=min(iw\,ih):min(iw\,ih),scale=720:720" "${output_base}-desktop.jpg" -y -v quiet
    
    # Create mobile version (360x360) using ffmpeg
    ffmpeg -i "$input_file" -vf "crop=min(iw\,ih):min(iw\,ih),scale=360:360" "${output_base}-mobile.jpg" -y -v quiet
}

# Function to rename videos with clean names
rename_videos() {
    local dir="$1"
    local project="$2"
    
    cd "$dir"
    
    # Create array of original files (excluding already processed ones)
    original_files=($(ls *.mp4 *.jpg 2>/dev/null | grep -v -E "-(desktop|mobile)\.(mp4|jpg)$" | sort))
    
    local counter=1
    for file in "${original_files[@]}"; do
        if [[ -f "$file" ]]; then
            extension="${file##*.}"
            base_name="video-${counter}"
            
            if [[ "$extension" == "jpg" || "$extension" == "jpeg" ]]; then
                echo "  🖼️  Image $counter: $file"
                process_image "$file" "$base_name"
            else
                echo "  🎥 Video $counter: $file"
                # Find corresponding desktop and mobile versions
                desktop_file="${file%.*}-desktop.mp4"
                mobile_file="${file%.*}-mobile.mp4"
                
                if [[ -f "$desktop_file" && -f "$mobile_file" ]]; then
                    # Rename existing processed videos
                    mv "$desktop_file" "${base_name}-desktop.mp4"
                    mv "$mobile_file" "${base_name}-mobile.mp4"
                    mv "$file" "${base_name}.mp4"
                fi
            fi
            
            ((counter++))
        fi
    done
    
    cd - > /dev/null
}

# Process each project
projects=(
    "tresemme-brilho-lamelar"
    "democrata-gisele-caua"
    "ernesto-neto-le-bon-marche"
    "il-neige-rive-gauche"
    "mothers-day-hering-2"
    "grand-soir-maison-francis"
    "elsa-schiaparelli-private-album"
    "manu-gavassi-three-films"
    "desejo-natura"
    "gracinha-disney"
    "mothers-day-hering-1"
)

for project in "${projects[@]}"; do
    carousel_dir="public/media/projects/$project/carousel"
    if [[ -d "$carousel_dir" ]]; then
        echo "📁 Processing: $project"
        rename_videos "$carousel_dir" "$project"
        echo "  ✅ Completed: $project"
    fi
done

echo "🎉 All media reorganized with clean naming!"
echo "📊 Structure: video-1.mp4, video-1-desktop.mp4, video-1-mobile.mp4"
echo "🖼️  Images: video-N-desktop.jpg (720x720), video-N-mobile.jpg (360x360)"
