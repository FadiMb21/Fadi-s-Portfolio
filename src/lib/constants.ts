// ─────────────────────────────────────────────
// Portfolio Content — Single Source of Truth
// ─────────────────────────────────────────────

export const personalInfo = {
  name: "Fadi Moghrabi",
  title: "Data Analyst · AI Application Developer · Government & Security Studies",
  email: "fadimoghrabi994@gmail.com",
  linkedin: "https://linkedin.com/in/fadi-moghrabi",
  github: "https://github.com/FadiMb21",
  location: "Israel",
} as const;

export const heroKeywords = [
  "Intelligence",
  "Analytics",
  "AI Systems",
  "Predictive Modeling",
  "Strategy",
  "Data Architecture",
  "Machine Learning",
  "Security Studies",
] as const;

// ─────────────────────────────────────────────
// About
// ─────────────────────────────────────────────

export const aboutText = `Data analyst and AI application developer with a track record of turning raw data into measurable business outcomes — from uncovering customer behavior across 8 supermarket branches to building a full-stack AI-powered plant diagnostic application from the ground up. Currently completing a B.A. in Government specializing in Security Studies and Counter-Terrorism at Reichman University, adding a rare analytical lens to intelligence, policy, and risk domains. Driven by an entrepreneurial mindset and a deep passion for AI innovation, with fluency across four languages and a relentless focus on delivering impact through data.`;

export const aboutStats = [
  { value: 8, suffix: "+", label: "Supermarket Branches Analyzed" },
  { value: 10, suffix: "+", label: "AI Disease Classes Identified" },
  { value: 4, suffix: "", label: "Languages Spoken Fluently" },
  { value: 3, suffix: "+", label: "Years of Data & AI Experience" },
] as const;

// ─────────────────────────────────────────────
// Experience
// ─────────────────────────────────────────────

export interface Experience {
  company: string;
  role: string;
  period: string;
  location?: string;
  description: string[];
  tags: string[];
}

export const experiences: Experience[] = [
  {
    company: "Verdant AI",
    role: "Lead Developer & Data Architect",
    period: "2026 – Present",
    description: [
      "Engineered a full-stack mobile/web application in Python integrating AI vision models for plant disease classification, achieving multi-class diagnostic accuracy across 10+ disease categories.",
      "Architected relational SQL databases managing user profiles, plant metadata, and historical care schedules — optimized for sub-200ms query response times.",
      "Implemented automated logging pipelines and A/B testing on UI/UX features, driving measurable improvements in user retention through data-informed iteration.",
      "Applied ETL processes to ingest and clean plant health datasets, enabling model training and predictive health scoring.",
    ],
    tags: ["Python", "AI Vision", "SQL", "ETL", "A/B Testing"],
  },
  {
    company: "Google & Reichman Tech School",
    role: "Junior Data Analyst",
    period: "2024 – 2025",
    location: "Tel Aviv",
    description: [
      "Analyzed real-world visitor datasets across 8 supermarket branches using SQL, BigQuery, and Looker Studio — uncovering customer behavior patterns across time, weekday, and demographic dimensions.",
      "Built interactive dashboards visualizing traffic density trends, delivering data-backed recommendations that identified peak-hour inefficiencies and staffing optimization opportunities.",
      "Conducted regression analysis to predict weekly visitor counts, achieving statistically significant trend forecasting with R² > 0.80.",
    ],
    tags: ["SQL", "BigQuery", "Looker Studio", "Regression"],
  },
  {
    company: "Daily Deal Radar",
    role: "Founder & Data-Driven Entrepreneur",
    period: "2025 – Present",
    location: "Jerusalem",
    description: [
      "Built and scaled a production deals platform from zero, leveraging SQL queries and market analytics to identify high-demand products and optimize pricing strategy.",
      "Tracked and analyzed affiliate marketing performance data, identifying top-converting channels and reallocating spend to maximize ROI.",
      "Negotiated supplier partnerships and managed import logistics, combining data insights with commercial judgment to drive growth.",
    ],
    tags: ["SQL", "Analytics", "Market Research", "Entrepreneurship"],
  },
  {
    company: "Systrails",
    role: "Market Research Analyst",
    period: "2022 – 2023",
    description: [
      "Conducted market research and competitive analysis supporting strategic decisions across two markets, presenting findings directly to C-suite stakeholders.",
      "Applied advanced research methods and trend forecasting to produce reports that improved decision-making clarity and reduced time-to-insight for leadership.",
    ],
    tags: ["Market Research", "Competitive Intelligence", "Strategy"],
  },
  {
    company: "eBay & Shopify",
    role: "E-Commerce Entrepreneur",
    period: "2021 – Present",
    description: [
      "Analyzed sales performance and customer data to optimize operations across two online stores, ensuring high ROI through data-driven product selection and pricing.",
      "Leveraged analytics to track affiliate marketing performance and maximize revenue streams across international and local markets.",
    ],
    tags: ["E-Commerce", "Analytics", "Sales Optimization"],
  },
  {
    company: "Isrotel",
    role: "Room Service Department Manager",
    period: "2021 – 2024",
    description: [
      "Led daily operations and a team in a high-end hospitality environment, developing strong communication, prioritization, and leadership skills under pressure.",
    ],
    tags: ["Leadership", "Operations", "Hospitality"],
  },
  {
    company: "EsellsAcademy",
    role: "Sales Analyst",
    period: "2020 – 2021",
    description: [
      "Analyzed sales data to identify revenue trends and optimize upsell strategies, using customer insights to improve conversion performance.",
    ],
    tags: ["Sales Analytics", "Revenue Optimization"],
  },
];

// ─────────────────────────────────────────────
// Projects
// ─────────────────────────────────────────────

