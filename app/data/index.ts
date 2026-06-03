import { Project, Experience, Skill } from "@/app/types";

export const projects: Project[] = [
  // --- Client Work ---
  {
    num: "01",
    name: "His Highness Sheikh Mohamed bin Zayed",
    role: "Front-End Developer — UAE Government",
    tags: ["React", "Responsive", "RTL"],
    url: "https://www.mohamedbinzayed.ae/en/",
  },
  {
    num: "02",
    name: "COP28 — UN Climate Conference",
    role: "Front-End Developer — Global Scale Event",
    tags: ["Next.js", "CMS", "Multilingual"],
    url: "https://www.cop28.com/en/",
  },
  {
    num: "03",
    name: "UAE Ministry of Industry & Advanced Technology",
    role: "Front-End Developer — UAE Government",
    tags: ["React", "Multilingual", "RTL"],
    url: "https://moiat.gov.ae/en/",
  },
  {
    num: "04",
    name: "TDRA — Digital Government Regulatory Authority",
    role: "Front-End Developer — UAE Government",
    tags: ["JavaScript", "Accessible", "RTL"],
    url: "https://dgov.tdra.gov.ae",
  },
  {
    num: "05",
    name: "ECA — Emirates Competitiveness Authority",
    role: "Front-End Developer — UAE Government",
    tags: ["React", "RTL"],
    url: "https://www.eca.gov.ae",
  },
  {
    num: "06",
    name: "Ministry of Community Empowerment",
    role: "Front-End Developer — UAE Government",
    tags: ["React", "Gov Platform"],
    url: "https://www.moce.gov.ae/en/",
  },
  {
    num: "07",
    name: "Bupa — Healthcare Platform",
    role: "Front-End Developer — Enterprise",
    tags: ["React", "UI/UX"],
    url: null,
  },
  {
    num: "08",
    name: "Visit Saudi — National Tourism Platform",
    role: "Front-End Developer — KSA Government",
    tags: ["Next.js", "Multilingual"],
    url: "https://www.visitsaudi.com/en/plan-your-trip/travel-guide",
  },
  {
    num: "09",
    name: "Aletihad Payment — Jaywan",
    role: "Front-End Developer — Fintech",
    tags: ["React", "Fintech"],
    url: "https://aep.ae/en/services/jaywan/",
  },
  {
    num: "10",
    name: "Borouge — Petrochemical Enterprise",
    role: "Front-End Developer — Enterprise",
    tags: ["React", "Enterprise"],
    url: "https://www.borouge.com/en/Pages/home.aspx",
  },
  {
    num: "11",
    name: "Congress of Arabic Publishing & Creative Industries",
    role: "Front-End Developer — Cultural Event",
    tags: ["JavaScript", "Arabic RTL"],
    url: "https://www.congresspci.com",
  },
  // --- Personal / Academic Projects ---
  {
    num: "12",
    name: "Pharmacya — Pharmacy Management System",
    role: "Design + Full-Stack Development",
    tags: ["HTML", "CSS", "jQuery", "WebSQL"],
    url: "https://www.youtube.com/watch?v=_jenBCE3H5U",
    isVideo: true,
  },
  {
    num: "13",
    name: "Medical Places Reviews App — ITI Graduation Project",
    role: "Full-Stack Developer — Web & Mobile",
    tags: ["ASP.NET MVC", "AngularJS", "Google Maps API"],
    url: null,
  },
  {
    num: "14",
    name: "Guess The Word — Multiplayer Desktop Game",
    role: "Developer — Desktop Application",
    tags: ["C#", "TCP Protocol"],
    url: null,
  },
  {
    num: "15",
    name: "WareHouses & Transferring Management System",
    role: "Developer — Desktop Application",
    tags: ["C#", "Entity Framework", "SQL Server"],
    url: null,
  },
];

