/* ============================================
   PERSONAL DATA — Single Source of Truth
   ============================================
   Edit this file to update your portfolio.
   No HTML/CSS/JS knowledge required —
   just fill in your details below.
   ============================================ */

const personalData = {
    // ========== PROFILE ==========
    name: "Dilshan Thalagahapitiya",
    role: "iOS Developer",
    tagline: "Crafting beautiful, performant iOS applications with SwiftUI",
    profileImage: "images/profile.png",
    resumeLink: "https://drive.google.com/uc?export=download&id=1Qo4MW7H4b6Y_WM1ozX7E2xG4istnSumO",

    // ========== ABOUT ==========
    about: {
        bio: [
            "I'm a passionate iOS Developer with 3+ years of hands-on experience crafting high-quality mobile applications using SwiftUI. I specialize in transforming ideas into polished, production-ready apps — taking products all the way from early concept and architecture to successful App Store deployment. My technical expertise covers building scalable navigation architectures, real-time chat systems, in-app purchase integrations, and performance-optimized features that deliver smooth, engaging user experiences. I'm deeply focused on clean UI design, maintainable code structures, and Apple-standard best practices that ensure both usability and long-term scalability.",

            "Professionally, I've had the opportunity to work with global teams. I previously contributed to innovative mobile solutions at Elegant Media — an Australia-based software company — where I strengthened my experience in enterprise-grade app development and international collaboration. Currently, I'm working remotely with Crede Technologies (Canada), continuing to build impactful iOS applications while embracing the flexibility and productivity of a work-from-home environment — something that truly aligns with my passion and workflow. For me, iOS development isn't just a career — it's a craft I continuously refine. I'm driven by learning new technologies, solving complex problems, and creating apps that make a meaningful difference in users' daily lives."
        ],
        highlights: [
            {
                icon: "\u{1F680}",
                title: "App Store Publishing",
                description: "Successfully published multiple apps to the App Store"
            },
            {
                icon: "\u{2708}\u{FE0F}",
                title: "TestFlight Distribution",
                description: "Expert in beta testing and TestFlight build management"
            },
            {
                icon: "\u26A1",
                title: "SwiftUI Mastery",
                description: "Building modern, declarative UIs with the latest iOS technologies"
            }
        ]
    },

    // ========== SOCIAL LINKS ==========
    social: {
        email: "dilshan.thalagahapitiya11@gmail.com",
        linkedin: "https://www.linkedin.com/in/dilshan-thalagahapitiya-a06300159/",
        github: "https://github.com/DilshanThalagahapitiya",
        cv: "https://drive.google.com/uc?export=download&id=1Qo4MW7H4b6Y_WM1ozX7E2xG4istnSumO"
    },

    // ========== WORK EXPERIENCE ==========
    experience: [
        {
            company: "Crede Technologies",
            role: "iOS Developer",
            location: "Canada (Remote)",
            period: "6+ Months (Current)",
            description: "Building impactful iOS applications using SwiftUI and modern iOS frameworks in a remote environment."
        },
        {
            company: "Elegant Media",
            role: "iOS Developer",
            location: "Australia",
            period: "3 Years 4 Months",
            description: "Contributed to innovative mobile solutions and enterprise-grade app development with an international team."
        }
    ],

    // ========== SKILLS ==========
    skills: [
        {
            icon: '\uD83D\uDCAC',
            title: 'Chat Interfaces',
            description: 'Real-time messaging with optimized performance, Firebase API, custom UI components, and message persistence',
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
                    }
                }
                .listStyle(.automatic)
                .scrollContentBackground(.hidden)
                .background(Color.clear)
            }

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
        }
        .navigationTitle("Chats")
        .toolbar {
            ToolbarItem(placement: .navigationBarLeading) {
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
            }

            ToolbarItem(placement: .navigationBarTrailing) {
                HStack{
                    Button(action: { showingCreateGroup = true }) {
                        Image(systemName: "square.and.pencil")
                    }
                }
            }
        }
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
            icon: '\uD83E\uDDED',
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
            icon: '\uD83D\uDCFA',
            title: 'YouTube Browser & Downloader',
            description: 'A productivity-focused floating YouTube player & downloader built for macOS users.',
            about: `
                <p>A productivity-focused floating YouTube player & downloader built for macOS users — especially developers.</p>
                <p>Whether you're following coding tutorials, debugging with guides, or listening to tech talks, this tool keeps your video visible without switching windows.</p>
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
                'images/YoutybeFP/Screenshot 2026-02-15 at 2.10.38\u202FAM (2).png',
                'images/YoutybeFP/Screenshot 2026-02-15 at 2.11.09\u202FAM.png',
                'images/YoutybeFP/Screenshot 2026-02-15 at 2.11.12\u202FAM.png',
                'images/YoutybeFP/Screenshot 2026-02-15 at 2.11.21\u202FAM.png',
                'images/YoutybeFP/Screenshot 2026-02-15 at 2.11.28\u202FAM.png',
                'images/YoutybeFP/ss-yt1.png'
            ],
            relatedTags: ['macOS', 'SwiftUI', 'YouTube', 'Productivity']
        },
        {
            icon: '\uD83D\uDCF1',
            title: 'Home Screens',
            description: 'Dynamic home screens with post sharing, custom feed layouts, and engaging user interactions',
            relatedTags: ['UI Design', 'Social', 'Feed', 'Layout']
        },
        {
            icon: '\uD83D\uDE80',
            title: 'App Store Publishing',
            description: 'Complete app submission process, App Store optimization, and compliance with Apple guidelines',
            relatedTags: ['App Store', 'Publishing', 'ASO']
        },
        {
            icon: '\u2708\uFE0F',
            title: 'TestFlight Builds',
            description: 'Beta distribution, user feedback collection, and managing multiple test groups',
            relatedTags: ['TestFlight', 'Beta Testing', 'CI/CD']
        },
        {
            icon: '\uD83C\uDFA8',
            title: 'SwiftUI Design',
            description: 'Modern declarative UIs with custom components, animations, and responsive layouts',
            relatedTags: ['SwiftUI', 'Animation', 'Design System', 'UI Components']
        },
        {
            icon: '\uD83D\uDCA1',
            title: 'Data Persistence',
            description: 'Core Data, SwiftData, UserDefaults, and cloud sync implementations',
            relatedTags: ['Core Data', 'SwiftData', 'Persistence', 'Database']
        },
        {
            icon: '\uD83D\uDD17',
            title: 'REST API Integration',
            description: 'Building robust API layers with URLSession, async/await, Codable, and comprehensive error handling',
            relatedTags: ['REST', 'API', 'Networking', 'URLSession', 'Codable']
        },
        {
            icon: '\uD83D\uDD12',
            title: 'Authentication & Security',
            description: 'Firebase Auth, Face ID/Touch ID, Keychain services, JWT token management, and secure data storage',
            relatedTags: ['Authentication', 'Security', 'Firebase', 'Keychain', 'Biometrics']
        },
        {
            icon: '\uD83D\uDCE1',
            title: 'Push Notifications',
            description: 'APNs integration, local notifications, notification content extensions, and rich media notifications',
            relatedTags: ['Push Notifications', 'APNs', 'UserNotifications', 'UNNotification']
        },
        {
            icon: '\uD83D\uDEE0\uFE0F',
            title: 'Git & Version Control',
            description: 'Git workflow, branching strategies, pull requests, code reviews, and collaborative development',
            relatedTags: ['Git', 'GitHub', 'Version Control', 'Collaboration']
        }
    ],

    // ========== PROJECTS ==========
    projects: [
        {
            title: 'Fiver Gig App',
            description: 'A professional Fiverr gig showcase app with service browsing, ordering, and client communication features.',
            imageSrc: 'images/projects/mokup_01_Fiver_Gig_App.png',
            tags: ['SwiftUI', 'UI Design', 'Freelance', 'Services']
        },
        {
            title: 'Audit App',
            description: 'Streamlined auditing application for inspections, reporting, and compliance tracking with offline support.',
            imageSrc: 'images/projects/mokup_02_Audit-App.png',
            tags: ['SwiftUI', 'Data Persistence', 'Offline', 'Reporting']
        },
        {
            title: 'Booking App',
            description: 'Modern booking platform with real-time availability, calendar integration, and secure payment processing.',
            imageSrc: 'images/projects/mokup_03_Booking_App.png',
            tags: ['SwiftUI', 'Calendar', 'Payments', 'Real-time']
        },
        {
            title: 'Travel App',
            description: 'Comprehensive travel companion app with destination discovery, itinerary planning, and booking management.',
            imageSrc: 'images/projects/mokup_04_Travel_App.png',
            tags: ['SwiftUI', 'MapKit', 'Location', 'Travel']
        },
        {
            title: 'Social Media App',
            description: 'Feature-rich social networking app with feed posting, messaging, notifications, and user profiles.',
            imageSrc: 'images/projects/mokup_05_SocialMedia_App.png',
            tags: ['SwiftUI', 'Social', 'Real-time', 'Notifications']
        },
        {
            title: 'AI Assistant App',
            description: 'Intelligent AI-powered assistant app with chat interface, image generation, and smart recommendations.',
            imageSrc: 'images/projects/ChatGPT Image Jun 29, 2026, 07_49_07 AM.png',
            tags: ['SwiftUI', 'AI', 'Chat', 'Integration']
        }
    ],

    // ========== FOOTER ==========
    footer: {
        copyright: `\u00A9 2026 iOS Developer Portfolio. Built with passion for great apps.`,
        tagline: "Built with passion for great apps"
    }
};