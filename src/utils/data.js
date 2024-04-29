import { Github } from "lucide-react"

export const links = [
    "Home",
    "About",
    "Skill",
    "Project",
    "Contact"
]

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Redux",
    "Express",
    "Node.js",
    "Next.js",
    "Git",
    "Tailwind",
    "Prisma",
    "MongoDB",
    "My SQL",
    "GraphQL",
    "Java",
    "Hibernate",
    "Framer Motion",
]

export const projects = [
    {
        id: 1,
        title: "Full Stack E-Commerce",
        img: "https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc1: "Developed using Next.js, Tailwind CSS, Firebase, MongoDB, and Stripe for payments",
        desc2: "Implemented authentication and authorization for admin CRUD operations and client transactions.",
        desc3: "Enabled cart management, address selection, order tracking, and secure payment processing.",    
        tools: ["Next js", "Tailwind", "mongo DB", "Stripe", "Firebase"],    
        github: "https://github.com/Akashyadav18/E_Commerce",
        demo: "",
    },
    {
        id: 2,
        title: "Blog Application",
        img: "https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc1: "Next.js & React.js blog with Prisma-MongoDB. Authenticated users can create posts, upload images, and apply category filters.",
        desc2: "Secured user interactions—login for content creation, read-only access for non-logged-in users.",
        desc3: "Dark mode support, category filters for optimized user experience.",    
        tools: ["Next js", "React js", "mongo DB", "Prisma"],    
        github: "https://github.com/Akashyadav18/Next_Blog",
        demo: "",
    },
    {
        id: 3,
        title: "Shopping Cart",
        img: "https://images.pexels.com/photos/1666067/pexels-photo-1666067.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc1: "Implemented an interactive UI ensuring a seamless experience across various devices.",
        desc2: "Utilized browser local storage for persistent user data, enhancing the shopping experience.",
        desc3: "Employed Redux Toolkit for efficient state management, optimized data flow, and scalable application architecture.",        tools: ["react", "Next js", "mongo Db", "prisma", "My Sql"],
        github: "https://github.com/Akashyadav18/shopping-UI",
        demo: "",
    },
    
]