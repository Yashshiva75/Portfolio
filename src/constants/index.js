import yashfoodz from "../assets/yashfoodz.png";
import food from "../assets/food.jpg";
import recipe from "../assets/recipe.jpg";

import ecommerce from "../assets/ecommerce.jpg";



export const LINKS = [
  { href: "#work", label: "Projects" },
  { href: "#about", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const HERO_CONTENT = {
  greeting: "Hey there! 🖐️",
  introduction:
    "I’m Yash shiva, a creative frontend developer, crafting immersive and intuitive web experiences.",
  description:
    "I’m currently helping businesses bring their visions to life through interactive digital solutions.",
  resumeLinkText: "View Resume",
  resumeLink: "https://docs.google.com/document/d/1pNIQJxgfl8sviKBI7kf-ZqzDSfcOIxXsV4Fzm-VJSfc/edit",
};

export const PROJECTS = [
  {
    name: "YashFoodz",
    description: "A food Ordering app using React js and redux toolkit",
    image: food,
    link: "https://github.com/Yashshiva75/Food-Dilevery-app",
    live:"https://yashfoodz.netlify.app/"
  },
  {
    name: "E-commerce",
    description: "This app is made using React js ,Tailwind ,Headless ui, and Firebase as backend",
    image: ecommerce,
    link: "https://github.com/Yashshiva75/Full-stack-E-commerce",
    
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
];


export const CONTACT_CONTENT = {
  headline: "LET'S WORK ON SOMETHING GREAT",
  description:
    "I'm excited to collaborate on projects that push boundaries and create meaningful impact. Let's build something innovative and exceptional together.",
  email: "Yashshiva59@gmail.com",
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
