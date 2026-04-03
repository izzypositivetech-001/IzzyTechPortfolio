import { Layout, Server, Settings } from "lucide-react";

export const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Layout className="h-6 w-6 text-primary mb-4" />,
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML/CSS",
      "Redux",
      "Framer Motion",
    ],
  },
  {
    title: "Backend Development",
    icon: <Server className="h-6 w-6 text-primary mb-4" />,
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "GraphQL",
      "REST APIs",
      "Firebase",
      "Appwrite",
    ],
  },
  {
    title: "Tools & DevOps",
    icon: <Settings className="h-6 w-6 text-primary mb-4" />,
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Vercel",
      "VS Code",
      "Postman",
      "Figma",
    ],
  },
];
