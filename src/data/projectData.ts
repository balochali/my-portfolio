import { Project } from "@/components/types/project";

export const projects: Project[] = [
  {
    id: 1,
    slug: "ai-chatbot-using-python-hugging-face",
    title: "AI Chatbot using Python & Hugging Face",
    category: "Python",
    tags: ["Python", "Flask", "Hugging Face", "Transformers", "AI"],
    description:
      "An intelligent chatbot built with Flask and Hugging Face Transformers. Supports natural language responses through a REST API endpoint — fully testable via Postman.",
    longDescription: `
        This project implements an AI-based conversational chatbot powered by Hugging Face Transformers. 
        Built using Flask, it exposes REST API endpoints that allow sending messages and receiving intelligent responses.

        The chatbot model processes natural language text and generates contextual answers. 
        It is ideal for learning text generation, inference pipelines, and deploying ML models into production environments.
    `,
    features: [
      "Fully functional REST API for chat responses",
      "Integration with Hugging Face Transformer model",
      "Postman-compatible request structure",
      "Text generation with context awareness",
      "Simple and portable deployment using Python & Flask",
    ],
    techStack: ["Python", "Flask", "Transformers", "Hugging Face"],
    image: "/project-images/ai-chatbot/ai-chatbot.png",
    gallery: [
      "/project-images/ai-chatbot/ai-chatbot.png",
      "/project-images/ai-chatbot/1.png",
      "/project-images/ai-chatbot/2.png",
      "/project-images/ai-chatbot/3.png",
      "/project-images/ai-chatbot/4.png",
      "/project-images/ai-chatbot/5.png",
    ],
    demoUrl: "http://localhost:5000/api/chat",
    codeUrl: "https://github.com/balochali/chatbot_python",
    status: "Completed",
    featured: true,
  },
  {
    id: 2,
    slug: "restaurant-pos-system",
    title: "Restaurant POS System",
    category: "Python",
    tags: ["Python", "PyQt6", "SQLite3", "UI/UX"],
    description:
      "A Point of Sale system developed for Restaurant featuring live order management, category-based item control, and billing automation.",
    longDescription: `
        Desktop-based POS application built with PyQt6 including real-time order processing, billing automation and category-wise menu handling.
        Designed to reduce operational errors and improve restaurant workflow.
    `,
    features: [
      "Live order management",
      "Category-based menu selection",
      "Automated billing and receipt generation",
      "Local SQLite database",
      "Easy-to-use UI for restaurant staff",
    ],
    techStack: ["PyQt6", "SQLite3", "Python", "UI/UX"],
    image: "/project-images/noshedehwari/restaurantpos.png",
    gallery: [
      "/project-images/noshedehwari/restaurantpos.png",
      "/project-images/noshedehwari/1.png",
      "/project-images/noshedehwari/2.png",
      "/project-images/noshedehwari/3.png",
      "/project-images/noshedehwari/4.png",
      "/project-images/noshedehwari/5.png",
    ],
    demoUrl: "#",
    codeUrl: "https://github.com/balochali/pos_restaurant",
    status: "Completed",
    featured: false,
  },
  {
    id: 3,
    slug: "e-commerce-platform-rex-official",
    title: "E-Commerce Platform (REX Official)",
    category: "Full Stack",
    tags: ["React", "Node.js", "PostgreSQL", "Express", "Prisma"],
    description:
      "Custom e-commerce backend and admin dashboard for REX Official, supporting product management and secure checkout.",
    longDescription: `
        vA full-scale e-commerce platform built with modern backend architecture and an optimized product management system. 
        Includes secure checkout handling, inventory system, admin panel and customer order tracking.
    `,
    features: [
      "Product and inventory management",
      "Secure checkout with validation",
      "Admin dashboard for analytics and control",
      "Database driven architecture using Prisma",
    ],
    techStack: ["React", "Node.js", "Express", "Prisma", "PostgreSQL"],
    image: "/project-images/rex-official/rexofficial.png",
    gallery: [
      "/project-images/rex-official/rexofficial.png",
      "/project-images/rex-official/1.png",
      "/project-images/rex-official/2.png",
      "/project-images/rex-official/3.png",
      "/project-images/rex-official/4.png",
    ],
    demoUrl: "#",
    codeUrl: "https://github.com/balochali/rex-official",
    status: "Completed",
    featured: false,
  },
  {
    id: 4,
    slug: "bubsy-rewards-app",
    title: "Bubsy Rewards App",
    category: "MERN",
    tags: ["React Native", "Node.js", "Express", "Prisma", "PostgreSQL"],
    description:
      "Reward-based mobile app that enables users to earn, track, and redeem Bubsy tokens for their community activity.",
    longDescription: `
        The Bubsy Rewards App allows community members to earn rewards based on activity and engagement. 
        Users can redeem points, review their progress in a dashboard, and connect with community events.
        This project is part of the Bubsy ecosystem and integrates a scalable backend service using Prisma and PostgreSQL.
    `,
    features: [
      "Token-based reward system",
      "Secure user authentication",
      "Wallet based points storage",
      "React Native mobile interface",
      "Analytics dashboards for user performance",
    ],
    techStack: ["React Native", "Node.js", "Prisma", "PostgreSQL", "JWT"],
    image: "/project-images/bubsy-rewards/bubsy-rewards.png",
    gallery: ["/project-images/bubsy-rewards/bubsy-rewards.png"],
    demoUrl: "#",
    codeUrl: "https://github.com/balochali/bubsyrewards",
    status: "Completed",
    featured: true,
  },

  {
    id: 5,
    slug: "bubsy-ai-telegram-community-bot",
    title: "Bubsy AI - Telegram Community Bot",
    category: "Full Stack",
    tags: ["Node.js", "Kafka", "PostgreSQL", "Telegram API", "AI"],
    description:
      "AI-powered Telegram bot managing spam, FUD detection, and community engagement with analytics dashboards.",
    longDescription: `
        A complete Telegram AI moderation bot designed to protect crypto communities from spam and FUD. 
        Utilizes Kafka streaming, ML based sentiment detection, and robust analytics dashboard.
    `,
    features: [
      "Spam filtering and link detection",
      "FUD sentiment analysis",
      "Kafka streaming pipeline",
      "Analytics dashboard visualization",
      "Telegram API integration",
    ],
    techStack: ["Node.js", "Kafka", "PostgreSQL", "Telegram API", "AI/ML"],
    image: "/project-images/bubsyai.png",
    gallery: [
      "/project-images/bubsyai.png",
      "/project-images/bubsy-rewards.png",
      "/project-images/rexofficial.png",
    ],
    role: "Full Stack Developer",
    duration: "3 Months",
    challenge:
      "Crypto communities face significant challenges with spam, FUD (Fear, Uncertainty, Doubt), and maintaining user engagement. Manual moderation is inefficient and cannot scale effectively with rapid community growth.",
    solution:
      "Developed an autonomous AI agent integrated with Telegram. It uses Kafka for real-time message streaming and a custom ML model to detect sentiment and spam patterns. The bot provides instant moderation, answers community questions, and generates activity reports via a web dashboard.",
    demoUrl: "https://t.me/bubsyAI",
    codeUrl: "https://github.com/balochali/bubsy-ai",
    status: "Completed",
    featured: true,
  },
  {
    id: 6,
    slug: "blockchain-wallet-login-api",
    title: "Blockchain Wallet Login API",
    category: "MERN",
    tags: ["Node.js", "Express", "JWT", "Prisma", "Web3"],
    description:
      "Secure login API using blockchain wallet authentication, integrated with Prisma and PostgreSQL.",
    features: [
      "Wallet-based authentication",
      "JWT security tokens",
      "Role-based access control",
      "Prisma ORM integration",
    ],
    longDescription: `
        Secure authentication service enabling blockchain wallet login with signature verification. 
        Stores user records and provides authorization through JWT-based access tokens.
    `,
    image: "/project-images/blockchain-wallet.png",
    demoUrl: "#",
    codeUrl: "https://github.com/balochali/blockchain-wallet-login-api",
    status: "Completed",
    featured: true,
  },
  {
    id: 7,
    slug: "easybus-android-app",
    title: "EasyBus Android App",
    category: "Android",
    tags: ["Java", "Android Studio", "Firebase", "Google Maps API"],
    description:
      "A public transportation app that helps users find routes, view schedules, and book seats with real-time bus tracking.",
    longDescription: `
Mobile app to make daily travel efficient with route browsing, live tracking and seat booking functionality. 
Uses Firebase real-time updates to monitor bus movement.
    `,
    features: [
      "Live bus tracking",
      "Google Maps navigation",
      "Seat booking system",
      "Firebase live sync updates",
    ],
    image: "/project-images/easybus.png",
    demoUrl: "#",
    codeUrl: "https://github.com/balochali/EasyBusJava",
    status: "Completed",
    featured: false,
  },
  {
    id: 8,
    slug: "coinhound",
    title: "Coinhound",
    category: "Blockchain / Web3",
    tags: ["Node.js", "Express", "Prisma", "Blockchain", "Data Analysis"],
    description:
      "A blockchain analytics platform that tracks wallet activities, monitors token transactions, and provides real-time insights into on-chain behavior and portfolio movements.",
    longDescription: `
Coinhound provides real-time monitoring of crypto wallet activities including transactions, holdings and whale tracking analysis.
Supports token intelligence for investment research and blockchain transparency.
    `,
    features: [
      "Wallet behavior tracking",
      "Transaction monitoring dashboard",
      "Live token flow analysis",
      "Portfolio intelligence",
    ],
    image: "/project-images/coinhound.png",
    demoUrl: "#",
    codeUrl: "https://github.com/balochali/coinhound",
    status: "Completed",
    featured: true,
  },
];
