import { calculateYearsFromNow } from "@/lib/date";
import { ArrowRight, Github, Linkedin, Instagram } from "lucide-react";

export const siteConfig = {
  name: "Yusup Maulana",
  avatar: "https://yusup-assets.s3.ap-southeast-1.amazonaws.com/avatar.png",
  role: "Senior Fullstack Developer",
  description: `With ${calculateYearsFromNow(
    "2019-02-11"
  )} years of experience building robust web applications. Specialized in creating modern, high-performance solutions with cutting-edge technologies.`,
  navItems: [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ],
  resume: {
    url: "https://yusup-assets.s3.ap-southeast-1.amazonaws.com/Yusup_Maulana_Resume.pdf",
    filename: "Yusup_Maulana_Resume.pdf",
    image: "https://yusup-assets.s3.ap-southeast-1.amazonaws.com/avatar+work.jpeg"
  },
  socials: [
    {
      name: "GitHub",
      href: "https://github.com/yusupscopes",
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/yusup-maulana-878989172",
      icon: Linkedin,
    },
    {
      name: "Instagram",
      href: "https://instagram.com/yusupreads",
      icon: Instagram,
    },
  ],
  experiences: [
    {
      title: "Senior Software Engineer",
      company: "PT Kokatto Teknologi Global",
      period: "2021 - Present",
      description:
        "Designed and developed scalable backend architectures using NestJS and Node.js, implemented RESTful APIs, optimized database performance with MongoDB, integrated AWS services (Lambda, S3, DynamoDB), and ensured best practices in system design, security, and DevOps.",
      technologies: ["Go", "Python", "Node.js", "TypeScript", "AWS", "DynamoDB"],
    },
    {
      title: "Junior Software Engineer",
      company: "PT Kokatto Teknologi Global",
      period: "2019 - 2021",
      description:
        "Developed and maintained multiple client projects. Collaborated with design and product teams to deliver high-quality web applications.",
      technologies: ["Vue.js", "Node.js", "Java", "Spring Boot", "MySQL", "Docker"],
    }
  ]
};
