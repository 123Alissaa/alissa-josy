import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-background to-background-gradient-end">
      <div className="text-center max-w-2xl mx-auto">
        <div className="bg-gradient-card p-12 rounded-lg shadow-elegant border border-card-border relative">
          {/* Ornamental corners */}
          <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-primary opacity-60"></div>
          <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-primary opacity-60"></div>
          <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-primary opacity-60"></div>
          <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-primary opacity-60"></div>
          
          <div className="space-y-6">
            <h1 className="text-6xl font-playfair font-bold text-primary mb-4">404</h1>
            
            <div className="flex items-center justify-center space-x-4 text-primary">
              <div className="h-px bg-primary w-16"></div>
              <span className="text-xl">✦</span>
              <div className="h-px bg-primary w-16"></div>
            </div>
            
            <h2 className="text-2xl font-playfair font-semibold text-foreground">
              Page Not Found
            </h2>
            
            <p className="text-lg text-muted-foreground font-lato italic max-w-lg mx-auto leading-relaxed">
              "It appears this particular correspondence has gone astray. 
              Might I suggest returning to the main parlour?"
            </p>
            
            <div className="pt-6">
              <Button 
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-full 
                           shadow-gold hover:shadow-lg transition-all duration-300 hover:scale-105
                           font-lato font-medium text-lg"
                onClick={() => window.location.href = '/'}
              >
                <Home className="mr-2 h-5 w-5" />
                Return Home
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
