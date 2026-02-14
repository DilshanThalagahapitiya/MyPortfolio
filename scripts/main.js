/* ============================================
   DATA CONFIGURATION
   ============================================ */

/**
 * Skills Data Array
 * Each skill object contains information about your technical capabilities
 * Feel free to modify these to match your actual skills
 */
const skills = [
    {
        icon: '💬',
        title: 'Chat Interfaces',
        description: 'Real-time messaging with optimized performance,Firebase API, custom UI components, and message persistence',
        about: `
            <p>Building a robust chat interface requires handling complex state management, real-time data synchronization, and a smooth user experience. This implementation uses <strong>Firebase Firestore</strong> for the backend/database to ensure instant message delivery.</p>
            <p>Key features include:</p>
            <ul>
                <li>Optimized list rendering with lazy loading for performance.</li>
                <li>Custom message bubbles with support for text, images, and emojis.</li>
                <li>Real-time typing indicators and read receipts.</li>
                <li>Offline persistence using local caching.</li>
            </ul>
        `,
        codeSnippet: `
//
//  ChatListView.swift
//  ChatView
//
//  Created by Dilshan Thalagahapitiya on 2026-02-09.
//

import SwiftUI

struct ChatListView: View {
    @State var vm: ChatListVM
    @EnvironmentObject private var coordinator: NavigationCoordinator
    @EnvironmentObject private var authVM: AuthVM
    @State private var showingCreateGroup = false
    
    init(vm: ChatListVM = ChatListVM()) {
        _vm = State(initialValue: vm)
    }
    
    var body: some View {
        ZStack {
            VStack(spacing:0){
                List {
                    ForEach(vm.chats) { chat in
                        Button {
                            if let currentUser = authVM.currentUser {
                                coordinator.push(.chatDetail(chat: chat, currentUser: currentUser))
                            }
                        } label: {
                            ChatCardView(chat: chat)
                                .padding(.vertical, 4)
                        }
                        .buttonStyle(.plain)
                        .swipeActions(edge: .trailing, allowsFullSwipe: true) {
                            Button(role: .destructive) {
                                Task { await vm.deleteChat(chat.id) }
                            } label: {
                                Label("Delete", systemImage: "trash")
                            }
                        }
                        .listRowSeparator(.automatic)
                        .listRowBackground(Color.secondaryTextColor.opacity(0.35))
                        .listRowInsets(EdgeInsets(top: 8, leading: 16, bottom: 8, trailing: 16))
                    }//ForEach
                }//List
                .listStyle(.automatic)
                .scrollContentBackground(.hidden)
                .background(Color.clear)
            }//VStack
            
            if let error = vm.errorMessage {
                VStack(spacing: 16) {
                    Image(systemName: "exclamationmark.triangle")
                        .font(.largeTitle)
                        .foregroundColor(.red)
                    Text(error)
                        .multilineTextAlignment(.center)
                        .padding(.horizontal)
                    Button("Retry") {
                        Task { await vm.fetchChats() }
                    }
                    .buttonStyle(.borderedProminent)
                }
                .frame(maxWidth: .infinity, maxHeight: .infinity)
                .background(Color.black.opacity(0.8))
            }
            
            if vm.isLoading {
                LoadingOverlay(message: "Loading chats...")
            }
        }//ZStack
        .navigationTitle("Chats")
        .toolbar {
            ToolbarItem(placement: .navigationBarLeading) {
                // User info and logout
                Menu {
                    if let user = authVM.currentUser {
                        Text(user.name)
                        Text(user.email ?? "")
                            .font(.caption)
                        Divider()
                    }
                    Button(role: .destructive) {
                        authVM.signOut()
                    } label: {
                        Label("Log Out", systemImage: "rectangle.portrait.and.arrow.right")
                    }
                } label: {
                    Image(systemName: "person.circle.fill")
                        .font(.title3)
                }
            }//ToolBarItem
            
            ToolbarItem(placement: .navigationBarTrailing) {
                HStack{
                    Button(action: { showingCreateGroup = true }) {
                        Image(systemName: "square.and.pencil")
                    }
                }//HStack
            }//ToolBarItem
            
        }//ToolBar
        .sheet(isPresented: $showingCreateGroup) {
            GroupChatCreationView(availableUsers: vm.users) { name, participants in
                Task {
                    await vm.createChat(name: name, participants: participants)
                }
            }
        }
        .task {
            await vm.fetchChats()
            await vm.fetchUsers()
        }

    }
}

#Preview {
    let mockService = MockChatService()
    let mockVM = ChatListVM(chatService: mockService)
    let mockAuthVM = AuthVM()
    
    return NavigationStack {
        ChatListView(vm: mockVM)
            .environmentObject(NavigationCoordinator())
            .environmentObject(mockAuthVM)
    }
}
        `,
        githubLink: 'https://github.com/DilshanThalagahapitiya/ChatView.git',
        relatedTags: ['Real-time', 'Firebase', 'Chat', 'Messaging'],
        screenshots: [
            'images/ChatAppScreenShots/Simulator Screenshot - iPhone 17 Pro - 2026-02-13 at 22.25.54.png',
            'images/ChatAppScreenShots/Simulator Screenshot - iPhone 17 Pro - 2026-02-13 at 23.47.27.png',
            'images/ChatAppScreenShots/Simulator Screenshot - iPhone 17 Pro - 2026-02-13 at 23.47.34.png',
            'images/ChatAppScreenShots/Simulator Screenshot - iPhone 17 Pro - 2026-02-13 at 23.47.46.png',
            'images/ChatAppScreenShots/Simulator Screenshot - iPhone 17 Pro - 2026-02-13 at 23.48.03.png',
            'images/ChatAppScreenShots/Simulator Screenshot - iPhone 17 Pro - 2026-02-13 at 23.48.14.png',
            'images/ChatAppScreenShots/Simulator Screenshot - iPhone 17 Pro - 2026-02-13 at 23.48.29.png'
        ]
    },
    {
        icon: '🧭',
        title: 'Navigation Router',
        description: 'Custom navigation systems with clean architecture, deep linking support, and seamless view transitions',
        about: `
            <p>Built a robust navigation system with coordinator pattern, supporting deep linking and complex navigation flows. Features include custom transitions and state preservation.</p>
            <p>Key features include:</p>
            <ul>
                <li>Implemented Coordinator pattern for SwiftUI navigation</li>
                <li>Added centralized NavigationStack routing management</li>
                <li>Integrated sheet and fullscreen cover presentation handling</li>
                <li>Implemented deep link routing structure</li>
                <li>Created scalable and modular navigation architecture</li>
                <li>Prepared base foundation for multi-flow app navigation</li>
            </ul>
        `,
        screenshots: [
            'images/NavigationCoodinatorScreenShots/Simulator Screenshot - iPhone 17 Pro - 2026-02-14 at 23.32.30.png',
            'images/NavigationCoodinatorScreenShots/Simulator Screenshot - iPhone 17 Pro - 2026-02-14 at 23.32.37.png',
            'images/NavigationCoodinatorScreenShots/Simulator Screenshot - iPhone 17 Pro - 2026-02-14 at 23.32.45.png',
            'images/NavigationCoodinatorScreenShots/Simulator Screenshot - iPhone 17 Pro - 2026-02-14 at 23.32.58.png',
            'images/NavigationCoodinatorScreenShots/Simulator Screenshot - iPhone 17 Pro - 2026-02-14 at 23.33.05.png'
        ],
        relatedTags: ['Navigation', 'Coordinator Pattern', 'Deep Links', 'Routing']
    },
    {
        icon: '�',
        title: 'YouTube Browser & Downloader',
        description: 'A productivity-focused floating YouTube player & downloader built for macOS users.',
        about: `
            <p>A productivity-focused floating YouTube player & downloader built for macOS users — especially developers.</p>
            <p>Whether you’re following coding tutorials, debugging with guides, or listening to tech talks, this tool keeps your video visible without switching windows.</p>
            <p>Key features include:</p>
            <ul>
                <li>Always-on-top floating video player</li>
                <li>Works across all apps and screens</li>
                <li>Built-in YouTube video downloader</li>
                <li>Lightweight and distraction-free UI</li>
                <li>Perfect for coding, learning, and multitasking</li>
            </ul>
        `,
        screenshots: [
            'images/YoutybeFP/Screenshot 2026-02-15 at 2.10.38 AM (2).png',
            'images/YoutybeFP/Screenshot 2026-02-15 at 2.11.09 AM.png',
            'images/YoutybeFP/Screenshot 2026-02-15 at 2.11.12 AM.png',
            'images/YoutybeFP/Screenshot 2026-02-15 at 2.11.21 AM.png',
            'images/YoutybeFP/Screenshot 2026-02-15 at 2.11.28 AM.png',
            'images/YoutybeFP/ss-yt1.png'
        ],
        relatedTags: ['macOS', 'SwiftUI', 'YouTube', 'Productivity']
    },
    {
        icon: '�💳',
        title: 'In-App Purchases',
        description: 'StoreKit integration, subscription management, receipt validation, and restore purchases functionality',
        relatedTags: ['StoreKit', 'In-App Purchase', 'Subscriptions', 'Payment']
    },
    {
        icon: '📱',
        title: 'Home Screens',
        description: 'Dynamic home screens with post sharing, custom feed layouts, and engaging user interactions',
        relatedTags: ['UI Design', 'Social', 'Feed', 'Layout']
    },
    {
        icon: '🚀',
        title: 'App Store Publishing',
        description: 'Complete app submission process, App Store optimization, and compliance with Apple guidelines',
        relatedTags: ['App Store', 'Publishing', 'ASO']
    },
    {
        icon: '✈️',
        title: 'TestFlight Builds',
        description: 'Beta distribution, user feedback collection, and managing multiple test groups',
        relatedTags: ['TestFlight', 'Beta Testing', 'CI/CD']
    },
    {
        icon: '🎨',
        title: 'SwiftUI Design',
        description: 'Modern declarative UIs with custom components, animations, and responsive layouts',
        relatedTags: ['SwiftUI', 'Animation', 'Design System', 'UI Components']
    },
    {
        icon: '💾',
        title: 'Data Persistence',
        description: 'Core Data, SwiftData, UserDefaults, and cloud sync implementations',
        relatedTags: ['Core Data', 'SwiftData', 'Persistence', 'Database']
    }
];

