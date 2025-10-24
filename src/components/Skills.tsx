import { Code2, Database, BarChart3, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: <Code2 className="text-primary" size={28} />,
      skills: ["Python", "R", "SQL", "Java"]
    },
    {
      title: "ML & DL",
      icon: <Database className="text-accent" size={28} />,
      skills: ["TensorFlow", "Scikit-learn", "LangChain"]
    },
    {
      title: "Visualization",
      icon: <BarChart3 className="text-primary" size={28} />,
      skills: ["Power BI", "Tableau", "R"]
    },
    {
      title: "Tools & Database",
      icon: <Wrench className="text-accent" size={28} />,
      skills: ["Git", "Oracle (Certified)", "Jupyter Notebook", "Web Scraping", "ElevenLabs"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">
          Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl shadow-lg p-6 border border-border hover:shadow-xl transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i}
                    className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm font-medium"
                  >
                    {skill}
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

export default Skills;
