import { Mail, Linkedin, Github, Phone } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full text-center">
        <div className="mb-8 flex justify-center">
          <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg border-4 border-primary/10">
            <img 
              src={profilePhoto} 
              alt="Sakthi Manoj" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-primary">
          Sakthi Manoj R
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground">
          AI Engineer & Data Scientist
        </h2>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
          Aspiring AI and Data Science professional with strong academic background, 
          hands-on internship experience, and proven analytical expertise. Passionate about 
          applying machine learning, NLP, and automation to build intelligent real-world solutions.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <a 
            href="mailto:sakthimanojr.10@gmail.com"
            className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all shadow-md hover:shadow-lg"
          >
            <Mail size={20} />
            <span>Email</span>
          </a>
          
          <a 
            href="https://linkedin.com/in/sakthi-manoj--r"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-all shadow-md hover:shadow-lg"
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
          
          <a 
            href="https://github.com/Sakthimanoj28"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-all shadow-md hover:shadow-lg"
          >
            <Github size={20} />
            <span>GitHub</span>
          </a>
          
          <a 
            href="tel:+918015810364"
            className="flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-all shadow-md hover:shadow-lg"
          >
            <Phone size={20} />
            <span>+91 8015810364</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
