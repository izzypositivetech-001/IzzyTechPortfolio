import { Quote } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const testimonials = [
  {
    id: 1,
    content: "Gbadebo is an exceptional frontend developer. He has a keen eye for UI/UX details and consistently delivers clean, maintainable code. His work on our real-time dashboard significantly improved our system's performance.",
    author: "Sarah Johnson",
    role: "Lead Engineer/Manager",
    initials: "SJ"
  },
  {
    id: 2,
    content: "Working with Gbadebo on the Afroluxe platform was a seamless experience. He translated complex business requirements into a robust Node.js backend. His approach to role-based access control was exactly what we needed.",
    author: "David Okonkwo",
    role: "Product Owner",
    initials: "DO"
  },
  {
    id: 3,
    content: "A highly dedicated and resilient software engineer. During his time at the bootcamp, Gbadebo stood out by building production-ready projects and always being eager to tackle difficult backend architectural challenges.",
    author: "Michael Adebayo",
    role: "Senior Mentor",
    initials: "MA"
  }
];

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 px-4 relative bg-secondary/10">
      <div className="container max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What People <span className="text-primary">Say</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I've had the privilege of working with amazing teams and individuals. 
              Here is what some of them have to say about our collaboration.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal delay={index * 0.2} key={testimonial.id}>
              <div className="bg-card p-8 rounded-2xl shadow-sm border border-border relative h-full flex flex-col">
                <Quote className="absolute top-6 right-6 text-primary/20 h-12 w-12" />
                <p className="text-muted-foreground italic mb-8 relative z-10 flex-grow">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    {testimonial.initials}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.author}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
