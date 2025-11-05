import { Mail, Linkedin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden pt-32">
      {/* Geometric background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-32 h-32 border-4 border-secondary/20 rotate-12"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 border-4 border-accent/20 -rotate-12"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-secondary/10 rotate-45"></div>
      </div>

      <div className="max-w-5xl mx-auto animate-fade-in">
        {/* Profile Photo with Geometric Frame */}
        <div className="flex justify-center mb-12">
          <div className="relative group">
            <div className="absolute inset-0 bg-secondary/20 rotate-6 transition-transform group-hover:rotate-12"></div>
            <div className="absolute inset-0 bg-accent/20 -rotate-6 transition-transform group-hover:-rotate-12"></div>
            <div className="relative w-48 h-48 md:w-64 md:h-64 overflow-hidden border-4 border-primary">
              <img 
                src={profilePhoto} 
                alt="Diyar Karim" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-block mb-6 px-6 py-2 bg-secondary/10 border border-secondary/20">
            <span className="text-secondary font-semibold tracking-wide">SENIOR FRONTEND ENGINEERING MANAGER</span>
          </div>
        
          <h1 className="font-display text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            DIYAR KARIM
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            Frontend Engineering Leader with <span className="text-secondary font-semibold">7+ years</span> of experience 
            building and scaling performant web and mobile applications using Angular, React, and React Native.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <Button 
              variant="default" 
              size="lg" 
              className="gap-2 bg-primary hover:bg-primary/90"
              asChild
            >
              <a href="mailto:drkarm123@gmail.com">
                <Mail className="w-5 h-5" />
                Get in Touch
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="gap-2 border-2"
              asChild
            >
              <a href="https://linkedin.com/in/diyarkarim" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </Button>
          </div>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Phone className="w-4 h-4" />
            <span>(412) 607-3932</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
