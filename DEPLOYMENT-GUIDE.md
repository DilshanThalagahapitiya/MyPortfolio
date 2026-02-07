# 🚀 Deployment Guide - Free Hosting Options

This guide will walk you through deploying your portfolio website to the internet for **FREE**. We'll cover three popular options.

---

## 🎯 Quick Comparison

| Platform | Difficulty | Speed | Custom Domain | Best For |
|----------|-----------|-------|---------------|----------|
| **GitHub Pages** | Easy | Fast | Yes (free) | Most popular, best integration |
| **Netlify** | Very Easy | Fastest | Yes (free) | Drag & drop simplicity |
| **Vercel** | Easy | Fast | Yes (free) | Modern, great performance |

**Recommendation:** Start with **Netlify** for instant deployment, then move to **GitHub Pages** to learn Git.

---

## Option 1: Netlify (Easiest - No Git Required) ⭐

### Why Netlify?
- Drag and drop your folder
- Live in 30 seconds
- Free HTTPS
- Easy updates

### Step-by-Step

**1. Sign Up**
- Go to [netlify.com](https://netlify.com)
- Click "Sign up"
- Use email or GitHub account

**2. Deploy Your Site**
- Click "Add new site" → "Deploy manually"
- **Drag your entire `ios-developer-portfolio` folder** into the upload box
- Wait 10-20 seconds
- ✅ Your site is live!

**3. Get Your URL**
- Netlify gives you a URL like: `random-name-12345.netlify.app`
- Click on it to view your site

**4. Customize Your URL (Optional)**
- Click "Site settings"
- Click "Change site name"
- Enter your preferred name: `yourname-portfolio`
- Your new URL: `yourname-portfolio.netlify.app`

### Updating Your Site

When you make changes:
1. Click "Deploys" tab
2. Drag and drop your updated folder
3. Wait a few seconds
4. Changes are live!

### Custom Domain (Optional)

**Free subdomain:**
- Already have: `yourname.netlify.app`

**Your own domain ($10-15/year):**
1. Buy domain from Namecheap, Google Domains, etc.
2. In Netlify: "Domain settings" → "Add custom domain"
3. Follow instructions to connect
4. Free SSL certificate included!

---

## Option 2: GitHub Pages (Learn Git) ⭐

### Why GitHub Pages?
- Free hosting forever
- Learn version control (useful skill!)
- Great for developers
- Free custom domain support

### Prerequisites

**Install Git:**
```bash
# Check if you have Git
git --version

# If not, install with Homebrew
brew install git
```

**Create GitHub Account:**
- Go to [github.com](https://github.com)
- Sign up for free

### Method A: Using GitHub Desktop (Beginner-Friendly)

**1. Install GitHub Desktop**
- Download from [desktop.github.com](https://desktop.github.com)
- Install and sign in with your GitHub account

**2. Create Repository**
- On GitHub.com, click "+" → "New repository"
- Repository name: `yourname.github.io` (replace yourname with your actual GitHub username)
  - Example: if username is `john`, use `john.github.io`
- Make it **Public**
- Click "Create repository"

**3. Clone to Your Computer**
- Open GitHub Desktop
- File → Clone Repository
- Select your new repository
- Choose where to save it
- Click "Clone"

**4. Add Your Files**
- Open the cloned folder in Finder
- Copy all files from `ios-developer-portfolio` into this folder
  - index.html
  - styles/
  - scripts/
  - videos/
  - etc.

**5. Publish**
- GitHub Desktop will show your changes
- In the bottom left, add a commit message: "Initial portfolio"
- Click "Commit to main"
- Click "Push origin"

**6. Enable GitHub Pages**
- Go to your repository on GitHub.com
- Click "Settings"
- Scroll to "Pages" in left sidebar
- Source: "main" branch
- Click "Save"
- Wait 1-2 minutes

**7. View Your Site**
- Your site will be at: `https://yourname.github.io`
- Example: `https://john.github.io`

### Method B: Using Terminal (More Control)

```bash
# Navigate to your project
cd /Users/dilshanthalagahapitiya/.gemini/antigravity/scratch/ios-developer-portfolio

# Initialize Git repository
git init

# Add all files
git add .

# Commit with message
git commit -m "Initial commit: iOS developer portfolio"

# Create repository on GitHub first (github.com → New repository)
# Then connect it (replace YOUR-USERNAME and REPO-NAME):
git remote add origin https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

Then enable Pages in repository settings as described above.

### Updating Your Site (GitHub Desktop)

1. Make changes to your files
2. Open GitHub Desktop
3. You'll see changed files listed
4. Add commit message describing changes
5. Click "Commit to main"
6. Click "Push origin"
7. Wait 1-2 minutes for changes to appear

### Updating Your Site (Terminal)

```bash
cd /Users/dilshanthalagahapitiya/.gemini/antigravity/scratch/ios-developer-portfolio

# After making changes:
git add .
git commit -m "Updated contact info and added new project video"
git push
```

### Custom Domain on GitHub Pages

1. Buy your domain (example.com)
2. In your repo, create a file named `CNAME` (no extension)
3. Add your domain: `www.yourname.com`
4. Commit and push
5. In domain registrar, add DNS records:
   ```
   Type: A
   Host: @
   Value: 185.199.108.153
   
   Type: A  
   Host: @
   Value: 185.199.109.153
   
   Type: CNAME
   Host: www
   Value: YOUR-USERNAME.github.io
   ```
6. Wait 24-48 hours for DNS propagation
7. In GitHub repo settings → Pages, add custom domain
8. Enable "Enforce HTTPS"

---

## Option 3: Vercel (Modern & Fast) ⭐

### Why Vercel?
- Excellent performance
- Auto-deployment from Git
- Built-in optimizations

### Step-by-Step

**1. Sign Up**
- Go to [vercel.com](https://vercel.com)
- Click "Sign up"
- **Recommended:** Use GitHub account

**2. Deploy**

**Option A - Import from GitHub:**
- First push your code to GitHub (see GitHub Pages guide above)
- Click "Add New" → "Project"
- Click "Import" next to your repository
- Click "Deploy"
- Wait 30-60 seconds
- ✅ Live!

**Option B - Upload Folder:**
- Install Vercel CLI:
  ```bash
  npm install -g vercel
  ```
- Navigate to your project:
  ```bash
  cd /Users/dilshanthalagahapitiya/.gemini/antigravity/scratch/ios-developer-portfolio
  ```
- Deploy:
  ```bash
  vercel
  ```
- Follow prompts (press Enter for defaults)
- ✅ Live!

**3. Get Your URL**
- Your site: `yourproject.vercel.app`
- Can customize in project settings

### Updating

If connected to GitHub:
- Push changes to GitHub
- Vercel auto-deploys

If using CLI:
```bash
cd /Users/dilshanthalagahapitiya/.gemini/antigravity/scratch/ios-developer-portfolio
vercel --prod
```

---

## 🎥 What About Video Files?

### Important: File Size Limits

| Platform | Recommended Total Size |
|----------|----------------------|
| GitHub Pages | Under 100MB total |
| Netlify Free | Under 100MB total |
| Vercel | Under 100MB |

### Tips for Large Videos

**Option 1: Compress Videos**
```bash
# Compress to smaller size
ffmpeg -i input.mp4 -c:v libx264 -crf 28 -vf scale=1280:720 output.mp4
```

**Option 2: Use External Hosting**

Host videos separately for free:

1. **YouTube (Unlisted)**
   - Upload to YouTube
   - Set to "Unlisted"
   - Embed in your site
   - Unlimited size/bandwidth

2. **Vimeo**
   - Free tier: 500MB/week upload
   - Better privacy options
   - Good player

3. **Cloudinary (Free)**
   - 25GB storage
   - 25GB bandwidth/month
   - Video optimization

**Update code to use YouTube:**
```javascript
// In scripts/main.js, change videoSrc to YouTube embed:
{
    title: 'Chat View',
    videoSrc: 'https://www.youtube.com/embed/YOUR-VIDEO-ID',
    // ...
}
```

**Update HTML for YouTube:**
```html
<!-- In modal, replace video tag with iframe: -->
<iframe id="modalVideo" width="100%" height="500" frameborder="0" 
        allowfullscreen></iframe>
```

---

## 📊 Comparison Summary

### For Complete Beginners:
1. **Start with Netlify** (drag & drop)
2. **Learn GitHub** later for version control
3. **Try Vercel** for advanced features

### For Learning:
1. **GitHub Pages** (learn Git, most popular)
2. **Netlify** for easy updates
3. **Vercel** for modern workflows

---

## ✅ Pre-Deployment Checklist

Before deploying, make sure:

- [ ] All videos are in the `videos/` folder
- [ ] Contact email is updated in `index.html`
- [ ] LinkedIn and GitHub links are updated
- [ ] Total folder size is under 100MB
- [ ] Tested locally (python server or direct open)
- [ ] All links work
- [ ] Videos play correctly
- [ ] Mobile responsive (test with browser DevTools)
- [ ] No console errors (F12 → Console tab)

---

## 🐛 Troubleshooting Deployment

### GitHub Pages: 404 Error
- Make sure repository is public
- Check Pages settings: Source = main branch
- Wait 5-10 minutes after enabling
- Clear browser cache

### Videos Not Loading After Deployment
- Check file paths (case-sensitive!)
- Verify videos are in the correct folder
- Check file size limits
- Look at browser console for errors

### Site Looks Different After Deployment
- Clear browser cache (Cmd/Ctrl + Shift + R)
- Check for missing CSS/JS files
- Verify all file paths are relative (not absolute)

### SSL Certificate Issues
- Wait 24 hours after deployment
- For custom domains, check DNS settings
- All platforms provide free SSL automatically

---

## 🎯 Next Steps After Deployment

1. **Share your portfolio:**
   - LinkedIn profile
   - Resume
   - Email signature
   - GitHub README

2. **Track visitors (optional):**
   - Google Analytics (free)
   - Plausible Analytics (privacy-focused)

3. **Add more features:**
   - Blog section
   - Project case studies
   - Downloadable resume
   - Contact form

4. **Keep it updated:**
   - Add new projects regularly
   - Update technologies/skills
   - Refresh content every 3-6 months

---

## 📚 Additional Resources

- **GitHub Pages Docs:** docs.github.com/pages
- **Netlify Docs:** docs.netlify.com
- **Vercel Docs:** vercel.com/docs
- **Git Learning:** githubtraining.github.io

---

## 🎉 Congratulations!

Once deployed, you'll have:
- ✅ Professional online presence
- ✅ Shareable portfolio URL
- ✅ Showcase for your iOS skills
- ✅ Platform for future updates

**Share your portfolio link and start landing opportunities!** 🚀

---

**Need help?** All three platforms have great support documentation and community forums.
