# Image Replacement Guide

This guide shows you exactly where and how to replace placeholder images with your real photos.

## 📁 Image Directory Structure

First, upload your images to these locations:

```
public/images/
├── logo.png or logo.svg              # Your company logo
├── about/
│   └── team-photo.jpg                # Team photo for About page (1200x900)
├── team/
│   ├── steve.jpg                     # Steve's headshot (800x800)
│   ├── pedro.jpg                     # Pedro's headshot (800x800)
│   └── george.jpg                    # George's headshot (800x800)
├── services/
│   ├── artificial-turf-hero.jpg      # Turf service page hero (1920x1080)
│   ├── pavers-hero.jpg               # Pavers service page hero (1920x1080)
│   └── waterfalls-hero.jpg           # Waterfalls service page hero (1920x1080)
└── projects/
    ├── project-01-before.jpg         # Before photos (1200x800)
    ├── project-01-after.jpg          # After photos (1200x800)
    ├── project-02-before.jpg
    ├── project-02-after.jpg
    └── ... (more project photos)

public/videos/
├── hero-showcase.mp4                 # Homepage hero video (1920x1080, 15-30s)
├── project-showcase-1.mp4            # Project video 1
├── project-showcase-2.mp4            # Project video 2
└── project-showcase-3.mp4            # Project video 3
```

## 🔄 Automatic Image Replacement

The website is already set up to automatically use real images when they're available!

### Team Photos (About Page)
✅ **Already Updated!** Simply upload your team photos to:
- `/public/images/team/steve.jpg`
- `/public/images/team/pedro.jpg`
- `/public/images/team/george.jpg`

The About page will automatically display them instead of placeholders.

### Company Story Photo (About Page)
✅ **Already Updated!** Upload your team/company photo to:
- `/public/images/about/team-photo.jpg`

The image will automatically replace the placeholder.

---

## 📝 Files That Need Manual Updates

### 1. **Project Data** (`/src/lib/projects.ts`)

Replace the placeholder project data with your real project information:

```typescript
export const projects: Project[] = [
  {
    id: 'henderson-backyard-2024',
    title: 'Modern Backyard Transformation',
    location: 'Henderson, NV',
    neighborhood: 'Green Valley',
    date: '2024-01-15',
    services: ['artificial-turf', 'pavers'],
    description: 'Complete backyard renovation with premium turf and custom pavers',
    images: {
      thumbnail: '/images/projects/project-01-after.jpg',      // ← Your image
      gallery: [
        '/images/projects/project-01-after.jpg',
        '/images/projects/project-01-view2.jpg',
        '/images/projects/project-01-view3.jpg',
      ],
      before: '/images/projects/project-01-before.jpg',        // ← Your before photo
      after: '/images/projects/project-01-after.jpg'           // ← Your after photo
    },
    video: '/videos/project-showcase-1.mp4',                   // Optional
    testimonial: {
      quote: 'Amazing transformation! The team was professional and the results exceeded our expectations.',
      customerName: 'Michael & Sarah T.',
      rating: 5
    },
    stats: {
      sqft: 1200,
      duration: '3 days',
      rebateAmount: 8400
    },
    featured: true
  },
  // Add more real projects here...
];
```

### 2. **Homepage Hero Video** (`/src/components/sections/HeroVideo.tsx`)

The component references: `/videos/hero-showcase.mp4`

**To replace:**
1. Upload your video to `/public/videos/hero-showcase.mp4`
2. The component will automatically use it
3. Optional: Update the poster image path if you have a custom poster

### 3. **Video Showcase Section** (`/src/components/sections/VideoShowcase.tsx`)

Currently references these videos:
- `/videos/project-showcase-1.mp4`
- `/videos/project-showcase-2.mp4`
- `/videos/project-showcase-3.mp4`

**To replace:**
1. Upload your project videos with these exact filenames, OR
2. Edit `/src/components/sections/VideoShowcase.tsx` and update the video paths

### 4. **Service Page Hero Images**

Each service page has a hero section. To add real hero images:

**Artificial Turf** (`/src/app/services/artificial-turf/page.tsx`):
- Upload to: `/public/images/services/artificial-turf-hero.jpg`
- Then edit line ~40 to add the image

**Pavers** (`/src/app/services/pavers/page.tsx`):
- Upload to: `/public/images/services/pavers-hero.jpg`
- Then edit line ~40 to add the image

**Waterfalls** (`/src/app/services/waterfalls/page.tsx`):
- Upload to: `/public/images/services/waterfalls-hero.jpg`
- Then edit line ~40 to add the image

---

## 🎯 Priority Order (Start Here!)

### High Priority (Do These First):
1. ✅ **Team Photos** - Upload to `/public/images/team/` (Already auto-configured!)
2. ✅ **Company Photo** - Upload to `/public/images/about/team-photo.jpg` (Already auto-configured!)
3. 📝 **Logo** - Upload to `/public/images/logo.png` (Then update Header.tsx)
4. 📝 **3-5 Project Before/After Pairs** - For homepage showcase
5. 📝 **Hero Video** - Upload to `/public/videos/hero-showcase.mp4`

### Medium Priority:
6. 📝 **Update Project Data** - Edit `/src/lib/projects.ts` with real project info
7. 📝 **Project Videos** - Upload 3 project showcase videos
8. 📝 **Service Hero Images** - Add hero images for service pages

### Low Priority:
9. 📝 **Additional Gallery Photos** - Bulk upload project photos
10. 📝 **Testimonial Photos** - If you want customer photos

---

## 🚀 Quick Start Commands

### Upload Images via Command Line:
```bash
# From your local machine, upload to server
scp /path/to/team-photos/* user@server:/home/user/DesertGreenscapes/public/images/team/
scp /path/to/about-photo.jpg user@server:/home/user/DesertGreenscapes/public/images/about/team-photo.jpg
scp /path/to/logo.png user@server:/home/user/DesertGreenscapes/public/images/logo.png
```

### Or upload via file manager:
1. Navigate to `/home/user/DesertGreenscapes/public/images/`
2. Drag and drop your images into the appropriate folders
3. Refresh your browser to see changes

---

## ✅ Testing Your Images

After uploading images:

```bash
# Start the development server
npm run dev

# Visit http://localhost:3000 and check:
# - About page (/about) - Team photos should appear
# - Homepage (/) - Hero video should play
# - Gallery (/gallery) - Project photos should appear
# - Service pages (/services/*) - Service images should show
```

---

## 🆘 Troubleshooting

**Image not showing?**
1. Check the file path is correct (case-sensitive!)
2. Verify the image file exists in `/public/images/`
3. Check browser console for 404 errors
4. Clear browser cache and refresh

**Placeholder still showing?**
1. Make sure filename matches exactly (e.g., `steve.jpg` not `Steve.JPG`)
2. Check that image is in the correct folder
3. Refresh the page (Ctrl+Shift+R to hard refresh)

**Need help?**
Let me know which images you've uploaded and I'll update the specific code references for you!