/**
 * Projects Data Array
 * Each project showcases your work with video demonstrations
 * 
 * GOOGLE DRIVE VIDEO SETUP:
 * This portfolio now uses Google Drive embedded videos!
 * 
 * How to get Google Drive embed links:
 * 1. Upload your video to Google Drive
 * 2. Right-click → Share → Get link → Set to "Anyone with the link"
 * 3. Copy the link (format: https://drive.google.com/file/d/FILE_ID/view?usp=sharing)
 * 4. Extract the FILE_ID from the URL
 * 5. Use format: https://drive.google.com/file/d/FILE_ID/preview
 * 
 * Example:
 * Original: https://drive.google.com/file/d/1eVYCKQDYmLrGOXtu17FTO6-bZMoDXEl5/view?usp=sharing
 * Embed:    https://drive.google.com/file/d/1eVYCKQDYmLrGOXtu17FTO6-bZMoDXEl5/preview
 */
const projects = [
    {
        title: 'Navigation Router System',
        description: 'Built a robust navigation system with coordinator pattern, supporting deep linking and complex navigation flows. Features include custom transitions and state preservation.',
        videoSrc: 'https://drive.google.com/file/d/1YhP5fV2YhPFU5HwgFf8lwxgcCuumz7xq/preview',  // Google Drive embed
        isGoogleDrive: true,
        tags: ['SwiftUI', 'Navigation', 'Coordinator Pattern']
    },
    {
        title: 'Real-Time Chat Application',
        description: 'Developed a fully-featured chat interface with message bubbles, typing indicators, image sharing, and real-time updates using Combine framework.',
        videoSrc: 'https://drive.google.com/file/d/1_UgL8_H1XOfploaJ2FXiO3AG-EWWFBX5/preview',  // Google Drive embed
        isGoogleDrive: true,
        tags: ['SwiftUI', 'Combine', 'Real-time', 'Firebase']
    },
    {
        title: 'Youtube Browser & Downloader',
        description: 'Watch, float, and download YouTube videos on macOS while coding or working across multiple screens.',
        videoSrc: 'https://drive.google.com/file/d/1dxDMITg59PR_4Fbai67zK-ZbzomrEOV_/preview',  // Google Drive embed
        isGoogleDrive: true,
        tags: ['AppKit', 'Combine', 'WebKit', 'UniformTypeIdentifiers']
    },
    // {
    //     title: 'In-App Purchase Integration',
    //     description: 'Complete StoreKit 2 implementation with subscription management, purchase validation, and seamless user experience for premium features.',
    //     videoSrc: 'https://drive.google.com/file/d/12Q8dRZdgeLy9BsbNmFwN1IRH0cD_j_Za/preview',  // Google Drive embed
    //     isGoogleDrive: true,
    //     tags: ['StoreKit', 'Subscriptions', 'Payment']
    // },
    // {
    //     title: 'Social Feed & Sharing',
    //     description: 'Created an engaging home screen with post creation, image uploads, social sharing capabilities, and pull-to-refresh functionality.',
    //     videoSrc: 'videos/home-screen.mp4',  // Replace with your Google Drive embed link
    //     isGoogleDrive: false,  // Set to true when using Google Drive
    //     tags: ['SwiftUI', 'Social', 'Media Upload']
    // },
    // {
    //     title: 'App Store Deployment',
    //     description: 'Successfully published multiple apps to the App Store, including app screenshots, descriptions, metadata optimization, and compliance review.',
    //     videoSrc: 'videos/app-store.mp4',  // Replace with your Google Drive embed link
    //     isGoogleDrive: false,  // Set to true when using Google Drive
    //     tags: ['Publishing', 'App Store Connect', 'ASO']
    // },
    // {
    //     title: 'TestFlight Distribution',
    //     description: 'Managed beta testing programs with TestFlight, coordinating feedback from testers, and iterating on builds before public release.',
    //     videoSrc: 'videos/testflight.mp4',  // Replace with your Google Drive embed link
    //     isGoogleDrive: false,  // Set to true when using Google Drive
    //     tags: ['TestFlight', 'Beta Testing', 'CI/CD']
    // }
];

