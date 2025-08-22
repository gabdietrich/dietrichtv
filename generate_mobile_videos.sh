#!/bin/bash

# Script to generate 360x360 mobile videos for all projects

echo "🎬 Generating mobile videos for all projects..."

# Array of project folders
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
    "mothers-day-hering-1"
)

for project in "${projects[@]}"; do
    echo "📁 Processing: $project"
    cd "public/media/projects/$project/carousel"
    
    # Find all mp4 files and create mobile versions
    for video in *.mp4; do
        if [[ -f "$video" && "$video" != *"-mobile.mp4" ]]; then
            mobile_name="${video%.*}-mobile.mp4"
            echo "  🎥 Creating: $mobile_name"
            ffmpeg -i "$video" -vf "scale=360:360" -c:v libx264 -crf 23 -preset medium -movflags +faststart -an "$mobile_name" -y -v quiet
        fi
    done
    
    cd - > /dev/null
    echo "  ✅ Completed: $project"
done

echo "🎉 All mobile videos generated!"
