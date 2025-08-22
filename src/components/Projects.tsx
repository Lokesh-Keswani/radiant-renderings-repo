import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Zap, Heart, Brain, BookOpen, BarChart } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AdmyBRAND Insights",
      description: "AI-Powered Analytics Dashboard built with React, TypeScript, Node.js, and WebSockets. Features real-time KPI metrics, interactive charts, campaign performance tracking, and data-driven insights with modern UI/UX and auto-reconnection.",
      icon: <BarChart className="h-6 w-6" />,
      tech: ["React", "TypeScript", "Node.js", "WebSockets", "Charts"],
      link: "https://admybrand-dash-nova-jfwg.vercel.app/",
      github: "#",
      featured: true
    },
    {
      title: "Synapse - AI Knowledge Graphs",
      description: "AI-powered platform that explores entities & relationships through interactive visualizations. Features flowcharts, mind maps, smart document analysis, auto-extracts text & metadata for graph creation, and advanced tools for knowledge mapping.",
      icon: <Brain className="h-6 w-6" />,
      tech: ["AI/ML", "Knowledge Graphs", "Data Visualization", "NLP"],
      link: "#",
      github: "#",
      featured: true
    },
    {
      title: "HealthMate",
      description: "Full-stack AI-powered health and wellness web application designed to help users take control of their fitness journey. Features personalized chatbot, diet generator, and workout generators tailored to user's goals and health conditions.",
      icon: <Heart className="h-6 w-6" />,
      tech: ["AI", "Health Tech", "Personalization", "Full Stack"],
      link: "#",
      github: "#",
      featured: false
    },
    {
      title: "Todo List Web App",
      description: "Responsive and interactive Todo List web app using HTML, CSS, and JavaScript. Features for adding, editing, deleting, and marking tasks as complete. Enhanced UX with intuitive controls and real-time updates.",
      icon: <Zap className="h-6 w-6" />,
      tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      link: "#",
      github: "#",
      featured: false
    },
    {
      title: "MAKE ME GENIUS",
      description: "Educational Resource Website developed as a user-friendly web platform providing curated study materials. Features organized navigation, interactive elements for Mathematics, Science, and English, with accessible interface for students.",
      icon: <BookOpen className="h-6 w-6" />,
      tech: ["Education", "Web Development", "UI/UX", "Interactive Design"],
      link: "#",
      github: "#",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of innovative solutions built with modern technologies and AI integration
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card key={index} className="p-8 bg-muted/30 border-border hover:shadow-glow transition-smooth group">
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary mr-4 group-hover:bg-primary/20 transition-smooth">
                  {project.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                  <Badge variant="secondary" className="bg-primary/10 text-primary">Featured</Badge>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="outline" className="transition-bounce hover:scale-105">
                    {tech}
                  </Badge>
                ))}
              </div>
              
              <div className="flex gap-4">
                <Button className="bg-gradient-primary hover:shadow-glow transition-smooth group/btn">
                  <ExternalLink className="mr-2 h-4 w-4 transition-smooth group-hover/btn:translate-x-1" />
                  Live Demo
                </Button>
                <Button variant="outline" className="transition-bounce hover:scale-105">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-center mb-8">
            Other <span className="gradient-text">Projects</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <Card key={index} className="p-6 bg-muted/20 border-border hover:shadow-glow transition-smooth group">
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-lg bg-accent/10 text-accent mr-3">
                  {project.icon}
                </div>
                <h4 className="text-lg font-semibold">{project.title}</h4>
              </div>
              
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-1 mb-4">
                {project.tech.slice(0, 3).map((tech, techIndex) => (
                  <Badge key={techIndex} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
                {project.tech.length > 3 && (
                  <Badge variant="secondary" className="text-xs">+{project.tech.length - 3}</Badge>
                )}
              </div>
              
              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="transition-bounce hover:scale-105">
                  <ExternalLink className="h-3 w-3" />
                </Button>
                <Button size="sm" variant="outline" className="transition-bounce hover:scale-105">
                  <Github className="h-3 w-3" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">Want to see more of my work?</p>
          <Button className="bg-gradient-accent hover:shadow-glow-accent transition-smooth">
            <Github className="mr-2 h-4 w-4" />
            View All on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
