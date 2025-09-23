import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Calendar } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Store",
    period: "August 2025 - Present",
    description: "Designed and deployed a scalable e-commerce platform with parameterized product pages, supporting 100+ products using Next.js App Router, Apollo GraphQL, and Prisma/PostgreSQL.",
    highlights: [
      "Implemented case-insensitive search, enum based sorting and React Context cart with debounced queries, achieving <400ms median search latency.",
      "Shipped responsive Tailwind UI with Apollo Client caching and price-safe workflows; designed backend architecture ready for Stripe checkout handling 50+ concurrent users, pagination and DataLoader integration."
    ],
    tech: ["Next.js", "TypeScript", "GraphQL", "Prisma", "PostgreSQL"],
    status: "In Progress"
  },
  {
    title: "AI Interview Coach",
    period: "June 2025",
    description: "Built an AI-driven interview simulator used by 25+ students, integrating local LLMs (Mistral via Ollama) and TextBlob for real time sentiment, clarity, and length-based feedback.",
    highlights: [
      "Boosted user retention by 70% through practice flows, confidence sliders, and CSV-based progress logs.",
      "Reengineered backend to eliminate API dependencies, reducing latency to <1s response time and cutting projected API costs by 100% while ensuring data privacy."
    ],
    tech: ["Python", "Streamlit", "Ollama", "Mistral"],
    status: "Completed"
  },
  {
    title: "Bug Tracker System",
    period: "January 2025",
    description: "Launched a full-stack bug tracking platform with role-based access control (admin, tester, developer) and secure JWT auth, tested with 20+ sample users across multiple workflows.",
    highlights: [
      "Optimized workflows with severity-based bug assignment and real time status updates, reducing resolution time by 40%.",
      "Enhanced developer productivity, improving bug detection rate by 25% through client-side error handling, debugging tools, and test coverage improvements."
    ],
    tech: ["React.js", "Node.js", "Express", "MongoDB", "JWT"],
    status: "Completed"
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
            A collection of my recent works, showcasing full-stack development, 
            AI integration, and scalable system architecture.
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
                <CardDescription className="text-base font-lato leading-relaxed text-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start text-muted-foreground font-lato">
                      <span className="text-primary mr-3 mt-1">•</span>
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <Badge key={idx} variant="outline" className="font-lato text-xs border-primary text-primary">
                      {tech}
                    </Badge>
                  ))}
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