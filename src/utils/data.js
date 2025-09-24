
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
    "React.js",
    "Express.js",
    "Node.js",
    "Next.js",
    "MongoDB",
    "Tailwind",
    "Shadcn/ui",
    "Git",
    "GitHub",
    "Java",
    "Spring Boot",
    "MySQL",
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
        demo: "https://e-commerce-omega-sepia.vercel.app",
    },
    {
        id: 2,
        title: "Product Catalog",
        img: "https://images.pexels.com/photos/6956800/pexels-photo-6956800.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc1: "Developed an e-commerce catalog with category-based filtering, product search, and price sorting by building Spring Boot REST APIs and integrating them with a React.js frontend.",
        desc2: "Deployed backend on Render with, containerized services using Docker, NeonDB PostgreSQL, and hosted frontend on Vercel for production-grade deployment.",
        desc3: "Implemented CORS handling, environment variables, and secure configuration management, resolving deployment challenges with Dockerfile setup, NeonDB connectivity, and API integration.",    
        tools: ["Spring Boot", "NeonDB", " Docker", "PostgreSQL", "Lombok", "React.js", "Tailwind CSS"],    
        github: "https://github.com/Akashyadav18/Next_Blog",
        demo: "https://productcatalog-teal.vercel.app/",
    },
    {
        id: 3,
        title: "Note Taker App",
        img: "https://images.pexels.com/photos/2034373/pexels-photo-2034373.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc1: "Engineered a robust note-taker application with secure user authentication and comprehensive note lifecycle management (add, update, delete, status tracking)",
        desc2: "Ensured automated data integrity by intelligently handling relational dependencies, preventing orphaned records when users were removed.",
        desc3: "Deployed on Render using Docker image and PostgreSQL, ensuring scalability and production readiness.",        
        tools: ["Spring Boot", "Spring Web", "JPA", "MySQL", "Thymeleaf", "Bootstrap", "Docker", "PostgreSQL"],
        github: "https://github.com/Akashyadav18/SpringBoot_NoteApp",
        demo: "https://noteapp-qj78.onrender.com/",
    },
    {
        id: 4,
        title: "Employee Management System",
        img: "https://images.pexels.com/photos/7433854/pexels-photo-7433854.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc1: "Built an Employee Management System with full CRUD automation, enhancing backend security using DTOs, mappers, and layered architecture.",
        desc2: "Deployed backend on Render with, containerized with Docker, NeonDB PostgreSQL, and hosted frontend on Vercel, managing .env variables, URL mapping, and CORS policies.",
        desc3: "Resolved deployment issues including multi-origin CORS handling, NeonDB setup, JAR creation, and Dockerfile configuration, ensuring reliable production deployment.",        
        tools: ["Spring Boot", "PostgreSQL","NeonDB", "Docker", "Lombok", "React.js", "Bootstrap"],
        github: "https://github.com/Akashyadav18/shopping-UI",
        demo: "https://ems-frontend-rho-rouge.vercel.app/",
    },
    {
        id: 5,
        title: "Shopping Cart",
        img: "https://images.pexels.com/photos/1666067/pexels-photo-1666067.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc1: "Implemented an interactive UI ensuring a seamless experience across various devices.",
        desc2: "Utilized browser local storage for persistent user data, enhancing the shopping experience.",
        desc3: "Employed Redux Toolkit for efficient state management, optimized data flow, and scalable application architecture.",        
        tools: ["react", "Next js", "mongo Db", "prisma", "My Sql"],
        github: "https://github.com/Akashyadav18/shopping-UI",
        demo: "",
    },
    
    
]