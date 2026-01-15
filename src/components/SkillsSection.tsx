import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Wrench, Database, Sparkles, Star } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    skills: ["Python", "Java", "C/C++", "SQL", "JavaScript", "TypeScript", "HTML", "CSS"],
    description: "The vernacular of modern software development"
  },
  {
    title: "Libraries & Frameworks", 
    icon: Wrench,
    skills: [
      "React.js", "Next.js", "Node.js", "sklearn", "Pandas", "NumPy", 
      "NLTK", "Ollama", "OpenAI API", "Mistral", "Vertex AI"
    ],
    description: "Tools of the trade for elegant solutions"
  },
  {
    title: "Tools & Systems",
    icon: Database,
    skills: [
      "Git", "GitHub", "VSCode", "IntelliJ", "Eclipse", "Jupyter Notebooks"
    ],
    description: "The foundations of productive development"
  }
];

type SkillLevel = "Advanced" | "Intermediate" | "Beginner";

const proficiencySkills: { name: string; level: SkillLevel; icon: typeof Code }[] = [
  { name: "Python", level: "Advanced", icon: Code },
  { name: "React.js", level: "Advanced", icon: Wrench },
  { name: "JavaScript/TypeScript", level: "Intermediate", icon: Code },
  { name: "Data Structures & Algorithms", level: "Intermediate", icon: Database },
  { name: "Machine Learning", level: "Intermediate", icon: Sparkles },
  { name: "SQL & Databases", level: "Intermediate", icon: Database },
];

const getLevelConfig = (level: SkillLevel) => {
  switch (level) {
    case "Advanced":
      return { 
        stars: 3, 
        color: "from-primary via-secondary to-primary",
        bgColor: "bg-primary/20",
        textColor: "text-primary",
        description: "Expert proficiency"
      };
    case "Intermediate":
      return { 
        stars: 2, 
        color: "from-secondary to-primary",
        bgColor: "bg-secondary/20", 
        textColor: "text-secondary",
        description: "Strong working knowledge"
      };
    case "Beginner":
      return { 
        stars: 1, 
        color: "from-muted-foreground to-muted",
        bgColor: "bg-muted/30",
        textColor: "text-muted-foreground",
        description: "Learning & growing"
      };
  }
};

