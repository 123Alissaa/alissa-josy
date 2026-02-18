import { Button } from "@/components/ui/button";
import { Mail, Sparkles } from "lucide-react";
import floralBorder from "@/assets/floral-border.png";
import profilePhoto from "@/assets/profile-photo.jpeg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Floating decorative sparkles */}
      <div className="absolute top-20 left-10 opacity-20 animate-pulse">
        <Sparkles className="h-8 w-8 text-primary" />
      </div>
      <div className="absolute top-32 right-16 opacity-15 animate-bounce" style={{animationDelay: '0.5s'}}>
        <Sparkles className="h-6 w-6 text-secondary" />
      </div>
      <div className="absolute bottom-32 left-20 opacity-20 animate-pulse" style={{animationDelay: '1s'}}>
        <Sparkles className="h-5 w-5 text-primary" />
      </div>
      
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
        <div className="bg-gradient-card p-8 md:p-12 rounded-lg shadow-elegant border border-card-border relative">
          {/* Ornamental corners */}
          <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-primary opacity-60"></div>
          <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-primary opacity-60"></div>
          <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-primary opacity-60"></div>
          <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-primary opacity-60"></div>
          
          <div className="space-y-6">
            {/* Profile Photo */}
            <div className="flex justify-center mb-6">
              <div className="relative group">
                {/* Decorative ring */}
                <div className="absolute -inset-3 rounded-full border-2 border-primary/30 animate-pulse"></div>
                <div className="absolute -inset-5 rounded-full border border-primary/20 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                
                {/* Photo container */}
                <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-primary/50 shadow-gold group-hover:border-primary transition-all duration-500 group-hover:scale-105">
                  <img 
                    src={profilePhoto} 
                    alt="Alissa Ann Josy" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                {/* Floating decorative elements around photo */}
                <div className="absolute -top-2 -right-2 opacity-60 group-hover:opacity-100 transition-all duration-500">
                  <Sparkles className="h-5 w-5 text-primary animate-pulse" />
                </div>
                <div className="absolute -bottom-1 -left-1 opacity-40 group-hover:opacity-80 transition-all duration-500" style={{animationDelay: '0.5s'}}>
                  <Sparkles className="h-4 w-4 text-secondary animate-pulse" />
                </div>
              </div>
            </div>
            
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
              Software Engineer • AI/ML Explorer • Quant
            </h2>
            
            <p className="text-lg text-muted-foreground font-playfair italic max-w-2xl mx-auto leading-relaxed">
              Computer Science student at the University of South Florida, crafting elegant solutions 
              with modern technologies while maintaining the timeless principles of good design.
            </p>
            
            <div className="pt-6">
              <Button 
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-full 
                           shadow-gold hover:shadow-lg transition-all duration-300 hover:scale-105
                           font-lato font-medium text-lg group"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail className="mr-2 h-5 w-5 group-hover:animate-bounce" />
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
