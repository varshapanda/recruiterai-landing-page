import React from "react";
import { Bot, Twitter, Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Product: ["Features", "Integrations", "Pricing", "API", "Changelog"],
    Company: ["About", "Blog", "Careers", "Press", "Partners"],
    Resources: [
      "Documentation",
      "Help Center",
      "Community",
      "Guides",
      "Webinars",
    ],
    Legal: ["Privacy", "Terms", "Security", "Compliance", "Cookie Policy"],
  };

  return (
    <footer className="relative border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#A5D8FF] to-[#B197FC] flex items-center justify-center">
                <Bot className="w-6 h-6 text-black" />
              </div>
              <span className="text-xl font-display font-bold text-white">
                RecruiterAI
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              AI-powered recruiting platform that automates your entire hiring
              workflow. Hire better, faster.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg glass-effect flex items-center justify-center hover:bg-[#A5D8FF]/10 transition-colors group"
              >
                <Twitter className="w-5 h-5 text-gray-400 group-hover:text-[#A5D8FF]" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg glass-effect flex items-center justify-center hover:bg-[#A5D8FF]/10 transition-colors group"
              >
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-[#A5D8FF]" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg glass-effect flex items-center justify-center hover:bg-[#A5D8FF]/10 transition-colors group"
              >
                <Github className="w-5 h-5 text-gray-400 group-hover:text-[#A5D8FF]" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg glass-effect flex items-center justify-center hover:bg-[#A5D8FF]/10 transition-colors group"
              >
                <Mail className="w-5 h-5 text-gray-400 group-hover:text-[#A5D8FF]" />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-white mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-[#A5D8FF] transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 pb-4">
          <p className="text-gray-400 text-sm">
            © 2026 RecruiterAI. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-gray-400 hover:text-[#A5D8FF] transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-[#A5D8FF] transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-[#A5D8FF] transition-colors"
            >
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
