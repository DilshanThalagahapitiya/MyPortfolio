# 🎬 Video Guide for iOS Developers

## Overview
This guide will help you create and add short demo videos of your iOS projects to showcase in your portfolio.

## 📱 Recording Your iOS App

### Method 1: Xcode Simulator (Recommended)

1. **Open your project in Xcode**
2. **Run your app** in the simulator (Cmd + R)
3. **Start recording:**
   - Click on the Simulator window
   - Go to **File → Record Screen** (or press Cmd + R)
   - A red recording indicator appears in the status bar
4. **Demonstrate your feature:**
   - Navigate to the feature you want to show
   - Interact naturally (tap, swipe, type)
   - Keep it under 30 seconds
5. **Stop recording:**
   - Click the red recording indicator
   - OR go to **File → Stop Recording**
6. **Video saves to Desktop** as a `.mov` file

### Method 2: Real Device Recording

**Using QuickTime Player:**

1. **Connect your iPhone** to your Mac
2. **Open QuickTime Player**
3. **File → New Movie Recording**
4. **Click the dropdown** next to the record button
5. **Select your iPhone** as the camera
6. **Click Record** and demonstrate your app
7. **Stop** when done
8. **File → Save** as `.mov`

### Method 3: Built-in iOS Screen Recording

1. **On your iPhone:**
   - Go to **Settings → Control Center**
   - Add **Screen Recording**
2. **Swipe down** from top-right (or up from bottom on older devices)
3. **Tap the record button** (circle icon)
4. **Wait 3 seconds** countdown
5. **Open and use your app**
6. **Stop recording** from Control Center or status bar
7. **Video saves to Photos app**
8. **AirDrop to your Mac**

## 🎞️ What to Record for Each Feature

### 1. Navigation Router (`navigation-router.mp4`)
**Show: ~20 seconds**
- Launch app
- Navigate through 3-4 different screens
- Show back navigation
- Demonstrate smooth transitions
- Maybe show deep linking (optional)

**Example flow:**
```
Home → Detail View → Settings → Profile → Back to Home
```

### 2. Chat View (`chat-view.mp4`)
**Show: ~25 seconds**
- Open chat interface
- Scroll through existing messages
- Type a new message
- Send message (appears in chat)
- Show typing indicator (if you have one)
- Scroll with smooth animations

**Highlight:**
- Message bubbles
- Timestamps
- User avatars
- Fun interactions

### 3. In-App Purchase (`in-app-purchase.mp4`)
**Show: ~30 seconds**
- Access premium features section
- Tap on a purchase option
- Show the purchase sheet/modal
- Display different subscription tiers
- Show purchase confirmation
- Demonstrate unlocked feature

**Note:** Use TestFlight/Sandbox mode for demo

### 4. Home Screen with Sharing (`home-screen.mp4`)
**Show: ~25 seconds**
- Display home screen feed
- Scroll through posts
- Tap share button on a post
- Show share sheet/options
- Create a new post (if applicable)
- Pull to refresh

**Highlight:**
- Feed layout
- Images/content
- Share interactions
- Smooth scrolling

### 5. App Store Publishing (`app-store.mp4`)
**Show: ~20 seconds**
**Option A - Screen recording of App Store Connect:**
- Login to App Store Connect
- Navigate to your app
- Show app page with screenshots
- Display app analytics/charts
- Show submitted version

**Option B - The actual App Store listing:**
- Open App Store on device
- Search for your app
- Show app page
- Scroll through screenshots
- Show reviews/ratings

### 6. TestFlight (`testflight.mp4`)
**Show: ~20 seconds**
- Open TestFlight app
- Show your app in the list
- Tap on your app
- Display build information
- Show "Install" or "Update" button
- Maybe show feedback option

**OR screen record TestFlight dashboard:**
- App Store Connect → TestFlight
- Show build numbers
- Tester groups
- Feedback received

## 🎬 Recording Best Practices

### Before Recording
- ✅ Clean up your simulator/device (remove test data)
- ✅ Use realistic demo data (not "Test User 1, 2, 3")
- ✅ Make sure UI looks polished
- ✅ Close unnecessary apps
- ✅ Disable notifications
- ✅ Set device to Do Not Disturb
- ✅ Charge your device (remove battery indicator if low)
- ✅ Use light/dark mode consistently

### During Recording
- ✅ Move slowly and deliberately (not too fast!)
- ✅ Pause briefly at each screen (1-2 seconds)
- ✅ Show the full feature flow
- ✅ Avoid mistakes (if you make one, restart!)
- ✅ Keep it focused on one feature per video

### Device Settings
```
- Brightness: 100%
- Volume: Medium (for demo sounds)
- Orientation: Portrait (unless app requires landscape)
- Status Bar: Clean time like "9:41" (Xcode simulator default)
```

## 🔧 Converting and Optimizing Videos