/* ============================================
   DOM ELEMENTS
   ============================================ */

// Get references to frequently used DOM elements
const navbar = document.getElementById('navbar');
const navMenu = document.getElementById('navMenu');
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const projectsGrid = document.getElementById('projectsGrid');
const videoModal = document.getElementById('videoModal');
const modalVideo = document.getElementById('modalVideo');
const modalClose = document.getElementById('modalClose');
const modalOverlay = document.getElementById('modalOverlay');

/* ============================================
   NAVIGATION FUNCTIONALITY
   ============================================ */

/**
 * Add scroll effect to navbar
 * When user scrolls down, adds 'scrolled' class for styling
 */
window.addEventListener('scroll', () => {
    // Navbar scroll effect
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Scroll indicator visibility effect
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        if (window.scrollY > 100) {
            scrollIndicator.classList.add('indicator-hidden');
        } else {
            scrollIndicator.classList.remove('indicator-hidden');
        }
    }

    // Profile image morphing transition
    const heroProfile = document.querySelector('.hero-profile-container');
    if (heroProfile) {
        const rect = heroProfile.getBoundingClientRect();
        const heroMiddle = rect.top + rect.height / 2;

        // When the middle of the hero image is above the bottom of the navbar
        // We trigger the transition to the navbar image
        if (heroMiddle < 100) {
            navbar.classList.add('scrolled-past-hero');
            heroProfile.classList.add('scrolled-out');
        } else {
            navbar.classList.remove('scrolled-past-hero');
            heroProfile.classList.remove('scrolled-out');
        }
    }
});

