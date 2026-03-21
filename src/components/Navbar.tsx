"use client";

import { useState, useEffect } from 'react';
import { X, Menu, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const solutions = [
    { name: "Facettes Céramiques Emalya", href: "/facettes-ceramique", badge: "Transformation" },
    { name: "Composite Emalya", href: "/composite-emalya", badge: "Embellissement" },
  ];

  const navLinks = [
    { name: "Simuler mon sourire", href: "/simulateur-sourire" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto flex items-center justify-between py-5">
        <Link href="/" className="flex items-center">
          <img 
            src="/lovable-uploads/bc788b9e-7681-44f2-996e-ff937005f876.png" 
            alt="ÉMALYA Logo" 
            className="h-8 md:h-10" 
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <DropdownMenu>
            <DropdownMenuTrigger 
              className="flex items-center gap-1 text-emalya-blue hover:text-emalya-blue/80 font-medium transition-colors"
              onClick={(e) => {
                if (window.location.pathname !== '/') {
                  e.preventDefault();
                  window.location.href = '/#techniques';
                }
              }}
            >
              <Link href="/#techniques" className="flex items-center gap-1">
                Nos Techniques
                <ChevronDown className="w-4 h-4" />
              </Link>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-64">
              {solutions.map((solution) => (
                <DropdownMenuItem key={solution.href} asChild>
                  <Link href={solution.href} className="flex items-center justify-between w-full">
                    <span>{solution.name}</span>
                    {solution.badge && (
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        solution.badge === "Transformation" 
                          ? "bg-emalya-blue text-white" 
                          : "bg-emalya-cream text-emalya-blue"
                      }`}>
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
              className="text-emalya-blue hover:text-emalya-blue/80 font-medium transition-colors"
            >
              {link.name}
            </Link>
          ))}

          <Button 
            asChild 
            variant="default" 
            size="default"
          >
            <Link href="/rendez-vous">Prendre RDV</Link>
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <Button 
          onClick={toggleMenu} 
          variant="outline" 
          size="icon" 
          className="md:hidden"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto py-4 space-y-2">
            <p className="text-xs font-semibold text-emalya-gray/60 uppercase tracking-wider px-3 mb-2">
              Nos Techniques
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
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    solution.badge === "Transformation" 
                      ? "bg-emalya-blue text-white" 
                      : "bg-emalya-cream text-emalya-blue"
                  }`}>
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
            
            <div className="pt-4 border-t mt-4">
              <Button 
                asChild 
                variant="default" 
                className="w-full"
                onClick={toggleMenu}
              >
                <Link href="/rendez-vous">Prendre RDV</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;