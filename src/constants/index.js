import project1 from "../assets/project-1.jpg";
import project2 from "../assets/project-2.jpg";
import project3 from "../assets/project-3.jpg";
import project4 from "../assets/project-4.png";



export const PROJECTS = [
  {
    title: "Wanderlust",
    link:"https://wanderlust-r6o6.onrender.com/listings",
    image: project1,
    description:
      "A fully functional  peer-to-peer online marketplace for lodging, primarily focused on short-term rentals and hospitality services  with features like house listing and user authentication.",
    technologies: ["HTML", "CSS", "JavaScript" ,"expressJs", "Node.js", "MongoDB","BootStrap"],
  },
  {
    title: "Simon Says Game",
    link:"https://omtewari.github.io/simon-says-game/",
    image: project2,
    description:
      "Simon Says is a classic memory and pattern recognition game enjoyed by children and adults alike.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Portfolio Website",
     image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React","Tailwind"],
  },
  
  {
    title: "Music NextJs-frontend",
    link:"https://music-nextjs-frontend-1.onrender.com",
    image: project4, // Replace with the actual image variable or path
    description:
      "A music app frontend built with Next.js, featuring a modern interface, dynamic content, and optimized performance using TypeScript and Tailwind CSS.",
    technologies: ["Next.js", "React", "Tailwind CSS","TypeScript"]// Replace Vercel with the actual deployment platform if different
  }
];

export const CONTACT = {
  address: "801 Ganga Apartment , Kaushambi,UP",
  phoneNo: "+91 8287385118 ",
  email: "omtewari106@gmail.com",
};
