import { Sparkles, Zap } from "lucide-react";

const Hero = () => {
  const conversations = [
    {
      name: "Sarah K.",
      role: "Founder at TechStart",
      quote:
        "Candidates wait 3 weeks for replies while I'm juggling everything. We're losing great talent to competitors.",
      position: "top-left",
      delay: "0s",
    },
    {
      name: "Rahul M.",
      role: "Hiring Manager at GrowthCo",
      quote:
        "Posted on LinkedIn. Got 200 applications. Skimmed through 20. Hired on gut feeling. They quit in 2 months.",
      position: "top-right",
      delay: "0.2s",
    },
    {
      name: "Priya S.",
      role: "CEO at InnovateLabs",
      quote:
        "I'm the CEO, product lead, AND now doing HR? There's zero time to read 200 resumes properly.",
      position: "bottom-left",
      delay: "0.4s",
    },
    {
      name: "Amit T.",
      role: "Head of HR at ScaleUp",
      quote:
        "Our best candidate accepted another offer while we were still scheduling interviews. This keeps happening.",
      position: "bottom-right",
      delay: "0.6s",
    },
  ];

  const getPositionClasses = (position) => {
    const positions = {
      "top-left": "top-10 left-4 md:top-20 md:left-10 lg:left-20",
      "top-right": "top-10 right-4 md:top-20 md:right-10 lg:right-20",
      "bottom-left": "bottom-10 left-4 md:bottom-20 md:left-10 lg:left-20",
      "bottom-right": "bottom-10 right-4 md:bottom-20 md:right-10 lg:right-20",
    };
    return positions[position];
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#A5D8FF]/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#D0BCFF]/10 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#B197FC]/10 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {conversations.map((conv, index) => (
        <div
          key={index}
          className={`absolute ${getPositionClasses(conv.position)} w-64 md:w-72 hidden md:block`}
          style={{ animationDelay: conv.delay }}
        >
          <div className="glass-effect rounded-2xl p-4 shadow-2xl animate-float border-l-2 border-[#A5D8FF] hover:scale-105 transition-transform duration-300">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#A5D8FF] to-[#D0BCFF] flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-bold text-black">
                  {conv.name[0]}
                </span>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-sm text-white">{conv.name}</p>
                <p className="text-xs text-[#737373]">{conv.role}</p>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed italic">
              "{conv.quote}"
            </p>
          </div>
        </div>
      ))}

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-6 animate-fade-in">
          <Sparkles className="w-4 h-4 text-[#A5D8FF]" />
          <span className="text-sm text-[#A5D8FF]">AI-Powered Recruiting</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 animate-slide-up">
          Every Hire, <span className="text-gradient">Faster</span> and{" "}
          <span className="text-gradient">Better</span>
        </h1>

        <p
          className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          Stop losing great candidates to slow, manual hiring processes. Let AI
          handle the heavy lifting while you focus on building your team.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up"
          style={{ animationDelay: "0.4s" }}
        >
          <button className="group px-8 py-4 bg-gradient-to-r from-[#A5D8FF] to-[#D0BCFF] text-black font-semibold rounded-lg hover:shadow-2xl hover:shadow-[#A5D8FF]/50 transition-all duration-300 flex items-center gap-2 hover:scale-105">
            Start Hiring Smarter
            <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          </button>
          <button className="px-8 py-4 border-2 border-[#B197FC] text-[#B197FC] font-semibold rounded-lg hover:bg-[#B197FC]/10 transition-all duration-300 hover:scale-105">
            See How It Works
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden lg:block z-20">
        <div className="w-6 h-10 border-2 border-[#A5D8FF] rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-[#A5D8FF] rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
