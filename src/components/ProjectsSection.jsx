import { ArrowRight, ExternalLink, Github, Tags } from "lucide-react";
import React from "react";

const projects = [
  {
    id: 1,
    title: "Patient Management System",
    description:
      "A full-stack web application built with Next.js, TypeScript, and Tailwind CSS, integrating Twilio for SMS notifications. It enables hospitals to manage patient records, appointments, and communication efficiently with secure, role-based access.",
    image: "/project1.png",
    tags: [
      { name: "Nextjs", color: "bg-blue-500" },
      { name: "TypeScript", color: "bg-yellow-500" },
      { name: "Twillo", color: "bg-green-500" },
      { name: "Tailwind CSS", color: "bg-purple-500" },
      { name: "Appwrite", color: "bg-red-500" },
    ],
    demoUrl: "https://izzy-care-3kmb.vercel.app/",
    githubUrl: "https://github.com/izzypositivetech-001/IzzyCare.git",
  },

  {
    id: 2,
    title: "Afroluxe",
    description:
      "Afroluxe is a full-stack e-commerce platform built for a Norway-based premium hair brand, focused on delivering culturally relevant products to a global audience. The system includes secure authentication, role-based access control (RBAC) for admin operations, real-time order tracking, and a scalable backend architecture designed for growth.",
    image: "/afroluxe.no_portfolio.png",
    tags: [
      { name: "Next.js", color: "bg-gray-500" },
      { name: "React", color: "bg-blue-500" },
      { name: "Node.js", color: "bg-green-600" },
      { name: "Express", color: "bg-yellow-500" },
      { name: "MongoDB", color: "bg-purple-500" },
      { name: "RBAC", color: "bg-red-500" },
    ],
    demoUrl: "https://www.afroluxe.no/",
    githubUrl: "https://github.com/izzypositivetech-001/afroluxe-frontend.git",
  },
  {
    id: 3,
    title: "AI Resume Analyzer",
    description:
      "A career-focused web application that enables users to track job applications and receive AI-assisted resume feedback. The platform combines application analytics with intelligent resume evaluation to help users identify weaknesses and improve their chances of success.",
    image: "/resume_analyzer.png",
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
  description: "A full-stack task management system that enables users to create, organize, and track tasks with real-time updates and structured workflows. The application focuses on efficient state handling, responsive UI, and a scalable backend for managing user-specific data.",
  image: "/product_manager.png",
  tags: [
    { name: "React", color: "bg-blue-500" },
    { name: "Node.js", color: "bg-green-600" },
    { name: "MongoDB", color: "bg-green-500" },
    { name: "Express", color: "bg-yellow-500" },
  ],
  demoUrl: "https://task-manager-client-virid.vercel.app/login",
  githubUrl: "https://github.com/izzypositivetech-001/task-manager-client.git",
},
  {
    id: 5,
    title: "Modern Restaurant App",
    description:
      "A modern and responsive restaurant web app built with React, featuring an elegant design, interactive menu, and smooth user experience. Designed to showcase a restaurant brand with style and functionality.",
    image: "/modern-restaurant.png",
    tags: [
      { name: "React", color: "bg-blue-500" },
      { name: "Tailwind CSS", color: "bg-green-500" },
      { name: "JavaScript", color: "bg-yellow-500" },

      { name: "CSS", color: "bg-red-500" },
    ],
    demoUrl: "https://modern-restaurant-teal.vercel.app/",
    githubUrl: "https://github.com/izzypositivetech-001/modern-restaurant.git",
  },
 {
  id: 6,
  title: "Davido Interactive Experience",
  description: "A visually immersive web experience inspired by Davido, focused on scroll-based storytelling and high-performance animations using GSAP. The project explores creative frontend engineering through dynamic transitions, custom typography, and interactive UI elements.",
  image: "/davido_.png",
  tags: [
    { name: "React", color: "bg-blue-500" },
    { name: "Vite", color: "bg-purple-500" },
    { name: "GSAP", color: "bg-green-500" },
    { name: "Tailwind", color: "bg-cyan-500" },
  ],
  demoUrl: "https://davido-app.vercel.app/",
  githubUrl: "https://github.com/izzypositivetech-001/davido-app.git",
}
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills and
          creativity. Each project is a testament to my dedication to building
          high-quality software solutions.
          <br />
          Click on the project titles to view the live demos and source code.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
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
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            href="https://github.com/izzypositivetech-001"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
