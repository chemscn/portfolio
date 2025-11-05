import { Mail, Linkedin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display text-5xl md:text-6xl font-bold mb-8">
          LET'S WORK TOGETHER
        </h2>
        
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Interested in collaborating or discussing opportunities? I'm always open to connecting with fellow professionals and exploring new challenges.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          <Button 
            size="lg"
            className="gap-2 text-primary bg-secondary hover:bg-secondary/90 w-full sm:w-auto"
            asChild
          >
            <a href="mailto:drkarm123@gmail.com">
              <Mail className="w-5 h-5" />
              drkarm123@gmail.com
            </a>
          </Button>

          <Button 
            size="lg"
            variant="outline"
            className="gap-2 border-2 w-full sm:w-auto"
            asChild
          >
            <a href="https://linkedin.com/in/diyarkarim" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5" />
              linkedin.com/in/diyarkarim
            </a>
          </Button>
        </div>

        <div className="flex items-center justify-center gap-2 text-muted-foreground">
          <Phone className="w-5 h-5" />
          <span className="text-lg">(412) 607-3932</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
