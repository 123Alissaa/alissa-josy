import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Bot, Users, Crown, Wrench, Target, TrendingUp, Palette, Sparkles, Star, Zap, Briefcase, GraduationCap, Heart, Rocket, Award, ChevronRight, Code2, Database, GitMerge } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const experiences = [
  {
    title: "Software Engineering Intern",
    company: "Publix Technology",
    period: "May 2026",
    location: "Lakeland, FL",
    type: "Internship",
    typeIcon: Code2,
    color: "from-green-500/20 to-emerald-500/20",
    borderColor: "hover:border-green-400/50",
    summary: "Building event-driven backend systems processing 10,000+ daily invoices",
    description: [
      { icon: Code2, text: "Developing backend systems in C# / .NET and SQL processing 10,000+ daily invoices" },
      { icon: GitMerge, text: "Building event-driven data pipelines using Kafka for high-throughput warehouse operations" },
      { icon: Database, text: "Utilizing Azure DevOps for CI/CD and applying spec-driven development across cross-functional engineering teams" }
    ]
  },
  {
    title: "AI Research Assistant",
    company: "RARE Lab at USF",
    period: "August 2025 - Present",
    location: "Tampa, FL",
    type: "Research",
    typeIcon: Bot,
    color: "from-violet-500/20 to-purple-500/20",
    borderColor: "hover:border-violet-400/50",
    summary: "Leading innovation in human-robot interaction through AI integration",
    description: [
      { icon: Bot, text: "Leading innovation in human-robot interaction through advanced AI integration" },
      { icon: Zap, text: "Architecting real-time communication systems that connect hardware with intelligent software" },
      { icon: Target, text: "Deploying scalable cloud solutions across multiple lab environments" }
    ]
  },
  {
    title: "Student Assistant",
    company: "Undergraduate Studies at USF",
    period: "June 2024 - Present",
    location: "Tampa, FL", 
    type: "Operations",
    typeIcon: GraduationCap,
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "hover:border-blue-400/50",
    summary: "Streamlining university operations for 300+ students weekly",
    description: [
      { icon: Users, text: "Streamlined university operations, enhancing the experience for 300+ students weekly" },
      { icon: Target, text: "Automated complex workflows, achieving 100% accuracy across multiple advising teams" },
      { icon: TrendingUp, text: "Implemented process improvements that accelerated resolution times by 20%" }
    ]
  },
  {
    title: "Vice President",
    company: "Bridges International at USF",
    period: "April 2025 - Present",
    location: "Tampa, FL",
    type: "Leadership",
    typeIcon: Crown,
    color: "from-amber-500/20 to-yellow-500/20",
    borderColor: "hover:border-amber-400/50",
    summary: "Orchestrating cross-cultural programs for 200+ diverse students",
    description: [
      { icon: Crown, text: "Orchestrated cross-cultural programs that brought together 200+ students from diverse backgrounds" },
      { icon: TrendingUp, text: "Developed centralized platforms with automated workflows, boosting engagement by 40%" },
      { icon: Palette, text: "Created systematic approaches to event management using modern productivity tools" }
    ]
  },
  {
    title: "Logistics Director",
    company: "Society of Hispanic Professionals and Engineers at USF",
    period: "August 2024 - May 2025",
    location: "Tampa, FL",
    type: "Leadership",
    typeIcon: Wrench,
    color: "from-emerald-500/20 to-green-500/20",
    borderColor: "hover:border-emerald-400/50",
    summary: "Coordinating technical workshops and professional development events",
    description: [
      { icon: Wrench, text: "Coordinated technical workshops and professional development events for aspiring engineers" },
      { icon: Target, text: "Standardized operational workflows, reducing preparation time by 25%" },
      { icon: Users, text: "Facilitated seamless collaboration across multiple teams using integrated communication tools" }
    ]
  },
  {
    title: "Intern Coordinator",
    company: "Society of Asian Scientists and Engineers at USF",
    period: "August 2024 - Present",
    location: "Tampa, FL",
    type: "Leadership",
    typeIcon: Heart,
    color: "from-rose-500/20 to-pink-500/20",
    borderColor: "hover:border-rose-400/50",
    summary: "Mentoring and onboarding interns for professional growth",
    description: [
      { icon: Users, text: "Mentored and onboarded interns, fostering professional growth and meaningful engagement" },
      { icon: Target, text: "Bridged communication between interns and leadership, boosting participation and retention" },
      { icon: TrendingUp, text: "Designed initiatives that transformed intern experiences into lasting professional connections" }
    ]
  }
];

