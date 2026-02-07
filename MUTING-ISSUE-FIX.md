# 🔇 Video Muting Issue - Google Drive Limitation

## ⚠️ The Problem

**Google Drive videos are playing with sound** because Google Drive's iframe player **does not support** the `mute` parameter.

### What's Happening

| Video Type | Muted? | Why? |
|------------|--------|------|
| **Local videos** (Projects 4-6) | ✅ Yes | HTML5 `<video>` tag supports `muted` attribute |
| **Google Drive** (Projects 1-3) | ❌ No | Google Drive ignores `&mute=1` URL parameter |

### Technical Explanation

**Google Drive Limitation:**
- YouTube supports `&mute=1` parameter → Works
- Google Drive does NOT support `&mute=1` parameter → Ignored
- Google Drive provides no official API to control iframe embeds
- This is a Google Drive platform limitation, not a code issue

## ✅ The Solution: Use Local Videos

To have **all videos start muted**, you need to download your Google Drive videos and host them locally.

### Step-by-Step Guide

#### 1. Download Videos from Google Drive

**For Each Video:**
1. Go to your Google Drive
2. Find the video you want
3. Right-click → **Download**
4. Save to your computer

**Your 3 Google Drive Videos:**
- Video 1: `1eVYCKQDYmLrGOXtu17FTO6-bZMoDXEl5`
- Video 2: `1iRxfvuAnZgrBHna6js-Gfbs8k5ykHpzx`
- Video 3: `12Q8dRZdgeLy9BsbNmFwN1IRH0cD_j_Za`

#### 2. Add Videos to Your Project

```bash
# Navigate to your portfolio folder
cd /Users/dilshanthalagahapitiya/.gemini/antigravity/scratch/ios-developer-portfolio

# Create videos folder if it doesn't exist
mkdir -p videos

# Move/Copy your downloaded videos to this folder
# Rename them to something meaningful
cp ~/Downloads/your-video-1.mp4 videos/navigation-router.mp4
cp ~/Downloads/your-video-2.mp4 videos/chat-app.mp4
cp ~/Downloads/your-video-3.mp4 videos/in-app-purchase.mp4
```

#### 3. Update `scripts/main.js`

Open `scripts/main.js` and update the first 3 projects:

**BEFORE (Google Drive):**
```javascript
{
    title: "Navigation Router System",
    videoSrc: "https://drive.google.com/file/d/1eVYCKQDYmLrGOXtu17FTO6-bZMoDXEl5/preview",
    isGoogleDrive: true,
    // ...
}
```

**AFTER (Local):**
```javascript
{
    title: "Navigation Router System",
    videoSrc: "videos/navigation-router.mp4",
    isGoogleDrive: false,
    // ...
}
```

**Complete Update for All 3:**
```javascript
const projects = [
    {
        title: "Navigation Router System",
        description: "Built a robust navigation system with coordinator pattern, supporting deep linking and complex navigation flows. Features include custom transitions and state preservation.",
        videoSrc: "videos/navigation-router.mp4",  // ← Changed
        isGoogleDrive: false,  // ← Changed to false
        tags: ["SwiftUI", "Navigation", "Coordinator Pattern"]
    },
    {
        title: "Real-Time Chat Application",
        description: "Developed a fully-featured chat interface with message bubbles, typing indicators, image sharing, and real-time updates using Combine framework.",
        videoSrc: "videos/chat-app.mp4",  // ← Changed
        isGoogleDrive: false,  // ← Changed to false
        tags: ["SwiftUI", "Combine", "Real-time", "Firebase"]
    },
    {
        title: "In-App Purchase Integration",
        description: "Implemented StoreKit 2 integration with subscription management, transaction verification, and restore purchases functionality.",
        videoSrc: "videos/in-app-purchase.mp4",  // ← Changed
        isGoogleDrive: false,  // ← Changed to false
        tags: ["StoreKit 2", "IAP", "Subscriptions"]
    },
    // ... rest of projects stay the same
];
```

#### 4. Test Your Portfolio

```bash
# Run local server
cd /Users/dilshanthalagahapitiya/.gemini/antigravity/scratch/ios-developer-portfolio
python3 -m http.server 8000

# Open in browser
# http://localhost:8000
```

**Check:**
- ✅ All videos should now start muted
- ✅ Control buttons should appear on all 6 projects
- ✅ Play/pause and mute controls should work on all videos

## 📊 Before vs After

### Before (Mixed)
| Project | Type | Muted? | Controls? |
|---------|------|--------|-----------|
| 1-3 | Google Drive | ❌ No | ❌ No |
| 4-6 | Local | ✅ Yes | ✅ Yes |

### After (All Local)
| Project | Type | Muted? | Controls? |
|---------|------|--------|-----------|
| 1-6 | Local | ✅ Yes | ✅ Yes |

## 🎯 Benefits of Local Videos

**Better Control:**
- ✅ Videos actually start muted
- ✅ Full play/pause control
- ✅ Full mute/unmute control
- ✅ Consistent behavior across all projects

**Better Performance:**
- ✅ Faster loading (no external server)
- ✅ No dependency on Google Drive
- ✅ Works offline during development
- ✅ Better caching

**Better User Experience:**
- ✅ Predictable behavior
- ✅ No third-party player controls
- ✅ Consistent design
- ✅ Professional appearance

## 🚀 Alternative: Don't Use Autoplay for Google Drive

If you prefer to keep Google Drive videos, you can disable autoplay for those cards:

**Option A: No Autoplay for Google Drive**
```javascript
// In main.js, for Google Drive videos:
const autoplayUrl = project.videoSrc.replace('/preview', '/preview?loop=1');
// Remove autoplay=1 and mute=1 since they don't work
```

Then show a static thumbnail instead of autoplaying iframe.

**But this defeats the purpose** of having video previews in thumbnails.

## 💡 Recommendation

**Download and use local videos** - This is the only way to:
1. ✅ Have videos start muted
2. ✅ Have functional control buttons
3. ✅ Have consistent behavior
4. ✅ Have full control over user experience

Your portfolio will be more professional and user-friendly with local videos!

## 📝 Quick Commands

```bash
# 1. Create videos folder
mkdir -p videos

# 2. Download videos from Google Drive (in browser)
# Then move them to the videos folder

# 3. Update main.js (change lines 30, 40, 50)
# Set isGoogleDrive: false for first 3 projects
# Set videoSrc: "videos/your-file.mp4"

# 4. Test
python3 -m http.server 8000
```

Once you've followed these steps, all videos will start muted and all controls will work perfectly! 🎉
