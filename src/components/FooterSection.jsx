import { ArrowUp, Github, Linkedin, Twitter, Mail } from "lucide-react";

export const FooterSection = () => {
  return (
    <footer className="bg-card border-t border-border mt-12 pt-16 pb-8 px-4">
      <div className="container max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand & Tagline */}
          <div className="md:col-span-2 space-y-4">
            <a
              href="#hero"
              className="text-2xl font-bold text-primary whitespace-nowrap inline-block"
            >
              <span className="text-glow text-foreground">IzzyTech</span>{" "}
              Portfolio
            </a>
            <p className="text-muted-foreground max-w-sm">
              Building scalable, user-centric web applications. Turning complex
              problems into elegant, modern digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/adewale-gbadebo-717867350/"
                aria-label="LinkedIn"
                className="p-2 rounded-full bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/izzypositivetech-001"
                aria-label="GitHub"
                className="p-2 rounded-full bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://x.com/Gbadeb16Adewale"
                aria-label="Twitter"
                className="p-2 rounded-full bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="mailto:izzypositivetech@gmail.com"
                aria-label="Email"
                className="p-2 rounded-full bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border/50">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} IzzyTech. All rights reserved.
          </p>
          <a
            href="#hero"
            aria-label="Back to top"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Back to Top
            <ArrowUp
              size={20}
              className="p-1 rounded-full bg-primary/10 text-primary"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};
