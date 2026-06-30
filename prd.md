# Product Requirements Document (PRD) — MyPortfolio Redesign

## 1. Executive Summary

**Project Name:** MyPortfolio Redesign  
**Current Status:** Functional but outdated UI, hardcoded data  
**Goal:** Modernize UI/UX, separate data from code, improve maintainability, and add new interactive features

---

## 2. Current Pain Points

| Issue | Description |
|-------|-------------|
| Hardcoded Data | All personal info, skills, and projects are embedded in `scripts/main.js` — hard to update |
| Outdated UI | Design lacks modern trends (glassmorphism is overused, no micro-interactions, no dark/light toggle) |
| No Responsive Polish | Mobile experience feels secondary, not optimized for tablet layouts |
| No Performance Optimizations | Videos load synchronously, no lazy loading, no code splitting |
| No Accessibility | Missing ARIA labels, keyboard navigation issues, contrast ratio concerns |
| No Analytics | No way to track visitor engagement or portfolio performance |

---

## 3. Proposed Solution: Data Separation

### 3.1 New File Structure

```
MyPortfolio/
├── data/                          # NEW: Centralized data folder
│   └── personal.js               # NEW: All personal data in one place
├── scripts/
│   ├── main.js                   # REFACTOR: Pull data from data/personal.js
│   └── utils.js                  # NEW: Helper functions (slider, modal, animations)
├── styles/
│   └── main.css                  # UPDATE: Add new component styles
├── index.html                    # UPDATE: Link new data file
├── skill-details.html            # UPDATE: Link new data file
└── prd.md                        # NEW: This document
```

### 3.2 `data/personal.js` — Single Source of Truth

A dedicated JavaScript file containing ALL personal data as exported constants:

- **Profile:** name, role, tagline, photo path, resume link
- **About:** bio paragraphs, highlights (3 cards)
- **Social Links:** GitHub, LinkedIn, email, CV download
- **Skills:** Array of skill objects (icon, title, description, about, codeSnippet, githubLink, screenshots)
- **Projects:** Array of project objects (title, description, videoSrc, tags)
- **Stats:** (optional) Years of experience, apps published, clients served

**Benefit:** Update your portfolio by editing ONE file — no HTML/CSS/JS knowledge required beyond JSON-like syntax.

---

## 4. Phase 1: UI/UX Modernization (Immediate)

### 4.1 Visual Refresh
- [ ] **Color System:** Introduce a proper design token system (light/dark mode variables)
- [ ] **Dark/Light Toggle:** Add a theme switcher with smooth transition
- [ ] **Typography:** Improve hierarchy with better font sizing and line-height ratios
- [ ] **Glassmorphism Reduction:** Use glass effects sparingly — only for overlays/modals
- [ ] **Micro-interactions:** Add hover/tap feedback on cards, buttons, and links
  - Scale + shadow on hover
  - Ripple effect on buttons
  - Smooth page transitions
- [ ] **Improved Hero Section:** Animated gradient background with particle effect or grid overlay
- [ ] **Skill Cards:** Add progress bars or visual proficiency indicators
- [ ] **Project Cards:** Add image thumbnails alongside video thumbnails

### 4.2 Layout Improvements
- [ ] **Sticky Section Navigation:** Add quick-jump tabs for desktop
- [ ] **Better Grid System:** Responsive grid with proper breakpoints (sm: 1-col, md: 2-col, lg: 3-col)
- [ ] **Timeline View for Experience:** Add a work experience timeline section
- [ ] **Testimonials Section:** Add client/colleague testimonial carousel

### 4.3 New Sections
- [ ] **Experience Timeline:** Visual timeline of work history with company logos
- [ ] **Education/Certifications:** Academic background and certifications
- [ ] **Testimonials:** Carousel of recommendations
- [ ] **Blog/Articles Feed:** (optional) Link to Medium/Dev.to articles

---

## 5. Phase 2: Performance & Technical Improvements

### 5.1 Performance
- [ ] Lazy load images and videos using `loading="lazy"` and Intersection Observer
- [ ] Add image compression pipeline (WebP format)
- [ ] Implement video placeholder blur-up technique
- [ ] Add service worker for offline caching
- [ ] Minify CSS and JS for production

### 5.2 SEO
- [ ] Add structured data (JSON-LD) for Person, Project, and Skill schemas
- [ ] Improve meta tags (OG tags, Twitter cards)
- [ ] Add sitemap.xml and robots.txt
- [ ] Add proper heading hierarchy (h1 → h2 → h3)

### 5.3 Accessibility
- [ ] Add ARIA labels to all interactive elements
- [ ] Ensure 4.5:1 color contrast ratio minimum
- [ ] Add focus indicators for keyboard navigation
- [ ] Add skip-to-content link
- [ ] Make video modal keyboard-accessible

---

## 6. Phase 3: Advanced Features

### 6.1 Interactive Elements
- [ ] **Typing Effect:** Animated typing effect in hero subtitle
- [ ] **Counter Animation:** Animated stats counters (e.g., "3+ Years Experience")
- [ ] **Parallax Scrolling:** Subtle parallax on hero and section backgrounds
- [ ] **3D Card Tilt Effect:** Tilt cards on mouse hover (desktop only)
- [ ] **Custom Cursor:** (optional) Modern cursor follower with magnetic effect on CTAs

