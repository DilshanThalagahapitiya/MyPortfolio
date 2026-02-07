# 🚀 Quick Start Guide

Welcome! This guide will get you up and running in 5 minutes.

## ✅ What You Have

A complete, professional iOS developer portfolio website with:
- Modern dark design with iOS-style colors
- Video showcase sections for your projects
- Fully responsive (works on all devices)
- Ready to deploy to free hosting

## 📁 Your Project Files

```
ios-developer-portfolio/
├── index.html                  # Main website file
├── styles/main.css            # All styling
├── scripts/main.js            # Interactive features
├── videos/                    # Put your demo videos here
├── README.md                  # Full documentation
├── VIDEO-GUIDE.md             # How to record videos
├── DEPLOYMENT-GUIDE.md        # How to publish online
└── QUICK-START.md             # This file
```

## 🎯 Step 1: View Your Website (30 seconds)

**Option A - Simple (Mac/Linux):**
```bash
# Open Terminal, navigate to your project
cd /Users/dilshanthalagahapitiya/.gemini/antigravity/scratch/ios-developer-portfolio

# Start a local server
python3 -m http.server 8000

# Open browser and go to:
# http://localhost:8000
```

**Option B - Even Simpler:**
- Find `index.html` in Finder
- Double-click to open in your browser

## 🎬 Step 2: Add Your Videos (10-30 minutes)

1. **Record your iOS features:**
   - Open Xcode Simulator
   - Run your app
   - File → Record Screen
   - Demonstrate each feature (15-30 seconds)
   - See `VIDEO-GUIDE.md` for detailed help

2. **Save videos to the `videos/` folder:**
   - `navigation-router.mp4`
   - `chat-view.mp4`
   - `in-app-purchase.mp4`
   - `home-screen.mp4`
   - `app-store.mp4`
   - `testflight.mp4`

3. **Don't have videos yet?**
   - That's ok! Portfolio works with placeholders
   - Add videos later

## ✏️ Step 3: Customize (5 minutes)

**Update your contact info:**

Open `index.html` (line ~200) and change:
```html
<a href="mailto:your.email@example.com">your.email@example.com</a>
<a href="https://linkedin.com/in/yourprofile">Connect with me</a>
<a href="https://github.com/yourusername">View my code</a>
```

**Change colors (optional):**

Open `styles/main.css` (line ~10):
```css
--primary-color: #007AFF;    /* Change to your favorite color */
```

## 🌐 Step 4: Publish Online (5 minutes)

**Easiest Method - Netlify (No coding knowledge needed):**

1. Go to [netlify.com](https://netlify.com)
2. Sign up (free)
3. Click "Deploy manually"
4. Drag your `ios-developer-portfolio` folder
5. Done! Get your URL: `yourname.netlify.app`

**Want more options?**
- See `DEPLOYMENT-GUIDE.md` for GitHub Pages and Vercel

## 📱 What Each File Does

| File | Purpose | When to Edit |
|------|---------|-------------|
| `index.html` | Structure and content | Update text, links, contact info |
| `styles/main.css` | Design and colors | Change colors, spacing, fonts |
| `scripts/main.js` | Interactive features | Add/remove projects and skills |
| `videos/` | Your demo videos | Add your recorded videos |

## 🎨 Customization Quick Tips

**Add a new project:**
Edit `scripts/main.js` (line ~35):
```javascript
{
    title: 'My New Feature',
    description: 'Description here',
    videoSrc: 'videos/my-new-video.mp4',
    tags: ['SwiftUI', 'Cool Stuff']
}
```

**Change your name/title:**
Edit `index.html` (line ~50):
```html
<h1 class="hero-title">
    <span class="hero-role">Your Name</span>
</h1>
```

## 🐛 Troubleshooting

**Videos not playing?**
- Check they're in the `videos/` folder
- Make sure they're MP4 format
- Check filenames match exactly

**Website looks broken?**
- Make sure all files are in the right folders
- Clear browser cache (Cmd+Shift+R)

**Need more help?**
- Read the detailed `README.md`
- Check browser console for errors (F12)

## 📚 Full Guides

- **README.md** - Complete documentation
- **VIDEO-GUIDE.md** - Recording and editing videos
- **DEPLOYMENT-GUIDE.md** - Publishing options

## ✨ You're Ready!

Your portfolio is ready to showcase your iOS development skills!

**Next steps:**
1. ✅ Test locally
2. ✅ Add your videos
3. ✅ Update contact info
4. ✅ Deploy online
5. ✅ Share with the world!

---

**Questions?** All code has detailed comments. Read through the files to learn how everything works!

Good luck! 🚀
