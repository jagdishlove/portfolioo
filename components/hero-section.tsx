"use client";

import { useEffect, useState } from "react";
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const roles = [
  "Senior Front-End Developer",
  "UI/UX Designer",
  "Creative Coder",
  "Problem Solver",
];

export function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Blended human.png background */}
      <div className="absolute inset-0  pointer-events-none select-none">
        <img
          src="/human.png"
          alt="Blended human background"
          className="w-full h-300 md:h-auto object-cover object-center opacity-90 mix-blend-soft-light blur-[2px] scale-105"
          style={{ filter: "grayscale(0.1) contrast(1.1) brightness(1.08)" }}
        />
        {/* Gradient overlay for extra blend and readability */}
      </div>

      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(var(--primary)_1px,transparent_1px),linear-gradient(90deg,var(--primary)_1px,transparent_1px)] bg-size-[60px_60px] opacity-[0.03] dark:opacity-[0.05]" />

      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 dark:bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 dark:bg-primary/5 rounded-full blur-3xl animate-float delay-500" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            className={`space-y-8 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
          >
            <div className="space-y-4">
              <p className="text-primary font-medium tracking-wide uppercase text-sm">
                Welcome to my portfolio
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-balance">
                <span className="text-foreground">Hi, I'm</span>
                <br />
                <span className="animate-text-shimmer">Jagdish Mehra</span>
              </h1>
              <div className="h-8 overflow-hidden">
                <p
                  key={currentRole}
                  className="text-xl sm:text-2xl text-muted-foreground animate-fade-up"
                >
                  {roles[currentRole]}
                </p>
              </div>
            </div>

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              I craft accessible, pixel-perfect digital experiences that blend
              thoughtful design with robust engineering. Let's build something
              amazing together.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="#work"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-all hover:scale-105 active:scale-95 animate-pulse-glow"
              >
                View My Work
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium border border-border text-foreground rounded-full hover:bg-secondary transition-all hover:scale-105 active:scale-95"
              >
                Let's Talk
              </Link>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <a
                href="https://github.com/jagdishlove"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors hover:scale-110"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/jagdish-singh-mehra/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          <div
            className={`relative ${isVisible ? "animate-scale-in delay-300" : "opacity-0"}`}
          >
            <div className="relative w-full aspect-square max-w-md mx-auto md:left-20">
              <div className="absolute inset-0 rounded-full border border-primary/20 animate-pulse" />
              <div className="absolute inset-4 rounded-full border border-primary/30" />
              <div className="absolute inset-8 rounded-full border border-primary/40" />

              <div className="absolute inset-12 rounded-full bg-linear-to-br from-secondary to-card flex items-center justify-center overflow-hidden">
                <div className="text-center p-8">
                  <div className="text-6xl font-bold text-primary">5+</div>
                  <div className="text-sm text-muted-foreground mt-2">
                    Years of Experience
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 right-8 bg-card border border-border rounded-xl px-4 py-2 shadow-lg animate-float">
                <span className="text-sm font-medium">React</span>
              </div>
              <div className="absolute top-1/3 -left-4 bg-card border border-border rounded-xl px-4 py-2 shadow-lg animate-float delay-200">
                <span className="text-sm font-medium">TypeScript</span>
              </div>
              <div className="absolute bottom-1/4 -right-4 bg-card border border-border rounded-xl px-4 py-2 shadow-lg animate-float delay-400">
                <span className="text-sm font-medium">Next.js</span>
              </div>
              <div className="absolute -bottom-4 left-1/4 bg-card border border-border rounded-xl px-4 py-2 shadow-lg animate-float delay-600">
                <span className="text-sm font-medium">Tailwind</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Link
            href="#about"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowDown size={28} />
          </Link>
        </div>
      </div>
    </section>
  );
}
