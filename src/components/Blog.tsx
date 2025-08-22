import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Calendar, Eye, ThumbsUp } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      title: "CSS Flexbox Explained: A Complete Reference and Tutorial",
      excerpt: "Master CSS Flexbox with this comprehensive guide covering all properties, practical examples, and real-world use cases for modern web layouts.",
      platform: "Dev.to",
      readTime: "8 min read",
      engagement: "1.2k views",
      link: "https://dev.to/lokesh_keswani/css-flexbox-explained-a-complete-reference-and-tutorial-2n6",
      tags: ["CSS", "Frontend", "Tutorial"],
      featured: true
    },
    {
      title: "AI Stole My Job, So I Made It My Intern",
      excerpt: "How I turned AI from a threat into a powerful ally in my development workflow. A practical guide to leveraging AI tools for better productivity.",
      platform: "Medium",
      readTime: "6 min read", 
      engagement: "2.1k views",
      link: "https://medium.com/@LokeshKeswani/ai-stole-my-job-so-i-made-it-my-intern-dc153b254902",
      tags: ["AI", "Productivity", "Career"],
      featured: true
    },
    {
      title: "How Small AI Chatbots Work in 5 Surprising Steps",
      excerpt: "Demystifying AI chatbots with a simple, code-free explanation of how these intelligent systems understand and respond to human conversations.",
      platform: "Dev.to",
      readTime: "5 min read",
      engagement: "856 views", 
      link: "https://dev.to/lokesh_keswani/how-small-ai-chatbots-work-in-5-surprising-steps-explained-without-code-4og7",
      tags: ["AI", "Chatbots", "Beginner"],
      featured: false
    },
    {
      title: "JavaScript Promises Explained: A Complete Guide for Beginners",
      excerpt: "Learn JavaScript Promises from the ground up with practical examples, error handling, and best practices for asynchronous programming.",
      platform: "Dev.to", 
      readTime: "10 min read",
      engagement: "1.5k views",
      link: "https://dev.to/lokesh_keswani/javascript-promises-explained-a-complete-guide-for-beginners-gbe",
      tags: ["JavaScript", "Async", "Tutorial"],
      featured: false
    },
    {
      title: "Top 51 Python Tasks Every Beginner Should Solve",
      excerpt: "A curated list of essential Python programming challenges designed to build your coding skills from beginner to intermediate level.",
      platform: "Dev.to",
      readTime: "15 min read", 
      engagement: "3.2k views",
      link: "https://dev.to/lokesh_keswani/top-51-python-tasks-every-beginner-should-solve-2b1",
      tags: ["Python", "Programming", "Practice"],
      featured: false
    }
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <section id="blog" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Latest <span className="gradient-text">Blog Posts</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sharing knowledge about web development, AI, and programming through detailed tutorials and insights
          </p>
        </div>

        {/* Featured Posts */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredPosts.map((post, index) => (
            <Card key={index} className="p-8 bg-muted/30 border-border hover:shadow-glow transition-smooth group">
              <div className="flex items-center justify-between mb-4">
                <Badge variant="secondary" className="bg-primary/10 text-primary">Featured</Badge>
                <span className="text-sm text-muted-foreground">{post.platform}</span>
              </div>
              
              <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-smooth">
                {post.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="outline" className="transition-bounce hover:scale-105">
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {post.readTime}
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="h-4 w-4" />
                    {post.engagement}
                  </div>
                </div>
                
                <Button className="bg-gradient-primary hover:shadow-glow transition-smooth group/btn">
                  Read More
                  <ExternalLink className="ml-2 h-4 w-4 transition-smooth group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Regular Posts */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {regularPosts.map((post, index) => (
            <Card key={index} className="p-6 bg-muted/20 border-border hover:shadow-glow transition-smooth group">
              <div className="flex items-center justify-between mb-3">
                <Badge variant="secondary" className="text-xs">{post.platform}</Badge>
                <ThumbsUp className="h-4 w-4 text-muted-foreground" />
              </div>
              
              <h4 className="font-semibold mb-3 line-clamp-2 group-hover:text-primary transition-smooth">
                {post.title}
              </h4>
              
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>
              
              <div className="flex flex-wrap gap-1 mb-4">
                {post.tags.slice(0, 2).map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>{post.readTime}</span>
                  <span>•</span>
                  <span>{post.engagement}</span>
                </div>
                
                <Button size="sm" variant="outline" className="transition-bounce hover:scale-105">
                  <ExternalLink className="h-3 w-3" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            Enjoyed reading? Follow me for more programming tips and tutorials!
          </p>
          <div className="flex justify-center gap-4">
            <Button className="bg-gradient-accent hover:shadow-glow-accent transition-smooth">
              Follow on Dev.to
            </Button>
            <Button variant="outline" className="transition-bounce hover:scale-105">
              Follow on Medium
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;