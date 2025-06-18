import htmlLogo from "./assets/html.png"
import cssLogo from "./assets/css.png";
import javascriptLogo from "./assets/javascript.png";
import reactjsLogo from "./assets/reactjs.png";
import reduxLogo from "./assets/redux.png";
import nodejsLogo from "./assets/nodejs.png"
import expressjsLogo from "./assets/express.png";
import mysqlLogo from "./assets/mysql.png";
import mongodbLogo from "./assets/mongodb.png";
import postgreLogo from "./assets/postgre.png";
import cLogo from "./assets/c.png";
import cppLogo from "./assets/cpp.png";
import javaLogo from "./assets/java.png";
import typescriptLogo from "./assets/typescript.png";
import githubLogo from "./assets/github.png";
import gitLogo from "./assets/git.png";
import vercelLogo from "./assets/vercel.png";
import vscodeLogo from "./assets/vscode.png";
import postmanLogo from "./assets/postman.png";
import gdImg from "./assets/gd.png";
import whatsappclone from './assets/whatsappclone.png';
import shortUrl from './assets/shorturl.png';
import snakeandfruit from './assets/snakefruitd.png';
import signature from './assets/signatureImg.jpg';
import CqLogo from "./assets/cqLogo.jpeg";

import SdssLogo from "./assets/sdssslogo.jpeg";

import kukLogo from "./assets/kukLogo.jpeg";



export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "PostgreSQL", logo: postgreLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Core Java", logo: javaLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Vercel", logo: vercelLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: CqLogo,
    role: "Software Engineer Intern",
    name: "CodeQuotient",
    date: "Junary 2025 - Present",
    desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
    skills: [
      "ReactJS",
      "Redux",
      "JavaScript",
      "Tailwind CSS",
      "Typescript",
      "Redis",
      "Nodejs",
      "ExpressJs",
      "SQL",
      "Postgresql",
      "MongoDb",
      "CSS",
      "HTML",
    ],
  },
  {
    id: 1,
    img: CqLogo,
    role: "Summer Internship",
    name: "CodeQuotient",
    date: "July 2024 - September 2024",
    desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
    skills: ["HTML", "CSS", "JavaScript", "Problem Solving"],
  },
];

export const education = [
  {
    id: 0,
    img: kukLogo,
    name: "Kurukshetra University",
    date: "Sept 2023 - July 2026",
    grade: "8.95 CGPA (Current)",
    desc: "I am pursuing my Bachelor of Computer Applications (BCA) from Kurukshetra University. Alongside the university curriculum, I am also enhancing my practical skills and industry readiness through training at CodeQuotient School of Technology. This combined experience is helping me build a strong foundation in programming, software development, and computer science concepts such as Data Structures, Algorithms, Object-Oriented Programming, Database Management, Web Development, and Software Engineering.",
    degree: "Bachelor of Computer Applications - BCA",
  },  
  {
    id: 1,
    img: SdssLogo,
    name: "Sanatan Dharma Senior Secondary School, Jagadhri",
    date: "Apr 2022 - Mar 2023",
    grade: "78%",
    desc: "I completed my Class 12 education from Sanatan Dharma Senior Secondary School, Jagadhri, under the HBSE board. My stream was Commerce with Mathematics, and I developed strong analytical and problem-solving skills during this time.",
    degree: "HBSE (XII) - Commerce with Mathematics",
  },
  {
    id: 2,
    img: SdssLogo,
    name: "Sanatan Dharma Senior Secondary School, Jagadhri",
    date: "Apr 2020 - Mar 2021",
    grade: "93%",
    desc: "I completed my Class 10 education from Sanatan Dharma Senior Secondary School, Jagadhri, under the HBSE board. This laid the foundation for my academic journey with strong fundamentals across subjects.",
    degree: "HBSE (X)",
  },
];

export const projects = [
  {
    id: 7,
    title: "Court Signature Management System",
    description:
      "A digital signature workflow application designed for court or government use with clearly defined roles: Admin, Officer, and Reader. Officers can view and digitally sign case files, Readers review and forward documents, while Admins manage users and oversee the workflow. The system employs role-based access control (RBAC), JWT authentication, and secure data handling to ensure document integrity, auditability, and streamlined approval processes.",
    image: signature, // Replace with your actual imported image or placeholder
    tags: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "RBAC",
      "JWT Authentication",
    ],
    github: "https://github.com/akash-cq/signature-frontend-template", // Replace with your actual repo link
    webapp: "", // Replace with your deployed app URL if available
  },
  {
    id: 8,
    title: "WhatsApp Clone",
    description:
      "A real-time chat application replicating core WhatsApp features including one-on-one messaging, group chats, message notifications, and user presence indicators. Built using React and TypeScript on the frontend with a sleek UI library, and Node.js, Express, and MongoDB on the backend for managing users, messages, and chat rooms. Real-time communication is enabled via WebSocket (Socket.IO) for instant message delivery and updates.",
    image: whatsappclone, // Replace with actual image import or placeholder
    tags: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.IO",
      "Real-time Chat",
      "WebSocket",
    ],
    github: "", // Replace with your actual repo link
    webapp: "", // Replace with your deployed app URL
  },
  {
    id: 2,
    title: "Short URL Generator",
    description:
      "A compact and efficient URL shortening service that allows users to convert long URLs into short links. Built using Node.js, Express, and MongoDB with authentication features. Each user can manage their shortened links, view analytics, and delete or log out of their account. Developed during an internship project to practice backend integration and user management.",
    image: shortUrl, // Replace with actual imported image reference
    tags: ["Node.js", "Express", "MongoDB", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/akash-cq/urlsortner", // Replace with your actual repo link
    webapp: "", // Replace with your actual deployed link
  },
  {
    id: 3,
    title: "Discussion Portal",
    description:
      "An interactive forum-like application where users can post questions and receive answers. Each answer can be liked or disliked, and questions can be marked as resolved. Features include real-time updates, hearting top questions, search functionality, and localStorage for data persistence. Built using HTML, CSS, and JavaScript during the CodeQuotient internship.",
    image: gdImg, // Replace with actual imported image reference
    tags: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    github: "https://github.com/akash-cq/GroupDiscussion", // Replace with your actual repo link
    webapp: "https://group-discussion-omega.vercel.app/login", // Replace with your actual deployed link
  },
  {
    id: 5,
    title: "Snake and Fruit Game",
    description:
      "A console-based Snake game built using C++ with Object-Oriented Programming principles. The game features a movable snake that grows upon eating fruit and ends when the snake collides with itself or the wall. It utilizes classes to structure the game logic, including snake movement, collision detection, and dynamic fruit placement. A great example of using encapsulation, abstraction, and class interactions in C++.",
    image: snakeandfruit, // Replace with the actual imported image reference or placeholder
    tags: ["C++", "OOP", "Game Development", "Console Application"],
    github: "https://github.com/akash-cq/snake-and-fruit", // Replace with your actual repo link
    webapp: "", // Not applicable for C++ console apps unless hosted on a web emulator
  },

  {
    id: 6,
    title: "To-Do Application with React",
    description:
      "A sleek and responsive to-do list application built with React.js that helps users manage their daily tasks efficiently. Users can add, delete, and mark tasks as completed. The app features dynamic UI updates using React state and props, and showcases the use of reusable components, hooks, and conditional rendering. Built with clean design and responsive layout for all devices.",
    image: shortUrl, // Replace with the actual image import or use a placeholder
    tags: ["HTML", "CSS", "JavaScript", "React JS"],
    github: "https://github.com/akash-cq/react-todo", // Replace with your actual repo link
    webapp: " ", // Replace with your actual deployed link
  },
];
