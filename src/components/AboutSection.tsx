import { Card, CardContent } from "@/components/ui/card";
import { Heart, BookOpen, Camera, Utensils } from "lucide-react";
import floatingFlorals from "@/assets/floating-florals.png";

const interests = [
  {
    icon: Heart,
    title: "Crocheting",
    description: "Creating intricate patterns and cozy pieces, one stitch at a time"
  },
  {
    icon: Utensils, 
    title: "Cooking",
    description: "Experimenting with flavors and bringing joy through homemade dishes"
  },
  {
    icon: BookOpen,
    title: "Reading", 
    description: "Diving into worlds of knowledge, from technical papers to classic literature"
  },
  {
    icon: Camera,
    title: "Vlogging",
    description: "Sharing life's moments and connecting with others through storytelling"
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6 relative overflow-hidden">
      {/* Background floating florals */}
      <div className="absolute inset-0 opacity-5 animate-float">
        <img 
          src={floatingFlorals} 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
            Beyond the Code
          </h2>
          <div className="flex items-center justify-center space-x-4 text-primary mb-8">
            <div className="h-px bg-primary w-20"></div>
            <span className="text-xl">❀</span>
            <div className="h-px bg-primary w-20"></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Personal note */}
          <div className="animate-fade-in-up">
            <Card className="bg-gradient-card border-card-border shadow-elegant relative">
              {/* Handwritten note styling */}
              <div className="absolute top-4 right-4 w-8 h-8 border border-primary rounded-full flex items-center justify-center text-primary text-xs font-bold">
                AJ
              </div>
              
              <CardContent className="p-8">
                <div className="mb-6">
                  <p className="font-playfair italic text-lg text-muted-foreground leading-relaxed">
                    "Dear Reader,<br /><br />
                    When I'm not immersed in lines of code or debugging algorithms, 
                    you'll find me embracing life's simple pleasures. There's something 
                    magical about creating with your hands - whether it's crafting a 
                    delicate crochet pattern, preparing a meal with love, or capturing 
                    a moment through the lens of a camera.
                  </p>
                </div>
                
                <div className="border-l-2 border-primary pl-6 mb-6">
                  <p className="font-lato text-muted-foreground leading-relaxed">
                    I believe that the same attention to detail and problem-solving 
                    mindset that drives good software development also enriches these 
                    creative pursuits. Each hobby teaches patience, precision, and the 
                    joy of seeing something beautiful come to life.
                  </p>
                </div>
                
                <div className="text-right">
                  <p className="font-playfair italic text-primary">
                    With warm regards,<br />
                    Alissa ✨
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Interests grid */}
          <div className="grid grid-cols-2 gap-6 animate-fade-in-up-delay-1">
            {interests.map((interest, index) => {
              const IconComponent = interest.icon;
              return (
                <Card 
                  key={index}
                  className="bg-gradient-card border-card-border shadow-elegant hover:shadow-gold 
                             transition-all duration-300 hover:-translate-y-1 group text-center
                             animate-fade-in-up"
                  style={{ animationDelay: `${(index + 2) * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="mb-4 flex justify-center">
                      <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <h3 className="font-playfair font-semibold text-foreground mb-2">
                      {interest.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-lato leading-relaxed">
                      {interest.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Education highlight */}
        <div className="mt-16 animate-fade-in-up-delay-2">
          <Card className="bg-gradient-card border-card-border shadow-elegant max-w-4xl mx-auto">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-playfair font-semibold text-foreground mb-4">
                Academic Pursuits
              </h3>
              <div className="space-y-2 text-lg">
                <p className="font-lato text-muted-foreground">
                  <span className="text-primary font-medium">Bachelor of Science in Computer Science</span>
                </p>
                <p className="font-lato text-muted-foreground">
                  University of South Florida, Tampa
                </p>
                <p className="font-lato text-sm text-muted-foreground">
                  Expected Graduation: May 2027
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;