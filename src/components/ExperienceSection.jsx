import { Briefcase, GraduationCap } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const experiences = [
  {
    title: "Full-Stack Developer",
    company: "Freelance & Open Source",
    date: "2023 - Present",
    description:
      "Built scalable web applications for various clients using React, Next.js, and Node.js. Architected databases, implemented secure authentication, and deployed to cloud platforms.",
    type: "work",
    icon: <Briefcase className="h-5 w-5" />,
  },
  {
    title: "Frontend Developer Intern",
    company: "Tech Startup",
    date: "2022 - 2023",
    description:
      "Collaborated with a team of developers to build and maintain responsive user interfaces. Improved site performance and implemented best practices for accessibility.",
    type: "work",
    icon: <Briefcase className="h-5 w-5" />,
  },
  {
    title: "Software Engineering Program",
    company: "Tech Bootcamp / Self-Taught",
    date: "2021 - 2022",
    description:
      "Completed an intensive curriculum focused on full-stack web development. Mastered JavaScript, React, Node.js, and modern software design principles.",
    type: "education",
    icon: <GraduationCap className="h-5 w-5" />,
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            My <span className="text-primary">Journey</span>
          </h2>
        </ScrollReveal>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <ScrollReveal key={index} delay={index * 0.2} className="relative pl-8 md:pl-0">
              <div className="md:grid flex flex-col md:grid-cols-5 md:gap-8 items-start relative">
                {/* Timeline Line (Desktop) */}
                <div className="hidden md:absolute md:block left-[20%] top-0 bottom-0 w-px bg-border -ml-px h-full"></div>

                {/* Left Side (Date & Icon) */}
                <div className="md:col-span-1 flex flex-row md:flex-col md:items-end justify-between md:justify-start pt-1 md:pr-8 mb-2 md:mb-0 w-full relative z-10">
                  <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full w-fit">
                    {exp.date}
                  </span>

                  {/* Icon Node */}
                  <div className="absolute -left-10 md:-right-4 md:left-auto top-1 flex h-8 w-8 items-center justify-center rounded-full bg-background border-2 border-primary text-primary z-10">
                    {exp.icon}
                  </div>
                </div>

                {/* Right Side (Content) */}
                <div className="md:col-span-4 bg-card p-6 rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                  <p className="text-muted-foreground font-medium mb-4">
                    {exp.company}
                  </p>
                  <p className="text-muted-foreground/80 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>

              {/* Mobile Timeline Line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-[15px] top-10 bottom-[-32px] w-px bg-border md:hidden"></div>
              )}
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
