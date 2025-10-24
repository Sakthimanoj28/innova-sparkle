import { GraduationCap, Cpu, MessageSquare } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Student Performance Prediction",
      icon: <GraduationCap className="text-primary" size={32} />,
      description: "Regression + classification ML pipeline for GPA & dropout risk using OULAD dataset. Achieved high accuracy in predicting student outcomes.",
      tags: ["Machine Learning", "Python", "Scikit-learn"]
    },
    {
      title: "Food Printer AI",
      icon: <Cpu className="text-accent" size={32} />,
      description: "Multi-module AI system integrating NLP, Computer Vision, and IoT with PLC + HMI for automated food printing solutions.",
      tags: ["NLP", "Computer Vision", "IoT"]
    },
    {
      title: "Conversational Recipe Assistant",
      icon: <MessageSquare className="text-primary" size={32} />,
      description: "Voice-based chatbot using LangChain, Whisper, and ElevenLabs for interactive cooking guidance and recipe recommendations.",
      tags: ["LangChain", "Voice AI", "NLP"]
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">
          Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl shadow-lg p-6 border border-border hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className="mb-4 p-4 bg-primary/10 rounded-lg inline-block">
                {project.icon}
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-3">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 bg-accent/10 text-accent rounded-md text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
