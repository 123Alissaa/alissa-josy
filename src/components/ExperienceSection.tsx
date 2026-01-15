import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Bot, Users, Crown, Wrench, Target, TrendingUp, Palette, Sparkles, Star, Zap } from "lucide-react";

const experiences = [
  {
    title: "AI Research Assistant",
    company: "RARE Lab at USF",
    period: "August 2025 - Present",
    location: "Tampa, FL",
    type: "Research",
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
    description: [
      { icon: Users, text: "Mentored and onboarded interns, fostering professional growth and meaningful engagement" },
      { icon: Target, text: "Bridged communication between interns and leadership, boosting participation and retention" },
      { icon: TrendingUp, text: "Designed initiatives that transformed intern experiences into lasting professional connections" }
    ]
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-gradient-to-br from-secondary/10 to-accent/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up relative">
          {/* Floating decorative elements */}
          <div className="absolute -top-6 left-1/5 opacity-25 animate-bounce" style={{animationDelay: '0.5s'}}>
            <Star className="h-5 w-5 text-secondary" />
          </div>
          <div className="absolute top-2 right-1/4 opacity-20 animate-pulse" style={{animationDelay: '1.5s'}}>
            <Crown className="h-6 w-6 text-primary" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6 hover:text-primary transition-colors duration-500">
            Experience & Leadership
          </h2>
          <div className="flex items-center justify-center space-x-4 text-primary mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent w-20 animate-pulse"></div>
            <Crown className="text-xl animate-pulse" />
            <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent w-20 animate-pulse"></div>
          </div>
          <p className="text-lg text-muted-foreground font-lato max-w-2xl mx-auto italic">
            "Miss Alissa Josy has distinguished herself through innovative research, 
            thoughtful leadership, and unwavering commitment to excellence..."
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="bg-gradient-card border-card-border shadow-elegant hover:shadow-gold 
                         transition-all duration-500 hover:-translate-y-2 hover:scale-[1.01] group relative
                         animate-fade-in-up cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-secondary/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Society announcement banner style */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Floating sparkle */}
              <div className="absolute top-4 right-6 opacity-0 group-hover:opacity-50 transition-all duration-500 transform group-hover:rotate-180">
                <Sparkles className="h-4 w-4 text-secondary" />
              </div>
              
              <CardHeader className="pb-4">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-2xl font-playfair font-semibold text-foreground mb-2">
                      {exp.title}
                    </CardTitle>
                    <p className="text-xl font-playfair text-primary mb-3">{exp.company}</p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="font-lato">{exp.period}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span className="font-lato">{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <Badge variant="outline" className="border-primary text-primary font-lato">
                    {exp.type}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-4">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="flex items-start text-muted-foreground font-lato group/item hover:text-foreground transition-colors duration-300">
                      <div className="mr-3 mt-1 p-1 rounded-full bg-primary/10 group-hover/item:bg-primary/20 transition-colors duration-300">
                        <item.icon className="h-4 w-4 text-primary group-hover/item:scale-110 transition-transform duration-300" />
                      </div>
                      <span className="leading-relaxed">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;