### Using Mac Terminal (Free - Best Quality)

**Install ffmpeg (one-time):**
```bash
# Install Homebrew if you don't have it
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install ffmpeg
brew install ffmpeg
```

**Convert .mov to .mp4:**
```bash
cd ~/Desktop  # or wherever your videos are

# Convert video with good compression
ffmpeg -i input-video.mov -c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k output-video.mp4
```

**Compress large MP4:**
```bash
ffmpeg -i large-video.mp4 -c:v libx264 -crf 28 -preset medium -c:a aac -b:a 96k compressed-video.mp4
```

**Resize 4K to 1080p:**
```bash
ffmpeg -i 4k-video.mp4 -vf scale=1920:1080 -c:v libx264 -crf 23 -c:a copy hd-video.mp4
```

**Trim video (example: 5 seconds to 30 seconds):**
```bash
ffmpeg -i input.mp4 -ss 00:00:05 -to 00:00:30 -c copy trimmed.mp4
```

### Understanding CRF Values
- **CRF 18-23**: High quality, larger file (~10-20MB)
- **CRF 23-28**: Good quality, medium file (~5-10MB) ⭐ **Recommended**
- **CRF 28-32**: Lower quality, small file (~2-5MB)

### Using Online Tools (No Installation)

**CloudConvert.com:**
1. Upload your .mov file
2. Convert to MP4
3. Click "Advanced" → Set quality to 80%
4. Download

**Handbrake (Free Mac App):**
1. Download from handbrake.fr
2. Open your video
3. Choose "Fast 1080p30" preset
4. Click "Start"

## 📦 Organizing Your Videos

**Recommended file structure:**
```
ios-developer-portfolio/
└── videos/
    ├── navigation-router.mp4      (~5-10MB)
    ├── chat-view.mp4              (~8-12MB)
    ├── in-app-purchase.mp4        (~6-10MB)
    ├── home-screen.mp4            (~8-15MB)
    ├── app-store.mp4              (~5-8MB)
    └── testflight.mp4             (~5-8MB)
```

**Naming conventions:**
- Use lowercase
- Use hyphens (not spaces or underscores)
- Be descriptive
- Match the names in `scripts/main.js`

## ✅ Video Checklist

Before adding each video, make sure:

- [ ] Duration: 15-30 seconds
- [ ] Format: MP4
- [ ] Resolution: 1080p or 720p
- [ ] File size: Under 50MB (ideally 5-15MB)
- [ ] Quality: Clear and smooth
- [ ] Content: Shows full feature flow
- [ ] No personal info visible
- [ ] No test/debug data
- [ ] Clean status bar
- [ ] Consistent theme (light/dark)

## 🎨 Pro Tips

### Make Videos More Engaging

1. **Add a starting frame:**
   - Start with the app icon or splash screen
   - Gives context immediately

2. **Show the full journey:**
   - Start → Action → Result
   - Example: Home → Tap Chat → See Messages → Send Message

3. **Use smooth gestures:**
   - Don't rush
   - Natural taps and swipes

4. **Highlight key moments:**
   - Pause briefly when showing important features
   - Let animations complete

5. **End cleanly:**
   - Don't cut off mid-action
   - Return to a clean state

### Recording Shortcuts

**Xcode Simulator:**
- `Cmd + 1` - 100% size
- `Cmd + 2` - 75% size
- `Cmd + 3` - 50% size
- `Cmd + K` - Toggle keyboard

**Simulator Debug Menu:**
- `Debug → Slow Animations` - Makes it easier to record smooth transitions

## 🚨 Common Issues

### Video File Too Large
```bash
# Compress more aggressively
ffmpeg -i input.mp4 -c:v libx264 -crf 28 -vf scale=1280:720 smaller.mp4
```

### Video Not Playing in Browser
- Make sure it's MP4 format
- Check codec: should be H.264
- Verify file path is correct

### Video Looks Blurry
- Export at higher resolution (1080p minimum)
- Lower CRF value (try 23 instead of 28)
- Record on larger simulator size

### Recording Laggy
- Close other apps
- Use smaller simulator size
- Record shorter clips
- Edit out laggy parts

## 📱 Alternative: Create Video from Screenshots

If you can't record video:

1. Take 5-10 screenshots of your feature
2. Use this ffmpeg command to create a slideshow:

```bash
# Create a video from images (each shown for 2 seconds)
ffmpeg -framerate 1/2 -pattern_type glob -i '*.png' -c:v libx264 -r 30 -pix_fmt yuv420p output.mp4
```

## 🎯 Ready to Upload?

Once you have your videos:

1. Place them in the `videos/` folder
2. Make sure filenames match what's in `scripts/main.js`
3. Test locally first
4. Then deploy to your hosting

**Remember:** You can always update your videos later as you improve your apps!

---

Need help? Check the README.md or browser console for errors!
