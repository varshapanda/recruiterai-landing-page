import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How does AI screening work?",
      answer:
        "Our AI analyzes resumes using natural language processing to understand skills, experience, and qualifications. It ranks candidates based on your custom criteria, identifies top performers, and can even conduct initial video interviews with intelligent follow-up questions.",
    },
    {
      question: "Does RecruiterAI integrate with our existing ATS?",
      answer:
        "Yes! RecruiterAI seamlessly integrates with major ATS platforms including Greenhouse, Lever, Workable, and BambooHR. We also offer API access for custom integrations. Setup typically takes less than 30 minutes.",
    },
    {
      question: "What's the pricing structure?",
      answer:
        "We offer flexible pricing based on your hiring volume. Our Starter plan begins at $299/month for up to 50 active job postings. Enterprise plans include unlimited postings, advanced analytics, and dedicated support. Contact us for a custom quote.",
    },
    {
      question: "How long does setup take?",
      answer:
        "Most companies are fully up and running within 24 hours. Our onboarding team guides you through connecting your job boards, customizing screening criteria, and setting up your first automated workflow. No technical expertise required.",
    },
    {
      question: "Is candidate data secure?",
      answer:
        "Absolutely. We're SOC 2 Type II certified and GDPR compliant. All candidate data is encrypted at rest and in transit. We never share data with third parties, and you maintain full ownership of your candidate information. Annual security audits ensure we meet the highest standards.",
    },
  ];

  return (
    <section id="faq" className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-4">
            <HelpCircle className="w-4 h-4 text-[#A5D8FF]" />
            <span className="text-sm text-[#A5D8FF]">Got Questions?</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-xl text-gray-400">
            Everything you need to know about RecruiterAI
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="glass-effect rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left group"
              >
                <span className="text-lg font-semibold text-white group-hover:text-[#A5D8FF] transition-colors pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#A5D8FF] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-5">
                  <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
