export const resumeData = {
    name: "Talat Faheem",
    title: "Cloud / DevOps Engineer",
    summary: "Ever since I dove into my first AWS deployment, I've been hooked on the magic of turning complex code into seamless, scalable systems that just work. As a Cloud/DevOps Engineer with a cybersecurity twist, I thrive on optimizing infrastructures that not only run efficiently but also stand strong against threats because in today's world, reliability isn't optional; it's everything.",
    email: "talatfaheem2@gmail.com",
    socials: {
        github: "https://github.com/talatops",
        linkedin: "https://linkedin.com/in/talat-fm",
        resume: "https://drive.google.com/file/d/1XE5aAyN3PExzvncjmRxETw_49jUP5EgB/view?usp=sharing",
    },
    techStack: [
        "Docker",
        "Kubernetes",
        "Terraform",
        "AWS",
        "CI/CD",
        "Python",
        "Bash",
    ],
    stats: [
        { label: "Experience", value: "2 Years" },
        { label: "Cost Reduction", value: "67.5%" },
        { label: "Compatibility", value: "100%" },
        { label: "Faster Deploys", value: "25%" },
        { label: "Bug Reduction", value: "40%" },
    ],
    certifications: [
        {
            name: "AWS Certified Cloud Practitioner",
            issuer: "Amazon Web Services",
            date: "2026",
            url: "https://www.credly.com/credentials/27221416-5556-462d-946d-666124226f5f",
        },
    ],
    experience: [
        {
            company: "ThoughtScape",
            role: "Cloud Engineer (L2)",
            period: "Aug 2025 – Present",
            points: [
                "Created secure CI/CD pipelines using GitHub Actions and Terraform, ensuring 100% compatibility across Dockerized microservices.",
                "Developed reusable Docker/Terraform templates removing 'works on my machine' bugs by 40%.",
                "Engineered serverless remediation with AWS Lambda and Python (Boto3) integrated with AWS Bedrock to automatically analyze and remediate overly-permissive IAM policies.",
            ],
        },
        {
            company: "Antematter",
            role: "Cloud Engineer",
            period: "Jan 2025 – Aug 2025",
            points: [
                "Reduced AWS costs by 67.5% ($400 to $130) through strategic resource optimization.",
                "Implemented ALB/ELB and Auto-Scaling Groups to ensure high availability for production workloads.",
                "Streamlined deployments with Kamal-deploy (15% efficiency boost) and reduced rollback events.",
                "Facilitated cloud strategy sessions that accelerated deployment cycles by 25%.",
                "Managed DevOps for external projects and internal deployments from scratch.",
            ],
        },
        {
            company: "buildonhybrid.com",
            role: "Associate Cloud Infrastructure Engineer",
            period: "Oct 2024 – Mar 2025",
            points: [
                "Designed unified monitoring with Prometheus, Grafana, Loki for the HYBRID cloud ecosystem.",
                "Managed logging for 20+ Digital Ocean droplets using Loki, Promtail, and Grafana.",
                "Built custom Grafana dashboards for real-time anomaly detection and system health monitoring.",
                " improved performance diagnostics across multiple services and nodes using Node Exporter / cAdvisor.",
            ],
        },
        {
            company: "Antematter",
            role: "DevOps Intern",
            period: "Oct 2024 – Dec 2024",
            points: [
                "Deployed full AWS infrastructures from scratch and automated workflows using GitHub Actions.",
                "Optimized EC2 workflows using NGINX reverse proxies and Application Load Balancers for seamless traffic management.",
            ],
        },
        {
            company: "Fiverr & Upwork",
            role: "Freelance DevOps Engineer",
            period: "May 2024 – Oct 2024",
            points: [
                "Delivered CI/CD setups and container orchestration (Docker/Kubernetes) for global clients.",
                "Improved deployment reliability by 30-50% for small to midsize projects.",
                "Designed and optimized infrastructure on GCP and AWS, including Azure VM setups and AWS RDS.",
                "Configured and optimized Nginx, Gunicorn, and system monitoring tools.",
            ],
        },
    ],
    projects: [
        {
            title: "FYP - JUNOHUB",
            subtitle: "AI-Powered E-Commerce Platform",
            slug: "junohub",
            tech: ["React", "TypeScript", "Supabase", "FastAPI", "Python", "NLP", "Shopify API", "OpenAI"],
            description: "Multi-tenant platform with dual vendor/supplier dashboards, real-time Shopify sync and AI-driven customer email automation.",
            longDescription: "JUNOHUB is a comprehensive multi-tenant platform designed to bridge the gap between vendors and suppliers. It solves the problem of operational silos by providing a unified environment for real-time Shopify synchronization, AI-driven customer support automation, and secure inter-business communication.",
            features: [
                "Dual vendor/supplier dashboards with real-time Shopify product/order sync",
                "AI-driven customer email automation using NLP (mood/intent detection)",
                "JunoChat: Secure 1:1 messaging with E2EE (ECDH P-256, AES-256-GCM)",
                "Automated FAQ/RAG system for template-based and grammar-improved replies"
            ],
            challenges: [
                "Implementing a robust NLP pipeline (SetFit) with keyword-based fallback for high availability",
                "Securing platform communications with end-to-end encryption and Supabase RLS",
                "Orchestrating complex real-time data synchronization between Shopify and multi-tenant dashboards"
            ],
            links: {
                github: "https://github.com/talatops/juno-hub.git",
            },
            isPrivate: true,
            images: ["/projects/junohub/1.png"],
        },
        {
            title: "ZORYX Capital",
            subtitle: "Enterprise FinTech & Portfolio Engine",
            slug: "imrp-platform",
            tech: ["Next.js 14", "TypeScript", "MongoDB", "Socket.io", "TanStack Query", "Docker"],
            description: "A secure, real-time investment reporting platform featuring complex pool management, automated payout workflows, and granular audit logging.",
            longDescription: "IMRP is an enterprise-grade solution designed for private funds and family offices. It bridges the gap between administrators and investors through a dual-portal architecture that handles high-stakes financial data, real-time portfolio syncing via WebSockets, and a log-based accounting system for investment pools.",
            features: [
                "Real-time portfolio tracking with Socket.io and connection status monitoring",
                "Automated Payout Engine with proportional distribution and claim approval workflows",
                "Multi-layered security including JWT rotation, quote-based 2FA challenges, and RBAC",
                "Comprehensive Audit System tracking every administrative action and investor login attempt",
                "Advanced Admin Controls for pool rebalancing, multi-currency support, and metric visibility"
            ],
            challenges: [
                "Architecting a log-based pool system to maintain historical accuracy during value fluctuations",
                "Implementing resilient real-time state management with exponential backoff and cache-aside strategies",
                "Designing a secure, admin-led onboarding flow with time-limited verification tokens and forced password resets"
            ],
            links: {
                github: "https://github.com/talatops/imrp-platform.git",
                demo: "https://portal.zoryxcapital.com"
            },
            isPrivate: true,
            images: [],
        },
        {
            title: "Project Sentinel",
            subtitle: "Secure-by-Design DevSecOps Framework",
            slug: "project-sentinel",
            tech: ["Python", "Trivy", "OWASP ZAP", "PostgreSQL", "Docker", "SonarQube"],
            description: "An automated DevSecOps platform integrating STRIDE threat modeling, DREAD risk scoring, and multi-tool security scanning into the SDLC.",
            longDescription: "Project Sentinel is a sophisticated monorepo designed to shift security left. It automates the heavy lifting of threat modeling using pattern recognition and provides a centralized dashboard for SAST, DAST, and Container scanning results, bridging the gap between security compliance and active development.",
            features: [
                "Intelligent Threat Modeling with automated STRIDE analysis and AI-powered DREAD risk scoring",
                "Unified Security Dashboard aggregating results from SonarQube, OWASP ZAP, and Trivy",
                "Secure Requirements Portal mapping security controls to functional requirements for ASVS compliance",
                "Automated CI/CD security gating via Webhook integrations and API token management",
                "Interactive data-flow visualizations and threat matrices built with ReactFlow and Recharts"
            ],
            challenges: [
                "Developing a pattern-recognition engine to map 14 distinct threat patterns to system components accurately",
                "Orchestrating a multi-container environment (SonarQube, ZAP, Trivy) with persistent data synchronization",
                "Implementing a secure-by-design backend using Marshmallow/Zod validation, rate limiting, and RBAC to prevent platform abuse"
            ],
            links: {
                github: "https://github.com/talatops/sentinel.git",
            },
            isPrivate: false,
            images: [],
        },
        {
            title: "QIMMA (قمة)",
            subtitle: "Multi-tenant SaaS ERP Platform",
            slug: "qimma-erp",
            tech: ["React 19", "Node.js", "tRPC", "Drizzle ORM", "MySQL", "TailwindCSS"],
            description: "A comprehensive SaaS ERP solution featuring secure data isolation, automated financial workflows, and a subscription-based multi-tenant architecture.",
            longDescription: "QIMMA is a full-scale Enterprise Resource Planning platform built to handle multiple organizations within a single infrastructure. It features an 'Org-Scoped' database architecture that ensures 100% data isolation, combined with a type-safe tRPC API layer for seamless full-stack communication.",
            features: [
                "Advanced Multi-tenancy with middleware-driven organization context and data isolation",
                "Full Financial Suite including dynamic invoice generation (PDFKit), tax calculations, and transaction tracking",
                "Subscription Management engine with tiered usage limits (Free to Enterprise) and Stripe-ready integration",
                "Custom Branding engine allowing tenants to personalize logos, color schemes, and document templates",
                "Role-Based Access Control (RBAC) managing permissions across Owners, Admins, and Viewers"
            ],
            challenges: [
                "Architecting a secure Database Wrapper to automatically inject workspace filters into all queries, preventing cross-tenant data leaks",
                "Building a high-performance, type-safe API using tRPC to eliminate runtime errors between the React 19 frontend and Node.js backend",
                "Implementing a complex state-managed onboarding wizard to handle organization setup, team invites, and initial workspace configuration"
            ],
            links: {
                github: "https://github.com/talatops/qimma-erp.git",
            },
            isPrivate: true,
            images: [],
        },
        {
            title: "Eliza Logging System",
            subtitle: "Real-time Observability & Log Analytics",
            slug: "eliza-logging",
            tech: ["Node.js", "MongoDB", "Winston", "JWT", "Express", "Vanilla JS"],
            description: "A centralized logging engine and visualization dashboard designed to aggregate, store, and analyze system-wide logs in real-time.",
            longDescription: "Eliza Logging is a specialized observability tool built to solve the fragmentation of logs in distributed systems. It provides a robust backend to ingest logs via Winston transports and a high-performance web UI that allows developers to filter millions of log entries by environment, severity, and timestamp with sub-second latency.",
            features: [
                "Centralized Log Ingestion with a MongoDB-backed storage engine for persistent audit trails",
                "Real-time UI Visualization featuring auto-refresh intervals and dynamic loading states",
                "Granular Multi-dimensional Filtering across environments (Dev/Prod), log levels, and custom date ranges",
                "Secure Access Control utilizing JWT authentication to protect sensitive system telemetry",
                "Automated Log Management with 5MB file rotation and multi-backup retention policies"
            ],
            challenges: [
                "Implementing a non-blocking ingestion pipeline to ensure that logging overhead never impacts application performance",
                "Designing a responsive and intuitive 'Log Inspector' UI that remains performant when rendering large datasets",
                "Developing a secure backend integration layer that allows seamless 'plug-and-play' logging for any Node.js service"
            ],
            links: {
                github: "https://github.com/talatops/Sentry-logging-server.git",
            },
            isPrivate: false,
            images: [],
        },
        {
            title: "AWSSET",
            subtitle: "AI-Powered Cloud Management",
            slug: "awsset",
            tech: ["AWS", "Python", "OpenAI", "FastAPI", "React"],
            description: "Platform using NLP to manage EC2, S3, Lambda, and RDS. Real-time cost optimization and security analysis with AES-256 encryption.",
            longDescription: "AWSSET is a sophisticated AI-powered platform designed to simplify complex cloud management tasks. By utilizing Natural Language Processing, it allows developers and DevOps engineers to manage AWS resources through a human-centric interface.",
            features: [
                "AI-powered resource management via NLP",
                "Real-time cost analysis and optimization insights",
                "Automated security auditing and anomaly detection",
                "Interactive WebSocket-based management interface"
            ],
            challenges: [
                "Mapping complex AWS API responses to consistent natural language patterns",
                "Ensuring high-speed real-time synchronization with WebSocket and Boto3",
                "Implementing enterprise-grade security with AES-256 encryption"
            ],
            links: {
                github: "https://github.com/talatops/AWSSET.git",
            },
            isPrivate: false,
            images: [],
        },
        {
            title: "REDDIT-CLONE",
            subtitle: "DevOps & Cloud Orchestration",
            slug: "reddit-clone",
            tech: ["Jenkins", "AWS", "Docker", "Kubernetes", "EKS", "Terraform", "SonarQube", "Trivy"],
            description: "CI/CD with Jenkins to build, scan, and deploy a Reddit Clone to AWS EKS. Cluster provisioned via Terraform.",
            longDescription: "This project demonstrates a full production-grade DevOps lifecycle. It involves building a Reddit Clone, containerizing it, and orchestrating it on an AWS EKS cluster with integrated security gates and automated infrastructure provisioning.",
            features: [
                "End-to-end CI/CD pipeline using Jenkins on Ubuntu EC2",
                "Infrastructure as Code (IaC) with Terraform for EKS provisioning",
                "Security automation with SonarQube, OWASP Dependency-Check, and Trivy scans",
                "Kubernetes deployment behind an AWS Load Balancer"
            ],
            challenges: [
                "Provisioning and configuring a production-ready EKS cluster via Terraform",
                "Integrating multiple security scanners into a seamless Jenkins pipeline",
                "Automating the setup of the entire tooling suite on a fresh EC2 environment"
            ],
            links: {
                github: "https://github.com/talatops/REDDIT-CLONE.git",
            },
            isPrivate: false,
            images: [],
        },
        {
            title: "ZENITH",
            subtitle: "Real-time Productivity Platform",
            slug: "zenith",
            tech: ["React", "TypeScript", "Supabase", "Docker", "GitHub Actions", "GCP", "Tailwind", "shadcn/ui"],
            description: "Modern productivity web app with Kanban boards, task dependencies, and real-time collaboration with presence indicators.",
            longDescription: "ZENITH is a high-performance productivity application designed for real-time collaboration. It provides a seamless user experience for managing tasks via Kanban boards while ensuring data consistency and live interaction tracking.",
            features: [
                "Real-time collaboration with presence indicators and activity dashboards",
                "Interactive Kanban boards with task dependencies and time tracking",
                "Type-safe development with React + TypeScript and Radix UI components",
                "Automated CI/CD with GitHub Actions for deployment to GCP/Vercel"
            ],
            challenges: [
                "Ensuring low-latency real-time updates for collaborative task management",
                "Managing complex state and task dependencies in a large-scale React application",
                "Streamlining environment management across multi-cloud deployments (GCP/Vercel)"
            ],
            links: {
                github: "https://github.com/talatops/ZENITH.git",
            },
            isPrivate: false,
            images: [],
        },
        {
            title: "StreamFlix",
            subtitle: "Netflix Clone",
            slug: "streamflix",
            tech: ["AWS", "Docker", "Terraform", "Kubernetes"],
            description: "Full-stack clone deployed using Terraform for infrastructure automation. Automated rollback capabilities via GitHub Actions.",
            longDescription: "StreamFlix is a high-performance streaming platform clone designed to demonstrate modern DevOps practices. It features a fully automated infrastructure rollout using Terraform and robust CI/CD pipelines for seamless deployment.",
            features: [
                "High-availability infrastructure rollout via Terraform",
                "Containerized microservices orchestration with Kubernetes",
                "Fully automated CI/CD pipelines with GitHub Actions",
                "Integration of monitoring and rollback capabilities"
            ],
            challenges: [
                "Complex orchestration of multiple microservices within a single K8s cluster",
                "Ensuring database consistency and migration handling within automated pipelines",
                "Optimizing resource allocation for video processing and delivery"
            ],
            links: {
                github: "https://github.com/talatops/StreamFlix.git",
            },
            isPrivate: false,
            images: [],
        },
        {
            title: "AUTH-SECURITY",
            subtitle: "API Hardening & Vulnerability Demo",
            slug: "auth-security",
            tech: ["Node.js", "Express", "MongoDB", "JWT", "RBAC", "Postman", "Docker"],
            description: "E-commerce security demo highlighting JWT and BOLA vulnerabilities alongside secure implementation patterns.",
            longDescription: "This project serves as a dual-purpose security laboratory. It contrasts a vulnerable API suffering from weak secrets and BOLA with a hardened implementation featuring strict RBAC and isolated ownership checks.",
            features: [
                "Comparative analysis of vulnerable vs. secure JWT implementations",
                "Demonstration of BOLA (Broken Object Level Authorization) vulnerabilities",
                "Implementation of strict RBAC and data isolation patterns",
                "Guided Postman collections for exploitation and validation workflows"
            ],
            challenges: [
                "Modeling realistic BOLA vulnerabilities without compromising architectural integrity",
                "Implementing multi-layered authorization checks for every API endpoint",
                "Designing a clear, educational workflow for security professionals to follow"
            ],
            links: {
                github: "https://github.com/talatops/Exploiting-Securing-JWT-BOLA.git",
            },
            isPrivate: false,
            images: [],
        },
        {
            title: "ZKP-Voter",
            subtitle: "Privacy-First Blockchain Voting",
            slug: "zkp-voter",
            tech: ["Ethereum", "Ethers.js", "Circom", "SnarkJS", "MongoDB", "React", "Docker"],
            description: "Anonymous authentication and voting using zk-SNARKs to protect voter identity while preventing double voting.",
            longDescription: "ZKP-Voter is a decentralized application that leverages Zero-Knowledge Proofs (zk-SNARKs) to enable truly anonymous voting on the Ethereum blockchain. It ensures voter privacy while maintaining the integrity of the election.",
            features: [
                "Anonymous voter authentication using Circom and SnarkJS circuits",
                "Immutable on-chain vote recording with prevents double voting via nullifiers",
                "Clean, privacy-first UX built with React and Tailwind",
                "Full containerization with Docker Compose for easy local development"
            ],
            challenges: [
                "Designing and validating efficient zk-SNARK circuits for voter identity masking",
                "Synchronizing complex ZKP generation with blockchain transaction lifecycles",
                "Implementing on-chain nullifier tracking to prevent double voting anonymously"
            ],
            links: {
                github: "https://github.com/talatops/ZKP-SNARK-VOTING.git",
            },
            isPrivate: false,
            images: [],
        },
        {
            title: "Blog Engine",
            subtitle: "Full-Stack Content Management",
            slug: "blog-engine",
            tech: ["Node.js", "Express", "MongoDB", "EJS", "JWT", "HTML"],
            description: "Full CRUD blog application with JWT-based authentication, role-based authorization, and responsive EJS views.",
            longDescription: "A robust Full-Stack blog engine that emphasizes clean MVC architecture and secure user management. It provides a complete workflow for content creation, management, and consumption with a focus on performance.",
            features: [
                "Complete CRUD functionality for blog posts and categories",
                "Secure JWT-based authentication and cookie-based sessions",
                "Role-based authorization (RBAC) for administrative actions",
                "Responsive UI with integrated search and category filtering"
            ],
            challenges: [
                "Developing an efficient server-side rendering strategy with EJS and Express",
                "Implementing secure middleware for complex role-based routing",
                "Optimizing MongoDB queries for fast search and content retrieval"
            ],
            links: {
                github: "https://github.com/talatops/NodeJs-Blog.git",
            },
            isPrivate: false,
            images: [],
        },
    ],
    skills: [
        "AWS", "GCP", "Azure", "Digital Ocean",
        "Docker", "Kubernetes", "ArgoCD", "Jenkins", "Ansible", "Terraform", "CloudFormation", "Kamal-deploy",
        "GitHub Actions", "Git", "Nginx", "Linux",
        "Prometheus", "Grafana", "Loki", "New Relic",
        "Python", "Bash", "C++", "Java", "JavaScript", "TypeScript", "Node.js",
        "React", "Next.js", "Express", "Django", "Flask", "FastAPI",
        "PostgreSQL", "MongoDB", "Redis", "SQL",
        "OpenAI API", "AWS Bedrock",
    ],
    education: [
        {
            university: "FAST-NUCES, Islamabad, Pakistan",
            degree: "Bachelor in Computer Science (Specializing in Cyber Security)",
            period: "", // Optional if you have it
        }
    ]
};
