# Content Needed for Desert Greenscapes Website

This document outlines the real content needed to replace placeholders throughout the website.

## Priority: HIGH (Core Homepage Content)

### Videos Needed

| ID | Location | Purpose | Specs | Status |
|----|----------|---------|-------|--------|
| **V001** | `/public/videos/hero-showcase.mp4` | Homepage hero background loop | 15-30 sec, 1920x1080, loopable | ⚠️ PLACEHOLDER |
| **V002** | `/public/videos/featured-project.mp4` | Featured transformation showcase | 2-3 min, 1920x1080 | ⚠️ PLACEHOLDER |
| **V003** | `/public/videos/turf-install.mp4` | Turf installation time-lapse | 60-90 sec, 1920x1080 | ⚠️ PLACEHOLDER |
| **V004** | `/public/videos/waterfall-build.mp4` | Waterfall construction showcase | 60-90 sec, 1920x1080 | ⚠️ PLACEHOLDER |
| **V005** | `/public/videos/paver-project.mp4` | Paver patio installation | 60 sec, 1920x1080 | ⚠️ PLACEHOLDER |

### Before/After Photos Needed

Create these folder structures with real project photos:

```
/public/images/projects/
├── henderson-complete-backyard/
│   ├── before.jpg (1200x800)
│   ├── after.jpg (1200x800)
│   └── gallery/ (3-5 additional angles)
├── summerlin-pool-surround/
│   ├── before.jpg
│   ├── after.jpg
│   └── gallery/
└── north-vegas-front-yard/
    ├── before.jpg
    ├── after.jpg
    └── gallery/
```

**Minimum needed: 3 before/after pairs for homepage showcase**

### Team Photos Needed

```
/public/images/team/
├── steve.jpg (800x800, professional headshot or candid on-site)
├── pedro.jpg (800x800)
└── george.jpg (800x800)
```

## Priority: MEDIUM (Gallery & Portfolio)

### Project Photos

Need 15-20 high-quality project photos organized by category:

```
/public/images/projects/
├── turf-projects/
│   ├── project-001.jpg (1200x800)
│   ├── project-002.jpg
│   └── ... (6-8 photos)
├── paver-projects/
│   ├── project-001.jpg
│   └── ... (5-6 photos)
├── waterfall-projects/
│   ├── project-001.jpg
│   └── ... (4-5 photos)
└── lighting-projects/
    ├── project-001-night.jpg (must be night/dusk shots)
    └── ... (3-4 photos)
```

## Priority: LOW (Nice to Have)

### Testimonial Videos

```
/public/videos/testimonials/
├── customer-1.mp4 (30-60 sec)
├── customer-2.mp4
└── customer-3.mp4
```

### Drone/Aerial Shots

```
/public/videos/
└── drone-showcase.mp4 (60 sec aerial footage of completed projects)
```

### Truck/Branding Photos

```
/public/images/
├── truck-branded.jpg (Company vehicle with wrapping)
└── team-on-site.jpg (Crew working on a project)
```

## Content Collection Tips

### For Videos:
1. **Hero Background Video**: Can be compiled from best moments of existing job site footage
2. **Keep it short**: Even phone videos work if they're stable and well-lit
3. **Sunrise/Sunset**: Golden hour footage looks premium
4. **Before/After transitions**: Great for social media too

### For Photos:
1. **Before photos**: Don't skip these! Even bad "before" makes "after" look better
2. **Multiple angles**: Shoot from different positions
3. **Details**: Close-ups of turf, pavers, water features
4. **Context**: Show whole yard to demonstrate scale
5. **Lighting**: Avoid harsh midday sun, shoot morning/evening
6. **Night shots**: Essential for lighting projects

### Quick Win:
**Start with these 3 items to dramatically improve the site:**
1. One good 15-second video loop for hero (can be montage of clips)
2. Three before/after photo pairs
3. Team headshots (Steve, Pedro, George)

## Placeholder Strategy

The website currently uses intelligent placeholders that:
- Match the expected content type (turf = green, waterfall = blue, etc.)
- Include "Photo coming soon" overlays
- Maintain proper aspect ratios
- Look professional enough to launch with

**The site can go live with placeholders** and be updated with real content progressively.

## Asset Specifications

### Video Specs:
- Format: MP4 (H.264)
- Resolution: 1920x1080 (1080p) minimum
- Frame Rate: 30fps
- Duration: As specified above
- File Size: Under 50MB preferred

### Photo Specs:
- Format: JPG
- Resolution: 1200x800 (landscape) or 800x800 (square for team)
- File Size: Under 500KB (optimized for web)
- Quality: High, but web-optimized

## How to Add Content

1. Place files in the specified directories
2. Update the project data in `/src/lib/projects.ts` (to be created)
3. Replace PlaceholderImage components with real Image components
4. Rebuild and deploy

## Questions?

Contact: info@lvturf.com
