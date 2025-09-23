import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Wrench, Database, Cloud } from "lucide-react";

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

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
            Technical Accomplishments
          </h2>
          <div className="flex items-center justify-center space-x-4 text-primary mb-8">
            <div className="h-px bg-primary w-20"></div>
            <span className="text-xl">✧</span>
            <div className="h-px bg-primary w-20"></div>
          </div>
          <p className="text-lg text-muted-foreground font-lato max-w-2xl mx-auto italic">
            "A lady of distinguished technical abilities, well-versed in the most elegant 
            programming languages and modern frameworks..."
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index}
                className="bg-gradient-card border-card-border shadow-elegant hover:shadow-gold 
                           transition-all duration-500 hover:-translate-y-2 group relative
                           animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Decorative corner elements */}
                <div className="absolute -top-2 -left-2 w-6 h-6 border-l-2 border-t-2 border-primary opacity-40 group-hover:opacity-70 transition-opacity"></div>
                <div className="absolute -top-2 -right-2 w-6 h-6 border-r-2 border-t-2 border-primary opacity-40 group-hover:opacity-70 transition-opacity"></div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 border-l-2 border-b-2 border-primary opacity-40 group-hover:opacity-70 transition-opacity"></div>
                <div className="absolute -bottom-2 -right-2 w-6 h-6 border-r-2 border-b-2 border-primary opacity-40 group-hover:opacity-70 transition-opacity"></div>
                
                <CardHeader className="text-center pb-4">
                  <div className="mb-4 flex justify-center">
                    <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
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
                
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill, idx) => (
                      <Badge 
                        key={idx} 
                        variant="outline" 
                        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground 
                                   transition-colors duration-200 font-lato text-xs group-hover:animate-shimmer"
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
          <Card className="bg-gradient-card border-card-border shadow-elegant max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-playfair font-semibold text-foreground mb-4">
                Areas of Interest & Expertise
              </h3>
              <p className="text-muted-foreground font-lato leading-relaxed text-lg">
                Passionate about <span className="text-primary font-medium">AI/ML applications</span>, 
                <span className="text-primary font-medium"> full-stack development</span>, and 
                <span className="text-primary font-medium"> quantitative finance</span>. 
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