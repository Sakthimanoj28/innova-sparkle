import { GraduationCap, Award } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">
          Education
        </h2>
        
        <div className="bg-card rounded-xl shadow-lg p-8 border border-border">
          <div className="flex items-start gap-4 mb-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <GraduationCap className="text-primary" size={32} />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                B.Tech – Artificial Intelligence and Data Science
              </h3>
              <p className="text-lg text-muted-foreground mb-1">
                Saveetha School of Engineering, SIMATS University
              </p>
              <p className="text-md text-muted-foreground">
                Current Year: 3rd Year
              </p>
            </div>
          </div>
          
          <div className="mt-6 flex items-center gap-3 p-4 bg-accent/10 rounded-lg border border-accent/20">
            <Award className="text-accent" size={24} />
            <span className="text-lg font-semibold text-foreground">
              Student Topper Award in Data Structures and Algorithms
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
