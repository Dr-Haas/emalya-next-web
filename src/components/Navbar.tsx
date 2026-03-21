"use client";

import { useState, useEffect } from "react";
import { X, Menu, ChevronDown, MessageCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ROUTES } from "@/lib/routes";
import { getWhatsAppHref } from "@/lib/whatsapp";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const whatsappHref = getWhatsAppHref();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const solutions = [
    { name: "Pack Premium", href: ROUTES.packPremium, badge: "Transformation" },
    { name: "Pack Signature", href: ROUTES.packSignature, badge: "Embellissement" },
  ];

  const navLinks = [
    { name: "Simuler mon sourire", href: ROUTES.simulateur },
    { name: "Formation", href: ROUTES.formation },
    { name: "Blog", href: ROUTES.blog },
    { name: "Émalya Lab", href: ROUTES.emalyaLab },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-5">
        <Link href="/" className="flex items-center">
          <img
            src="/lovable-uploads/bc788b9e-7681-44f2-996e-ff937005f876.png"
            alt="ÉMALYA Logo"
            className="h-8 md:h-10"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-4 xl:gap-6 flex-wrap justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-emalya-blue hover:text-emalya-blue/80 font-medium transition-colors">
              <Link href="/#techniques" className="flex items-center gap-1">
                Nos protocoles
                <ChevronDown className="w-4 h-4" />
              </Link>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-64">
              {solutions.map((solution) => (
                <DropdownMenuItem key={solution.href} asChild>
                  <Link href={solution.href} className="flex items-center justify-between w-full">
                    <span>{solution.name}</span>
                    {solution.badge && (
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full ${
                          solution.badge === "Transformation"
                            ? "bg-emalya-blue text-white"
                            : "bg-emalya-cream text-emalya-blue"
                        }`}
                      >
                        {solution.badge}
                      </span>
                    )}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-emalya-blue hover:text-emalya-blue/80 font-medium transition-colors text-sm xl:text-base"
            >
              {link.name}
            </Link>
          ))}

          {whatsappHref && (
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emalya-blue hover:text-emalya-blue/80 font-medium transition-colors inline-flex items-center gap-1"
              title="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="hidden xl:inline">WhatsApp</span>
            </a>
          )}

          <Button asChild variant="default" size="default">
            <Link href={ROUTES.rendezVous}>Prendre RDV</Link>
          </Button>
        </nav>

        <Button onClick={toggleMenu} variant="outline" size="icon" className="lg:hidden">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="container mx-auto py-4 space-y-2">
            <p className="text-xs font-semibold text-emalya-gray/60 uppercase tracking-wider px-3 mb-2">
              Nos protocoles
            </p>
            {solutions.map((solution) => (
              <Link
                key={solution.href}
                href={solution.href}
                onClick={toggleMenu}
                className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-emalya-cream transition-colors"
              >
                <span className="font-medium text-emalya-blue">{solution.name}</span>
                {solution.badge && (
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${
                      solution.badge === "Transformation"
                        ? "bg-emalya-blue text-white"
                        : "bg-emalya-cream text-emalya-blue"
                    }`}
                  >
                    {solution.badge}
                  </span>
                )}
              </Link>
            ))}

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={toggleMenu}
                className="flex items-center px-3 py-2 rounded-lg hover:bg-emalya-cream transition-colors font-medium text-emalya-blue"
              >
                {link.name}
              </Link>
            ))}

            {whatsappHref && (
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={toggleMenu}
                className="flex items-center gap-2 px-3 py-2 font-medium text-emalya-blue"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            )}

            <div className="pt-4 border-t mt-4">
              <Button asChild variant="default" className="w-full" onClick={toggleMenu}>
                <Link href={ROUTES.rendezVous}>Prendre RDV</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
