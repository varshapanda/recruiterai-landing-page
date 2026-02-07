import React, { useState, useEffect } from "react";
import { Menu, X, Bot } from "lucide-react";

const Navbar = () => {
  const [, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = [
        "hero",
        "how-it-works",
        "impact",
        "integrations",
        "testimonials",
        "faq",
        "cta",
      ];

      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Workflows", href: "#how-it-works" },
    { name: "Impact", href: "#impact" },
    { name: "Platforms", href: "#integrations" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
    { name: "Schedule Demo", href: "#cta" },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  const isLinkActive = (href) => {
    const sectionId = href.replace("#", "");
    return activeSection === sectionId;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black/80 backdrop-blur-md">
      <div className="max-w-[1400px] mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#A5D8FF] to-[#B197FC] flex items-center justify-center">
              <Bot className="w-6 h-6 text-black" />
            </div>
            <span className="text-xl font-display font-bold text-white">
              RecruiterAI
            </span>
          </div>

          <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2">
            <div className="flex items-center gap-1 px-2 py-2 rounded-full glass-effect backdrop-blur-xl bg-white/5 whitespace-nowrap">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-2 text-sm transition-all duration-200 font-medium rounded-full whitespace-nowrap ${
                    isLinkActive(link.href)
                      ? "bg-gradient-to-r from-[#A5D8FF]/20 to-[#B197FC]/20 text-white border border-[#A5D8FF]/30"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button className="px-5 py-2 text-sm bg-gradient-to-r from-[#A5D8FF] to-[#D0BCFF] text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-[#A5D8FF]/30 transition-all duration-300">
              Get Started
            </button>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 bg-black/95 backdrop-blur-xl rounded-2xl p-6 border-2 border-[#B197FC]/30 shadow-lg shadow-[#B197FC]/20">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`block text-base transition-colors duration-200 font-medium py-2 ${
                  isLinkActive(link.href)
                    ? "text-[#A5D8FF] font-bold"
                    : "text-gray-300 hover:text-[#A5D8FF]"
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-white/10">
              <button className="w-full px-6 py-3 bg-gradient-to-r from-[#A5D8FF] to-[#D0BCFF] text-black font-semibold rounded-lg">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;