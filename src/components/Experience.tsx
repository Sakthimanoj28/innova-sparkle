import { Briefcase, TrendingUp } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "AI Intern",
      company: "One Yes Infotech",
      icon: <Briefcase className="text-primary" size={24} />,
      achievements: [
        "Built student performance prediction models using regression & classification",
        "Performed data preprocessing, feature engineering, and model tuning (R² = 1.0, AUC = 1.0)",
        "Integrated findings into a student analytics dashboard for dropout risk and GPA insights"
      ]
    },
    {
      title: "Data Scientist Intern",
      company: "Revamp Academy",
      duration: "3 Months",
      icon: <TrendingUp className="text-accent" size={24} />,
      achievements: [
        "Conducted EDA and built ML models using Python & Scikit-learn",
        "Applied statistical methods to extract insights and improved model accuracy by 15%"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">
          Experience
        </h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl shadow-lg p-8 border border-border hover:shadow-xl transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  {exp.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-lg text-primary font-semibold">
                    {exp.company}
                  </p>
                  {exp.duration && (
                    <p className="text-sm text-muted-foreground">
                      {exp.duration}
                    </p>
                  )}
                </div>
              </div>
              
              <ul className="space-y-3 mt-4">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">•</span>
                    <span className="text-foreground">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
