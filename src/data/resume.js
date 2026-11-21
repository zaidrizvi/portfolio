export const resume = {
  person: {
    name: 'Syed Md Zaid Rizvi',
    shortName: 'Zaid Rizvi',
    role: 'Full-stack developer & AI builder',
    summary:
      'I build responsive web applications and AI-driven systems, with a focus on clean frontend work, reliable backends, and practical products people can use.',
    location: 'New Delhi, India',
    email: 'rizvizaid22@gmail.com',
    phone: '+91 9311842508',
  },
  links: {
    email: 'mailto:rizvizaid22@gmail.com',
    linkedin: 'https://www.linkedin.com/in/syedzaidrizvi/',
    github: 'https://github.com/zaidrizvi',
  },
  experience: [
    {
      company: 'PixelPrompt Official',
      role: 'Frontend Developer Intern',
      location: 'Remote / Delhi',
      period: 'October 2025 — January 2026',
      highlights: [
        'Developed and customized 5+ fully responsive web applications using the MERN stack, building reusable React components to streamline development and maintain consistent UI patterns.',
        'Designed and launched 4 responsive landing pages and promotional microsites, focusing on conversion-oriented UI/UX and responsive user flows.',
        'Optimized frontend assets and implemented SEO-friendly site architecture to improve page-load performance and organic search discoverability.',
        'Collaborated with designers and backend engineers to refine UI/UX flows, integrate frontend components, and deliver features across development sprints.',
      ],
    },
  ],
  education: [
    {
      institution: 'Jamia Millia Islamia',
      degree: 'M.Tech. in Computer Science & Engineering (Data Sciences)',
      period: '2026 — Present',
      location: 'New Delhi, India',
    },
    {
      institution: 'Jamia Hamdard University',
      degree: 'Bachelor of Technology in Computer Science and Engineering',
      period: 'July 2022 — June 2026',
      location: 'New Delhi, India',
      detail: 'CGPA: 8.40/10',
    },
  ],
  skills: {
    Languages: ['Python', 'C/C++', 'JavaScript', 'SQL', 'HTML/CSS'],
    Frameworks: ['React', 'Node.js', 'Express.js', 'Flask', 'FastAPI', 'Material UI', 'Tailwind CSS'],
    Databases: ['MongoDB', 'MySQL', 'PostgreSQL'],
    Tools: ['NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'Git', 'GitHub', 'VS Code', 'Visual Studio', 'Postman'],
  },
  projects: [
    {
      title: 'AI-Powered Examination Proctoring System',
      stack: ['MERN', 'FastAPI', 'DeepFace', 'Socket.io'],
      source: 'https://github.com/zaidrizvi/ai-proctor',
      problem: 'Built a high-concurrency online examination platform with automated real-time proctoring.',
      architecture: 'A modular MERN + FastAPI backend separates real-time media analysis from primary session and examination data management.',
      decisions: [
        'Implemented face verification, head-pose tracking, and object detection using DeepFace to identify and flag suspicious examination activities.',
        'Integrated Socket.io for real-time telemetry streaming between examination clients and admin dashboards, enabling live alerts and event monitoring.',
      ],
      results: 'Generated automated proctoring reports containing chronological event logs, detected activities, and suspicion scoring summaries for administrative review.',
      demo: null,
      screenshot: null,
    },
    {
      title: 'StudyForge — Intelligent Study Platform',
      stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Tesseract.js'],
      source: 'https://github.com/zaidrizvi/Student-Helper',
      problem: 'Developed an end-to-end ed-tech platform for automated study document processing, AI-generated summaries, quiz tracking, and secure file distribution.',
      architecture: 'A multi-format document processing pipeline uses Tesseract.js OCR to extract text from 6 distinct file extensions.',
      decisions: [
        'Implemented a 3-model Gemini fallback architecture with automated retry handling to improve resilience against LLM API failures.',
        'Implemented JWT authentication, HTTP-only cookies, bcrypt password hashing, token hashing, and rate limiting.',
      ],
      results: 'The platform combines document processing, generated study material, quiz tracking, and secure distribution in one workflow.',
      demo: null,
      screenshot: null,
    },
  ],
}

// TODO: Add verified live demo URLs for both featured projects.
// TODO: Add real project screenshots with descriptive alt text when available.
