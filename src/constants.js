import {FaNodeJs, FaDocker ,FaHtml5, FaCss3, FaJs, FaReact, } from "react-icons/fa";
import {
  SiMongodb, SiExpress, SiTypescript,
  SiNextdotjs, SiTailwindcss, SiGraphql,
  SiRedux
} from 'react-icons/si';

const navdata = {
    logo:'/logo.jpg',
    navlinks : [
        {
            id: 1,
            label: "Home",
            href: "home",
            icon: "home", // icon name/class for your icon system
        },
        {
            id: 2,
            label: "Skills",
            href: "skills",
            icon: "user",
        },
        {
            id: 3,
            label: "Projects",
            href: "projects",
            icon: "briefcase",
        },
        {
            id: 4,
            label: "Contacts",
            href: "contacts",
            icon: "mail",
        }
    ]
}

const herodata = {
    logo:"",
    greeting:"Hi there! I'm",
    name:"Sumit",
    data:"I'm a software engineer skilled in Next.js, React.js, TypeScript, and Node.js, with experience in building web apps, optimizing performance, and enhancing API response.",
    image:"/avatar.jpg"
}

const skilldata = {
    description: "Proficient in full-stack development with expertise in React and Node.js, delivering scalable web applications",
    skills: [{
        name: 'HTML',
        des: 'Eu voluptate sit do labore consectetur in ad esse qui laborum ad eiusmod. Esse ea velit culpa exercitation anim enim reprehenderit. Fugiat nostrud non dolore aliquip quis in ea amet duis.',
        icon: FaHtml5
    },
        {
            name: 'CSS',
            des: 'Ad ad in cillum ut labore irure aliqua. Ex sit dolore ipsum id duis nostrud veniam. Nisi duis ut veniam ut eiusmod occaecat ullamco ullamco. Consequat eu sunt ut elit dolor sint magna magna velit ex. Excepteur occaecat reprehenderit tempor veniam.',
            icon: FaCss3
        },
        {
            name: 'Javascript',
            des: 'Sunt nostrud nulla qui cillum mollit aute anim anim aliqua aute magna tempor. Do culpa culpa excepteur officia ut eu deserunt proident sint non ut do magna minim. Sunt et excepteur tempor culpa irure non exercitation. Amet nostrud ex aute incididunt incididunt ipsum.',
            icon: FaJs
        },
        {
            name: 'ReactJs',
            des: 'Voluptate qui adipisicing dolore pariatur laboris deserunt consectetur reprehenderit. Esse dolor elit ullamco duis quis aliquip fugiat ipsum nisi est et. Nisi ut deserunt excepteur irure aliquip proident ',
            icon: FaReact
        },
        {
            name: 'MongoDB',
            des: 'Experienced in designing scalable NoSQL database schemas, implementing complex queries, and optimizing data storage for high-performance applications using MongoDB and Mongoose.',
            icon: SiMongodb
        },
        {
            name: 'Express.js',
            des: 'Proficient in building robust backend APIs, implementing middleware, handling routing, and creating scalable server-side applications with Express.js and Node.js ecosystem.',
            icon: SiExpress
        },
        {
            name: 'Node.js',
            des: 'Advanced backend development using Node.js, creating efficient server-side applications, implementing microservices architecture, and managing asynchronous programming patterns.',
            icon: FaNodeJs
        },
        {
            name: 'TypeScript',
            des: 'Skilled in leveraging TypeScript for type-safe JavaScript development, creating robust, maintainable code with enhanced IDE support and compile-time type checking.',
            icon: SiTypescript
        },
        {
            name: 'Next.js',
            des: 'Expertise in building server-side rendered React applications, implementing static site generation, and optimizing web performance with Next.js framework.',
            icon: SiNextdotjs
        },
        {
            name: 'Tailwind CSS',
            des: 'Proficient in rapidly building custom, responsive user interfaces using utility-first CSS framework Tailwind, ensuring efficient and consistent design implementation.',
            icon: SiTailwindcss
        },
        {
            name: 'GraphQL',
            des: 'Experienced in designing and implementing GraphQL APIs, creating efficient data fetching strategies, and building flexible backend services with Apollo and GraphQL.',
            icon: SiGraphql
        },
        {
            name: 'Docker',
            des: 'Skilled in containerization, creating Docker configurations, managing microservices deployment, and implementing consistent development and production environments.',
            icon: FaDocker
        },
        {
            name: 'Redux',
            des: 'Advanced state management using Redux, implementing complex application states, creating predictable data flow, and managing large-scale React applications.',
            icon: SiRedux
        }
    ]
}

const projectsdata = {
    heading: "These are my projects",
    description:"From pixel-perfect frontends to scalable backends – creating holistic web experiences that solve real-world problems.",
    projects:[
        {
            id:1,
            name: 'Authentication System',
            des: 'This project is a robust user authentication API featuring registration, email verification, login, password reset, and profile management. Built with Node.js, Express.js, TypeScript, and MongoDB, it ensures secure user authentication via JWT and supports email notifications with Nodemailer.',
            mission: 'To learn how authention is done and developed in the background and its importance',
            language: 'Node js, Typescript, Express, MongoDB',
            images: '/pj1.jpg'
        },
        {
            id:2,
            name: 'Waveline',
            des: 'High-performance landing page web application built with Next.js and Tailwind CSS, following best practices for scalability, accessibility, and optimal user experience. Leverages server-side rendering and code-splitting for lightning-fast load times.',
            mission: 'Hone the skill of building beautiful UI\'s',
            language: 'Next Js, TailwindCSS, Typescript, React',
            images: '/pj2.png'
        },
        {
            id:3,
            name: 'Http-Server',
            des: 'A lightweight, multi-threaded HTTP server written in C that serves static files and handles basic routing',
            mission: 'Built this complex http server which suports routing, files and more features',
            language: 'C',
            images: '/pj3.jpg'
        },
        {
            id:4,
            name: 'Devhub',
            des: 'Next.js and Tailwind CSS combine to create a visually appealing and responsive Car search application. Give it a star if you like it.',
            mission: 'Advancing and mastering latest techstacks and more.',
            language: 'NextJs, TailwindCSS',
            images: '/pj4.png'
        },
        {
            id:5,
            name: 'Car Center',
            des: 'A beautiful stunning landing page. Build with latest Next JS and Tailwind CSS.',
            mission: 'Mastering Intergation of API\'s and Raw web pages',
            language: 'NextJs, TailwindCSS, RapidAPI',
            images: '/pj5.png'
        },
    ]
}


const contactdata = {
    tagline:"Want to work with me!",
    contactdetails:[
        {
            id:1,
            title: 'Email',
            value: 'skmishracodes@gmail.com'
        },
        {
            id:2,
            title: 'whatsapp',
            value: '+91(security reasons)'
        },
    ]
}


export { navdata, herodata, projectsdata, skilldata, contactdata }
