import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import floralBorder from "@/assets/floral-border.png";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Decorative floral border at top */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 opacity-30 animate-fade-in-up">
        <img 
          src={floralBorder} 
          alt="Decorative floral border" 
          className="h-16 w-auto"
        />
      </div>
      
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up-delay-1">
        {/* Regency Invitation Style */}
        <div className="bg-gradient-card p-12 rounded-lg shadow-elegant border border-card-border relative">
          {/* Ornamental corners */}
          <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-primary opacity-60"></div>
          <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-primary opacity-60"></div>
          <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-primary opacity-60"></div>
          <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-primary opacity-60"></div>
          
          <div className="space-y-6">
            <p className="text-muted-foreground text-lg italic font-playfair">
              "Dearest Gentle Recruiter,<br />
              It is with great anticipation that I present to you my portfolio..."
            </p>
            
            <div className="border-t border-b border-primary py-6 my-8">
              <h1 className="text-5xl md:text-7xl font-playfair font-bold text-foreground mb-4">
                Alissa Ann Josy
              </h1>
              <div className="flex items-center justify-center space-x-4 text-primary">
                <div className="h-px bg-primary flex-1"></div>
                <span className="text-2xl">✦</span>
                <div className="h-px bg-primary flex-1"></div>
              </div>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-lato font-light text-foreground">
              Software Engineer • AI/ML Explorer • Aspiring Quant
            </h2>
            
            <p className="text-lg text-muted-foreground font-playfair italic max-w-2xl mx-auto leading-relaxed">
              Computer Science student at the University of South Florida, crafting elegant solutions 
              with modern technologies while maintaining the timeless principles of good design.
            </p>
            
            <div className="pt-6">
              <Button 
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-full 
                           shadow-gold hover:shadow-lg transition-all duration-300 hover:scale-105
                           font-lato font-medium text-lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail className="mr-2 h-5 w-5" />
                Call Upon Me
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="animate-fade-in-up-delay-2 pt-8">
          <div className="w-px h-16 bg-primary mx-auto animate-shimmer"></div>
          <p className="text-sm text-muted-foreground font-lato mt-2">Scroll to explore</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;