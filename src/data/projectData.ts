import { Project } from "@/components/types/project";

export const projects: Project[] = [
  {
    id: 10,
    slug: "baloch-builder",
    title: "Baloch Builder",
    category: "Desktop / Business Management",
    tags: ["Tauri", "React", "TypeScript", "SQLite", "Rust"],
    description: "An offline desktop workspace for property developers to manage building projects, land, partner contributions, and payments in one place.",
    longDescription: "Baloch Builder brings a property developer’s day-to-day records into one searchable desktop application. Built with Tauri 2, React, and TypeScript, it stores business data locally in SQLite and works without an internet connection. The workspace connects project and land records with partners, contacts, expenses, bank activity, and credit / Udhaar tracking. Gallery screenshots use illustrative sample data.",
    features: ["Offline workspace with a local SQLite database", "Building projects, plans, and land acquisition records", "Partner profiles and contribution tracking", "Expenses, bank activity, and credit / Udhaar records", "Search, filters, sorting, and financial summaries", "Interactive charts with accessible data tables", "Document attachments and light / dark themes"],
    techStack: ["Tauri 2", "React", "TypeScript", "SQLite", "Rust", "Vite", "Zustand", "Tailwind CSS"],
    image: "/project-images/baloch-builder/projects-desktop.png",
    gallery: [
      "/project-images/baloch-builder/projects-desktop.png",
      "/project-images/baloch-builder/project-details-desktop.png",
      "/project-images/baloch-builder/partners-desktop.png",
      "/project-images/baloch-builder/dashboard-dark.png",
      "/project-images/baloch-builder/dashboard-desktop.png",
    ],
    role: "Desktop Application Developer",
    duration: "Ongoing development",
    challenge: "Bring scattered project, partner, and payment records into a connected workspace that remains usable without internet access.",
    solution: "Combined a React interface with Tauri desktop capabilities and local SQLite storage, with shared record filters, financial summaries, and interactive charts across the workspace.",
    demoUrl: "",
    codeUrl: "",
    status: "In Progress",
    featured: true,
  },
  {
    id: 1,
    slug: "port-city-wise-visualization",
    title: "Port City Wise Visualization Dashboard",
    category: "Data Visualization / Web",
    tags: ["React", "Next.js", "D3.js", "Mapbox", "Data Visualization", "API"],
    description:
      "An interactive data visualization platform that displays port-wise and city-wise logistics and trade insights using dynamic maps and charts.",
    longDescription: `
Port City Wise Visualization is a modern analytics dashboard designed to visualize port-level and city-level logistics data. 
It provides interactive maps, charts, and filters to explore trade patterns, shipment volumes, and geographic insights.

The system demonstrates advanced frontend visualization techniques, scalable architecture, and real-world data handling.
    `,
    features: [
      "Interactive port and city-level maps",
      "Dynamic charts and data visualization",
      "Real-time filtering and analytics",
      "API-driven data architecture",
      "Responsive dashboard UI",
      "Performance-optimized rendering",
    ],
    techStack: ["React", "Next.js", "D3.js", "Mapbox", "REST API"],
    image: "/project-images/port-system/1.png",
    gallery: [
      "/project-images/port-system/1.png",
      "/project-images/port-system/2.png",
      "/project-images/port-system/3.png",
      "/project-images/port-system/port.png",
    ],
    role: "Frontend Developer & Data Visualization Engineer",
    duration: "2 Months",
    challenge:
      "Handling large-scale geographic and logistics data while ensuring smooth performance, real-time interactivity, and accurate visualization across multiple ports and cities.",
    solution:
      "Implemented optimized data processing pipelines, interactive maps using Mapbox, and dynamic charts using D3.js with React and Next.js for scalability and performance.",
    demoUrl: "#",
    codeUrl: "https://github.com/balochali/port-city-visualization",
    status: "Completed",
    featured: true,
  },

  {
    id: 2,
    slug: "ai-chatbot-using-python-hugging-face",
    title: "AI Chatbot using Python & Hugging Face",
    category: "AI / Python",
    tags: ["Python", "Flask", "Hugging Face", "Transformers", "REST API", "AI"],
    description:
      "An intelligent AI chatbot built with Python and Hugging Face Transformers, providing contextual responses through a scalable REST API.",
    longDescription: `
This AI-powered chatbot uses Hugging Face Transformer models to generate contextual responses. 
It exposes RESTful APIs via Flask, enabling integration with web and mobile applications.

The project demonstrates NLP model deployment, inference pipelines, and real-world AI integration.
    `,
    features: [
      "Transformer-based NLP responses",
      "REST API integration",
      "Context-aware conversation handling",
      "Postman testing support",
      "Scalable backend architecture",
    ],
    techStack: ["Python", "Flask", "Hugging Face", "Transformers", "REST API"],
    image: "/project-images/ai-chatbot/1.png",
    gallery: [
      "/project-images/ai-chatbot/1.png",
      "/project-images/ai-chatbot/2.png",
      "/project-images/ai-chatbot/3.png",
      "/project-images/ai-chatbot/4.png",
      "/project-images/ai-chatbot/5.png",
      "/project-images/ai-chatbot/ai-chatbot.png",
    ],
    role: "AI & Backend Developer",
    duration: "1 Month",
    challenge:
      "Deploying NLP models efficiently while maintaining low latency and scalable API performance.",
    solution:
      "Integrated Hugging Face models with Flask APIs and optimized response handling for real-time chatbot interactions.",
    demoUrl: "http://localhost:5000/api/chat",
    codeUrl: "https://github.com/balochali/chatbot_python",
    status: "Completed",
    featured: true,
  },

  {
    id: 3,
    slug: "restaurant-pos-system",
    title: "Restaurant POS System",
    category: "Desktop Application",
    tags: ["Python", "PyQt6", "SQLite3", "UI/UX", "POS"],
    description:
      "A desktop-based Restaurant POS system enabling real-time order management, billing automation, and category-based menu control.",
    longDescription: `
A complete POS system developed using Python and PyQt6 for restaurant operations. 
It automates order management, billing, and menu categorization using a local SQLite database.

The system improves operational efficiency and reduces manual errors.
    `,
    features: [
      "Live order management",
      "Category-based menu system",
      "Automated billing and invoices",
      "SQLite database storage",
      "User-friendly UI",
    ],
    techStack: ["Python", "PyQt6", "SQLite3"],
    image: "/project-images/noshedehwari/1.png",
    gallery: [
      "/project-images/noshedehwari/1.png",
      "/project-images/noshedehwari/2.png",
      "/project-images/noshedehwari/3.png",
      "/project-images/noshedehwari/4.png",
      "/project-images/noshedehwari/5.png",
      "/project-images/noshedehwari/restaurantpos.png",
    ],
    role: "Desktop Application Developer",
    duration: "1.5 Months",
    challenge:
      "Designing a fast, reliable POS system with minimal hardware requirements and intuitive UI.",
    solution:
      "Built a lightweight PyQt6-based system with SQLite for local data storage and efficient UI workflows.",
    demoUrl: "#",
    codeUrl: "https://github.com/balochali/pos_restaurant",
    status: "Completed",
    featured: false,
  },

  {
    id: 4,
    slug: "e-commerce-platform-rex-official",
    title: "E-Commerce Platform (REX Official)",
    category: "Full Stack",
    tags: ["React", "Node.js", "PostgreSQL", "Express", "Prisma"],
    description:
      "A full-stack e-commerce platform with product management, secure checkout, and admin dashboard.",
    longDescription: `
A scalable e-commerce platform built with React, Node.js, and PostgreSQL. 
It includes product management, order tracking, and an admin dashboard with analytics.

The architecture ensures security, performance, and maintainability.
    `,
    features: [
      "Product & inventory management",
      "Secure checkout flow",
      "Admin dashboard & analytics",
      "Order tracking system",
      "Prisma ORM integration",
    ],
    techStack: ["React", "Node.js", "Express", "Prisma", "PostgreSQL"],
    image: "/project-images/rex-official/1.png",
    gallery: [
      "/project-images/rex-official/1.png",
      "/project-images/rex-official/2.png",
      "/project-images/rex-official/3.png",
      "/project-images/rex-official/4.png",
      "/project-images/rex-official/rexofficial.png",
    ],
    role: "Full Stack Developer",
    duration: "3 Months",
    challenge:
      "Building a secure and scalable e-commerce backend with real-time admin controls.",
    solution:
      "Designed a modular backend with Prisma and PostgreSQL and a responsive React frontend.",
    demoUrl: "#",
    codeUrl: "https://github.com/balochali/rex-official",
    status: "Completed",
    featured: false,
  },

  {
    id: 5,
    slug: "bubsy-rewards-app",
    title: "Bubsy Rewards App",
    category: "MERN / Mobile",
    tags: ["React Native", "Node.js", "Prisma", "PostgreSQL", "Web3"],
    description:
      "A reward-based mobile application enabling users to earn, track, and redeem tokens within the Bubsy ecosystem.",
    longDescription: `
Bubsy Rewards App is a blockchain-integrated mobile application that incentivizes user engagement through token-based rewards.
Users can track progress, redeem rewards, and connect their wallets.
    `,
    features: [
      "Token-based reward system",
      "Wallet integration",
      "Secure authentication",
      "Real-time reward tracking",
      "React Native mobile UI",
    ],
    techStack: [
      "React Native",
      "Node.js",
      "Prisma",
      "PostgreSQL",
      "JWT",
      "Web3",
    ],
    image: "/project-images/bubsy-rewards/bubsy-rewards.png",
    gallery: ["/project-images/bubsy-rewards/bubsy-rewards.png"],
    role: "Full Stack Developer",
    duration: "2 Months",
    challenge:
      "Integrating blockchain wallet authentication with a scalable mobile backend.",
    solution:
      "Implemented Web3 wallet integration with a Node.js backend and Prisma-based database.",
    demoUrl: "#",
    codeUrl: "https://github.com/balochali/bubsyrewards",
    status: "Completed",
    featured: true,
  },

  {
    id: 6,
    slug: "bubsy-ai-telegram-community-bot",
    title: "Bubsy AI - Telegram Community Bot",
    category: "AI / Full Stack",
    tags: ["Node.js", "Kafka", "PostgreSQL", "Telegram API", "AI"],
    description:
      "An AI-powered Telegram moderation bot for spam detection, sentiment analysis, and community analytics.",
    longDescription: `
Bubsy AI is an automated Telegram bot that moderates crypto communities using AI-driven sentiment analysis and spam detection.
It processes real-time messages using Kafka and provides analytics dashboards.
    `,
    features: [
      "Spam detection",
      "FUD sentiment analysis",
      "Kafka streaming pipeline",
      "Analytics dashboard",
      "Telegram API integration",
    ],
    techStack: ["Node.js", "Kafka", "PostgreSQL", "Telegram API", "AI/ML"],
    image: "/project-images/bubsyai.png",
    gallery: [
      "/project-images/bubsyai.png",
      "/project-images/bubsy-rewards/bubsy-rewards.png",
      "/project-images/rex-official/rexofficial.png",
    ],
    role: "Full Stack Developer",
    duration: "3 Months",
    challenge:
      "Handling high-volume Telegram messages with real-time moderation and analytics.",
    solution:
      "Built a Kafka-based streaming architecture with ML-driven sentiment analysis.",
    demoUrl: "https://t.me/bubsyAI",
    codeUrl: "https://github.com/balochali/bubsy-ai",
    status: "Completed",
    featured: true,
  },

  {
    id: 7,
    slug: "blockchain-wallet-login-api",
    title: "Blockchain Wallet Login API",
    category: "Backend / Web3",
    tags: ["Node.js", "Express", "JWT", "Prisma", "Web3", "PostgreSQL"],
    description:
      "A secure backend API enabling blockchain wallet-based authentication using cryptographic signature verification.",
    longDescription: `
A Web3 authentication service that verifies wallet signatures and issues JWT tokens.
It provides decentralized login functionality for blockchain-based applications.
    `,
    features: [
      "Wallet signature verification",
      "JWT authentication",
      "Role-based access control",
      "Prisma ORM integration",
      "Web3-ready backend",
    ],
    techStack: ["Node.js", "Express", "Prisma", "JWT", "Web3"],
    image: "/project-images/blockchain-wallet.png",
    gallery: ["/project-images/blockchain-wallet.png"],
    role: "Backend Developer",
    duration: "1 Month",
    challenge:
      "Ensuring secure decentralized authentication without exposing private keys.",
    solution:
      "Implemented cryptographic signature verification and secure JWT-based session management.",
    demoUrl: "#",
    codeUrl: "https://github.com/balochali/blockchain-wallet-login-api",
    status: "Completed",
    featured: true,
  },

  {
    id: 8,
    slug: "easybus-android-app",
    title: "EasyBus Android App",
    category: "Android",
    tags: ["Java", "Android Studio", "Firebase", "Google Maps API"],
    description:
      "A public transportation mobile app providing route discovery, real-time bus tracking, and seat booking.",
    longDescription: `
EasyBus is an Android app designed to simplify public transportation.
It provides real-time bus tracking, route discovery, and seat booking functionality.
    `,
    features: [
      "Live bus tracking",
      "Google Maps integration",
      "Seat booking system",
      "Firebase real-time database",
    ],
    techStack: ["Java", "Firebase", "Google Maps API"],
    image: "/project-images/easybus.png",
    gallery: ["/project-images/easybus.png"],
    role: "Android Developer",
    duration: "1.5 Months",
    challenge:
      "Providing accurate real-time bus tracking with minimal latency.",
    solution: "Integrated Firebase real-time database with Google Maps API.",
    demoUrl: "#",
    codeUrl: "https://github.com/balochali/EasyBusJava",
    status: "Completed",
    featured: false,
  },

  {
    id: 9,
    slug: "coinhound",
    title: "Coinhound - Blockchain Analytics Platform",
    category: "Blockchain / Web3",
    tags: ["Node.js", "Express", "Prisma", "Blockchain", "Data Analytics"],
    description:
      "A blockchain analytics platform providing real-time wallet tracking, transaction monitoring, and portfolio insights.",
    longDescription: `
Coinhound is a Web3 analytics platform that tracks wallet activities and token movements.
It provides insights into on-chain behavior and portfolio performance.
    `,
    features: [
      "Wallet activity tracking",
      "Transaction monitoring",
      "Token flow analysis",
      "Portfolio analytics",
    ],
    techStack: ["Node.js", "Express", "Prisma", "Blockchain"],
    image: "/project-images/coinhound.png",
    gallery: ["/project-images/coinhound.png"],
    role: "Backend & Blockchain Developer",
    duration: "2 Months",
    challenge: "Processing large-scale blockchain data efficiently.",
    solution:
      "Built optimized APIs and data pipelines for real-time blockchain analytics.",
    demoUrl: "#",
    codeUrl: "https://github.com/balochali/coinhound",
    status: "Completed",
    featured: true,
  },
];
