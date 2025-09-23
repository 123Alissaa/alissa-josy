import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    title: "AI Research Assistant",
    company: "RARE Lab at USF",
    period: "August 2025 - Present",
    location: "Tampa, FL",
    type: "Research",
    description: [
      "Collaborating with 10+ students on an LLM-powered Misty robot that delivers personalized recipe recommendations via voice inputs using Gemini AI and Vertex APIs.",
      "Contributed to Python-based WebSocket/Flask servers for real-time communication, enabling 50+ gesture and voice commands between Misty and Android app.",
      "Configured Google Cloud services and deployed streaming logic across 5+ lab devices to support scalable robot-user interactions."
    ]
  },
  {
    title: "Student Assistant",
    company: "Undergraduate Studies at USF",
    period: "June 2024 - Present",
    location: "Tampa, FL", 
    type: "Administrative",
    description: [
      "Resolved 300+ student queries weekly, improving satisfaction and cutting wait time through optimized triaging workflows.",
      "Automated ticket categorization and routing with university systems, maintaining 100% accuracy across 3 advising teams.",
      "Partnered with advisors to document bottlenecks and implement process improvements, accelerating resolution speed by 20%."
    ]
  },
  {
    title: "Vice President",
    company: "Bridges International at USF",
    period: "April 2025 - Present",
    location: "Tampa, FL",
    type: "Leadership",
    description: [
      "Organized event logistics pipelines in Notion and Excel macros, coordinating 5+ cross-cultural programs that boosted attendance by 60% to over 200+ students.",
      "Developed a centralized outreach platform with automated Canva asset generation, streamlining workflows for leaders and raising weekly engagement by 40%."
    ]
  },
  {
    title: "Logistics Director",
    company: "Society of Hispanic Professionals and Engineers at USF",
    period: "August 2024 - May 2025",
    location: "Tampa, FL",
    type: "Leadership",
    description: [
      "Managed backend event logistics across 10+ workshops and tech talks using Google Workspace and Slack integrations to coordinate across teams.",
      "Standardized templated workflows and checklists that reduced prep time by 25% and improved event-day execution accuracy."
    ]
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-gradient-to-br from-secondary/10 to-accent/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
            Professional Experience
          </h2>
          <div className="flex items-center justify-center space-x-4 text-primary mb-8">
            <div className="h-px bg-primary w-20"></div>
            <span className="text-xl">⚜</span>
            <div className="h-px bg-primary w-20"></div>
          </div>
          <p className="text-lg text-muted-foreground font-lato max-w-2xl mx-auto italic">
            "Miss Alissa Josy has undertaken the most honorable positions and distinguished herself 
            in the realms of research, leadership, and academic excellence..."
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="bg-gradient-card border-card-border shadow-elegant hover:shadow-gold 
                         transition-all duration-500 hover:-translate-y-1 group relative
                         animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Society announcement banner style */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-60"></div>
              
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
                    <li key={idx} className="flex items-start text-muted-foreground font-lato">
                      <span className="text-primary mr-3 mt-1 text-lg">•</span>
                      <span className="leading-relaxed">{item}</span>
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