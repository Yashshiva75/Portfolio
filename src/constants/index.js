import recipe from "../assets/recipe.jpg";
import chattinglogo from "@assets/chattinglogo.webp"
import ecommerce from "../assets/ecommerce.jpg";
import fooddil from "@assets/fooddil.webp"
import xlogo from "@assets/xlogo.webp"

export const LINKS = [
  { href: "#work", label: "Projects" },
  { href: "#about", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
  
];

export const HERO_CONTENT = {
  greeting: "Hey there! 🖐️",
  introduction:
    "I’m Yash shiva ,a passionate Software developer specializing in the MERN stack, crafting immersive and intuitive web experiences.",
  description:
    "I’m currently helping businesses bring their visions to life through interactive digital solutions.",
  resumeLinkText: "View Resume",
  resumeLink: "https://docs.google.com/document/d/1x-FraujE6K-anURAia4r22CDYgkL6v8A7x5JZLvs13M/edit?tab=t.0",
};

export const PROJECTS = [
  {
    name: "Full Stack Chatting App",
    description: `A full-stack social media app built with React, Node.js, Express, and MongoDB.
  Includes JWT auth, post interactions, profile editing, and image uploads via Cloudinary.`,
    image: chattinglogo,
    link: "https://github.com/Yashshiva75/MERN_social_media_app",
    live:"https://chatflow-gsx8.onrender.com/"
    
  },
  {
    name: "YashFoodz",
    description: "A food Ordering app using React js and redux toolkit",
    image: fooddil,
    link: "https://github.com/Yashshiva75/Food-Dilevery-app",
    live:"https://yashfoodz.netlify.app/"
  },
  {
    name: "Full Stack Twitter Clone",
    description: `A full-stack social media app built with React, Node.js, Express, and MongoDB.
Includes JWT auth, post interactions, profile editing, and image uploads via Cloudinary.`,
    image: xlogo,
    link: "https://github.com/Yashshiva75/MERN_social_media_app",
    
  },
  {
    name: "Shadcn - Admin panel",
    description: "This app is made using ShadCn and ReactTable",
    image: ecommerce,
    link: "https://github.com/Yashshiva75/ShadcnAdmin-panel",
    
  },
  {
    name: "Meal master",
    description: "This project is made using vanilla javascript that uses mealdb's API to fetch dishes",
    image: recipe,
    link: "https://github.com/Yashshiva75/Recipe-app",
    live: "https://recipeapp-xi-one.vercel.app/"
  },
  
];

export const ABOUT_CONTENT = {
  paragraphs: [
    "I hold a B.Tech in Computer Science from Bikaner Technical University, with 1 year of hands-on experience in Prompt Engineering. My technical expertise spans across React.js, TailwindCSS, Bootstrap, Firebase, Material UI, Chakra UI, Node.js, MongoDB, and MySQL. As an aspiring MERN Stack Developer, I am passionate about building scalable, dynamic web applications and continuously improving my skills to stay ahead in the ever-evolving tech landscape. With a blend of creativity and problem-solving abilities, I aim to deliver exceptional digital solutions that drive innovation and enhance user experiences."
  ],
};

export const EXPERIENCES = [
  
  {
    yearRange: "2023 — 2024",
    title: "Prompt Engineer at Softage.Ai",
    location: "Ahemdabad",
    description: [
      "In my role as a Prompt Engineer, I worked on developing and optimizing AI-driven solutions by crafting, refining, and testing prompts for large language models. My responsibilities included designing effective prompts to generate accurate, context-aware outputs, analyzing model behavior, and iterating prompts to improve performance across various use cases. I collaborated with AI teams to gather and annotate raw data, ensuring that the model responses align with the intended task requirements. Additionally, I leveraged tools like Bash scripting, Git, and GitHub for prompt version control, making significant contributions to enhancing the capabilities of AI-driven models for more reliable and efficient responses.",
    ],
  },
  {
    yearRange: "Nov 2024 — Apr 2025",
    title: "Full Stack developer intern at Syndell technologies",
    location: "Ahemdabad",
    description: [
      "At Syndell i developed a full-stack inventory management application from scratch using the PERN stack, designing and building both the frontend and backend, along with the database schema in PostgreSQL. The application features a server-side table with pagination, search, and sorting for efficient data handling. It tracks stock levels, showing how much has been sold, how much is available, and how much is pending. The system allows the admin to create new users and assign roles, manage stock entries, view supplier data, and update inventory. Additional features include stock quantity selection, categorization, supplier-wise tracking, and comprehensive record management of purchases and sales.",
    ],
  },
  {
    yearRange: "Apr 2025  — Present",
    title: "Full Stack developer at Meru TechnoSoft",
    location: "Ahemdabad",
    description: [
      "Integrated an AI-powered ChatBot module capable of interpreting user prompts (e.g., “create invoice”) to automatically navigate to the relevant route, display a smart preview, and pre-fill forms upon confirmation using AI APIs. Led the QuickBooks Sync Module by integrating the Auth Service with the QuickBooks Integration Service for smooth and secure communication. Mapped structural and functional differences between HelloBooks and QuickBooks, implemented backend enhancements, and reviewed/refactored code from interns. Integrated QuickBooks webhooks to enable real-time syncing, ensuring that any entry in HelloBooks is instantly mirrored in QuickBooks. Contributed to backend modules including ledgers, invoices, transactions, and report generation, while developing responsive and reusable frontend components with React.js and Material UI for a clean, intuitive, and consistent user experience.",
    ],
  },
];


export const CONTACT_CONTENT = {
  headline: "LET'S WORK ON SOMETHING GREAT",
  description:
    "I'm excited to collaborate on projects that push boundaries and create meaningful impact. Let's build something innovative and exceptional together.",
  email: "Yashshiva59@gmail.com",
  phone: '+91 6378709359',
  socialLinks: [
    {
      platform: "Instagram",
      url: "https://www.instagram.com/yash7shiva/",
      ariaLabel: "Follow me on Twitter",
      icon: "RiInstagramFill",
    },
    {
      platform: "GitHub",
      url: "https://github.com/Yashshiva75",
      ariaLabel: "View my GitHub profile",
      icon: "RiGithubFill",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/yash-shiva/",
      ariaLabel: "Connect with me on LinkedIn",
      icon: "RiLinkedinFill",
    },
    {
      platform: "Gmail",
      url: "http://www.yashshiva59@gmail.com/",
      ariaLabel: "Connect with me on LinkedIn",
      icon: "RiGoogleFill",
    },
  ],
  footerText: `© ${new Date().getFullYear()} Yash shiva. All rights reserved.`,
};
