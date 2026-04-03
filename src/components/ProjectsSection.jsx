import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const projects = [
  {
    id: 1,
    title: "Patient Management System",
    description:
      "A full-stack web application integrating Twilio for SMS notifications. Enables hospitals to manage patient records and communication efficiently with role-based access.",
    image: "/project1.webp",
    tags: [
      { name: "Next.js", color: "bg-slate-700" },
      { name: "TypeScript", color: "bg-blue-600" },
      { name: "Twilio", color: "bg-red-500" },
      { name: "Tailwind CSS", color: "bg-cyan-500" },
      { name: "Appwrite", color: "bg-pink-500" },
    ],
    demoUrl: "https://izzy-care-3kmb.vercel.app/",
    githubUrl: "https://github.com/izzypositivetech-001/IzzyCare.git",
  },
  {
    id: 2,
    title: "Afroluxe",
    description:
      "Full-stack e-commerce platform built for a premium hair brand. Includes secure authentication, role-based access control, and a scalable architecture designed for global growth.",
    image: "/afroluxe.no_portfolio.webp",
    tags: [
      { name: "Next.js", color: "bg-slate-700" },
      { name: "React", color: "bg-blue-500" },
      { name: "Node.js", color: "bg-green-600" },
      { name: "MongoDB", color: "bg-green-500" },
      { name: "RBAC", color: "bg-indigo-500" },
    ],
    demoUrl: "https://www.afroluxe.no/",
    githubUrl: "https://github.com/izzypositivetech-001/afroluxe-frontend.git",
  },
  {
    id: 3,
    title: "AI Resume Analyzer",
    description:
      "Career-focused web application that utilizes AI for intelligent resume evaluation. Helps users track applications and identify weaknesses to improve their success chances.",
    image: "/resume_analyzer.webp",
    tags: [
      { name: "React", color: "bg-blue-500" },
      { name: "Node.js", color: "bg-green-600" },
      { name: "AI", color: "bg-purple-500" },
    ],
    demoUrl: "https://resume-analyzer-amber.vercel.app/",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Productivity Management System",
    description:
      "Full-stack task management system enabling users to organize tasks with real-time updates. Focuses on efficient state handling and a robust user-specific backend architecture.",
    image: "/product_manager.webp",
    tags: [
      { name: "React", color: "bg-blue-500" },
      { name: "Node.js", color: "bg-green-600" },
      { name: "Express", color: "bg-gray-500" },
      { name: "MongoDB", color: "bg-green-500" },
    ],
    demoUrl: "https://task-manager-client-virid.vercel.app/login",
    githubUrl:
      "https://github.com/izzypositivetech-001/task-manager-client.git",
  },
  {
    id: 5,
    title: "Modern Restaurant App",
    description:
      "Responsive restaurant web app featuring an elegant UI design and interactive menus. Built to showcase brand identity with smooth animations and a premium look and feel.",
    image: "/modern-restaurant.webp",
    tags: [
      { name: "React", color: "bg-blue-500" },
      { name: "JavaScript", color: "bg-yellow-500" },
      { name: "Tailwind CSS", color: "bg-cyan-500" },
    ],
    demoUrl: "https://modern-restaurant-teal.vercel.app/",
    githubUrl: "https://github.com/izzypositivetech-001/modern-restaurant.git",
  },
  {
    id: 6,
    title: "Davido Interactive Experience",
    description:
      "Visually immersive web experience inspired by Davido. Explores creative frontend engineering through scroll-based storytelling, dynamic transitions, and GSAP animations.",
    image: "/davido_.webp",
    tags: [
      { name: "React", color: "bg-blue-500" },
      { name: "Vite", color: "bg-purple-500" },
      { name: "GSAP", color: "bg-green-500" },
      { name: "Tailwind CSS", color: "bg-cyan-500" },
    ],
    demoUrl: "https://davido-app.vercel.app/",
    githubUrl: "https://github.com/izzypositivetech-001/davido-app.git",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container max-w-5xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            creativity. Each project is a testament to my dedication to building
            high-quality software solutions.
            <br />
            Click on the project titles to view the live demos and source code.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ScrollReveal
              delay={index * 0.15}
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  width={400}
                  height={192}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag.name}
                      className={`${tag.color} text-white text-xs px-2 py-1 rounded-full`}
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.demoUrl}
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink /> Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github /> GitHub
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3} className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            href="https://github.com/izzypositivetech-001"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
};