/**
 * Mobile menu toggle
 * Opens/closes navigation menu on mobile devices
 */
mobileMenuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');

    // Animate hamburger menu icon
    const spans = mobileMenuToggle.querySelectorAll('span');
    spans.forEach((span, index) => {
        span.style.transform = navMenu.classList.contains('active')
            ? (index === 0 ? 'rotate(45deg) translateY(8px)'
                : index === 1 ? 'scaleX(0)'
                    : 'rotate(-45deg) translateY(-8px)')
            : 'none';
    });
});

/**
 * Smooth scroll to sections and update active nav link
 * Closes mobile menu after clicking a link
 */
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        // Close mobile menu
        navMenu.classList.remove('active');

        // Reset hamburger icon
        const spans = mobileMenuToggle.querySelectorAll('span');
        spans.forEach(span => span.style.transform = 'none');

        // Update active state
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

/**
 * Highlight active section in navigation while scrolling
 * Updates nav link based on which section is in view
 */
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

/* ============================================
   SKILLS SECTION - DYNAMIC GENERATION
   ============================================ */

/**
 * Render skills cards dynamically from skills array
 * This approach keeps the HTML clean and makes content easy to update
 */
function renderSkills() {
    const skillsGrid = document.querySelector('.skills-grid');
    if (!skillsGrid) return;

    // Generate HTML for each skill
    const skillsHTML = skills.map((skill, index) => `
        <a href="skill-details.html?id=${index}" class="skill-card-link" style="text-decoration: none; color: inherit; display: block;">
            <div class="skill-card">
                <div class="skill-icon">${skill.icon}</div>
                <h3 class="skill-title">${skill.title}</h3>
                <p class="skill-description">${skill.description}</p>
                <div class="skill-hover-indicator" style="margin-top: 15px; font-size: 0.9rem; color: var(--primary-color); font-weight: 500;">
                    View Details →
                </div>
            </div>
        </a>
    `).join('');

    // Insert into DOM
    skillsGrid.innerHTML = skillsHTML;
}

/* ============================================
   PROJECTS SECTION - DYNAMIC GENERATION
   ============================================ */

/**
 * Render project cards dynamically from projects array
 * Each card can open a video modal when clicked
 * Supports both local videos and Google Drive embeds
 * Includes autoplaying muted video previews with play/pause and mute controls
 * Controls only appear on local videos (Google Drive iframes can't be controlled)
 */
function renderProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    if (!projectsGrid) return;

    // Skip if on skill details page (it handles its own rendering)
    if (window.location.pathname.includes('skill-details.html')) return;

    // Generate HTML for each project
    const projectsHTML = projects.map((project, index) => {
        // Prepare thumbnail preview
        let thumbnailHTML = '';
        let controlsHTML = '';

        if (project.isGoogleDrive) {
            // For Google Drive videos, DON'T autoplay to prevent sound
            // Show static iframe preview that user can click to watch
            thumbnailHTML = `
                <iframe 
                    class="project-video-preview" 
                    id="preview-${index}"
                    src="${project.videoSrc}"
                    frameborder="0"
                    allow="encrypted-media"
                    allowfullscreen>
                </iframe>
            `;
            // No controls for Google Drive videos (they don't work due to iframe restrictions)
            controlsHTML = '';
        } else {
            // For local videos, use video element with autoplay and mute
            thumbnailHTML = `
                <video 
                    class="project-video-preview local-video" 
                    id="preview-${index}"
                    autoplay 
                    muted 
                    loop 
                    playsinline
                    data-index="${index}">
                    <source src="${project.videoSrc}" type="video/mp4">
                </video>
            `;
            // Show controls only for local videos
            controlsHTML = `
                <div class="video-controls">
                    <button class="control-btn play-pause-btn" data-index="${index}" title="Play/Pause">
                        <svg class="pause-icon-svg" viewBox="0 0 24 24" fill="white">
                            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                        </svg>
                        <svg class="play-icon-svg hidden" viewBox="0 0 24 24" fill="white">
                            <path d="M8 5v14l11-7z"/>
                        </svg>
                    </button>
                    <button class="control-btn mute-btn" data-index="${index}" title="Mute/Unmute">
                        <svg class="muted-icon-svg" viewBox="0 0 24 24" fill="white">
                            <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM19 12c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
                            <line x1="3" y1="3" x2="21" y2="21" stroke="white" stroke-width="2"/>
                        </svg>
                        <svg class="unmuted-icon-svg hidden" viewBox="0 0 24 24" fill="white">
                            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                        </svg>
                    </button>
                </div>
            `;
        }

        return `
        <div class="project-card" 
             data-video="${project.videoSrc}" 
             data-google-drive="${project.isGoogleDrive || false}"
             data-index="${index}">
            <div class="project-video-container">
                ${thumbnailHTML}
                ${controlsHTML}
                
                <!-- Overlay with click to expand - appears on hover -->
                <div class="project-video-overlay">
                    <div class="play-icon-large">▶</div>
                    <p class="overlay-text">Click to watch full demo</p>
                    ${project.isGoogleDrive ? '<small class="drive-badge">📁 Google Drive</small>' : ''}
                </div>
            </div>
            <div class="project-info">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `
                        <span class="project-tag">${tag}</span>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
    }).join('');

    // Insert into DOM
    projectsGrid.innerHTML = projectsHTML;

    // Add click event listeners to all project cards
    attachProjectCardListeners();

    // Add video control listeners
    attachVideoControlListeners();

    // Initialize video states
    initializeVideoStates();
}