const ExperienceSection = () => {
  const [selectedExperience, setSelectedExperience] = useState<typeof experiences[0] | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="experience" className="py-20 px-6 bg-gradient-to-br from-secondary/10 to-accent/10 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{animationDuration: '4s'}}></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{animationDuration: '6s', animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16 animate-fade-in-up relative">
          {/* Floating decorative elements */}
          <div className="absolute -top-6 left-1/5 opacity-25 animate-bounce" style={{animationDelay: '0.5s'}}>
            <Star className="h-5 w-5 text-secondary" />
          </div>
          <div className="absolute top-2 right-1/4 opacity-20 animate-pulse" style={{animationDelay: '1.5s'}}>
            <Crown className="h-6 w-6 text-primary" />
          </div>
          <div className="absolute -top-4 right-1/5 opacity-30 animate-bounce" style={{animationDelay: '1s'}}>
            <Rocket className="h-4 w-4 text-accent" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6 hover:text-primary transition-colors duration-500">
            Experience & Leadership
          </h2>
          <div className="flex items-center justify-center space-x-4 text-primary mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent w-20 animate-pulse"></div>
            <Briefcase className="text-xl animate-bounce" style={{animationDuration: '2s'}} />
            <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent w-20 animate-pulse"></div>
          </div>
          <p className="text-lg text-muted-foreground font-lato max-w-2xl mx-auto">
            Click on any role to discover the full story
          </p>
        </div>

        {/* Experience Gallery - Masonry-like grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              onClick={() => setSelectedExperience(exp)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative cursor-pointer animate-fade-in-up overflow-hidden rounded-2xl
                         border-2 border-card-border ${exp.borderColor} transition-all duration-500
                         hover:shadow-gold hover:-translate-y-3 hover:scale-[1.02] bg-gradient-card
                         ${index === 0 ? 'md:col-span-2 md:row-span-1' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient background based on type */}
              <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Animated corner decorations */}
              <div className="absolute top-3 left-3 w-6 h-6 border-l-2 border-t-2 border-primary opacity-0 group-hover:opacity-60 transition-all duration-500 group-hover:w-8 group-hover:h-8"></div>
              <div className="absolute bottom-3 right-3 w-6 h-6 border-r-2 border-b-2 border-primary opacity-0 group-hover:opacity-60 transition-all duration-500 group-hover:w-8 group-hover:h-8"></div>
              
              {/* Floating icon */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:rotate-12 group-hover:scale-110">
                <exp.typeIcon className="h-8 w-8 text-primary/60" />
              </div>
              
              {/* Sparkle on hover */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-40 transition-all duration-700 pointer-events-none">
                <Sparkles className="h-16 w-16 text-primary animate-spin" style={{animationDuration: '8s'}} />
              </div>

              {/* Content */}
              <div className="relative p-6 md:p-8 min-h-[180px] flex flex-col justify-between">
                <div>
                  {/* Type badge with icon */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                      <exp.typeIcon className="h-4 w-4 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <Badge variant="outline" className="border-primary/50 text-primary font-lato text-xs">
                      {exp.type}
                    </Badge>
                  </div>
                  
                  {/* Title & Company */}
                  <h3 className="font-playfair font-bold text-foreground text-lg md:text-xl mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                    {exp.title}
                  </h3>
                  <p className="text-primary/80 font-lato text-sm mb-3 line-clamp-1">
                    {exp.company}
                  </p>
                </div>
                
                {/* Summary - appears on hover */}
                <div className="overflow-hidden">
                  <p className="text-muted-foreground font-lato text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 line-clamp-2">
                    {exp.summary}
                  </p>
                </div>
                
                {/* Click indicator */}
                <div className="absolute bottom-4 right-4 flex items-center gap-1 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="font-lato">View more</span>
                  <ChevronRight className="h-3 w-3 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
              
              {/* Animated border glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                   style={{
                     background: 'linear-gradient(45deg, transparent, transparent 40%, rgba(var(--primary), 0.1) 50%, transparent 60%, transparent)',
                     backgroundSize: '200% 200%',
                     animation: hoveredIndex === index ? 'shimmer 2s infinite' : 'none'
                   }}>
              </div>
            </div>
          ))}
        </div>

        {/* Experience Detail Modal */}
        <Dialog open={!!selectedExperience} onOpenChange={() => setSelectedExperience(null)}>
          <DialogContent className="max-w-2xl bg-gradient-card border-card-border max-h-[90vh] overflow-y-auto">
            {selectedExperience && (
              <>
                <DialogHeader className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      {/* Animated icon */}
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${selectedExperience.color} animate-pulse`}>
                        <selectedExperience.typeIcon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <DialogTitle className="text-2xl md:text-3xl font-playfair font-bold text-foreground">
                          {selectedExperience.title}
                        </DialogTitle>
                        <DialogDescription className="text-primary font-playfair text-lg mt-1">
                          {selectedExperience.company}
                        </DialogDescription>
                      </div>
                    </div>
                    <Badge variant="outline" className="border-primary text-primary font-lato shrink-0">
                      {selectedExperience.type}
                    </Badge>
                  </div>
                </DialogHeader>

                {/* Decorative divider */}
                <div className="flex items-center gap-4 my-4">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
                  <Award className="h-4 w-4 text-primary/50" />
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
                </div>

                {/* Date and Location */}
                <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6">
                  <div className="flex items-center group/date">
                    <div className="p-2 rounded-full bg-primary/10 mr-2 group-hover/date:bg-primary/20 transition-colors duration-300">
                      <Calendar className="h-4 w-4 text-primary" />
                    </div>
                    <span className="font-lato">{selectedExperience.period}</span>
                  </div>
                  <div className="flex items-center group/loc">
                    <div className="p-2 rounded-full bg-primary/10 mr-2 group-hover/loc:bg-primary/20 transition-colors duration-300">
                      <MapPin className="h-4 w-4 text-primary" />
                    </div>
                    <span className="font-lato">{selectedExperience.location}</span>
                  </div>
                </div>

                {/* Highlights with animated list */}
                <div className="space-y-4">
                  <h4 className="font-playfair font-semibold text-foreground flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-primary" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-4">
                    {selectedExperience.description.map((item, idx) => (
                      <li 
                        key={idx} 
                        className="flex items-start text-muted-foreground font-lato group/item 
                                   hover:text-foreground transition-colors duration-300 animate-fade-in-up"
                        style={{ animationDelay: `${idx * 0.1}s` }}
                      >
                        <div className="mr-4 mt-1 p-2 rounded-xl bg-primary/10 group-hover/item:bg-primary/20 
                                       group-hover/item:scale-110 transition-all duration-300">
                          <item.icon className="h-4 w-4 text-primary" />
                        </div>
                        <span className="leading-relaxed">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Fun footer element */}
                <div className="mt-6 pt-4 border-t border-card-border flex items-center justify-center gap-2 text-muted-foreground">
                  <Heart className="h-4 w-4 text-rose-400 animate-pulse" />
                  <span className="font-lato text-sm italic">Making an impact, one day at a time</span>
                  <Heart className="h-4 w-4 text-rose-400 animate-pulse" />
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>

      {/* Add shimmer animation style */}
      <style>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </section>
  );
};

export default ExperienceSection;