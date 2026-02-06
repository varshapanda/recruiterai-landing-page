import React from "react";
import {
  TrendingUp,
  Clock,
  Users,
  Target,
  Award,
  DollarSign,
  CheckCircle,
} from "lucide-react";

const Impact = () => {
  const metrics = [
    {
      value: "10x",
      label: "Faster Screening",
      description:
        "AI parses and ranks 250+ applications per day vs 25 manually",
      percentage: 100,
      color: "#A5D8FF",
      icon: TrendingUp,
    },
    {
      value: "70%",
      label: "Faster Time-to-Hire",
      description: "Average hiring timeline drops from 42 days to just 12 days",
      percentage: 70,
      color: "#D0BCFF",
      icon: Clock,
    },
    {
      value: "25x",
      label: "More Interview Capacity",
      description:
        "AI conducts 200+ automated screening interviews daily vs 8 manual calls",
      percentage: 100,
      color: "#B197FC",
      icon: Users,
    },
    {
      value: "95%",
      label: "Application Completion",
      description:
        "Smart application forms reduce candidate drop-off dramatically",
      percentage: 95,
      color: "#A5D8FF",
      icon: Target,
    },
    {
      value: "89%",
      label: "More Qualified Applications",
      description:
        "AI job description optimizer attracts higher-quality candidate pipelines",
      percentage: 89,
      color: "#D0BCFF",
      icon: Award,
    },
    {
      value: "80%",
      label: "Lower Recruitment Costs",
      description:
        "vs traditional recruiting agencies and multiple software subscriptions",
      percentage: 80,
      color: "#B197FC",
      icon: DollarSign,
    },
    {
      value: "50%",
      label: "Reduction in Bad Hires",
      description:
        "AI skills assessment and matching improves hiring accuracy dramatically",
      percentage: 50,
      color: "#A5D8FF",
      icon: CheckCircle,
    },
  ];

  return (
    <section id="impact" className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            The <span className="text-gradient">RecruiterAI</span> Advantage
          </h2>
          <p className="text-xl text-gray-400">
            Real results from companies that switched to AI-powered recruiting
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div
                key={index}
                className="glass-effect rounded-2xl p-6 hover:scale-105 transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${metric.color}40` }}
                >
                  <Icon className="w-6 h-6" style={{ color: metric.color }} />
                </div>

                <div
                  className="text-5xl font-display font-bold mb-2"
                  style={{ color: metric.color }}
                >
                  {metric.value}
                </div>

                <h3 className="text-lg font-semibold text-white mb-3">
                  {metric.label}
                </h3>

                <div className="w-full h-3 bg-white/10 rounded-full mb-3 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: `${metric.percentage}%`,
                      backgroundColor: metric.color,
                    }}
                  ></div>
                </div>

                <p className="text-sm text-gray-400 leading-relaxed">
                  {metric.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Impact;
