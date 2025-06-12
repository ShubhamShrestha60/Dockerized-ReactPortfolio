import {
  aflacLogo,
  Java,
  Jenkins,
  cognizantLogo,
  Linux,
  github,
  gmail,
  Docker,
  linkdin,
  mysql,
  nodejs,
  react,
  robo,
  skill,
  MongoDB,
  wellsLogo,
} from "../assets"

export const AppText={
    hello:'Hello,',
    Iam:'I am ',
    ShubhamShrestha:'Shubham Shrestha',
    aboutMeDescripion:'A passionate Computer Science student and aspiring Full Stack Developer with a strong foundation in modern web technologies. I combine technical expertise with creative problem-solving to build innovative digital solutions.',
    Skills:'Skills & ',
    Experties:'Expertise',
    FullStackDeveloper:'Full Stack Developer',
    Portfolio:'Portfolio',
    Creative:'My Creative ',
    CompaniesI:'Companies I ',
    WorkedFor:'Worked With',
    Contact:'Contact ',
    Us:'Me',
    copywriteText:'© 2025 Shubham Shrestha. All rights reserved.'
}

export const aboutSection=[
    {
        id:1,
        image:'https://img.freepik.com/premium-vector/ui-ux-programmer-flat-design-vector-illustration-business-information-team-sharing-ideas-with-designer-coding-interface-software-app-development_2175-1809.jpg?w=2000',
        title:'UI/UX Designer',
        desc:'Creating intuitive and engaging user experiences through modern design principles and user-centered methodologies.'
    },
    {
        id:2,
        image:'https://media.istockphoto.com/id/1304570729/vector/front-end-development-concept-vector-flat-graphic-design-illustration.jpg?s=612x612&w=0&k=20&c=0lpu0j-4FbuoA7xpGzt9apKZeI5F9KlNNe0qRYxjUYs=',
        title:'Frontend Developer',
        desc:'Building responsive and performant web applications using React, TypeScript, and modern frontend technologies.'
    },
    {
        id:3,
        image:'https://img.freepik.com/premium-vector/back-end-developer-working-laptop_701961-1383.jpg?w=2000',
        title:'Backend Developer',
        desc:'Developing robust server-side applications with Node.js, Express, and various database technologies.'
    }
]

export const skillsList=[
    {
        id:1,
        icon:react,
        name:'React'
    },
    {
        id:2,
        icon:MongoDB,
        name:'MongoDB'
    },
    {
        id:3,
        icon:nodejs,
        name:'Node.js'
    },
    {
        id:4,
        icon:Linux,
        name:'Linux'
    },
    {
        id:5,
        icon:mysql,
        name:'MySQL'
    },
    {
        id:6,
        icon:Jenkins,
        name:'Jenkins'
    },
    {
        id:7,
        icon:Java,
        name:'Java'
    },
    {
        id:8,
        icon:Docker,
        name:'Docker'
    },
]

export const workDetail=[
    { 
        id:1,
        year:'2024-Present',
        compnayName:'Freelance',
        position:'Full Stack Developer',
        description:'Architecting and developing diverse web applications using various technology stacks including React, Node.js, Python/Django, Java Spring Boot, and cloud services. Implementing responsive frontends, scalable backend APIs, and database solutions (SQL/NoSQL) while ensuring best practices in security and performance.'
    },
    { 
        id:2,
        year:'2023',
        compnayName:'Herald College Kathmandu',
        position:'Business Development Intern',
        description:'Led market research initiatives and developed business strategies for college growth.'
    },
    // { 
    //     id:1,
    //     year:'2024',
    //     compnayName:'Cloud Factory',
    //     position:'2D Image Annotator'
    // },
    // { 
    //     id:1,
    //     year:'2024',
    //     compnayName:'Freelance',
    //     position:'Freelancing'
    // },
]