const AnimatedSkillCard = ({ name, level, icon: IconComponent, delay }: { 
  name: string; 
  level: SkillLevel; 
  icon: typeof Code;
  delay: number;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const config = getLevelConfig(level);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div 
      ref={cardRef} 
      className={`group relative transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`relative p-5 rounded-2xl border-2 border-card-border bg-gradient-card
                      hover:border-primary/50 transition-all duration-500 hover:shadow-gold
                      hover:-translate-y-1 overflow-hidden`}>
        {/* Animated background gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${config.color} opacity-0 
                        group-hover:opacity-10 transition-opacity duration-500`}></div>
        
        {/* Floating sparkles on hover */}
        <div className={`absolute top-2 right-2 transition-all duration-300 ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
          <Sparkles className="h-4 w-4 text-primary animate-pulse" />
        </div>
        
        <div className="relative flex items-center gap-4">
          {/* Icon */}
          <div className={`p-3 rounded-xl ${config.bgColor} group-hover:scale-110 transition-transform duration-300`}>
            <IconComponent className={`h-5 w-5 ${config.textColor}`} />
          </div>
          
          {/* Content */}
          <div className="flex-1 min-w-0">
            <h4 className="font-playfair font-semibold text-foreground text-sm md:text-base truncate group-hover:text-primary transition-colors duration-300">
              {name}
            </h4>
            <p className="text-xs text-muted-foreground font-lato">{config.description}</p>
          </div>
          
          {/* Stars indicator */}
          <div className="flex gap-1">
            {[...Array(3)].map((_, i) => (
              <Star 
                key={i} 
                className={`h-4 w-4 transition-all duration-300 ${
                  i < config.stars 
                    ? `${config.textColor} fill-current ${isHovered ? 'scale-125' : ''}` 
                    : 'text-muted/30'
                }`}
                style={{ transitionDelay: `${i * 50}ms` }}
              />
            ))}
          </div>
        </div>
        
        {/* Level badge */}
        <div className={`absolute -bottom-1 -right-1 px-3 py-1 rounded-tl-xl rounded-br-xl
                        ${config.bgColor} ${config.textColor} text-xs font-lato font-medium
                        opacity-0 group-hover:opacity-100 transition-all duration-300
                        transform translate-y-full group-hover:translate-y-0`}>
          {level}
        </div>
      </div>
    </div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-6 relative">
      {/* Floating decorative elements */}
      <div className="absolute top-10 left-8 opacity-15 animate-pulse">
        <Sparkles className="h-6 w-6 text-primary" />
      </div>
      <div className="absolute bottom-20 right-12 opacity-20 animate-bounce" style={{animationDelay: '1s'}}>
        <Sparkles className="h-5 w-5 text-secondary" />
      </div>
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6 hover:text-primary transition-colors duration-500">
            Technical Accomplishments
          </h2>
          <div className="flex items-center justify-center space-x-4 text-primary mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent w-20 animate-pulse"></div>
            <Sparkles className="text-xl animate-spin" style={{animationDuration: '3s'}} />
            <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent w-20 animate-pulse"></div>
          </div>
          <p className="text-lg text-muted-foreground font-lato max-w-2xl mx-auto italic">
            "A lady of distinguished technical abilities, well-versed in the most elegant 
            programming languages and modern frameworks..."
          </p>
        </div>

        {/* Animated Proficiency Bars */}
        <div className="mb-16 animate-fade-in-up">
          <Card className="bg-gradient-card border-card-border shadow-elegant max-w-3xl mx-auto relative overflow-hidden">
            {/* Decorative corner elements */}
            <div className="absolute -top-2 -left-2 w-6 h-6 border-l-2 border-t-2 border-primary opacity-40"></div>
            <div className="absolute -top-2 -right-2 w-6 h-6 border-r-2 border-t-2 border-primary opacity-40"></div>
            <div className="absolute -bottom-2 -left-2 w-6 h-6 border-l-2 border-b-2 border-primary opacity-40"></div>
            <div className="absolute -bottom-2 -right-2 w-6 h-6 border-r-2 border-b-2 border-primary opacity-40"></div>
            
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl font-playfair font-semibold text-foreground flex items-center justify-center gap-2">
                <Star className="h-5 w-5 text-primary" />
                Proficiency Levels
                <Star className="h-5 w-5 text-primary" />
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {proficiencySkills.map((skill, index) => (
                <AnimatedSkillCard 
                  key={skill.name} 
                  name={skill.name} 
                  level={skill.level} 
                  icon={skill.icon}
                  delay={index * 100}
                />
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index}
                className="bg-gradient-card border-card-border shadow-elegant hover:shadow-gold 
                           transition-all duration-500 hover:-translate-y-2 group relative
                           animate-fade-in-up overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Decorative corner elements */}
                <div className="absolute -top-2 -left-2 w-6 h-6 border-l-2 border-t-2 border-primary opacity-40 group-hover:opacity-70 transition-opacity"></div>
                <div className="absolute -top-2 -right-2 w-6 h-6 border-r-2 border-t-2 border-primary opacity-40 group-hover:opacity-70 transition-opacity"></div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 border-l-2 border-b-2 border-primary opacity-40 group-hover:opacity-70 transition-opacity"></div>
                <div className="absolute -bottom-2 -right-2 w-6 h-6 border-r-2 border-b-2 border-primary opacity-40 group-hover:opacity-70 transition-opacity"></div>
                
                <CardHeader className="text-center pb-4 relative">
                  <div className="mb-4 flex justify-center">
                    <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-playfair font-semibold text-foreground">
                    {category.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground font-lato italic">
                    {category.description}
                  </p>
                </CardHeader>
                
                <CardContent className="relative">
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill, idx) => (
                      <Badge 
                        key={idx} 
                        variant="outline" 
                        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground 
                                   transition-all duration-300 font-lato text-xs cursor-pointer
                                   hover:scale-110 hover:-translate-y-0.5 hover:shadow-md"
                        style={{ animationDelay: `${idx * 0.05}s` }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional highlight section */}
        <div className="mt-16 text-center animate-fade-in-up-delay-2">
          <Card className="bg-gradient-card border-card-border shadow-elegant max-w-4xl mx-auto relative overflow-hidden group hover:shadow-gold transition-all duration-500">
            {/* Floating sparkles */}
            <div className="absolute top-4 left-6 opacity-0 group-hover:opacity-60 transition-all duration-700">
              <Sparkles className="h-4 w-4 text-primary animate-pulse" />
            </div>
            <div className="absolute bottom-4 right-6 opacity-0 group-hover:opacity-60 transition-all duration-700" style={{animationDelay: '0.5s'}}>
              <Sparkles className="h-4 w-4 text-secondary animate-pulse" />
            </div>
            
            <CardContent className="p-8">
              <h3 className="text-2xl font-playfair font-semibold text-foreground mb-4">
                Areas of Interest & Expertise
              </h3>
              <p className="text-muted-foreground font-lato leading-relaxed text-lg">
                Passionate about <span className="text-primary font-medium hover:underline cursor-pointer transition-all">AI/ML applications</span>, 
                <span className="text-primary font-medium hover:underline cursor-pointer transition-all"> full-stack development</span>, and 
                <span className="text-primary font-medium hover:underline cursor-pointer transition-all"> quantitative finance</span>. 
                Always seeking to bridge the gap between elegant code architecture and 
                meaningful real-world impact.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
