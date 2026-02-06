import { Rocket, Calendar, ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section id="cta" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#A5D8FF]/20 via-[#D0BCFF]/20 to-[#B197FC]/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="glass-effect rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-32 h-32 bg-[#A5D8FF]/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#B197FC]/10 rounded-full blur-2xl"></div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#A5D8FF]/20 to-[#B197FC]/20 border border-[#A5D8FF]/30 mb-6">
              <Rocket className="w-4 h-4 text-[#A5D8FF]" />
              <span className="text-sm text-[#A5D8FF] font-semibold">
                Start Your Free Trial
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Ready to Hire{" "}
              <span className="text-gradient">Better, Faster?</span>
            </h2>

            <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto">
              Join 500+ companies hiring smarter with AI
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="group px-10 py-5 bg-gradient-to-r from-[#A5D8FF] to-[#D0BCFF] text-black font-bold rounded-xl hover:shadow-2xl hover:shadow-[#A5D8FF]/50 transition-all duration-300 flex items-center gap-3 text-lg hover:scale-105">
                Start Free Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-10 py-5 border-2 border-[#B197FC] text-[#B197FC] font-bold rounded-xl hover:bg-[#B197FC]/10 transition-all duration-300 flex items-center gap-3 text-lg hover:scale-105">
                <Calendar className="w-5 h-5" />
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
