import { ArrowDown } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 pt-24 pb-12"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-4 md:space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Gbadebo
            </span>
            <span className="text-gradient ml-1 sm:ml-2 opacity-0 animate-fade-in-delay-2">
              Adewale
            </span>
          </h1>

          {/* Profile Image */}
          <div className="flex justify-center opacity-0 animate-fade-in-delay-3">
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-primary/20">
              <img
                src="/profile.webp"
                alt="Gbadebo Adewale"
                width={224}
                height={224}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-foreground/80 mb-2 h-8 sm:h-10">
            <span className="opacity-0 animate-fade-in-delay-4">
              <Typewriter
                words={['Full-Stack Software Engineer', 'React Ecosystem Specialist', 'Node.js Developer']}
                loop={true}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-4">
            I architect and build scalable web applications with a focus on
            modern user experiences and robust backend systems. I specialize in
            the React ecosystem, Node.js, and crafting products that solve
            real-world problems.
          </p>
        </div>
        <div className="pt-6 md:pt-8 opacity-0 animate-fade-in-delay-5">
          <a
            href="#projects"
            className="inline-block cosmic-button px-6 py-3 text-sm sm:text-base"
          >
            View Projects
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-xs sm:text-sm text-muted-foreground mb-1 sm:mb-2">
          Scroll
        </span>
        <ArrowDown className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
      </div>
    </section>
  );
};
