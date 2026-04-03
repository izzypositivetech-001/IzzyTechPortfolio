import { cn } from "@/lib/utils";
import { Layout, Server, Settings } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const skillCategories = [
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

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <ScrollReveal>
          <h2 className="text-3xl font-bold md:text-4xl mb-12 text-center">
            My <span className="text-primary"> Skills</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <ScrollReveal
              key={index}
              delay={index * 0.2}
              className="bg-card p-8 rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow card-hover"
            >
              <div className="flex flex-col items-center text-center">
                {category.icon}
                <h3 className="font-semibold text-xl mb-6">{category.title}</h3>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-secondary/50 text-foreground px-3 py-1.5 rounded-lg text-sm font-medium border border-border/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
