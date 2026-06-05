import { Badge } from "@/components/ui/badge";
import { Github, Calendar, Rocket, CreditCard, Smartphone, Target, Zap, Shield, Sparkles, Heart, Star, Users, Wifi, Timer, Brain, FlaskConical, Activity, Cpu, Gauge, CheckCircle2, Network, Server, GitBranch } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

import projectEcommerce from "@/assets/project-ecommerce.png";
import projectInterview from "@/assets/project-interview.png";
import projectCollabpad from "@/assets/project-collabpad.png";
import projectLlmEarnings from "@/assets/project-llm-earnings.png";
import projectOrderbook from "@/assets/project-orderbook.png";
import projectKvstore from "@/assets/project-kvstore.png";

const projects = [
  {
    title: "CollabPad",
    subtitle: "Real-Time Collaborative Editor",
    period: "December 2025",
    description: "A powerful multiplayer code editor enabling seamless real-time collaboration. Built for teams who value speed, reliability, and smooth concurrent editing experiences.",
    highlights: [
      { icon: Users, text: "Built multiplayer editor supporting 25+ concurrent users with sub-50ms keystroke latency" },
      { icon: Shield, text: "Implemented document versioning achieving 99.2% automatic conflict resolution" },
      { icon: Wifi, text: "Designed real-time presence system with debounced cursor updates (100ms throttle)" },
      { icon: Timer, text: "Optimized PostgreSQL queries from 45ms to 12ms; handles 3,500+ WebSocket messages/min" }
    ],
    tech: ["FastAPI", "WebSockets", "PostgreSQL", "Next.js", "Monaco Editor"],
    status: "Completed",
    featured: true,
    github: "https://github.com/123Alissaa/CollabPad",
    image: projectCollabpad
  },
  {
    title: "LLM Earnings Analyzer",
    subtitle: "AI-Powered Financial Analysis",
    period: "2025",
    description: "An AI-driven system that analyzes corporate earnings transcripts using large language models. Validates sentiment predictions against real stock movements, uncovering systematic biases and sector-specific patterns in model outputs.",
    highlights: [
      { icon: Brain, text: "Built AI system analyzing earnings transcripts with Groq API (Llama 3.3 70B); achieved 50% directional accuracy across 4 companies" },
      { icon: FlaskConical, text: "Engineered data pipeline with yfinance; revealed sector-specific patterns (banking/social 100% vs tech/crypto 0%)" },
      { icon: Activity, text: "Reduced analysis time 99% (4 hours → 10 seconds per transcript) with structured JSON output for financial metrics & risk factors" }
    ],
    tech: ["Python", "Groq API", "Llama 3.3 70B", "yfinance", "NLP"],
    status: "Completed",
    featured: false,
    github: "https://github.com/123Alissaa/llm-earnings-analyzer",
    image: projectLlmEarnings
  },
  {
    title: "C++ Limit Order Book Engine",
    subtitle: "High-Performance Matching Engine",
    period: "April 2026",
    description: "A blazing-fast C++17 matching engine modelling the same exchange mechanics that underlie Walleye's options market-making roots. Built for raw speed and correctness on real exchange semantics.",
    highlights: [
      { icon: Cpu, text: "Built matching engine in C++17 supporting limit, market, IOC, and Fill-Or-Kill orders with price-time priority" },
      { icon: Gauge, text: "Achieves ~1M orders/second on Apple M3 with O(log n) cancel via hash-map lookup" },
      { icon: Activity, text: "Modelled real exchange mechanics: bid-ask spread, mid-price, aggressor/resting distinction, FOK semantics" },
      { icon: CheckCircle2, text: "Validated correctness with 9 assertion-based unit tests covering all order types and edge cases" }
    ],
    tech: ["C++17", "C", "STL", "Hash Maps"],
    status: "Completed",
    featured: true,
    github: "https://github.com/123Alissaa/orderbook-engine",
    image: projectOrderbook
  },
  {
    title: "Distributed Key-Value Store",
    subtitle: "Redis-Compatible KV Cluster",
    period: "April 2026",
    description: "A Redis-compatible distributed key-value store built from scratch in Go. Implements the RESP protocol for full client compatibility and consistent hashing across a live multi-node cluster deployed on fly.io.",
    highlights: [
      { icon: Server, text: "Built Redis-compatible distributed KV store in Go; deployed live 3-node cluster on fly.io routing 10,000+ keys" },
      { icon: Network, text: "Engineered consistent hashing with 150 virtual nodes, reducing key reshuffling from 75% to 25%" },
      { icon: Gauge, text: "Benchmarked at 10,101 SET ops/sec and 21,707 GET ops/sec on read replicas" },
      { icon: GitBranch, text: "Implemented AOF write-ahead logging for crash recovery and async replication across 6-node cluster" }
    ],
    tech: ["Go", "TCP Sockets", "RESP Protocol", "Consistent Hashing", "Docker", "fly.io"],
    status: "Completed",
    featured: false,
    github: "https://github.com/123Alissaa/distributed-kv-store",
    image: projectKvstore
  },
  {
    title: "E-Commerce Store",
    subtitle: "Full-Stack Shopping Platform",
    period: "August 2025 - Present",
    description: "Built a modern shopping experience that scales effortlessly from startup to enterprise. This full-stack platform brings together elegant design with powerful backend architecture.",
    highlights: [
      { icon: Rocket, text: "Crafted lightning-fast search with <400ms response times that delight users" },
      { icon: CreditCard, text: "Architected secure checkout flows ready for high-traffic scenarios" }, 
      { icon: Smartphone, text: "Designed responsive interfaces that work beautifully across all devices" }
    ],
    tech: ["Next.js", "TypeScript", "GraphQL", "Prisma", "PostgreSQL"],
    status: "In Progress",
    featured: false,
    github: "https://github.com/123Alissaa/ecommerce-store",
    image: projectEcommerce
  },
  {
    title: "AI Interview Coach",
    subtitle: "Intelligent Practice Partner",
    period: "June 2025",
    description: "Empowered 25+ students to ace their interviews with personalized AI feedback. This intelligent coach analyzes communication patterns and provides real-time guidance.",
    highlights: [
      { icon: Target, text: "Boosted user confidence by 70% through tailored practice sessions" },
      { icon: Zap, text: "Achieved sub-second response times with local LLM integration" },
      { icon: Shield, text: "Ensured complete data privacy while eliminating API costs" }
    ],
    tech: ["Python", "Streamlit", "Ollama", "Mistral"],
    status: "Completed",
    featured: false,
    github: "https://github.com/123Alissaa/ai-interview-coach",
    image: projectInterview
  }
];

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up relative">
          {/* Floating decorative elements */}
          <div className="absolute -top-8 left-1/4 opacity-20 animate-pulse">
            <Sparkles className="h-6 w-6 text-primary" />
          </div>
          <div className="absolute top-0 right-1/3 opacity-30 animate-bounce" style={{animationDelay: '1s'}}>
            <Heart className="h-4 w-4 text-secondary" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6 hover:text-primary transition-colors duration-500">
            Notable Projects
          </h2>
          <div className="flex items-center justify-center space-x-4 text-primary mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent w-20 animate-pulse"></div>
            <Sparkles className="text-xl animate-spin" style={{animationDuration: '3s'}} />
            <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent w-20 animate-pulse"></div>
          </div>
          <p className="text-lg text-muted-foreground font-lato max-w-2xl mx-auto">
            Click on any project to discover more about my work
          </p>
        </div>

        {/* Project Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index}
              onClick={() => setSelectedProject(project)}
              className="group relative cursor-pointer animate-fade-in-up overflow-hidden rounded-2xl
                         border-2 border-card-border hover:border-primary/50 transition-all duration-500
                         hover:shadow-gold hover:-translate-y-2 hover:scale-[1.02]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent 
                               opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                
                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-3 right-3 z-10">
                    <Badge className="bg-gradient-to-r from-primary to-secondary text-primary-foreground font-lato flex items-center gap-1 text-xs">
                      <Star className="h-3 w-3 fill-current" />
                      Featured
                    </Badge>
                  </div>
                )}
                
                {/* Floating sparkle on hover */}
                <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <Sparkles className="h-5 w-5 text-primary animate-pulse" />
                </div>
                
                {/* Project info at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-playfair font-bold text-foreground text-lg md:text-xl mb-1 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground font-lato text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {project.subtitle}
                  </p>
                </div>
              </div>
              
              {/* Decorative corner elements */}
              <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-primary opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
              <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-primary opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-3xl bg-gradient-card border-card-border max-h-[90vh] overflow-y-auto">
            {selectedProject && (
              <>
                <DialogHeader className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <DialogTitle className="text-2xl md:text-3xl font-playfair font-bold text-foreground">
                        {selectedProject.title}
                      </DialogTitle>
                      <DialogDescription className="text-primary font-lato text-base mt-1">
                        {selectedProject.subtitle}
                      </DialogDescription>
                    </div>
                    <div className="flex items-center gap-2">
                      {selectedProject.featured && (
                        <Badge className="bg-gradient-to-r from-primary to-secondary text-primary-foreground font-lato flex items-center gap-1">
                          <Star className="h-3 w-3 fill-current" />
                          Featured
                        </Badge>
                      )}
                      <Badge 
                        variant={selectedProject.status === "In Progress" ? "default" : "secondary"}
                        className="font-lato"
                      >
                        {selectedProject.status}
                      </Badge>
                    </div>
                  </div>
                </DialogHeader>

                {/* Project Image in Modal */}
                <div className="relative overflow-hidden rounded-xl border border-card-border my-4">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full h-48 md:h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent"></div>
                </div>

                {/* Date and Description */}
                <div className="space-y-4">
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2 text-primary" />
                    <span className="font-lato">{selectedProject.period}</span>
                  </div>
                  
                  <p className="text-card-foreground font-lato leading-relaxed text-base">
                    {selectedProject.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-3">
                    {selectedProject.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start text-muted-foreground font-lato group/item">
                        <div className="mr-3 mt-0.5 p-1.5 rounded-full bg-primary/10">
                          <highlight.icon className="h-4 w-4 text-primary" />
                        </div>
                        <span className="leading-relaxed text-sm">{highlight.text}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {selectedProject.tech.map((tech, idx) => (
                      <Badge 
                        key={idx} 
                        variant="outline" 
                        className="font-lato text-xs border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* GitHub Link */}
                  <div className="pt-4 border-t border-card-border">
                    <Button
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground 
                                 transition-all duration-300 group/btn"
                      onClick={() => window.open(selectedProject.github, '_blank')}
                    >
                      <Github className="h-4 w-4 mr-2 group-hover/btn:rotate-12 transition-transform duration-300" />
                      View on GitHub
                    </Button>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default ProjectsSection;