/**
 * Attach click event listeners to project cards
 * When clicked, opens modal with the project video
 * Detects whether video is from Google Drive or local
 * Excludes clicks on control buttons
 */
function attachProjectCardListeners() {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('click', (e) => {
            // Don't open modal if clicking on control buttons
            if (e.target.closest('.video-controls')) {
                return;
            }

            const videoSrc = card.getAttribute('data-video');
            const isGoogleDrive = card.getAttribute('data-google-drive') === 'true';
            openVideoModal(videoSrc, isGoogleDrive);
        });
    });
}

/**
 * Attach event listeners to video control buttons (play/pause, mute)
 * Only works for local HTML5 videos, not Google Drive iframes
 */
function attachVideoControlListeners() {
    // Play/Pause buttons
    const playPauseBtns = document.querySelectorAll('.play-pause-btn');
    playPauseBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent opening modal
            const index = btn.getAttribute('data-index');
            const video = document.getElementById(`preview-${index}`);

            console.log('Play/Pause clicked for index:', index, 'Video:', video);

            // Only works for local video elements
            if (video && video.tagName === 'VIDEO') {
                const playIcon = btn.querySelector('.play-icon-svg');
                const pauseIcon = btn.querySelector('.pause-icon-svg');

                if (video.paused) {
                    video.play().then(() => {
                        console.log('Video playing');
                        playIcon.classList.add('hidden');
                        pauseIcon.classList.remove('hidden');
                    }).catch(err => console.error('Play error:', err));
                } else {
                    video.pause();
                    console.log('Video paused');
                    playIcon.classList.remove('hidden');
                    pauseIcon.classList.add('hidden');
                }
            } else {
                console.log('Not a video element or element not found');
            }
        });
    });

    // Mute/Unmute buttons
    const muteBtns = document.querySelectorAll('.mute-btn');
    muteBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent opening modal
            const index = btn.getAttribute('data-index');
            const video = document.getElementById(`preview-${index}`);

            console.log('Mute clicked for index:', index, 'Video:', video);

            // Only works for local video elements
            if (video && video.tagName === 'VIDEO') {
                const mutedIcon = btn.querySelector('.muted-icon-svg');
                const unmutedIcon = btn.querySelector('.unmuted-icon-svg');

                video.muted = !video.muted;
                console.log('Video muted:', video.muted);

                if (video.muted) {
                    mutedIcon.classList.remove('hidden');
                    unmutedIcon.classList.add('hidden');
                } else {
                    mutedIcon.classList.add('hidden');
                    unmutedIcon.classList.remove('hidden');
                }
            } else {
                console.log('Not a video element or element not found');
            }
        });
    });
}

/**
 * Initialize video states - ensure all videos start muted and playing
 * Updates button states to match actual video state
 */
function initializeVideoStates() {
    const localVideos = document.querySelectorAll('.local-video');

    localVideos.forEach(video => {
        const index = video.getAttribute('data-index');

        // Ensure video is muted
        video.muted = true;

        // Update button states to match
        const playPauseBtn = document.querySelector(`.play-pause-btn[data-index="${index}"]`);
        const muteBtn = document.querySelector(`.mute-btn[data-index="${index}"]`);

        if (playPauseBtn) {
            const playIcon = playPauseBtn.querySelector('.play-icon-svg');
            const pauseIcon = playPauseBtn.querySelector('.pause-icon-svg');

            // Video is autoplaying, so show pause icon
            if (playIcon && pauseIcon) {
                playIcon.classList.add('hidden');
                pauseIcon.classList.remove('hidden');
            }
        }

        if (muteBtn) {
            const mutedIcon = muteBtn.querySelector('.muted-icon-svg');
            const unmutedIcon = muteBtn.querySelector('.unmuted-icon-svg');

            // Video is muted, so show muted icon
            if (mutedIcon && unmutedIcon) {
                mutedIcon.classList.remove('hidden');
                unmutedIcon.classList.add('hidden');
            }
        }

        console.log(`Video ${index} initialized: muted=${video.muted}, paused=${video.paused}`);
    });
}

