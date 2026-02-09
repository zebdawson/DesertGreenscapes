#!/bin/bash

# Image Check Script for Desert Greenscapes
# This script checks which images are missing and which are present

echo "🔍 Desert Greenscapes - Image Status Check"
echo "=========================================="
echo ""

# Color codes
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Counter
missing=0
found=0

check_file() {
    local file=$1
    local priority=$2

    if [ -f "public$file" ]; then
        echo -e "${GREEN}✓${NC} Found: $file"
        ((found++))
    else
        echo -e "${RED}✗${NC} Missing ($priority): $file"
        ((missing++))
    fi
}

echo "📸 HIGH PRIORITY IMAGES:"
echo "------------------------"
check_file "/images/team/steve.jpg" "HIGH"
check_file "/images/team/pedro.jpg" "HIGH"
check_file "/images/team/george.jpg" "HIGH"
check_file "/images/about/team-photo.jpg" "HIGH"
check_file "/images/logo.png" "HIGH"

echo ""
echo "🎬 VIDEOS:"
echo "----------"
check_file "/videos/hero-showcase.mp4" "HIGH"
check_file "/videos/project-showcase-1.mp4" "MEDIUM"
check_file "/videos/project-showcase-2.mp4" "MEDIUM"
check_file "/videos/project-showcase-3.mp4" "MEDIUM"

echo ""
echo "📊 SERVICE PAGE IMAGES:"
echo "----------------------"
check_file "/images/services/artificial-turf-hero.jpg" "MEDIUM"
check_file "/images/services/pavers-hero.jpg" "MEDIUM"
check_file "/images/services/waterfalls-hero.jpg" "MEDIUM"

echo ""
echo "=========================================="
echo -e "Summary: ${GREEN}$found found${NC}, ${RED}$missing missing${NC}"
echo ""

if [ $missing -eq 0 ]; then
    echo -e "${GREEN}🎉 All checked images are present!${NC}"
else
    echo -e "${YELLOW}📝 Upload the missing images to complete your website.${NC}"
    echo "   See IMAGE-REPLACEMENT-GUIDE.md for details."
fi

echo ""
