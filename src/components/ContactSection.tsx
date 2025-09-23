import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Phone } from "lucide-react";
import waxSeal from "@/assets/wax-seal.png";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-accent/10 to-secondary/10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
            Correspondence
          </h2>
          <div className="flex items-center justify-center space-x-4 text-primary mb-8">
            <div className="h-px bg-primary w-20"></div>
            <span className="text-xl">✉</span>
            <div className="h-px bg-primary w-20"></div>
          </div>
          <p className="text-lg text-muted-foreground font-lato max-w-2xl mx-auto italic">
            "I should be most delighted to hear from you and discuss opportunities 
            for collaboration in the realm of software development..."
          </p>
        </div>

        <Card className="bg-gradient-card border-card-border shadow-elegant relative animate-fade-in-up-delay-1">
          {/* Wax seal */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-10">
            <img 
              src={waxSeal} 
              alt="AJ Wax Seal" 
              className="w-16 h-16 animate-shimmer"
            />
          </div>
          
          <CardContent className="p-12 pt-16">
            <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-2xl font-playfair font-semibold text-foreground mb-4">
                  Let Us Connect
                </h3>
                <p className="text-muted-foreground font-lato">
                  Whether you have an exciting opportunity, a collaborative project, 
                  or simply wish to discuss the latest in technology...
                </p>
              </div>

              {/* Contact methods as elegant calling cards */}
              <div className="grid sm:grid-cols-2 gap-6">
                <Button 
                  variant="outline"
                  className="h-auto p-6 flex-col space-y-2 border-card-border hover:border-primary 
                             hover:bg-primary/5 transition-all duration-300 group"
                  onClick={() => window.open('mailto:alissaannjosy@gmail.com')}
                >
                  <Mail className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                  <div className="text-center">
                    <p className="font-playfair font-semibold text-foreground">Electronic Mail</p>
                    <p className="text-sm text-muted-foreground font-lato">alissaannjosy@gmail.com</p>
                  </div>
                </Button>

                <Button 
                  variant="outline"
                  className="h-auto p-6 flex-col space-y-2 border-card-border hover:border-primary 
                             hover:bg-primary/5 transition-all duration-300 group"
                  onClick={() => window.open('tel:+18633291719')}
                >
                  <Phone className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                  <div className="text-center">
                    <p className="font-playfair font-semibold text-foreground">Telephone</p>
                    <p className="text-sm text-muted-foreground font-lato">+1 (863) 329-1719</p>
                  </div>
                </Button>

                <Button 
                  variant="outline"
                  className="h-auto p-6 flex-col space-y-2 border-card-border hover:border-primary 
                             hover:bg-primary/5 transition-all duration-300 group"
                  onClick={() => window.open('https://linkedin.com/in/alissaannjosy', '_blank')}
                >
                  <Linkedin className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                  <div className="text-center">
                    <p className="font-playfair font-semibold text-foreground">LinkedIn</p>
                    <p className="text-sm text-muted-foreground font-lato">Professional Network</p>
                  </div>
                </Button>

                <Button 
                  variant="outline"
                  className="h-auto p-6 flex-col space-y-2 border-card-border hover:border-primary 
                             hover:bg-primary/5 transition-all duration-300 group"
                  onClick={() => window.open('https://github.com/123Alissaa', '_blank')}
                >
                  <Github className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                  <div className="text-center">
                    <p className="font-playfair font-semibold text-foreground">GitHub</p>
                    <p className="text-sm text-muted-foreground font-lato">Code Repository</p>
                  </div>
                </Button>
              </div>

              {/* Primary CTA */}
              <div className="pt-6">
                <Button 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-full 
                             shadow-gold hover:shadow-lg transition-all duration-300 hover:scale-105
                             font-lato font-medium text-lg"
                  onClick={() => window.open('mailto:alissaannjosy@gmail.com')}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Send a Message
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="mt-16 animate-fade-in-up-delay-2">
          <div className="flex items-center justify-center space-x-4 text-primary mb-4">
            <div className="h-px bg-primary w-32"></div>
            <span className="text-xl">❃</span>
            <div className="h-px bg-primary w-32"></div>
          </div>
          <p className="font-playfair italic text-muted-foreground">
            Made with elegance, wit, and JavaScript ✨<br />
            <span className="text-primary">Yours sincerely, Alissa</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;