### 6.2 Filter & Search
- [ ] **Project Filter:** Filter projects by technology tag
- [ ] **Skill Filter:** Filter skills by category (iOS, Swift, Tools)
- [ ] **Search Bar:** Quick search across skills and projects

### 6.3 Contact Enhancements
- [ ] **Contact Form:** Functional contact form (Formspree / EmailJS integration)
- [ ] **Live Chat Widget:** (optional) Simple chat widget using Crisp or Tidio
- [ ] **Calendar Booking:** (optional) Calendly integration for 1:1 calls

---

## 7. Data Architecture

### 7.1 `data/personal.js` Structure

```javascript
// ========== PROFILE ==========
const personalData = {
  name: "Dilshan Thalagahapitiya",
  role: "iOS Developer",
  tagline: "Crafting beautiful, performant iOS applications with SwiftUI",
  profileImage: "images/profile.png",
  resumeLink: "https://drive.google.com/...",
  
  // ========== ABOUT ==========
  about: {
    bio: ["Paragraph 1...", "Paragraph 2..."],
    highlights: [
      { icon: "🚀", title: "App Store Publishing", desc: "..." },
      { icon: "✈️", title: "TestFlight Distribution", desc: "..." },
      { icon: "⚡", title: "SwiftUI Mastery", desc: "..." }
    ]
  },
  
  // ========== SOCIAL ==========
  social: {
    email: "dilshan.thalagahapitiya11@gmail.com",
    linkedin: "https://www.linkedin.com/in/...",
    github: "https://github.com/DilshanThalagahapitiya",
    cv: "https://drive.google.com/..."
  },
  
  // ========== SKILLS ==========
  skills: [ /* Array of skill objects */ ],
  
  // ========== PROJECTS ==========
  projects: [ /* Array of project objects */ ],
  
  // ========== EXPERIENCE ==========
  experience: [
    { company: "Crede Technologies", role: "iOS Developer", location: "Canada (Remote)", period: "Current" },
    { company: "Elegant Media", role: "iOS Developer", location: "Australia", period: "Past" }
  ]
};
```

---

## 8. Technical Stack & Dependencies

| Layer | Technology | Purpose |
|-------|-----------|---------|
| UI | HTML5 + CSS3 + Vanilla JS | Keep it lightweight, no framework overhead |
| Icons | Emoji + Custom SVG | No icon library dependency |
| Fonts | Google Fonts (Inter) | Modern sans-serif typeface |
| Forms | Formspree | Contact form backend (Phase 3) |
| Analytics | Google Analytics 4 | Visitor tracking (Phase 3) |
| Hosting | GitHub Pages | Current hosting, no change needed |

---

## 9. Success Metrics

| Metric | Target |
|--------|--------|
| PageSpeed Score | 90+ (Mobile), 95+ (Desktop) |
| Lighthouse Accessibility | 95+ |
| Time to Interactive | < 2 seconds |
| First Contentful Paint | < 1 second |
| Mobile Responsiveness | Perfect on all breakpoints |

---

## 10. Implementation Roadmap

| Phase | Timeline | Deliverables |
|-------|----------|-------------|
| **Phase 0** | Week 1 | ✅ `data/personal.js` creation, ✅ `prd.md` documentation |
| **Phase 1** | Week 2-3 | UI refresh, dark/light mode, new sections |
| **Phase 2** | Week 4 | Performance, SEO, accessibility improvements |
| **Phase 3** | Week 5+ | Advanced features (filters, contact form, analytics) |

---

## 11. Appendix

### A. Design Inspiration
- [Dribbble: iOS Developer Portfolio](https://dribbble.com/search/ios-developer-portfolio)
- [Awwwards: Portfolio Sites](https://www.awwwards.com/websites/portfolio/)
- [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/)

### B. Color Palette (Proposed)
```css
--bg-primary: #0a0a0f;       /* Dark background */
--bg-secondary: #12121a;     /* Card background */
--bg-tertiary: #1a1a2e;      /* Elevated surfaces */
--text-primary: #f0f0f0;     /* Primary text */
--text-secondary: #a0a0b0;   /* Secondary text */
--accent-blue: #0a84ff;      /* iOS blue */
--accent-purple: #5e5ce6;    /* iOS purple */
--accent-orange: #ff9f0a;    /* iOS orange */
--accent-green: #30d158;     /* iOS green */
```

### C. Existing Files Reference
| File | Purpose | Action |
|------|---------|--------|
| `index.html` | Main portfolio page | Phase 1 update |
| `skill-details.html` | Individual skill detail page | Phase 1 update |
| `styles/main.css` | All CSS styles | Phase 1 restructure |
| `scripts/main.js` | All JS + data | Phase 0: separate data |
| `images/profile.png` | Profile photo | Keep |
| `images/ChatAppScreenShots/` | Chat app screenshots | Keep |
| `images/NavigationCoodinatorScreenShots/` | Navigation screenshots | Keep |
| `images/YoutybeFP/` | YouTube app screenshots | Keep |