export const experiences: Experience[] = [
  {
    period: "Jan 2025 — Present",
    role: "Front-End Developer",
    company: "Omnia FZ LLC — Globant Division (Dubai, Remote)",
    description:
      "Leading frontend development on large-scale web platforms for UAE and KSA government clients and global enterprises. Building performant, accessible, multilingual and RTL-ready interfaces using React and Next.js.",
  },
  {
    period: "Jan 2022 — Jan 2025",
    role: "Junior Front-End Developer",
    company: "Omnia FZ LLC — Globant Division (Dubai, Remote)",
    description:
      "Developed and maintained major client websites including COP28, UAE ministries, Bupa, Visit Saudi, and more. Collaborated with cross-functional teams to translate business requirements into pixel-perfect, responsive interfaces.",
  },
  {
    period: "Sep 2021 — Jan 2022",
    role: "Full-Stack Intern",
    company: "Omnia FZ LLC — Globant Division (Dubai, Remote)",
    description:
      "Contributed to full-stack development tasks, gaining hands-on experience with both frontend and backend technologies in a fast-paced agency environment.",
  },
  {
    period: "Aug 2021 — Sep 2021",
    role: "Full-Stack Intern",
    company: "Linked Systems (Alexandria, Egypt)",
    description:
      "Interned as a full-stack developer, working on internal web tools and gaining practical experience with web development workflows and team collaboration.",
  },
];

export const education = [
  {
    period: "2020 — 2021",
    degree: "Diploma in Professional Web Development & BI",
    institution: "ITI — Information Technology Institute",
    note: null,
  },
  {
    period: "2016 — 2020",
    degree: "BA in Phonetics and Linguistics",
    institution: "Faculty of Arts, Alexandria University",
    note: "Grade: Very Good — Ranked Third. Distinguished Student Award.",
  },
];

export const personalVideos = [
  {
    id: "Sr2pQFYsPsI",
    title: "Personal Project",
    role: "Designed & Developed",
    description: "A complete web project designed and built from scratch — UI design through to final code.",
  },
  {
    id: "_jenBCE3H5U",
    title: "Pharmacya",
    role: "Designed & Developed",
    description: "Pharmacy management system — designed the UI, built the database, and written all the code.",
  },
  {
    id: "ul9TtszYUx8",
    title: "Personal Project",
    role: "Developed",
    description: "A self-initiated development project built to explore and practice new frontend techniques.",
  },
  {
    id: "bC-0sOtfdMI",
    title: "UI Design",
    role: "Designed on Adobe XD",
    description: "A complete UI/UX design concept created in Adobe XD — showcasing design skills and visual thinking.",
    isShort: true,
  },
];

export const certifications = [
  {
    title: "JavaScript (Intermediate) Certificate",
    issuer: "HackerRank",
    date: "Dec 2023",
    url: "https://www.hackerrank.com/certificates/5e837d3de754",
    credentialId: "5e837d3de754",
  },
  {
    title: "JavaScript Certificate",
    issuer: "HackerRank",
    date: "Dec 2023",
    url: "https://www.hackerrank.com/certificates/3bbf2cc66d6e",
    credentialId: "3bbf2cc66d6e",
  },
  {
    title: "CSS Certificate",
    issuer: "HackerRank",
    date: null,
    url: "https://www.hackerrank.com/certificates/f8f2f2337747",
    credentialId: "f8f2f2337747",
  },
  {
    title: "Database Fundamentals",
    issuer: "Mahara Tech",
    date: null,
    url: null,
    credentialId: null,
  },
  {
    title: "Problem Solving",
    issuer: "Coach Academy",
    date: null,
    url: null,
    credentialId: null,
  },
  {
    title: "JavaScript",
    issuer: "Mahara Tech",
    date: null,
    url: null,
    credentialId: null,
  },
  {
    title: "Web Development",
    issuer: "Youth Empowerment Initiative",
    date: null,
    url: null,
    credentialId: null,
  },
  {
    title: "Photoshop",
    issuer: "New Horizons",
    date: null,
    url: null,
    credentialId: null,
  },
  {
    title: "Illustrator",
    issuer: "New Horizons",
    date: null,
    url: null,
    credentialId: null,
  },
];

export const skills: Skill[] = [
  // Core (hot)
  { label: "React", hot: true },
  { label: "Next.js", hot: true },
  { label: "TypeScript", hot: true },
  { label: "JavaScript (ES6+)", hot: true },
  // Frontend
  { label: "HTML5 / CSS3" },
  { label: "Tailwind CSS" },
  { label: "Sass / SCSS" },
  { label: "Bootstrap" },
  { label: "Pug" },
  { label: "jQuery" },
  // Tools & practices
  { label: "Git" },
  { label: "RTL / Arabic" },
  { label: "Responsive Design" },
  { label: "Design Patterns" },
  // Backend / other
  { label: "C#  / .NET" },
  { label: "SQL Server" },
  { label: "OOP" },
  { label: "Data Structures & Algorithms" },
  // Basic knowledge
  { label: "AngularJS" },
  { label: "Node.js" },
  { label: "Vue.js" },
  { label: "Python" },
  { label: "Power BI" },
];
