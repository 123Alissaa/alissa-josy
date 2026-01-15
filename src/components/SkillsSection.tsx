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

const proficiencySkills = [
  { name: "Python", level: 95, color: "from-primary to-secondary" },
  { name: "React.js", level: 88, color: "from-secondary to-primary" },
  { name: "JavaScript/TypeScript", level: 85, color: "from-primary to-secondary" },
  { name: "Data Structures & Algorithms", level: 90, color: "from-secondary to-primary" },
  { name: "Machine Learning", level: 75, color: "from-primary to-secondary" },
  { name: "SQL & Databases", level: 82, color: "from-secondary to-primary" },
];

const AnimatedSkillBar = ({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) => {
  const [animatedWidth, setAnimatedWidth] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setAnimatedWidth(level);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isVisible, level, delay]);

  return (
    <div ref={barRef} className="group">
      <div className="flex justify-between items-center mb-2">
        <span className="font-lato text-foreground group-hover:text-primary transition-colors duration-300 flex items-center gap-2">
          <Star className="h-3 w-3 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          {name}
        </span>
        <span className="text-sm text-muted-foreground font-lato">{level}%</span>
      </div>
      <div className="h-3 bg-muted rounded-full overflow-hidden relative">
        {/* Sparkle effect */}
        <div 
          className="absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10"
          style={{ left: `${animatedWidth - 4}%` }}
        >
          <Sparkles className="h-4 w-4 text-primary-foreground" />
        </div>
        
        <div 
          className={`h-full bg-gradient-to-r ${color} rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
          style={{ width: `${animatedWidth}%` }}
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
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
            <CardContent className="space-y-5">
              {proficiencySkills.map((skill, index) => (
                <AnimatedSkillBar 
                  key={skill.name} 
                  name={skill.name} 
                  level={skill.level} 
                  color={skill.color}
                  delay={index * 150}
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
