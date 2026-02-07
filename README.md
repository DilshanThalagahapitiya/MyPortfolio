# iOS Developer Portfolio Website

## 📁 Project Structure

```
ios-developer-portfolio/
│
├── index.html              # Main HTML file - structure of your website
├── styles/
│   └── main.css           # All styling and animations
├── scripts/
│   └── main.js            # Interactive functionality and video handling
├── videos/                # Place your demo videos here
│   ├── navigation-router.mp4
│   ├── chat-view.mp4
│   ├── in-app-purchase.mp4
│   ├── home-screen.mp4
│   ├── app-store.mp4
│   └── testflight.mp4
└── README.md              # This file
```

## 🎯 What This Portfolio Includes

### Features
- ✨ **Modern Design**: Dark theme with iOS-inspired colors and glassmorphism effects
- 📱 **Fully Responsive**: Works on desktop, tablet, and mobile devices
- 🎬 **Video Showcases**: Click on any project to watch demonstration videos
- 🚀 **Smooth Animations**: Professional transitions and scroll effects
- 💬 **Clean Code**: Heavily commented for easy understanding and modification

### Sections
1. **Hero Section**: Eye-catching introduction
2. **About Section**: Your background and highlights
3. **Skills Section**: Technical capabilities with icons
4. **Projects Section**: Video demonstrations of your work
5. **Contact Section**: Ways to get in touch

## 🎥 Adding Your Videos

### Step 1: Record Your Videos

**Using QuickTime on Mac:**
1. Open **QuickTime Player**
2. Go to **File → New Screen Recording**
3. Select your iPhone simulator or connected device
4. Record your app in action (keep it under 30-60 seconds per feature)
5. Save as `.mov` or `.mp4`

**Using Xcode Simulator:**
1. Open your app in Xcode Simulator
2. Press **Cmd + R** to record
3. Interact with your features
4. Press **Cmd + R** again to stop
5. Find the recording in your Desktop or Downloads

**Recommended Settings:**
- Length: 15-60 seconds per video
- Resolution: 1920x1080 or 1280x720
- Format: MP4 (most compatible)
- File size: Under 50MB for fast loading

### Step 2: Convert Videos (if needed)

If your videos are `.mov` or too large:

**Using Mac (free):**
```bash
# Install ffmpeg (one-time setup)
brew install ffmpeg

# Convert and compress video
ffmpeg -i input-video.mov -c:v libx264 -crf 23 -c:a aac output-video.mp4
```

**Using Online Tools (no installation):**
- CloudConvert.com
- Convertio.co
- FreeConvert.com

### Step 3: Add Videos to Project

1. Create a `videos` folder inside `ios-developer-portfolio`
2. Rename your videos to match these names (or update `scripts/main.js`):
   - `navigation-router.mp4`
   - `chat-view.mp4`
   - `in-app-purchase.mp4`
   - `home-screen.mp4`
   - `app-store.mp4`
   - `testflight.mp4`

**Or use your own filenames:**
Open `scripts/main.js` and update the `videoSrc` in the `projects` array.

## ✏️ Customizing Your Portfolio

### Update Personal Information

**Edit Contact Details** (`index.html` line ~200):
```html
<a href="mailto:your.email@example.com">your.email@example.com</a>
<a href="https://linkedin.com/in/yourprofile">Connect with me</a>
<a href="https://github.com/yourusername">View my code</a>
```

### Change Colors

**Edit CSS Variables** (`styles/main.css` line ~10):
```css
:root {
    --primary-color: #007AFF;    /* Change to your preferred color */
    --secondary-color: #5856D6;  /* Accent color */
}
```

### Add/Remove Projects

**Edit JavaScript** (`scripts/main.js` line ~35):
Add or remove items from the `projects` array.

### Modify Skills

**Edit JavaScript** (`scripts/main.js` line ~10):
Add or remove items from the `skills` array.

## 🚀 Testing Locally

### Option 1: Simple Python Server (Easiest)
```bash
# Navigate to your project folder
cd /Users/dilshanthalagahapitiya/.gemini/antigravity/scratch/ios-developer-portfolio

# Start server (Python 3)
python3 -m http.server 8000

# Open browser and go to:
# http://localhost:8000
```

### Option 2: Just Open the File
Simply double-click `index.html` to open in your browser.

**Note:** Videos might not play when opening directly. Use a local server for full functionality.

## 🌐 Hosting for FREE

### Option 1: GitHub Pages (Recommended)

**Step-by-step:**