/* ============================================
   VIDEO MODAL FUNCTIONALITY
   ============================================ */

/**
 * Open video modal with specified video source
 * Supports both local MP4 files and Google Drive embedded videos
 * @param {string} videoSrc - Path to video file or Google Drive embed URL
 * @param {boolean} isGoogleDrive - Whether the video is from Google Drive
 */
function openVideoModal(videoSrc, isGoogleDrive = false) {
    const modalBody = document.querySelector('.modal-body');

    // Clear previous content
    modalBody.innerHTML = '';

    if (isGoogleDrive) {
        // Create iframe for Google Drive video
        const iframe = document.createElement('iframe');
        iframe.src = videoSrc;
        iframe.style.width = '100%';
        iframe.style.height = '600px';
        iframe.style.border = 'none';
        iframe.allow = 'autoplay';
        iframe.setAttribute('allowfullscreen', '');
        modalBody.appendChild(iframe);
    } else {
        // Create video element for local files
        const video = document.createElement('video');
        video.id = 'modalVideo';
        video.controls = true;
        video.src = videoSrc;
        video.style.width = '100%';
        video.style.height = 'auto';
        video.style.display = 'block';
        modalBody.appendChild(video);

        // Auto-play local videos
        video.play().catch(err => console.log('Autoplay prevented:', err));
    }

    // Show modal with animation
    videoModal.classList.add('active');

    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
}

/**
 * Close video modal
 * Stops video playback and hides modal
 * Works for both local videos and Google Drive embeds
 */
function closeVideoModal() {
    // Hide modal
    videoModal.classList.remove('active');

    // Clear modal body (removes video or iframe)
    const modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = '';

    // Restore body scroll
    document.body.style.overflow = '';
}

/**
 * Event listeners for closing modal
 */
// Close button
modalClose.addEventListener('click', closeVideoModal);

// Click outside video (on overlay)
modalOverlay.addEventListener('click', closeVideoModal);

// Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && videoModal.classList.contains('active')) {
        closeVideoModal();
    }
});

/* ============================================
   SCROLL ANIMATIONS
   ============================================ */

/**
 * Intersection Observer for scroll animations
 * Adds fade-in effect to elements as they enter viewport
 * This creates a smooth, professional scrolling experience
 */
