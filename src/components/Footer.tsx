import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Prefilled mailto link that opens a draft with subject and starter body
  const mailto = `mailto:keswani999@gmail.com?subject=${encodeURIComponent(
    'Portfolio inquiry'
  )}&body=${encodeURIComponent(
    'Hello Lokesh,%0A%0AI came across your portfolio and would like to connect about a potential opportunity.%0A%0APlease let me know a good time to chat.%0A%0AThanks,%0A'
  )}`;

  return (
    <footer className="py-16 border-t border-border bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">Lokesh Keswani</h3>
            <p className="text-muted-foreground leading-relaxed">
              Software Developer passionate about creating intelligent digital solutions
              that make a difference. Always learning, always building.
            </p>
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="bg-primary/10 text-primary">Available for hire</Badge>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {[
                'About', 'Skills', 'Projects', 'Blog', 'Contact', 'Resume'
              ].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-muted-foreground hover:text-primary transition-smooth text-sm"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Let's Connect</h4>
            <div className="space-y-3">
              <a
                href={mailto}
                className="flex items-center text-muted-foreground hover:text-primary transition-smooth group"
              >
                <Mail className="h-4 w-4 mr-3" />
                keswani999@gmail.com
              </a>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Lokesh-Keswani"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-muted-foreground hover:text-primary transition-smooth hover:scale-110"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/lokesh-keswani-13325a351/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-muted-foreground hover:text-accent transition-smooth hover:scale-110"
                >
                  <Linkedin className="h-5 w-5" />
                </a>

              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0 flex items-center">
            Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> by Lokesh Keswani
            <span className="ml-2">© 2024 All rights reserved</span>
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center text-muted-foreground hover:text-primary transition-smooth group"
          >
            <span className="text-sm mr-2">Back to top</span>
            <ArrowUp className="h-4 w-4 group-hover:-translate-y-1 transition-smooth" />
          </button>
        </div>

        {/* Tech Stack */}
        <div className="mt-8 text-center">
          <p className="text-xs text-muted-foreground mb-2">Built with</p>
          <div className="flex justify-center gap-2 flex-wrap">
            {['React', 'TypeScript', 'Tailwind CSS', 'Vite'].map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;