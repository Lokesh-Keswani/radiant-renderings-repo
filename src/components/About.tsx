import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Briefcase, Award } from "lucide-react";

const About = () => {
  const experiences = [
    {
      title: "Programming Teacher + Internship",
      company: "IT Xperts Academy, Kalyan",
      period: "Current",
      description: "Teaching programming fundamentals and mentoring students in real-world project development."
    },
    {
      title: "Software Developer Intern", 
      company: "AdmyBRAND",
      period: "2024",
      description: "Developed AI-powered analytics dashboards and full-stack solutions using React, TypeScript, and Node.js."
    }
  ];

  const education = [
    {
      degree: "Diploma in Computer Engineering",
      school: "Government Polytechnic",
      period: "2nd Year - Expected 2026",
      grade: "Currently pursuing"
    },
    {
      degree: "Secondary School",
      school: "Guru Nanak English High School",
      period: "2023",
      grade: "10th Grade - State Board"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate software developer with hands-on experience in building AI-powered applications, 
            full-stack web solutions, and educational platforms. I love turning complex problems into 
            elegant, user-friendly solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <div className="flex items-center mb-8">
              <Briefcase className="h-8 w-8 text-primary mr-3" />
              <h3 className="text-2xl font-bold">Experience</h3>
            </div>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="p-6 bg-muted/50 border-border hover:shadow-glow transition-smooth">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-semibold">{exp.title}</h4>
                    <Badge variant="secondary">{exp.period}</Badge>
                  </div>
                  <p className="text-primary font-medium mb-2">{exp.company}</p>
                  <p className="text-muted-foreground">{exp.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center mb-8">
              <GraduationCap className="h-8 w-8 text-accent mr-3" />
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="p-6 bg-muted/50 border-border hover:shadow-glow transition-smooth">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-semibold">{edu.degree}</h4>
                    <Badge variant="outline">{edu.period}</Badge>
                  </div>
                  <p className="text-accent font-medium mb-2">{edu.school}</p>
                  <p className="text-muted-foreground">{edu.grade}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="mt-16">
          <div className="flex items-center justify-center mb-8">
            <Award className="h-8 w-8 text-primary mr-3" />
            <h3 className="text-2xl font-bold">Key Achievements</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center bg-gradient-primary/5 border-primary/20 hover:shadow-glow-primary transition-smooth">
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <p className="text-muted-foreground">Projects Completed</p>
            </Card>
            <Card className="p-6 text-center bg-gradient-accent/5 border-accent/20 hover:shadow-glow-accent transition-smooth">
              <div className="text-3xl font-bold text-accent mb-2">1K+</div>
              <p className="text-muted-foreground">Blog Readers</p>
            </Card>
            <Card className="p-6 text-center bg-gradient-primary/5 border-primary/20 hover:shadow-glow-primary transition-smooth">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <p className="text-muted-foreground">GitHub Repositories</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;