# Project Thumbnails Setup Guide

## How to Add Your Custom Project Thumbnails

### Step 1: Prepare Your Images
1. **Image Format**: Use `.jpg`, `.png`, or `.webp` formats
2. **Recommended Size**: 600x400 pixels (3:2 aspect ratio)
3. **File Size**: Keep under 500KB for better performance
4. **Naming Convention**: Use descriptive names like:
   - `ecommerce-thumbnail.jpg`
   - `chat-app-thumbnail.png`
   - `algorithm-visualizer-thumbnail.jpg`

### Step 2: Add Images to Your Project
Place your thumbnail images in: `public/images/projects/`

Your folder structure should look like:
```
portfolio/
├── public/
│   └── images/
│       └── projects/
│           ├── ecommerce-thumbnail.jpg
│           ├── chat-app-thumbnail.jpg
│           ├── algorithm-visualizer-thumbnail.jpg
│           ├── ai-content-generator-thumbnail.jpg
│           ├── portfolio-thumbnail.jpg
│           └── task-manager-thumbnail.jpg
├── src/
└── ...
```

### Step 3: Update Project Data
In `src/components/ProjectsNew.jsx`, the image paths are already set up:
```javascript
image: "/images/projects/your-thumbnail-name.jpg"
```

### Step 4: Replace Sample Data
Update the `projectsData` array with your actual project information:
- Replace titles, descriptions, and tags
- Update GitHub and demo links
- Modify highlights to match your projects

### Image Optimization Tips
1. **Compress images** using tools like TinyPNG or ImageOptim
2. **Use WebP format** for better compression (modern browsers)
3. **Add multiple sizes** for responsive images if needed

### Fallback System
The code includes automatic fallback to placeholder images if your custom thumbnails fail to load, so don't worry about broken images!

### Example Project Entry
```javascript
{
  id: 1,
  title: "My Awesome Project",
  description: "Description of what your project does...",
  tags: ["React", "Node.js", "MongoDB"],
  image: "/images/projects/my-project-thumbnail.jpg",
  github: "https://github.com/yourusername/project-repo",
  demo: "https://your-project-demo.com",
  highlights: [
    "Feature 1 you implemented",
    "Feature 2 you're proud of",
    "Performance improvement you made",
    "Technology you learned"
  ]
}
```

### Quick Start
1. Drop your thumbnail images into `public/images/projects/`
2. Update the file names in the `projectsData` array
3. Replace placeholder URLs with your actual GitHub/demo links
4. Customize project descriptions and highlights
5. Test that images load correctly

That's it! Your custom thumbnails will now display in your portfolio.