function initScrollAnimations() {
    // Elements to animate
    const animatedElements = document.querySelectorAll(
        '.skill-card, .project-card, .highlight-item, .contact-card'
    );

    // Observer options
    const observerOptions = {
        threshold: 0.1,      // Trigger when 10% of element is visible
        rootMargin: '0px 0px -50px 0px'  // Offset from bottom
    };

    // Create observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add animation class when element enters viewport
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(20px)';

                // Trigger animation
                setTimeout(() => {
                    entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100);

                // Stop observing once animated
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all animated elements
    animatedElements.forEach(el => observer.observe(el));
}

/* ============================================
   INITIALIZATION
   ============================================ */

/**
 * Initialize everything when DOM is fully loaded
 * This ensures all elements exist before we try to manipulate them
 */
document.addEventListener('DOMContentLoaded', () => {
    // Render dynamic content
    renderSkills();
    renderProjects();

    // Check for skill details page
    if (typeof initSkillDetails === 'function') {
        initSkillDetails();
    }

    // Initialize scroll animations
    // Wait a bit for content to render first
    setTimeout(() => {
        initScrollAnimations();
    }, 100);

    console.log('Portfolio initialized successfully! 🎉');
});

/* ============================================
   SKILL DETAILS PAGE LOGIC
   ============================================ */

/**
 * Initialize the Skill Details page
 * - Parsons URL params to get skill ID
 * - Renders skill header
 * - Filters and renders related projects
 */
function initSkillDetails() {
    // Check if we are on the skill details page
    if (!window.location.pathname.includes('skill-details.html')) return;

    // Get ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const skillIndex = urlParams.get('id');

    if (skillIndex === null || !skills[skillIndex]) {
        // Handle invalid ID
        const skillHeader = document.getElementById('skill-header');
        if (skillHeader) {
            skillHeader.innerHTML = `
                <div class="skill-hero-icon">❓</div>
                <h1 class="skill-hero-title">Skill Not Found</h1>
                <p class="skill-hero-description">The skill you are looking for does not exist or has been removed.</p>
            `;
        }
        return;
    }

    const skill = skills[skillIndex];

    // Render Skill Header
    const headerContainer = document.getElementById('skill-header');
    if (headerContainer) {
        headerContainer.innerHTML = `
            <h1 class="skill-hero-title">${skill.title}</h1>
            <p class="skill-hero-description">${skill.description}</p>
        `;
    }

    // Render Screenshot Slider
    const sliderContainer = document.getElementById('skill-screenshots-container');
    if (sliderContainer && skill.screenshots && skill.screenshots.length > 0) {
        sliderContainer.style.display = 'block';
        renderImageSlider(skill.screenshots, 'skill-screenshots-container');
    } else if (sliderContainer) {
        sliderContainer.style.display = 'none';
    }

    // Render Extended Skill Details
    const detailsContainer = document.getElementById('skill-details-content');
    if (detailsContainer) {
        let detailsHTML = '';

        if (skill.about) {
            detailsHTML += `
                <div class="skill-detail-section mb-lg">
                    <h3 class="section-title" style="text-align: left; margin-left: 0; display: block; left: 0; transform: none;">About Project</h3>
                    <div class="skill-about-text" style="color: var(--text-secondary); line-height: 1.8; font-size: 1.1rem;">
                        ${skill.about}
                    </div>
                </div>
            `;
        }

        if (skill.codeSnippet) {
            detailsHTML += `
                <div class="skill-detail-section mb-lg">
                    <h3 class="section-title" style="text-align: left; margin-left: 0; display: block; left: 0; transform: none;">Coding Parts</h3>
                    <div class="code-block-container" style="background: #1e1e1e; padding: 20px; border-radius: var(--radius-md); border: 1px solid var(--glass-border); overflow-x: auto;">
                        <pre><code style="font-family: 'Menlo', 'Monaco', 'Courier New', monospace; color: #a9b7c6;">${skill.codeSnippet.trim()}</code></pre>
                    </div>
                </div>
            `;
        }

        if (skill.githubLink) {
            detailsHTML += `
                <div class="skill-detail-section mb-lg">
                    <h3 class="section-title" style="text-align: left; margin-left: 0; display: block; left: 0; transform: none;">Source Code</h3>
                    <a href="${skill.githubLink}" target="_blank" class="btn btn-primary" style="display: inline-flex; align-items: center; gap: 8px;">
                        <svg height="24" width="24" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                        </svg>
                        View on GitHub
                    </a>
                </div>
            `;
        }

        detailsContainer.innerHTML = detailsHTML;
    }

    // Filter Related Projects
    const searchTags = skill.relatedTags || [skill.title];
    const relatedProjects = projects.filter(project => {
        return project.tags.some(tag => {
            return searchTags.some(searchTag =>
                tag.toLowerCase().includes(searchTag.toLowerCase())
            );
        });
    });

    // Render Projects
    const projectsGrid = document.getElementById('projectsGrid');
    if (projectsGrid) {
        if (relatedProjects.length > 0) {
            const projectsHTML = relatedProjects.map((project, index) => {
                let thumbnailHTML = '';
                let controlsHTML = '';

                if (project.isGoogleDrive) {
                    thumbnailHTML = `
                        <iframe
                            class="project-video-preview"
                            id="preview-${index}"
                            src="${project.videoSrc}"
                            frameborder="0"
                            allow="encrypted-media"
                            allowfullscreen>
                        </iframe>
                    `;
                } else {
                    thumbnailHTML = `
                        <video
                            class="project-video-preview local-video"
                            id="preview-${index}"
                            autoplay
                            muted
                            loop
                            playsinline
                            data-index="${index}">
                            <source src="${project.videoSrc}" type="video/mp4">
                        </video>
                    `;
                    controlsHTML = `
                        <div class="video-controls">
                            <!-- Controls same as main page -->
                             <button class="control-btn play-pause-btn" data-index="${index}" title="Play/Pause">
                                <svg class="pause-icon-svg" viewBox="0 0 24 24" fill="white"><path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/></svg>
                                <svg class="play-icon-svg hidden" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>
                            </button>
                            <button class="control-btn mute-btn" data-index="${index}" title="Mute/Unmute">
                                <svg class="muted-icon-svg" viewBox="0 0 24 24" fill="white"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM19 12c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/></svg>
                                <svg class="unmuted-icon-svg hidden" viewBox="0 0 24 24" fill="white"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>
                            </button>
                        </div>
                    `;
                }

                return `
                <div class="project-card"
                     data-video="${project.videoSrc}"
                     data-google-drive="${project.isGoogleDrive || false}"
                     data-index="${index}">
                    <div class="project-video-container">
                        ${thumbnailHTML}
                        ${controlsHTML}
                        <div class="project-video-overlay">
                            <div class="play-icon-large">▶</div>
                            <p class="overlay-text">Click to watch full demo</p>
                            ${project.isGoogleDrive ? '<small class="drive-badge">📁 Google Drive</small>' : ''}
                        </div>
                    </div>
                    <div class="project-info">
                        <h3 class="project-title">${project.title}</h3>
                        <p class="project-description">${project.description}</p>
                        <div class="project-tags">
                            ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                        </div>
                    </div>
                </div>
                `;
            }).join('');

            projectsGrid.innerHTML = projectsHTML;
            attachProjectCardListeners();
            attachVideoControlListeners();
            initializeVideoStates();
        } else {
            projectsGrid.innerHTML = `
                <div class="no-projects">
                    <p>No specific projects found for this skill yet.</p>
                </div>
            `;
            // Keep styles consistent
            projectsGrid.style.display = 'block';
        }
    }
}

/**
 * Render Image Slider Component
 * @param {string[]} images - Array of image paths
 * @param {string} containerId - ID of container element
 */
function renderImageSlider(images, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // Create slider HTML structure
    container.innerHTML = `
        <div class="container">
            <h2 class="section-title" style="text-align: left; left: 0; transform: none; display: block; margin-left: 0;">App Screenshots</h2>
            <div class="slider-wrapper">
                <button class="slider-btn prev-btn" id="slider-prev">❮</button>
                <div class="slider-track-container">
                    <div class="slider-track" id="slider-track">
                        ${images.map((img, index) => `
                            <div class="slide">
                                <img src="${img}" alt="Screenshot ${index + 1}" loading="lazy">
                            </div>
                        `).join('')}
                    </div>
                </div>
                <button class="slider-btn next-btn" id="slider-next">❯</button>
            </div>
            <div class="slider-dots" id="slider-dots">
                ${images.map((_, index) => `
                    <button class="slider-dot ${index === 0 ? 'active' : ''}" data-index="${index}"></button>
                `).join('')}
            </div>
        </div>
    `;

    // Slider Logic
    const track = document.getElementById('slider-track');
    const prevBtn = document.getElementById('slider-prev');
    const nextBtn = document.getElementById('slider-next');
    const dots = document.querySelectorAll('.slider-dot');

    let currentIndex = 0;
    const totalSlides = images.length;

    function updateSlider() {
        // Move track
        const slideWidth = 100; // 100% width
        track.style.transform = `translateX(-${currentIndex * slideWidth}%)`;

        // Update dots
        dots.forEach((dot, index) => {
            if (index === currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    // Auto-sliding Logic
    let autoSlideInterval;

    function startAutoSlide() {
        stopAutoSlide(); // Clear existing to be safe

        // Only auto-slide if there is more than one slide
        if (totalSlides <= 1) return;

        autoSlideInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % totalSlides;
            updateSlider();
        }, 2500); // 2.5 seconds for snappier feeling
    }

    function stopAutoSlide() {
        if (autoSlideInterval) {
            clearInterval(autoSlideInterval);
            autoSlideInterval = null;
        }
    }

    // Event Listeners
    nextBtn.addEventListener('click', () => {
        stopAutoSlide();
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlider();
        startAutoSlide(); // Restart after interaction
    });

    prevBtn.addEventListener('click', () => {
        stopAutoSlide();
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSlider();
        startAutoSlide(); // Restart after interaction
    });

    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            stopAutoSlide();
            currentIndex = parseInt(dot.getAttribute('data-index'));
            updateSlider();
            startAutoSlide(); // Restart after interaction
        });
    });

    // Pause on hover
    const sliderWrapper = container.querySelector('.slider-wrapper');
    if (sliderWrapper) {
        sliderWrapper.addEventListener('mouseenter', stopAutoSlide);
        sliderWrapper.addEventListener('mouseleave', startAutoSlide);
    }

    // Optional: Keyboard navigation
    document.addEventListener('keydown', (e) => {
        // Only react if slider is in view or active? 
        // For simplicity, just reset timer if used
        if (e.key === 'ArrowLeft') {
            stopAutoSlide();
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            updateSlider();
            startAutoSlide();
        } else if (e.key === 'ArrowRight') {
            stopAutoSlide();
            currentIndex = (currentIndex + 1) % totalSlides;
            updateSlider();
            startAutoSlide();
        }
    });

    // Start initial auto-slide
    startAutoSlide();
}

