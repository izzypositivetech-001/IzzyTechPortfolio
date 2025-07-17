import { ArrowRight, ExternalLink, Github, Tags } from 'lucide-react';
import React from 'react';

const projects = [
    {
        id: 1,
        title: "Patient Management System",
        description: "A full-stack web application built with Next.js, TypeScript, and Tailwind CSS, integrating Twilio for SMS notifications. It enables hospitals to manage patient records, appointments, and communication efficiently with secure, role-based access.",
        image: "/project1.png",
        tags: [  
            { name: "Nextjs", color: "bg-blue-500" },
            { name: "TypeScript", color: "bg-yellow-500" },
            { name: "Twillo", color: "bg-green-500" },
            { name: "Tailwind CSS", color: "bg-purple-500" },
            { name: "Appwrite", color: "bg-red-500" },
        ],
        demoUrl: "https://example.com/demo1",
        githubUrl: "#",
    },

    {
        id: 2,
        title: "Fintech web app",
        description: "A full functional online banking platform, built with React , Nextjs and Node.js.",
        image: "/project2.PNG",
        tags: [
            { name: "React", color: "bg-blue-500" },
            { name: "Node.js", color: "bg-green-500" },
            { name: "Express", color: "bg-yellow-500" },
            { name: "MongoDB", color: "bg-purple-500" },
            { name: "Nextjs", color: "bg-gray-500" },
        ],
        demoUrl: "https://example.com/demo2",
        githubUrl: "#",
    }
,
    {
        id: 3,
        title: "Cosmetic App",
        description: "A Landing Page For Cosmetic clinic",
        image: "/cosmetic.png",
        tags: [
            { name: "React", color: "bg-blue-500" },
            { name: "Node.js", color: "bg-green-500" },
            { name: "Tailwind CSS", color: "bg-red-500" },
        ],
        demoUrl: "https://cosmetic-teal.vercel.app/",
        githubUrl: "https://github.com/izzypositivetech-001/cosmetic.git",
    },
    {
        id: 4,
        title: "Complete MERN Authentication System With Password Reset, Email Verification, JWT authentication",
        description: "A complete MERN stack application with user authentication, password reset, and email verification.",
        image: "/project4.PNG",
        tags: [
            { name: "React", color: "bg-blue-500" },
            { name: "Node.js", color: "bg-green-500" },
            { name: "Express", color: "bg-yellow-500" },
            { name: "MongoDB", color: "bg-purple-500" },
            { name: "JWT", color: "bg-red-500" },
        ],
        demoUrl: "https://example.com/demo4",
        githubUrl: "#",
    },
    {
        id:5,
        title: "React admin dashboard",
        description: "A responsive admin dashboard template built with React and Tailwind CSS.",
        image: "/project5.PNG",
        tags: [
            { name: "React", color: "bg-blue-500" },
            { name: "Tailwind CSS", color: "bg-green-500" },
            { name: "JavaScript", color: "bg-yellow-500" },
           
            { name: "CSS", color: "bg-red-500" },
        ],
        demoUrl: "https://admin-dashboard-beta-ten-51.vercel.app",
        githubUrl: "https://github.com/izzypositivetech-001/admin-dashboard.git",
    },
    {
        id:6,
        title: "Modern Startup Landing Page",
        description: "A sleek and responsive landing page built with React, Framer Motion, Swiper, and Tailwind CSS. It features smooth animations,  a carousel for testimonials or features, and a modern layout designed to capture user attention and boost engagement."
        ,
        image: "/modern.png",
        tags: [
            { name: "React", color: "bg-blue-500" },
            { name: "Tailwind CSS", color: "bg-green-500" },
            { name: "JavaScript", color: "bg-yellow-500" },
        ],
        demoUrl: "https://modern-landingpage-brown.vercel.app/",
        githubUrl: "https://github.com/izzypositivetech-001/modern-landingpage.git",
    }
];

export const ProjectsSection = () => {
  return (
    <section id='projects' className='py-24 px-4 relative'>
      <div className='container max-w-5xl mx-auto'>
        <h2 className='text-3xl md:text-4xl font-bold text-center mb-4'>
          Featured <span className='text-primary'>Projects</span>
        </h2>

        <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
          Here are some of my recent projects that showcase my skills and creativity.
          Each project is a testament to my dedication to building high-quality software solutions.
          <br />
          Click on the project titles to view the live demos and source code.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3'>
            {projects.map((project) => (
                <div key={project.id} className='group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow'>
                    <div className='h-48 overflow-hidden'>
                        <img 
                            src={project.image}
                            alt={project.title} 
                            className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                        />
                    </div>
                    <div className='p-6'>
                        <h3 className='text-xl font-bold mb-2'>{project.title}</h3>
                        <p className='text-muted-foreground mb-4'>{project.description}</p>
                        <div className='flex flex-wrap gap-2 mb-4'>
                            {project.tags.map((tag) => (
                                <span 
                                    key={tag.name} 
                                    className={`${tag.color} text-white text-xs px-2 py-1 rounded-full`}
                                >
                                    {tag.name}
                                </span>
                            ))}
                        </div>
                        <div className='flex space-x-4'>
                            <a 
                                href={project.demoUrl} 
                                className='text-foreground/80 hover:text-primary transition-colors duration-300'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                              <ExternalLink />  Live Demo
                            </a>
                            <a 
                                href={project.githubUrl} 
                                className='text-foreground/80 hover:text-primary transition-colors duration-300'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                              <Github />  GitHub
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        <div className='text-center mt-12'>
            <a 
                className='cosmic-button w-fit flex items-center mx-auto gap-2'
                href="https://github.com/izzypositivetech-001" 
               
            >
                Check My Github <ArrowRight size={16} />
            </a>

        </div>
      </div>
    </section>
  );
};