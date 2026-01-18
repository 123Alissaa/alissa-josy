import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, Database, Sparkles, Star, Crown, Gem, ChevronDown, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const skillCategories = [
  {
    title: "Libraries & Frameworks", 
    icon: Wrench,
    skills: [
      "React.js", "Next.js", "Node.js", "FastAPI", "WebSockets", "sklearn", "Pandas", "NumPy", 
      "NLTK", "Ollama", "OpenAI API", "Mistral", "Vertex AI"
    ],
    description: "Tools of the trade for elegant solutions",
    color: "from-purple-500/20 to-pink-500/20",
    accentColor: "purple"
  },
  {
    title: "Tools & Systems",
    icon: Database,
    skills: [
      "Git", "GitHub", "PostgreSQL", "MongoDB", "VSCode", "IntelliJ", "Eclipse", "Jupyter Notebooks"
    ],
    description: "The foundations of productive development",
    color: "from-blue-500/20 to-cyan-500/20",
    accentColor: "blue"
  }
];

type SkillLevel = "Advanced" | "Intermediate";

const proficiencySkills: { name: string; level: SkillLevel }[] = [
  { name: "Python", level: "Advanced" },
  { name: "Java", level: "Advanced" },
  { name: "HTML/CSS", level: "Advanced" },
  { name: "JavaScript", level: "Intermediate" },
  { name: "C/C++", level: "Intermediate" },
  { name: "TypeScript", level: "Intermediate" },
  { name: "SQL", level: "Intermediate" },
  { name: "React.js", level: "Intermediate" },
];

const getLevelConfig = (level: SkillLevel) => {
  switch (level) {
    case "Advanced":
      return { 
        stars: 3, 
        gradient: "from-primary via-secondary to-primary",
        bgColor: "bg-gradient-to-br from-primary/20 to-secondary/20",
        borderColor: "border-primary/40",
        textColor: "text-primary",
        icon: Crown,
        label: "Expert"
      };
    case "Intermediate":
      return { 
        stars: 2, 
        gradient: "from-secondary to-primary",
        bgColor: "bg-secondary/15", 
        borderColor: "border-secondary/30",
        textColor: "text-secondary",
        icon: Gem,
        label: "Proficient"
      };
  }
};

