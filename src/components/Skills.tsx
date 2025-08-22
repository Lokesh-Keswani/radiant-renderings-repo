import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Smartphone, Brain, Wrench, Palette } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code2 className="h-6 w-6" />,
      skills: ["JavaScript", "React.js", "Next.js", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"],
      color: "primary"
    },
    {
      title: "Backend Development", 
      icon: <Database className="h-6 w-6" />,
      skills: ["Node.js", "Express.js", "MongoDB", "Python", "Java", "C/C++", "REST APIs"],
      color: "accent"
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="h-6 w-6" />,
      skills: ["React Native", "Android Development", "Cross-platform", "Mobile UI/UX"],
      color: "primary"
    },
    {
      title: "AI & Machine Learning",
      icon: <Brain className="h-6 w-6" />,
      skills: ["Machine Learning", "Data Analysis", "Python AI Libraries", "ChatGPT Integration"],
      color: "accent"
    },
    {
      title: "Developer Tools",
      icon: <Wrench className="h-6 w-6" />,
      skills: ["Git", "GitHub", "VS Code", "Figma", "Webpack", "Vite"],
      color: "primary"
    },
    {
      title: "Design & UI/UX",
      icon: <Palette className="h-6 w-6" />,
      skills: ["UI/UX Design", "Responsive Design", "User Experience", "Prototyping"],
      color: "accent"
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit spanning full-stack development, AI/ML, and modern technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className={`p-6 bg-muted/30 border-border hover:shadow-glow transition-smooth group cursor-pointer
                ${category.color === 'primary' ? 'hover:border-primary/50' : 'hover:border-accent/50'}`}
            >
              <div className="flex items-center mb-4">
                <div className={`p-2 rounded-lg mr-3 ${
                  category.color === 'primary' ? 'bg-primary/10 text-primary' : 'bg-accent/10 text-accent'
                }`}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    variant="secondary"
                    className="mr-2 mb-2 transition-bounce hover:scale-105"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Programming Languages Progress */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            Programming <span className="gradient-text">Proficiency</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { lang: "JavaScript", level: 90 },
              { lang: "Python", level: 85 },
              { lang: "React.js", level: 90 },
              { lang: "Node.js", level: 80 },
              { lang: "TypeScript", level: 75 },
              { lang: "Java", level: 70 }
            ].map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{item.lang}</span>
                  <span className="text-muted-foreground">{item.level}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${item.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;