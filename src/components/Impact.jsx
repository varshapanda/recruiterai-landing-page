import React from "react";
import { motion } from "framer-motion";
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
    <section id="impact" className="py-16 px-6 relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-[#A5D8FF]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-[#B197FC]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            The <span className="text-gradient">RecruiterAI</span> Advantage
          </h2>
          <p className="text-xl text-gray-400">
            Real results from companies that switched to AI-powered recruiting
          </p>
        </motion.div>

        {/* Desktop: Zigzag Path Layout */}
        <div className="hidden lg:block relative">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            const isLeft = index % 2 === 0;
            const isLast = index === metrics.length - 1;

            return (
              <div key={index} className="relative">
                {/* Connecting Line */}
                {!isLast && (
                  <motion.div
                    className="absolute left-1/2 w-1 bg-gradient-to-b from-transparent via-white/20 to-transparent"
                    style={{
                      height: "120px",
                      top: "100%",
                      transform: "translateX(-50%)",
                    }}
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.5, duration: 0.4 }}
                  />
                )}

                <div
                  className={`flex items-center gap-8 mb-24 ${
                    isLeft ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  {/* Content Side */}
                  <motion.div
                    className="flex-1"
                    initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: index * 0.15, duration: 0.6 }}
                  >
                    <div
                      className={`max-w-md ${isLeft ? "ml-auto" : "mr-auto"}`}
                    >
                      <motion.div
                        className="inline-flex items-center gap-3 mb-3"
                        whileHover={{ scale: 1.05 }}
                      >
                        <motion.div
                          className="w-14 h-14 rounded-2xl flex items-center justify-center"
                          style={{
                            backgroundColor: `${metric.color}30`,
                            border: `2px solid ${metric.color}`,
                          }}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <Icon
                            className="w-7 h-7"
                            style={{ color: metric.color }}
                          />
                        </motion.div>
                        <motion.div
                          className="text-6xl font-display font-black"
                          style={{ color: metric.color }}
                          initial={{ scale: 0, rotate: -180 }}
                          whileInView={{ scale: 1, rotate: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            delay: index * 0.15 + 0.2,
                            duration: 0.6,
                            type: "spring",
                            stiffness: 200,
                          }}
                        >
                          {metric.value}
                        </motion.div>
                      </motion.div>

                      <h3 className="text-2xl font-bold text-white mb-2">
                        {metric.label}
                      </h3>
                      <p className="text-gray-400 leading-relaxed mb-4">
                        {metric.description}
                      </p>

                      {/* Horizontal Progress Bar */}
                      <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          className="absolute inset-y-0 left-0 rounded-full"
                          style={{
                            background: `linear-gradient(90deg, ${metric.color}80, ${metric.color})`,
                          }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${metric.percentage}%` }}
                          viewport={{ once: true }}
                          transition={{
                            delay: index * 0.15 + 0.4,
                            duration: 1,
                            ease: "easeOut",
                          }}
                        />
                        {/* Glowing effect */}
                        <motion.div
                          className="absolute inset-y-0 left-0 rounded-full blur-sm"
                          style={{
                            background: `linear-gradient(90deg, transparent, ${metric.color}80)`,
                          }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${metric.percentage}%` }}
                          viewport={{ once: true }}
                          transition={{
                            delay: index * 0.15 + 0.4,
                            duration: 1,
                            ease: "easeOut",
                          }}
                        />
                      </div>
                    </div>
                  </motion.div>

                  {/* Center Node */}
                  <motion.div
                    className="relative z-10"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.15 + 0.3,
                      duration: 0.5,
                      type: "spring",
                      stiffness: 200,
                    }}
                  >
                    <motion.div
                      className="w-20 h-20 rounded-full flex items-center justify-center relative"
                      style={{
                        background: `radial-gradient(circle, ${metric.color}40, transparent)`,
                      }}
                      whileHover={{ scale: 1.2 }}
                    >
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center"
                        style={{
                          backgroundColor: metric.color,
                          boxShadow: `0 0 30px ${metric.color}80`,
                        }}
                      >
                        <span className="text-black font-bold text-lg">
                          {index + 1}
                        </span>
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Empty space on other side */}
                  <div className="flex-1" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile/Tablet: Vertical Timeline */}
        <div className="lg:hidden space-y-8">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;

            return (
              <motion.div
                key={index}
                className="relative pl-20"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                {/* Timeline connector */}
                {index !== metrics.length - 1 && (
                  <motion.div
                    className="absolute left-6 top-16 w-0.5 h-full bg-gradient-to-b from-white/30 to-transparent"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.4 }}
                  />
                )}

                {/* Circle Node */}
                <motion.div
                  className="absolute left-0 top-0 w-12 h-12 rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor: metric.color,
                    boxShadow: `0 0 20px ${metric.color}60`,
                  }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.4,
                    type: "spring",
                  }}
                  whileHover={{ scale: 1.2 }}
                >
                  <Icon className="w-6 h-6 text-black" />
                </motion.div>

                {/* Content */}
                <div className="glass-effect rounded-2xl p-6 hover:scale-[1.02] transition-transform">
                  <motion.div
                    className="text-5xl font-display font-black mb-2"
                    style={{ color: metric.color }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.1 + 0.2,
                      duration: 0.5,
                      type: "spring",
                    }}
                  >
                    {metric.value}
                  </motion.div>

                  <h3 className="text-xl font-bold text-white mb-2">
                    {metric.label}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-3">
                    {metric.description}
                  </p>

                  {/* Progress bar */}
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ backgroundColor: metric.color }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${metric.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.1 + 0.4,
                        duration: 1,
                        ease: "easeOut",
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Impact;