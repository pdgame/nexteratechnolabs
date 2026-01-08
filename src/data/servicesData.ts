export interface Service {
    id: number;
    slug: string;
    icon: string;
    title: string;
    shortDescription: string;
    detailedDescription: string;
    tagline: string;
    features: string[];
    technologies: string[];
    benefits: string[];
}

export const servicesData: Service[] = [
    {
        id: 1,
        slug: 'seo-services',
        icon: '🔍',
        title: 'SEO Services',
        shortDescription: 'Boost your online visibility with cutting-edge SEO strategies. We optimize your website to rank higher on search engines and drive organic traffic.',
        tagline: 'Dominate Search Rankings & Drive Organic Growth',
        detailedDescription: 'In today\'s digital landscape, visibility is everything. Our comprehensive SEO services are designed to elevate your website\'s search engine rankings, increase organic traffic, and maximize your online presence. We employ cutting-edge techniques, data-driven strategies, and industry best practices to ensure your business stands out in search results. From technical SEO audits to content optimization and link building, we handle every aspect of your SEO journey.',
        features: [
            'Comprehensive SEO Audit & Analysis',
            'Keyword Research & Strategy',
            'On-Page SEO Optimization',
            'Technical SEO Implementation',
            'Quality Link Building',
            'Local SEO Optimization',
            'Content Strategy & Optimization',
            'Performance Tracking & Reporting',
        ],
        technologies: [
            'Google Analytics',
            'Google Search Console',
            'SEMrush',
            'Ahrefs',
            'Screaming Frog',
            'Moz Pro',
        ],
        benefits: [
            'Increase organic traffic by up to 300%',
            'Improve search engine rankings for target keywords',
            'Build sustainable long-term visibility',
            'Boost brand credibility and trust',
            'Higher ROI compared to paid advertising',
            'Attract quality leads and conversions',
        ],
    },
    {
        id: 2,
        slug: 'web-design',
        icon: '🎨',
        title: 'Web Design',
        shortDescription: 'Create stunning, user-centric designs that captivate your audience. Our designs are modern, responsive, and optimized for conversions.',
        tagline: 'Transform Your Vision Into Stunning Digital Experiences',
        detailedDescription: 'Great design is more than aesthetics—it\'s about creating memorable experiences that engage users and drive conversions. Our web design services combine creativity, psychology, and data to craft visually stunning websites that resonate with your audience. We focus on user experience (UX), intuitive navigation, and responsive design to ensure your website looks perfect on every device. Whether you need a complete redesign or a fresh new site, we bring your vision to life with pixel-perfect precision.',
        features: [
            'Custom UI/UX Design',
            'Responsive & Mobile-First Design',
            'Interactive Prototypes & Wireframes',
            'Brand Identity Integration',
            'Conversion-Focused Design',
            'Accessibility Compliance (WCAG)',
            'Design System Creation',
            'User Testing & Feedback',
        ],
        technologies: [
            'Figma',
            'Adobe XD',
            'Sketch',
            'Adobe Photoshop',
            'Adobe Illustrator',
            'InVision',
        ],
        benefits: [
            'Stand out with unique, memorable designs',
            'Improve user engagement and satisfaction',
            'Increase conversion rates by up to 200%',
            'Build trust with professional branding',
            'Ensure seamless experience across all devices',
            'Future-proof design systems for scalability',
        ],
    },
    {
        id: 3,
        slug: 'mern-stack-development',
        icon: '⚛️',
        title: 'MERN Stack Development',
        shortDescription: 'Build powerful, scalable web applications using MongoDB, Express, React, and Node.js. Full-stack solutions tailored to your needs.',
        tagline: 'Build Scalable, High-Performance Web Applications',
        detailedDescription: 'The MERN stack (MongoDB, Express.js, React, Node.js) represents the gold standard in modern web development. Our expertise in this powerful technology stack enables us to build fast, scalable, and feature-rich web applications that meet the demands of today\'s users. From dynamic single-page applications to complex enterprise solutions, we leverage the full potential of MERN to deliver robust, maintainable, and high-performance applications. With end-to-end JavaScript development, we ensure faster development cycles and seamless integration.',
        features: [
            'Full-Stack JavaScript Development',
            'RESTful API Development',
            'Real-Time Applications with WebSockets',
            'Database Design & Optimization',
            'Authentication & Authorization',
            'Payment Gateway Integration',
            'Third-Party API Integration',
            'Cloud Deployment & DevOps',
        ],
        technologies: [
            'MongoDB',
            'Express.js',
            'React.js',
            'Node.js',
            'Redux',
            'JWT Authentication',
            'AWS/Azure',
            'Docker',
        ],
        benefits: [
            'Lightning-fast performance and scalability',
            'Reduced development time with unified JavaScript',
            'Easy maintenance and updates',
            'Cost-effective full-stack solution',
            'Rich ecosystem of libraries and tools',
            'Perfect for startups and enterprises alike',
        ],
    },
    {
        id: 4,
        slug: 'webflow-development',
        icon: '🌊',
        title: 'Webflow Development',
        shortDescription: 'Launch beautiful websites without code using Webflow. We create pixel-perfect, CMS-powered sites that are easy to manage.',
        tagline: 'Launch Stunning Websites at Lightning Speed',
        detailedDescription: 'Webflow revolutionizes web design by combining the power of code with the simplicity of visual design. Our Webflow development services enable you to launch pixel-perfect, professional websites in record time without sacrificing quality or flexibility. We create custom Webflow sites that are not only visually stunning but also CMS-powered, SEO-friendly, and incredibly easy to manage. Whether you need a marketing website, portfolio, or e-commerce store, Webflow provides the perfect platform for rapid deployment and effortless content management.',
        features: [
            'Visual Design Development',
            'CMS Setup & Configuration',
            'Responsive Design Implementation',
            'Custom Interactions & Animations',
            'E-commerce Integration',
            'SEO Optimization',
            'Form & Integration Setup',
            'Client Training & Handoff',
        ],
        technologies: [
            'Webflow Designer',
            'Webflow CMS',
            'Webflow E-commerce',
            'Custom Code (HTML/CSS/JS)',
            'Zapier Integration',
            'Google Analytics',
        ],
        benefits: [
            'Launch websites 10x faster than traditional development',
            'Pixel-perfect designs without coding',
            'Easy content management for non-technical users',
            'Built-in hosting and performance optimization',
            'No maintenance headaches or security updates',
            'Powerful CMS for dynamic content',
        ],
    },
    {
        id: 5,
        slug: 'dotnet-mvc',
        icon: '⚙️',
        title: '.NET & .NET MVC',
        shortDescription: 'Enterprise-grade applications built with .NET framework and MVC architecture. Robust, secure, and scalable solutions for your business.',
        tagline: 'Enterprise-Grade Solutions for Complex Business Needs',
        detailedDescription: 'Microsoft\'s .NET framework and MVC architecture power some of the world\'s most robust and secure enterprise applications. Our .NET development services deliver scalable, high-performance solutions tailored to complex business requirements. Whether you\'re building internal business applications, customer portals, or enterprise-level systems, we leverage the full capabilities of .NET to create secure, maintainable, and future-proof solutions. With deep expertise in .NET Core, ASP.NET MVC, and Entity Framework, we build applications that stand the test of time.',
        features: [
            'ASP.NET MVC Application Development',
            '.NET Core Microservices',
            'Entity Framework Database Integration',
            'RESTful Web API Development',
            'Enterprise Security Implementation',
            'Azure Cloud Integration',
            'Legacy System Modernization',
            'Performance Optimization',
        ],
        technologies: [
            '.NET Framework',
            '.NET Core',
            'ASP.NET MVC',
            'Entity Framework',
            'SQL Server',
            'Azure',
            'C#',
            'Visual Studio',
        ],
        benefits: [
            'Enterprise-grade security and reliability',
            'Seamless Microsoft ecosystem integration',
            'Exceptional performance and scalability',
            'Reduced development costs with code reusability',
            'Strong typing for fewer runtime errors',
            'Extensive library and framework support',
        ],
    },
    {
        id: 6,
        slug: 'angular-development',
        icon: '🅰️',
        title: 'Angular Development',
        shortDescription: 'Dynamic single-page applications with Angular. Fast, responsive, and feature-rich web apps that deliver exceptional user experiences.',
        tagline: 'Build Dynamic, High-Performance Single-Page Applications',
        detailedDescription: 'Angular, Google\'s powerful frontend framework, enables us to create sophisticated, dynamic single-page applications (SPAs) that deliver exceptional user experiences. Our Angular development services focus on building fast, responsive, and maintainable web applications with rich features and seamless interactions. From enterprise dashboards to complex web portals, we harness Angular\'s component-based architecture, powerful CLI, and comprehensive tooling to deliver scalable solutions. With TypeScript at its core, Angular ensures robust, type-safe code that\'s easier to maintain and scale.',
        features: [
            'Single-Page Application (SPA) Development',
            'Component-Based Architecture',
            'State Management with NgRx',
            'Progressive Web Apps (PWA)',
            'Real-Time Data Synchronization',
            'Advanced Form Handling',
            'Lazy Loading & Performance Optimization',
            'Unit & E2E Testing',
        ],
        technologies: [
            'Angular',
            'TypeScript',
            'RxJS',
            'NgRx',
            'Angular Material',
            'Karma/Jasmine',
            'Protractor',
            'Angular CLI',
        ],
        benefits: [
            'Lightning-fast user experiences with SPAs',
            'Consistent and maintainable codebase',
            'Built-in tools for testing and debugging',
            'Strong community and Google support',
            'Perfect for large-scale enterprise applications',
            'Future-proof with regular updates',
        ],
    },
];

export function getServiceBySlug(slug: string): Service | undefined {
    return servicesData.find(service => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
    return servicesData.map(service => service.slug);
}
