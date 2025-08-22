import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import profileImage from "@/assets/lokesh-profile.jpeg";
const Hero = () => {
  // Prefilled mailto link to match Footer
  const mailto = `mailto:keswani999@gmail.com?subject=${encodeURIComponent(
    'Portfolio inquiry'
  )}&body=${encodeURIComponent(
    'Hello Lokesh,%0A%0AI came across your portfolio and would like to connect about a potential opportunity.%0A%0APlease let me know a good time to chat.%0A%0AThanks,%0A'
  )}`;

  // Smooth scroll helper for CTAs
  const scrollToSection = (href: string) => {
    const el = document.querySelector(href === '#home' ? 'body' : href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-secondary opacity-50" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 relative inline-block">
            <div className="w-48 h-48 mx-auto rounded-full p-1 bg-gradient-primary">
              <img
                src={profileImage}
                alt="Lokesh Keswani"
                className="w-full h-full rounded-full object-cover shadow-glow"
              />
            </div>
            <div className="absolute -bottom-2 -right-2">
              <Badge variant="secondary" className="bg-accent text-accent-foreground shadow-glow-accent">
                Available for hire
              </Badge>
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 transition-smooth">
            <span className="gradient-text">Lokesh Keswani</span>
          </h1>

          <p className="text-2xl md:text-3xl text-muted-foreground mb-4">
            Software Developer & AI Enthusiast
          </p>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Transforming ideas into intelligent digital solutions. Specialized in full-stack development,
            AI/ML applications, and creating exceptional user experiences.
          </p>

          {/* Skills Tags */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {['JavaScript', 'React', 'Node.js', 'Python', 'AI/ML', 'Next.js'].map((skill) => (
              <Badge key={skill} variant="outline" className="transition-bounce hover:scale-110">
                {skill}
              </Badge>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              variant="hero"
              size="lg"
              className="group"
              onClick={() => scrollToSection('#projects')}
            >
              View My Work
              <ExternalLink className="ml-2 h-4 w-4 transition-smooth group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="transition-bounce hover:scale-105"
              onClick={() => scrollToSection('#contact')}
            >
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-16">
            <a href="https://github.com/Lokesh-Keswani" className="text-muted-foreground hover:text-primary transition-smooth hover:scale-110">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/lokesh-keswani-13325a351/" className="text-muted-foreground hover:text-accent transition-smooth hover:scale-110">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href={mailto} className="text-muted-foreground hover:text-primary transition-smooth hover:scale-110">
              <Mail className="h-6 w-6" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown className="h-6 w-6 text-muted-foreground mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;