import React from "react";
import { motion } from "framer-motion";
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <footer className="relative border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="lg:col-span-2" variants={itemVariants}>
            <div className="flex items-center gap-2 mb-4">
              <motion.div
                className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#A5D8FF] to-[#B197FC] flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Bot className="w-6 h-6 text-black" />
              </motion.div>
              <span className="text-xl font-display font-bold text-white">
                RecruiterAI
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              AI-powered recruiting platform that automates your entire hiring
              workflow. Hire better, faster.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Twitter, href: "#" },
                { Icon: Linkedin, href: "#" },
                { Icon: Github, href: "#" },
                { Icon: Mail, href: "#" },
              ].map(({ Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  className="w-10 h-10 rounded-lg glass-effect flex items-center justify-center group"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-5 h-5 text-gray-400 group-hover:text-[#A5D8FF] transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <motion.div key={category} variants={itemVariants}>
              <h3 className="font-semibold text-white mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <motion.li
                    key={link}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a
                      href="#"
                      className="text-gray-400 hover:text-[#A5D8FF] transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 pb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <p className="text-gray-400 text-sm">
            © 2026 RecruiterAI. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            {["Privacy Policy", "Terms of Service", "Cookie Settings"].map(
              (link, index) => (
                <motion.a
                  key={link}
                  href="#"
                  className="text-gray-400 hover:text-[#A5D8FF] transition-colors"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  {link}
                </motion.a>
              )
            )}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;