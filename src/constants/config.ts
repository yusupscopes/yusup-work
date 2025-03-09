import { calculateYearsFromNow } from "@/lib/date";

export const siteConfig = {
  name: "Yusup Maulana",
  role: "Senior Fullstack Developer",
  MetaDescription: `Portfolio website of Yusup Maulana, a senior fullstack developer with ${calculateYearsFromNow(
    "2019-02-11"
  )} years of experience`,
};

export const siteNavLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];
