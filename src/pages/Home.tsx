import { ArrowRight, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ravindImage from "@/components/Images/ravindu.png";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Hey There,{" "}
                  <span className="block text-accent">I'm Ravindu</span>
                </h1>
                <p className="text-xl sm:text-2xl text-muted-foreground font-medium">
                  Results-driven Digital Marketer & IT Professional
                </p>
                <p className="text-lg text-muted-foreground max-w-xl">
                  Transforming businesses through data-driven marketing strategies 
                  and cutting-edge web solutions. 4+ years of proven success in 
                  maximizing ROI and driving measurable results.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="group">
                  <Link to="/portfolio">
                    Explore My Work
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="group">
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Button>
              </div>
              
              <div className="flex items-center space-x-8 pt-4">
                <div>
                  <div className="text-2xl font-bold text-accent">4+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent">800+</div>
                  <div className="text-sm text-muted-foreground">Successful Sales</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent">2.5x</div>
                  <div className="text-sm text-muted-foreground">Average ROAS</div>
                </div>
              </div>
            </div>
            
            {/* Profile Picture */}
            <div className="relative animate-slide-up">
              <div className="relative w-full max-w-md mx-auto">
                {/* Background decorative elements */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-3xl animate-float"></div>
                <div className="absolute top-10 right-10 w-20 h-20 bg-accent/10 rounded-full animate-float" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute bottom-10 left-10 w-16 h-16 bg-primary/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
                
                {/* Main profile image */}
                <div className="relative bg-gradient-to-br from-accent to-primary p-1 rounded-full">
                  <img
                    src={ravindImage}
                    alt="Ravindu Hirusanka - Digital Marketer & IT Professional"
                    className="w-full h-auto rounded-full bg-background object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Quick Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-fade-in" style={{animationDelay: '0.1s'}}>
              <div className="text-3xl font-bold text-accent mb-2">150%</div>
              <div className="text-sm text-muted-foreground">Artisan Income Boost</div>
            </div>
            <div className="text-center animate-fade-in" style={{animationDelay: '0.2s'}}>
              <div className="text-3xl font-bold text-accent mb-2">40%</div>
              <div className="text-sm text-muted-foreground">Conversion Rate Improvement</div>
            </div>
            <div className="text-center animate-fade-in" style={{animationDelay: '0.3s'}}>
              <div className="text-3xl font-bold text-accent mb-2">300%</div>
              <div className="text-sm text-muted-foreground">Brand Awareness Increase</div>
            </div>
            <div className="text-center animate-fade-in" style={{animationDelay: '0.4s'}}>
              <div className="text-3xl font-bold text-accent mb-2">60%</div>
              <div className="text-sm text-muted-foreground">Faster Inquiry Response</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;