/* ============================================
   HELPER FUNCTIONS
   ============================================ */

/**
 * Scroll to top smoothly
 * Can be called from anywhere in your code
 */
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

/**
 * Check if video file exists
 * Useful for debugging video loading issues
 * 
 * Usage in browser console:
 * checkVideoExists('videos/chat-view.mp4')
 */
function checkVideoExists(videoPath) {
    fetch(videoPath)
        .then(response => {
            if (response.ok) {
                console.log(`✅ Video found: ${videoPath}`);
            } else {
                console.error(`❌ Video not found: ${videoPath}`);
            }
        })
        .catch(error => {
            console.error(`❌ Error loading video ${videoPath}:`, error);
        });
}

/* ============================================
   VIDEO TROUBLESHOOTING TIPS
   ============================================ */

/*
 * HOW TO ADD YOUR VIDEOS:
 * 
 * 1. Create a 'videos' folder in the same directory as index.html
 * 
 * 2. Add your video files to the videos folder with these names:
 *    - navigation-router.mp4
 *    - chat-view.mp4
 *    - in-app-purchase.mp4
 *    - home-screen.mp4
 *    - app-store.mp4
 *    - testflight.mp4
 * 
 * 3. Or keep your own filenames and update the 'videoSrc' in the projects array above
 * 
 * 4. Recommended video settings:
 *    - Format: MP4 (H.264 codec)
 *    - Resolution: 1920x1080 or 1280x720
 *    - Frame rate: 30fps
 *    - File size: Under 50MB for fast loading
 * 
 * 5. If videos don't play, open browser console (F12) and check for errors
 * 
 * 6. Test individual videos:
 *    - Open browser console
 *    - Type: checkVideoExists('videos/your-video.mp4')
 *    - Press Enter
 * 
 * 7. PLACEHOLDER IMAGES (Optional):
 *    If you want to show a preview image before video loads, you can add:
 *    <video poster="videos/thumbnails/chat-preview.jpg" ...>
 */
