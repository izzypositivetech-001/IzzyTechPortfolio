import { Code, User, Download, BookOpen } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";


export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container max-w-5xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            About <span className="text-primary"> Me</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <ScrollReveal delay={0.2} className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Bridging the gap between ideas and reality
            </h3>
            <p className="text-muted-foreground">
              My tech journey started with a fascination for how digital systems
              solve real-world problems. Today, I focus on building scalable
              full-stack applications. I enjoy architecting systems from the
              database layer all the way up to responsive, pixel-perfect user
              interfaces.
            </p>
            <p className="text-muted-foreground">
              Whether it's developing healthcare platforms, e-commerce
              solutions, or interactive web experiences, my goal is always to
              deliver value through clean code and intuitive design.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 md:justify-start justify-center">
              <a href="#contact" className="cosmic-button text-center">
                Get in Touch
              </a>
              <a
                href="/Gbadebo_Adewale_CV_2026.pdf"
                download="Gbadebo_Adewale_Resume.pdf"
                className="flex items-center gap-2 px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 justify-center"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4} className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold">
                    Software Development
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Building responsive and user-friendly web applications.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold">User Experience</h4>
                  <p className="text-sm text-muted-foreground">
                    Creating intuitive and engaging user experiences.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold">Currently Learning</h4>
                  <p className="text-sm text-muted-foreground">
                    Deepening my knowledge in system architecture, Docker, and AWS deployments.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