1. **Create GitHub Account** (if you don't have one)
   - Go to github.com
   - Sign up for free

2. **Create New Repository**
   - Click the "+" icon → "New repository"
   - Repository name: `yourname-portfolio` (or any name)
   - Make it **Public**
   - Don't initialize with README
   - Click "Create repository"

3. **Upload Your Files**
   
   **Using GitHub Desktop (Easiest for beginners):**
   - Download GitHub Desktop from desktop.github.com
   - Sign in with your GitHub account
   - Click "Add" → "Add existing repository"
   - Choose your `ios-developer-portfolio` folder
   - Click "Publish repository"
   - Check "Keep this code private" if you want (optional)
   - Click "Publish repository"
   
   **OR Using Terminal:**
   ```bash
   # Navigate to your project
   cd /Users/dilshanthalagahapitiya/.gemini/antigravity/scratch/ios-developer-portfolio
   
   # Initialize git (if not already)
   git init
   
   # Add all files
   git add .
   
   # Commit
   git commit -m "Initial portfolio"
   
   # Add remote (replace YOUR-USERNAME and REPO-NAME)
   git remote add origin https://github.com/YOUR-USERNAME/REPO-NAME.git
   
   # Push to GitHub
   git branch -M main
   git push -u origin main
   ```

4. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click "Settings"
   - Scroll to "Pages" in the left sidebar
   - Under "Source", select "main" branch
   - Click "Save"
   - Wait 1-2 minutes
   - Your site will be live at: `https://YOUR-USERNAME.github.io/REPO-NAME/`

### Option 2: Netlify (Drag & Drop)

1. Go to netlify.com
2. Sign up for free (can use GitHub account)
3. Click "Add new site" → "Deploy manually"
4. Drag your entire `ios-developer-portfolio` folder into the box
5. Wait a few seconds
6. Your site is live! (You get a URL like `random-name.netlify.app`)
7. You can change the URL in Site settings

### Option 3: Vercel (Like Netlify)

1. Go to vercel.com
2. Sign up for free
3. Click "Add New" → "Project"
4. Import your GitHub repository OR upload files
5. Click "Deploy"
6. Your site is live!

## 🎨 Design Philosophy

This portfolio uses:
- **iOS Design Language**: Familiar to you as an iOS developer
- **Dark Theme**: Modern and professional
- **Smooth Animations**: Delightful user experience
- **Mobile-First**: Looks great on all devices
- **Video-Centric**: Show, don't tell - let your work speak

## 🐛 Troubleshooting

### Videos Not Playing

**Check 1: File paths**
- Make sure videos are in the `videos/` folder
- Check filenames match exactly (case-sensitive)

**Check 2: File format**
- Use MP4 format (H.264 codec)
- Convert with ffmpeg if needed

**Check 3: File size**
- Keep videos under 50MB
- Compress large files

**Check 4: Browser console**
- Open browser DevTools (F12 or Cmd+Opt+I)
- Check Console tab for errors
- Use `checkVideoExists('videos/your-video.mp4')` to test

### Layout Issues

**Clear browser cache:**
- Press Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)

**Check responsive design:**
- Press F12 → Toggle device toolbar
- Test on different screen sizes

### Deployment Issues

**GitHub Pages not updating:**
- Wait 5-10 minutes after pushing changes
- Check GitHub Actions tab for build errors
- Make sure repository is public

**Netlify/Vercel:**
- Redeploy from dashboard
- Check build logs for errors

## 📚 Learning Resources

Since you're new to web development, here are helpful resources:

- **HTML**: developer.mozilla.org/en-US/docs/Web/HTML
- **CSS**: web.dev/learn/css/
- **JavaScript**: javascript.info
- **Git**: githubtraining.github.io/training-manual/

## 📝 Next Steps

1. ✅ Test the website locally
2. ✅ Add your actual videos
3. ✅ Update contact information
4. ✅ Customize colors and content
5. ✅ Deploy to free hosting
6. ✅ Share your portfolio link!

## 💡 Tips for Success

- **Keep videos short**: 15-30 seconds is ideal
- **Show the best parts**: Focus on unique features
- **Update regularly**: Add new projects as you build them
- **Get feedback**: Share with friends and colleagues
- **SEO**: Add keywords to meta tags for better discoverability

## 🤝 Need Help?

- Check the extensive comments in the code
- Open browser console (F12) to see errors
- Test locally before deploying
- Ask on Stack Overflow or web dev communities

---

**Built with ❤️ for iOS Developers entering the web world!**

Good luck with your portfolio! 🚀