const AnimatedSkillCard = ({ name, level, delay }: { 
  name: string; 
  level: SkillLevel; 
  delay: number;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const config = getLevelConfig(level);
  const IconComponent = config.icon;

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
      className={`group relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-95'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`relative p-4 rounded-2xl border-2 ${config.borderColor} ${config.bgColor}
                      hover:border-primary transition-all duration-500 hover:shadow-gold
                      hover:-translate-y-1 overflow-hidden backdrop-blur-sm`}>
        {/* Animated shimmer effect */}
        <div className={`absolute inset-0 bg-gradient-to-r ${config.gradient} opacity-0 
                        group-hover:opacity-10 transition-opacity duration-500`}></div>
        
        {/* Floating sparkles on hover */}
        <div className={`absolute -top-1 -right-1 transition-all duration-500 ${isHovered ? 'opacity-100 scale-100 rotate-12' : 'opacity-0 scale-50 rotate-0'}`}>
          <Sparkles className="h-5 w-5 text-primary" />
        </div>
        
        <div className="relative flex items-center justify-between gap-3">
          {/* Skill name with icon */}
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <div className={`p-2 rounded-xl ${config.bgColor} group-hover:scale-110 transition-transform duration-300 border ${config.borderColor}`}>
              <IconComponent className={`h-4 w-4 ${config.textColor}`} />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-playfair font-semibold text-foreground text-sm md:text-base truncate group-hover:text-primary transition-colors duration-300">
                {name}
              </h4>
              <span className={`text-xs font-lato ${config.textColor} opacity-80`}>{config.label}</span>
            </div>
          </div>
          
          {/* Stars indicator */}
          <div className="flex gap-0.5">
            {[...Array(3)].map((_, i) => (
              <Star 
                key={i} 
                className={`h-4 w-4 transition-all duration-300 ${
                  i < config.stars 
                    ? `${config.textColor} fill-current ${isHovered ? 'scale-125' : ''}` 
                    : 'text-muted/20'
                }`}
                style={{ transitionDelay: `${i * 75}ms` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ExpandableSkillCard = ({ category, index }: { 
  category: typeof skillCategories[0]; 
  index: number;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = category.icon;

  return (
    <>
      {/* Card Preview */}
      <Card 
        className={`bg-gradient-card border-card-border shadow-elegant hover:shadow-gold 
                   transition-all duration-500 hover:-translate-y-2 group relative
                   animate-fade-in-up overflow-hidden cursor-pointer`}
        style={{ animationDelay: `${index * 0.2}s` }}
        onClick={() => setIsExpanded(true)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Animated background gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
        
        {/* Decorative corner elements */}
        <div className="absolute -top-2 -left-2 w-6 h-6 border-l-2 border-t-2 border-primary opacity-40 group-hover:opacity-70 transition-opacity"></div>
        <div className="absolute -top-2 -right-2 w-6 h-6 border-r-2 border-t-2 border-primary opacity-40 group-hover:opacity-70 transition-opacity"></div>
        <div className="absolute -bottom-2 -left-2 w-6 h-6 border-l-2 border-b-2 border-primary opacity-40 group-hover:opacity-70 transition-opacity"></div>
        <div className="absolute -bottom-2 -right-2 w-6 h-6 border-r-2 border-b-2 border-primary opacity-40 group-hover:opacity-70 transition-opacity"></div>
        
        <CardHeader className="text-center pb-4 relative">
          <div className="mb-4 flex justify-center">
            <div className={`p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 ${isHovered ? 'animate-pulse' : ''}`}>
              <IconComponent className="h-8 w-8 text-primary" />
            </div>
          </div>
          <CardTitle className="text-2xl font-playfair font-semibold text-foreground">
            {category.title}
          </CardTitle>
          <p className="text-sm text-muted-foreground font-lato italic mb-2">
            {category.description}
          </p>
          
          {/* Preview badges */}
          <div className="flex flex-wrap gap-1.5 justify-center mt-3">
            {category.skills.slice(0, 3).map((skill, idx) => (
              <Badge 
                key={idx} 
                variant="outline" 
                className="border-primary/50 text-primary/80 text-xs"
              >
                {skill}
              </Badge>
            ))}
            {category.skills.length > 3 && (
              <Badge 
                variant="outline" 
                className="border-secondary/50 text-secondary font-medium text-xs"
              >
                +{category.skills.length - 3} more
              </Badge>
            )}
          </div>
        </CardHeader>
        
        <CardContent className="relative pt-0">
          <div className={`flex items-center justify-center gap-2 text-primary font-lato text-sm transition-all duration-300 ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-60'}`}>
            <span>Click to explore</span>
            <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isHovered ? 'translate-y-1' : ''}`} />
          </div>
        </CardContent>
      </Card>

      {/* Expanded Modal */}
      {isExpanded && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setIsExpanded(false)}
        >
          <div 
            className="bg-gradient-card border-2 border-primary/30 rounded-3xl max-w-lg w-full max-h-[80vh] overflow-y-auto shadow-gold animate-scale-in relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Decorative corner elements */}
            <div className="absolute -top-2 -left-2 w-8 h-8 border-l-2 border-t-2 border-primary opacity-60"></div>
            <div className="absolute -top-2 -right-2 w-8 h-8 border-r-2 border-t-2 border-primary opacity-60"></div>
            <div className="absolute -bottom-2 -left-2 w-8 h-8 border-l-2 border-b-2 border-primary opacity-60"></div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-2 border-b-2 border-primary opacity-60"></div>
            
            {/* Close button */}
            <button 
              onClick={() => setIsExpanded(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors z-10 group"
            >
              <X className="h-5 w-5 text-primary group-hover:rotate-90 transition-transform duration-300" />
            </button>

            <div className="p-8">
              {/* Header */}
              <div className="text-center mb-8">
                <div className="mb-4 flex justify-center">
                  <div className={`p-5 rounded-full bg-gradient-to-br ${category.color} border-2 border-primary/30`}>
                    <IconComponent className="h-10 w-10 text-primary" />
                  </div>
                </div>
                <h3 className="text-3xl font-playfair font-bold text-foreground mb-2">
                  {category.title}
                </h3>
                <p className="text-muted-foreground font-lato italic">
                  {category.description}
                </p>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="group relative p-3 rounded-xl bg-primary/5 border border-primary/20 
                             hover:bg-primary/15 hover:border-primary/40 transition-all duration-300
                             hover:-translate-y-1 hover:shadow-lg cursor-default animate-fade-in"
                    style={{ animationDelay: `${idx * 50}ms` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300"></div>
                    <div className="relative flex items-center gap-2">
                      <Sparkles className="h-3 w-3 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span className="font-lato text-sm text-foreground group-hover:text-primary transition-colors duration-300">
                        {skill}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const SkillsSection = () => {
  const advancedSkills = proficiencySkills.filter(s => s.level === "Advanced");
  const intermediateSkills = proficiencySkills.filter(s => s.level === "Intermediate");

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

        {/* Proficiency Levels - Two Column Layout */}
        <div className="mb-16 animate-fade-in-up">
          <Card className="bg-gradient-card border-card-border shadow-elegant max-w-4xl mx-auto relative overflow-hidden">
            {/* Decorative corner elements */}
            <div className="absolute -top-2 -left-2 w-6 h-6 border-l-2 border-t-2 border-primary opacity-40"></div>
            <div className="absolute -top-2 -right-2 w-6 h-6 border-r-2 border-t-2 border-primary opacity-40"></div>
            <div className="absolute -bottom-2 -left-2 w-6 h-6 border-l-2 border-b-2 border-primary opacity-40"></div>
            <div className="absolute -bottom-2 -right-2 w-6 h-6 border-r-2 border-b-2 border-primary opacity-40"></div>
            
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl font-playfair font-semibold text-foreground flex items-center justify-center gap-3">
                <Crown className="h-5 w-5 text-primary" />
                Language Proficiency
                <Crown className="h-5 w-5 text-primary" />
              </CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-8">
              {/* Advanced Skills */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Crown className="h-4 w-4 text-primary" />
                  <h3 className="font-playfair font-semibold text-foreground text-lg">Advanced</h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-primary/40 to-transparent ml-2"></div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {advancedSkills.map((skill, index) => (
                    <AnimatedSkillCard 
                      key={skill.name} 
                      name={skill.name} 
                      level={skill.level} 
                      delay={index * 100}
                    />
                  ))}
                </div>
              </div>

              {/* Intermediate Skills */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Gem className="h-4 w-4 text-secondary" />
                  <h3 className="font-playfair font-semibold text-foreground text-lg">Intermediate</h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-secondary/40 to-transparent ml-2"></div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                  {intermediateSkills.map((skill, index) => (
                    <AnimatedSkillCard 
                      key={skill.name} 
                      name={skill.name} 
                      level={skill.level} 
                      delay={300 + index * 100}
                    />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Libraries & Frameworks + Tools & Systems - Clickable Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <ExpandableSkillCard key={index} category={category} index={index} />
          ))}
        </div>

        {/* Additional highlight section */}
        <div className="text-center animate-fade-in-up-delay-2">
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
                <span className="text-primary font-medium hover:underline cursor-pointer transition-all"> real-time collaborative systems</span>. 
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