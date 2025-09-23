import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-Commerce Store",
    period: "August 2025 - Present",
    description: "Built a modern shopping experience that scales effortlessly from startup to enterprise. This full-stack platform brings together elegant design with powerful backend architecture.",
    highlights: [
      "🚀 Crafted lightning-fast search with <400ms response times that delight users",
      "💳 Architected secure checkout flows ready for high-traffic scenarios", 
      "📱 Designed responsive interfaces that work beautifully across all devices"
    ],
    tech: ["Next.js", "TypeScript", "GraphQL", "Prisma", "PostgreSQL"],
    status: "In Progress",
    github: "https://github.com/123Alissaa/ecommerce-store",
    demo: null
  },
  {
    title: "AI Interview Coach",
    period: "June 2025",
    description: "Empowered 25+ students to ace their interviews with personalized AI feedback. This intelligent coach analyzes communication patterns and provides real-time guidance.",
    highlights: [
      "🎯 Boosted user confidence by 70% through tailored practice sessions",
      "⚡ Achieved sub-second response times with local LLM integration",
      "🔒 Ensured complete data privacy while eliminating API costs"
    ],
    tech: ["Python", "Streamlit", "Ollama", "Mistral"],
    status: "Completed",
    github: "https://github.com/123Alissaa/ai-interview-coach",
    demo: "https://ai-interview-coach-demo.streamlit.app"
  },
  {
    title: "Bug Tracker System",
    period: "January 2025",
    description: "Streamlined development workflows for teams with intelligent bug management. Features role-based access and automated assignment systems.",
    highlights: [
      "⏱️ Reduced bug resolution time by 40% through smart prioritization",
      "🔐 Implemented secure JWT authentication with role-based permissions",
      "📊 Enhanced team productivity with real-time status tracking"
    ],
    tech: ["React.js", "Node.js", "Express", "MongoDB", "JWT"],
    status: "Completed",
    github: "https://github.com/123Alissaa/bug-tracker",
    demo: "https://bug-tracker-demo.netlify.app"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
            Notable Projects
          </h2>
          <div className="flex items-center justify-center space-x-4 text-primary mb-8">
            <div className="h-px bg-primary w-20"></div>
            <span className="text-xl">❋</span>
            <div className="h-px bg-primary w-20"></div>
          </div>
          <p className="text-lg text-muted-foreground font-lato max-w-2xl mx-auto">
            A curated collection showcasing full-stack innovation, AI integration, 
            and thoughtful user experiences.
          </p>
        </div>

        <div className="grid gap-8 md:gap-12">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="bg-gradient-card border-card-border shadow-elegant hover:shadow-gold 
                         transition-all duration-500 hover:-translate-y-1 group relative overflow-hidden
                         animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Decorative corner flourish */}
              <div className="absolute top-0 right-0 w-20 h-20 opacity-10 group-hover:opacity-20 transition-opacity">
                <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-primary transform rotate-45"></div>
              </div>
              
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-2xl font-playfair font-semibold text-foreground mb-2">
                      {project.title}
                    </CardTitle>
                    <div className="flex items-center text-muted-foreground mb-4">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="font-lato text-sm">{project.period}</span>
                    </div>
                  </div>
                  <Badge 
                    variant={project.status === "In Progress" ? "default" : "secondary"}
                    className="ml-4 font-lato"
                  >
                    {project.status}
                  </Badge>
                </div>
                <CardDescription className="text-base font-lato leading-relaxed text-card-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start text-muted-foreground font-lato">
                      <span className="mr-3 mt-1 text-lg">{highlight.charAt(0)}</span>
                      <span className="leading-relaxed">{highlight.substring(2)}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, idx) => (
                    <Badge key={idx} variant="outline" className="font-lato text-xs border-primary text-primary">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex flex-wrap gap-3 pt-4 border-t border-card-border">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground 
                               transition-all duration-300 group/btn"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="h-4 w-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                    View Code
                  </Button>
                  
                  {project.demo && (
                    <Button
                      variant="default"
                      size="sm"
                      className="bg-primary text-primary-foreground hover:bg-primary/90 
                                 transition-all duration-300 group/btn"
                      onClick={() => window.open(project.demo, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                      Live Demo
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;