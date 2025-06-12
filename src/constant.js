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
    grade: "7.81 CGPA(Current)",
    desc: "I have completed my Master's degree (MCA) in Computer Applications from GLA University, Mathura. During my time at GLA, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at GLA University has been instrumental in shaping my technical abilities and professional growth.",
    degree: "Bachelor of Computer Applications - BCA",
  },
  {
    id: 2,
    img: SdssLogo,
    name: "Sanatan Dharma Senior Secondery School,jagadhri",
    date: "Apr 2022 - March 2023",
    grade: "78%",
    desc: "I completed my class 12 education from Vatsalya Public School, Govardhan, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
    degree: "HBSE(XII) - Commerce with Mathematics",
  },
  {
    id: 2,
    img: SdssLogo,
    name: "Sanatan Dharma Senior Secondery School,jagadhri",
    date: "Apr 2020 - March 2021",
    grade: "93%",
    desc: "I completed my class 12 education from Vatsalya Public School, Govardhan, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
    degree: "HBSE(X)",
  },
];

export const projects = [
  {
    id: 7,
    title: "Court Signature Management System",
    description:
      "A digital signature workflow application designed for court or government use with clearly defined roles: Admin, Officer, and Reader. Officers can view and digitally sign case files, Readers review and forward documents, while Admins manage users and oversee the workflow. The system employs role-based access control (RBAC), JWT authentication, and secure data handling to ensure document integrity, auditability, and streamlined approval processes.",
    image: "", // Replace with your actual imported image or placeholder
    tags: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "RBAC",
      "JWT Authentication",
    ],
    github: "https://github.com/codingmastr/digital-signature-app", // Replace with your actual repo link
    webapp: "https://your-signature-app.netlify.app/", // Replace with your deployed app URL if available
  },
  {
    id: 8,
    title: "WhatsApp Clone",
    description:
      "A real-time chat application replicating core WhatsApp features including one-on-one messaging, group chats, message notifications, and user presence indicators. Built using React and TypeScript on the frontend with a sleek UI library, and Node.js, Express, and MongoDB on the backend for managing users, messages, and chat rooms. Real-time communication is enabled via WebSocket (Socket.IO) for instant message delivery and updates.",
    image:"", // Replace with actual image import or placeholder
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
    github: "https://github.com/codingmastr/whatsapp-clone", // Replace with your actual repo link
    webapp: "https://your-whatsapp-clone.netlify.app/", // Replace with your deployed app URL
  },
  {
    id: 1,
    title: "To-Do Application with Authentication",
    description:
      "A secure and feature-rich to-do web application built using Node.js, Express, and MongoDB. It enables users to register, log in, add, edit, and delete tasks. The application supports session-based authentication, user-specific task display, and includes additional features like account deletion and validation for email and password. Designed during an internship at CodeQuotient.",
    image: "", // Replace with actual imported image reference
    tags: ["Node.js", "Express", "MongoDB", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/codingmastr/todo-app-authentication", // Replace with your actual repo link
    webapp: "https://your-todo-app-url.netlify.app/", // Replace with your actual deployed link
  },
  {
    id: 2,
    title: "Short URL Generator",
    description:
      "A compact and efficient URL shortening service that allows users to convert long URLs into short links. Built using Node.js, Express, and MongoDB with authentication features. Each user can manage their shortened links, view analytics, and delete or log out of their account. Developed during an internship project to practice backend integration and user management.",
    image: "", // Replace with actual imported image reference
    tags: ["Node.js", "Express", "MongoDB", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/codingmastr/short-url-generator", // Replace with your actual repo link
    webapp: "https://your-short-url-app.netlify.app/", // Replace with your actual deployed link
  },
  {
    id: 3,
    title: "Discussion Portal",
    description:
      "An interactive forum-like application where users can post questions and receive answers. Each answer can be liked or disliked, and questions can be marked as resolved. Features include real-time updates, hearting top questions, search functionality, and localStorage for data persistence. Built using HTML, CSS, and JavaScript during the CodeQuotient internship.",
    image: "", // Replace with actual imported image reference
    tags: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    github: "https://github.com/codingmastr/discussion-portal", // Replace with your actual repo link
    webapp: "https://your-discussion-portal.netlify.app/", // Replace with your actual deployed link
  },
  {
    id: 5,
    title: "Snake and Fruit Game",
    description:
      "A console-based Snake game built using C++ with Object-Oriented Programming principles. The game features a movable snake that grows upon eating fruit and ends when the snake collides with itself or the wall. It utilizes classes to structure the game logic, including snake movement, collision detection, and dynamic fruit placement. A great example of using encapsulation, abstraction, and class interactions in C++.",
    image: "", // Replace with the actual imported image reference or placeholder
    tags: ["C++", "OOP", "Game Development", "Console Application"],
    github: "https://github.com/codingmastr/snake-game-cpp", // Replace with your actual repo link
    webapp: "", // Not applicable for C++ console apps unless hosted on a web emulator
  },

  {
    id: 6,
    title: "To-Do Application with React",
    description:
      "A sleek and responsive to-do list application built with React.js that helps users manage their daily tasks efficiently. Users can add, delete, and mark tasks as completed. The app features dynamic UI updates using React state and props, and showcases the use of reusable components, hooks, and conditional rendering. Built with clean design and responsive layout for all devices.",
    image: "", // Replace with the actual image import or use a placeholder
    tags: ["HTML", "CSS", "JavaScript", "React JS"],
    github: "https://github.com/codingmastr/react-todo-app", // Replace with your actual repo link
    webapp: "https://your-react-todo-app.netlify.app/", // Replace with your actual deployed link
  },
];
