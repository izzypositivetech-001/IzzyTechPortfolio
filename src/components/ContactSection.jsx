import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Instagram,
  Send,
} from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {
    // State to manage form submission status
    const [isSubmitting, setIsSubmitting] = React.useState(false);
       
    const toast = useToast();
    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        setIsSubmitting(true); // Set submitting state to true

        setTimeout(() => {
            // Show a success toast message after form submission
            toast({
                title: "Success",
                description: "Your message has been sent successfully.",
            })
            setIsSubmitting(false); // Reset submitting state after submission
            alert("Form submitted successfully!");
        }, 1500); // Simulate a delay of 1.5 seconds
    };
  return (
    <section className="py-24 px-4 relative bg-secondary/30" id="contact">
      <div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-4">
          Get In <span className="text-primary"> Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision. Whether you have a question,
          a project in mind, or just want to say hi, feel free to reach out!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl semi-bold text-center mb-6">
              Contact Information
            </h3>
            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />{" "}
                </div>
                <h4 className="font-medium"> Email</h4>
                <a
                  href="mailto:izzypositivetech@gmail.com"
                  className="text-muted-foreground/80 hover:text-primary transition-colors duration-300"
                >
                  izzypositivetech
                </a>
              </div>
            </div>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />{" "}
                </div>
                <h4 className="font-medium"> Phone</h4>
                <a
                  href="tel:+2347059803461"
                  className="text-muted-foreground/80 hover:text-primary transition-colors duration-300"
                >
                  +234 705 980 3461
                </a>
              </div>
            </div>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />{" "}
                </div>
                <h4 className="font-medium"> Location</h4>
                <a
                  href="mailto:izzypositivetech@gmail.com"
                  className="text-muted-foreground/80 hover:text-primary transition-colors duration-300"
                >
                  MainLand, Lagos, Nigeria
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <h4 className="font-medium mb-4">Connect With Me</h4>
            <div className="flex space-x-4 justify-center">
              <a href="#">
                <Linkedin />
              </a>
              <a href="#">
                <Github />
              </a>
              <a href="#">
                <Twitter />
              </a>
              <a href="#">
                <Instagram />
              </a>
            </div>
          </div>
        </div>
        <div className="bg-card p-8 rounded-lg shadow-xs" onSubmit={handleSubmit}>
          <h4 className="font-medium mb-6 ">Send Me a Message</h4>
          <form
            action="https://formspree.io/f/xjvjlqzj"
            method="POST"
            className="space-y-6"
          >
            <label htmlFor="name" className="w-full px-4 py-3 rounded-md border-input bg-background focus:outline-hidden">
              {" "}
              Your Name
            </label>
            <input
                id="name"
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 mt-4 rezize-none"
            />
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Your Email
            </label>
            <input
            id="email"
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Your Message
            </label>
            <textarea
              name="message"
              rows="4"
              placeholder="Hello, I would like to talk about ..."
              required
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
            ></textarea>
            <button
              type="submit"
                disabled={isSubmitting} // Disable button when submitting
              className={cn("cosmic-button w-full flex items-center  justify-center gap-2",
                )}
            >
             {isSubmitting  ? "Sending..." : "Send Message" }
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
