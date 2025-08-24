import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "keswani999@gmail.com",
      link: "mailto:keswani999@gmail.com"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "9579955252",
      link: "tel:+919579955252"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location", 
      value: "Ulhasnagar, Thane",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      username: "Lokesh-Keswani",
      link: "https://github.com/Lokesh-Keswani"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn", 
      username: "Lokesh Keswani",
  link: "https://www.linkedin.com/in/lokesh-keswani-13325a351"
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate on your next project? Let's discuss how we can bring your ideas to life with cutting-edge technology.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="p-8 bg-muted/30 border-border hover:shadow-glow transition-smooth">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target={info.link.startsWith('mailto:') || info.link.startsWith('tel:') ? undefined : '_blank'}
                    rel={info.link.startsWith('mailto:') || info.link.startsWith('tel:') ? undefined : 'noopener noreferrer'}
                    className="flex items-center group"
                  >
                    <div className="p-3 rounded-lg bg-primary/10 text-primary mr-4 group-hover:bg-primary/20 transition-smooth">
                      {info.icon}
                    </div>
                    <div>
                      <p className="font-medium">{info.label}</p>
                      <p className="text-muted-foreground group-hover:text-primary transition-smooth">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            {/* Social Links */}
            <Card className="p-8 bg-muted/30 border-border hover:shadow-glow transition-smooth">
              <h3 className="text-2xl font-bold mb-6">Find me online</h3>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <div key={index} className="flex items-center justify-between group">
                    <div className="flex items-center">
                      <div className="p-3 rounded-lg bg-accent/10 text-accent mr-4 group-hover:bg-accent/20 transition-smooth">
                        {social.icon}
                      </div>
                      <div>
                        <p className="font-medium">{social.label}</p>
                        <p className="text-muted-foreground">{social.username}</p>
                      </div>
                    </div>
                    <a href={social.link} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="transition-bounce hover:scale-105">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </a>
                  </div>
                ))}
              </div>
            </Card>

            {/* Availability */}
            <Card className="p-8 bg-gradient-primary/5 border-primary/20 hover:shadow-glow-primary transition-smooth">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-bold mb-2">Available for hire</h4>
                  <p className="text-muted-foreground">
                    Open to freelance projects and full-time opportunities
                  </p>
                </div>
                <Badge className="bg-primary text-primary-foreground">
                  Open
                </Badge>
              </div>
            </Card>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-20 text-center">
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="space-y-2">
              <div className="text-3xl font-bold gradient-text">24h</div>
              <p className="text-muted-foreground">Average Response Time</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold gradient-text">100%</div>
              <p className="text-muted-foreground">Project Success Rate</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold gradient-text">5★</div>
              <p className="text-muted-foreground">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;