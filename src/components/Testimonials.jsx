import React from "react";
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

  return (
    <section id="testimonials" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D0BCFF]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#B197FC]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Trusted by <span className="text-gradient">Hiring Teams</span>{" "}
            Everywhere
          </h2>
          <p className="text-xl text-gray-400">
            See what companies are saying about RecruiterAI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-effect rounded-2xl p-8 hover:scale-105 transition-all duration-300 relative group"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-[#A5D8FF]/20 group-hover:text-[#A5D8FF]/40 transition-colors" />

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-[#A5D8FF] text-[#A5D8FF]"
                  />
                ))}
              </div>

              <p className="text-gray-300 leading-relaxed mb-6 relative z-10">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#A5D8FF] to-[#B197FC] flex items-center justify-center flex-shrink-0">
                  <span className="text-black font-bold">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">
                    {testimonial.role}, {testimonial.company}
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

export default Testimonials;