export const portfolio=[
    {
        id:1,
        title:'TaskFlow Pro',
        type:'website',
        desc:'A modern task and team management application featuring real-time task tracking, team collaboration via chat, and a sleek responsive UI with light/dark themes. Includes an interactive dashboard with analytics, profile customization, and calendar integration for events and deadlines.',
        imageUrl:'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
        technologies:['React', 'Styled Components', 'Theme Customization', 'Framer Motion', 'Real-time Updates'],
        liveUrl:'https://taskf-flow-pro.vercel.app/',
        githubUrl:'https://github.com/ShubhamShrestha60/TaskfFlowPro'
    },
    {
        id:2,
        title:'Eyewear E-commerce with Virtual Try-On',
        type:'website',
        desc:'A comprehensive e-commerce platform for eyewear business featuring an innovative virtual try-on system. The platform manages various product categories including sunglasses, contact lenses, and prescription glasses, while offering a unique AR experience for customers.',
        imageUrl:'https://images.unsplash.com/photo-1577744486770-020ab432da65?auto=format&fit=crop&w=800&q=80',
        technologies:['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Python', 'MediaPipe', 'OpenCV', 'Tailwind CSS'],
        liveUrl:'',
        githubUrl:'https://github.com/ShubhamShrestha60/FYP'
    },
    {
        id:3,
        title:'Car Rental Service',
        type:'website',
        desc:'A full-stack car rental application built using the MERN stack. Led a team using Agile methodology to deliver a comprehensive platform with booking functionality and an intuitive user interface.',
        imageUrl:'https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=800&q=80',
        technologies:['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Redux', 'Bootstrap'],
        liveUrl:'',
        githubUrl:'https://github.com/ShubhamShrestha60/ProjectVroom-CarRental-2.0'
    },
  
    {
        id:4,
        title:'Comic Zone',
        type:'website',
        desc:'A scalable comic reading application with comprehensive features including secure JWT authentication, cloud-based file management, real-time notifications, and an admin dashboard. Special emphasis on accessibility with color-blind friendly themes.',
        imageUrl:'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?auto=format&fit=crop&w=800',
        technologies:['React', 'Node.js', 'MongoDB', 'JWT', 'Cloudinary', 'Styled Components', 'Axios'],
        liveUrl:'',
        githubUrl:'https://github.com/ShubhamShrestha60/ComicApp'
    },

    {
        id:7,
        title:'Full-Stack Chat Application',
        type:'website',
        desc:'A full-stack chat application with a responsive user interface and robust backend API. Features include dynamic mobile-friendly user list with smooth scrolling, text overflow management, and real-time messaging capabilities. The application ensures seamless communication across devices with robust user session management.',
        imageUrl:'https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&w=800&q=80',
        technologies:['React.js', 'Node.js', 'Express.js', 'Socket.io', 'Responsive Design', 'Real-time Communication'],
        liveUrl:'',
        githubUrl:'https://github.com/ShubhamShrestha60/live-chat-app'
    },
    {
        id:5,
        title:'Traffic Sign Classification System',
        type:'AI/ML',
        desc:'A sophisticated deep learning system for traffic sign classification featuring multiple CNN architectures. The project implements custom CNN, regularized deeper CNN, and MobileNetV2 transfer learning models. Achieved 98%+ accuracy with robust handling of class imbalance through data augmentation. Optimized using Adam and SGD optimizers with comprehensive performance metrics.',
        imageUrl:'https://images.unsplash.com/photo-1573511860302-28c524319d2a?auto=format&fit=crop&w=800&q=80',
        technologies:['Python', 'TensorFlow', 'CNN', 'Transfer Learning', 'Data Augmentation', 'MobileNetV2'],
        liveUrl:'',
        githubUrl:'https://github.com/ShubhamShrestha60/TrafficSign_ImageClassifcation_CNN'
    },
    {
        id:6,
        title:'Course Management System',
        type:'desktop',
        desc:'A comprehensive desktop-based course management system with role-based access control. Features separate dashboards for students, teachers, and administrators. Implements secure user authentication, module enrollment, grade management, and course administration. Built with Java Swing for an intuitive GUI and JDBC for robust database operations.',
        imageUrl:'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
        technologies:['Java', 'Swing', 'JDBC', 'MySQL', 'OOP', 'GUI Design'],
        liveUrl:'',
        githubUrl:'https://github.com/ShubhamShrestha60/CourseManagementSystem/tree/main'
    }
]

export const CompanyImage = [
  {
    id: 1,
    imageUrl: cognizantLogo,
    name: 'Herald College Kathmandu',
    role: 'Business Development Intern'
  },
  {
    id: 2,
    imageUrl: wellsLogo,
    name: 'Opera Eye Wear',
    role: 'Sales Executive'
  },
  {
    id: 3,
    imageUrl: aflacLogo,
    name: 'ING Group',
    role: 'Image Annotator'
  }
];

export const socialNetwork = [
  {
    id: 1,
    logo: linkdin,
    url: "https://www.linkedin.com/in/shubham-shrestha-32870325a/",
    name: "LinkedIn",
  },
  {
    id: 2,
    logo: github,
    url: "https://github.com/ShubhamShrestha60",
    name: "GitHub",
  },
  {
    id: 3,
    logo: gmail,
    url: "mailto:shubhamshrestha60@gmail.com",
    name: "Gmail",
  },
];