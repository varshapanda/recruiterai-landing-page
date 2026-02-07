import React from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Jun Yuh",
      role: "Founder",
      company: "TechStart Solutions",
      quote:
        "We went from 6 weeks to hire a developer to just 10 days. RecruiterAI handled everything from screening to scheduling. Game changer for our 5-person startup.",
      rating: 5,
      avatar: "RM",
    },
    {
      name: "Pauline Jo",
      role: "Head of Talent",
      company: "GrowthLabs India",
      quote:
        "The AI screening is incredibly accurate. We've reduced bad hires by 60% and our team actually enjoys the hiring process now. Best investment we've made.",
      rating: 5,
      avatar: "AS",
    },
    {
      name: "Breanna Quan",
      role: "CEO",
      company: "InnovateTech",
      quote:
        "Finally, a recruiting tool that actually saves time instead of adding more work. Our hiring managers love it, and candidates report a much better experience.",
      rating: 5,
      avatar: "VP",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="testimonials" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-[#D0BCFF]/5 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#B197FC]/5 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Trusted by <span className="text-gradient">Hiring Teams</span>{" "}
            Everywhere
          </h2>
          <p className="text-xl text-gray-400">
            See what companies are saying about RecruiterAI
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="glass-effect rounded-2xl p-8 relative group"
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                initial={{ opacity: 0.2, scale: 1 }}
                whileHover={{ opacity: 0.4, scale: 1.2 }}
                transition={{ duration: 0.3 }}
              >
                <Quote className="absolute top-6 right-6 w-12 h-12 text-[#A5D8FF]/20" />
              </motion.div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + i * 0.1, duration: 0.3 }}
                  >
                    <Star
                      className="w-4 h-4 fill-[#A5D8FF] text-[#A5D8FF]"
                    />
                  </motion.div>
                ))}
              </div>

              <motion.p
                className="text-gray-300 leading-relaxed mb-6 relative z-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.3, duration: 0.5 }}
              >
                "{testimonial.quote}"
              </motion.p>

              <div className="flex items-center gap-4">
                <motion.div
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-[#A5D8FF] to-[#B197FC] flex items-center justify-center flex-shrink-0"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-black font-bold">
                    {testimonial.avatar}
                  </span>
                </motion.div>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;