export interface Project {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  metrics: { value: string; label: string }[];
  github?: string;
  live?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: "Verdant AI",
    subtitle: "AI-Powered Plant Care Application",
    description:
      "Full-stack Python application integrating AI vision models for plant disease diagnostics. Features SQL-backed data architecture, automated user engagement tracking, and A/B-tested UI iteration for continuous improvement.",
    tech: ["Python", "AI Vision", "SQL", "ETL", "A/B Testing"],
    metrics: [
      { value: "10+", label: "Disease Classes" },
      { value: "<200ms", label: "Response Time" },
    ],
    github: "https://github.com/FadiMb21",
    live: "https://verdant-green.vercel.app/",
    featured: true,
  },
  {
    title: "Daily Deal Radar",
    subtitle: "Data-Driven Deals Platform",
    description:
      "Production deals platform built from zero, leveraging analytics to optimize product selection and affiliate revenue. Combines data-driven pricing strategy with supplier partnership management to drive scalable growth.",
    tech: ["SQL", "Market Analytics", "Affiliate Tracking", "SEO"],
    metrics: [
      { value: "Live", label: "Production Platform" },
      { value: "ROI", label: "Optimized Channels" },
    ],
    github: "https://github.com/FadiMb21",
    live: "https://dailydealradar.com/",
    featured: true,
  },
  {
    title: "Supermarket Visitor Analysis",
    subtitle: "Google & Reichman Final Project",
    description:
      "End-to-end data analysis of real Israeli supermarket chain visitor data across 8 branches. Built interactive BigQuery + Looker Studio dashboards with regression-based footfall forecasting.",
    tech: ["SQL", "BigQuery", "Looker Studio", "Regression Analysis"],
    metrics: [
      { value: "8", label: "Branches Analyzed" },
      { value: "R²>0.80", label: "Forecast Accuracy" },
    ],
    github: "https://github.com/FadiMb21",
    featured: false,
  },
  {
    title: "Bike Rental Forecasting",
    subtitle: "Time-Series Demand Prediction",
    description:
      "Time-series analysis identifying seasonal trends and predicting future rental demand using historical data. Applied statistical modeling to optimize rental strategies and resource allocation.",
    tech: ["Python", "Statistical Analysis", "Time-Series", "Forecasting"],
    metrics: [
      { value: "Seasonal", label: "Trend Detection" },
      { value: "Predictive", label: "Demand Model" },
    ],
    github: "https://github.com/FadiMb21",
    featured: false,
  },
];

// ─────────────────────────────────────────────
// Skills
// ─────────────────────────────────────────────

export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "AI & Machine Learning",
    skills: [
      "Machine Learning",
      "Predictive Modeling",
      "A/B Testing",
      "ETL Pipelines",
      "AI Vision Models",
      "Statistical Analysis",
    ],
  },
  {
    name: "Data Analytics",
    skills: [
      "SQL",
      "BigQuery",
      "Regression Analysis",
      "Data Modeling",
      "Business Intelligence",
    ],
  },
  {
    name: "Visualization",
    skills: [
      "Tableau",
      "Power BI",
      "Looker Studio",
      "Excel & VBA",
      "Google Sheets",
    ],
  },
  {
    name: "Development",
    skills: [
      "Python",
      "Full-Stack Development",
      "SQL Database Design",
      "Git & Version Control",
      "Automated Logging",
    ],
  },
  {
    name: "Research & Strategy",
    skills: [
      "Market Research",
      "Competitive Intelligence",
      "Trend Forecasting",
      "Security & Intelligence Analysis",
    ],
  },
];

// ─────────────────────────────────────────────
// Education
// ─────────────────────────────────────────────

export interface Education {
  institution: string;
  program: string;
  period: string;
  location?: string;
  details: string[];
  type: "degree" | "program" | "certificate";
}

export const education: Education[] = [
  {
    institution: "Reichman University",
    program: "B.A. in Government — Security Studies & Counter-Terrorism",
    period: "2025 – Present",
    location: "Herzliya, Israel",
    details: [
      "Focus areas: intelligence analysis, geopolitical risk, counter-terrorism policy, and security decision-making.",
    ],
    type: "degree",
  },
  {
    institution: "Google & Reichman Tech School",
    program: "Data Analyst Program",
    period: "2024 – 2025",
    location: "Tel Aviv, Israel",
    details: [
      "Comprehensive training in SQL, data visualization, statistical analysis, and business insights development.",
      "Final Project: Analyzed real-world Israeli chain supermarket visitor data using SQL, BigQuery, and Looker Studio.",
    ],
    type: "program",
  },
  {
    institution: "Brainnest Marketing Agency",
    program: "Marketing Certification",
    period: "2022",
    location: "Bremen, Germany",
    details: [],
    type: "certificate",
  },
];

export const certifications = [
  "Real Estate License (2022)",
  "Google Digital Marketing (2022)",
  "Harvard-MIT Biomedical Engineering Center Certificate",
  "Introduction to SQL (2024)",
  "Data Manipulation in SQL (2024)",
  "Complete Front-End Web Development (2022)",
  "Python for Beginners (2022)",
] as const;

// ─────────────────────────────────────────────
// Languages
// ─────────────────────────────────────────────

export interface Language {
  name: string;
  level: string;
  proficiency: number; // 0-100 for visual indicator
}

export const languages: Language[] = [
  { name: "Arabic", level: "Native", proficiency: 100 },
  { name: "English", level: "Fluent", proficiency: 95 },
  { name: "Hebrew", level: "C1 / Fluent", proficiency: 90 },
  { name: "Italian", level: "C1 / Fluent", proficiency: 85 },
];

// ─────────────────────────────────────────────
// Navigation
// ─────────────────────────────────────────────

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
] as const;
