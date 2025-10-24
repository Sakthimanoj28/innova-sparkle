import { Brain, Bot, MessageSquare, Sparkles, Database, BarChart3, TrendingUp, Eye } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Brain className="text-primary" size={32} />,
      title: "Generative AI Development",
      description: "Design and deploy Generative AI systems using transformer-based architectures to create intelligent, creative, and human-like content — text, images, and conversational outputs powered by large-scale neural networks."
    },
    {
      icon: <Bot className="text-accent" size={32} />,
      title: "Agentic AI & Autonomous Agents",
      description: "Build AI Agents and Agentic AI systems capable of autonomous decision-making, goal execution, and dynamic interaction with APIs, data sources, and environments using frameworks like LangChain and AutoGen."
    },
    {
      icon: <MessageSquare className="text-primary" size={32} />,
      title: "Natural Language Processing (NLP)",
      description: "Implement end-to-end NLP solutions — from text preprocessing and sentiment analysis to emotion detection and conversational AI — enabling machines to understand, interpret, and generate human language effectively."
    },
    {
      icon: <Sparkles className="text-accent" size={32} />,
      title: "Large Language Model (LLM) Fine-Tuning",
      description: "Customize and fine-tune LLMs (e.g., GPT, LLaMA, Mistral) for domain-specific tasks to enhance performance, reduce bias, and align model behavior with organizational needs."
    },
    {
      icon: <Database className="text-primary" size={32} />,
      title: "AI Model Design & Deployment",
      description: "Develop, optimize, and deploy machine learning and deep learning models across domains such as predictive analytics, computer vision, and recommendation systems — ensuring scalability and accuracy in production environments."
    },
    {
      icon: <BarChart3 className="text-accent" size={32} />,
      title: "Data Science Solutions",
      description: "Deliver comprehensive data science pipelines — data wrangling, feature engineering, model evaluation, and visualization — transforming raw data into actionable insights and measurable business outcomes."
    },
    {
      icon: <TrendingUp className="text-primary" size={32} />,
      title: "Data Analytics & Visualization",
      description: "Perform exploratory data analysis (EDA) and build interactive dashboards using tools like Power BI, Tableau, and Python libraries to communicate trends, patterns, and KPIs effectively to decision-makers."
    },
    {
      icon: <Eye className="text-accent" size={32} />,
      title: "Computer Vision Applications",
      description: "Develop and deploy vision-based AI systems for detection, segmentation, and automation — integrating OpenCV, YOLO, and deep CNNs for real-time image and video analysis."
    }
  ];

  return (
    <section id="services" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">
          Services
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl shadow-lg p-6 border border-border hover:shadow-xl transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
