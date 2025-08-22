#!/bin/bash

# Function to clean and rename files in a carousel directory
clean_project() {
    local project="$1"
    local carousel_dir="public/media/projects/$project/carousel"
    
    if [[ ! -d "$carousel_dir" ]]; then
        echo "❌ Directory not found: $carousel_dir"
        return
    fi
    
    echo "📁 Cleaning: $project"
    cd "$carousel_dir"
    
    # Get all media files (excluding already cleaned ones)
    files=($(ls *.mp4 *.jpg 2>/dev/null | grep -v -E "^video-[0-9]+(-desktop|-mobile)?\.(mp4|jpg)$" | sort))
    
    local counter=1
    for file in "${files[@]}"; do
        if [[ -f "$file" ]]; then
            echo "  📄 Processing: $file"
            
            # Determine if it's original, desktop, or mobile
            if [[ "$file" == *"-desktop.mp4" ]]; then
                new_name="video-${counter}-desktop.mp4"
            elif [[ "$file" == *"-mobile.mp4" ]]; then
                new_name="video-${counter}-mobile.mp4"  
            else
                extension="${file##*.}"
                new_name="video-${counter}.${extension}"
            fi
            
            if [[ "$file" != "$new_name" ]]; then
                mv "$file" "$new_name"
                echo "    ✅ $file → $new_name"
            fi
            
            # Handle desktop/mobile versions
            if [[ "$file" != *"-desktop"* && "$file" != *"-mobile"* ]]; then
                base_name="${file%.*}"
                desktop_file="${base_name}-desktop.mp4"
                mobile_file="${base_name}-mobile.mp4"
                
                if [[ -f "$desktop_file" ]]; then
                    mv "$desktop_file" "video-${counter}-desktop.mp4"
                    echo "    ✅ $desktop_file → video-${counter}-desktop.mp4"
                fi
                
                if [[ -f "$mobile_file" ]]; then
                    mv "$mobile_file" "video-${counter}-mobile.mp4"
                    echo "    ✅ $mobile_file → video-${counter}-mobile.mp4"
                fi
                
                ((counter++))
            fi
        fi
    done
    
    cd - > /dev/null
    echo "  ✅ Completed: $project"
}

# Projects to clean (excluding ernesto-neto which is already clean)
projects=(
    "tresemme-brilho-lamelar"
    "democrata-gisele-caua"
    "il-neige-rive-gauche"
    "mothers-day-hering-2"
    "grand-soir-maison-francis"
    "elsa-schiaparelli-private-album"
    "manu-gavassi-three-films"
    "desejo-natura"
    "gracinha-disney"
)

echo "🎬 Starting mass file renaming for clean structure..."

for project in "${projects[@]}"; do
    clean_project "$project"
done

echo "🎉 All projects renamed to clean video-N structure!"
