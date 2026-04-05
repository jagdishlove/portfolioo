"use client";

import { useEffect, useState } from "react";

import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Phone,
  Calendar,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const roles = [
  "Senior Front-End Engineer",
  "React & Next.js Specialist",
  "TypeScript Enthusiast",
  "UX & SEO Advocate",
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
      {/* Cover Banner */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <img
          src="/human.png"
          alt="Cover background"
          className="w-full h-300 md:h-auto object-cover object-center opacity-90 mix-blend-soft-light blur-[2px] scale-105"
          style={{ filter: "grayscale(0.1) contrast(1.1) brightness(1.08)" }}
        />
      </div>
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(var(--primary)_1px,transparent_1px),linear-gradient(90deg,var(--primary)_1px,transparent_1px)] bg-size-[60px_60px] opacity-[0.03] dark:opacity-[0.05]" />
      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 dark:bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 dark:bg-primary/5 rounded-full blur-3xl animate-float delay-500" />

      <div className="relative z-10 mx-auto px-6 lg:px-8 py-32 w-full">
        <div className="flex flex-col-reverse md:flex-row gap-12 items-center justify-center w-full">
          {/* Profile Picture */}
          <div
            className={`relative shrink-0 ${isVisible ? "animate-scale-in delay-300" : "opacity-0"}`}
          >
            <div className="relative w-44 h-44 md:w-56 md:h-56 rounded-full border-4 border-primary shadow-lg overflow-hidden bg-linear-to-br from-primary/10 via-background to-card flex items-center justify-center group">
              {/* Experience number, bring to front on hover/focus (desktop) */}
              <div className="flex flex-col items-center justify-center w-full h-full z-10 md:z-20 md:group-hover:z-30 md:group-focus:z-30 transition-all duration-300 pointer-events-none">
                <span className="text-6xl md:text-7xl font-extrabold text-primary drop-shadow-lg transition-all duration-300 md:group-hover:scale-110 md:group-hover:drop-shadow-[0_0_24px_var(--tw-shadow-color)] md:group-hover:shadow-primary md:group-focus:scale-110 md:group-focus:drop-shadow-[0_0_24px_var(--tw-shadow-color)]">
                  5+
                </span>
                <span className="text-base md:text-lg font-medium text-muted-foreground mt-1 transition-all duration-300 md:group-hover:text-primary md:group-focus:text-primary">
                  years experience
                </span>
              </div>
              {/* Decorative floating tech tags, always animated */}
              <div className="absolute -top-1 bg-card border border-border rounded-xl px-4 py-2 shadow-lg animate-float opacity-30 md:opacity-100">
                <span className="text-sm font-medium">React</span>
              </div>
              <div className="absolute top-1/3 -left-4 bg-card border border-border rounded-xl px-4 py-2 shadow-lg animate-float delay-200 opacity-30 md:opacity-100">
                <span className="text-sm font-medium">TypeScript</span>
              </div>
              <div className="absolute bottom-1/4 -right-4 bg-card border border-border rounded-xl px-4 py-2 shadow-lg animate-float delay-400 opacity-30 md:opacity-100">
                <span className="text-sm font-medium">Next.js</span>
              </div>
              <div className="absolute -bottom-4 left-1/4 bg-card border border-border rounded-xl px-4 py-2 shadow-lg animate-float delay-600 opacity-30 md:opacity-100">
                <span className="text-sm font-medium">Tailwind</span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div
            className={`flex-1 space-y-6 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
          >
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-balance">
                Jagdish Singh Mehra
              </h1>
              <div className="h-8 overflow-hidden">
                <p
                  key={currentRole}
                  className="text-xl sm:text-2xl text-primary animate-fade-up"
                >
                  {roles[currentRole]}
                </p>
              </div>
            </div>

            {/* Quick Summary Card */}
            <div className="bg-card/40 border border-border rounded-xl p-5 shadow flex flex-col gap-2">
              <p className="text-base sm:text-lg text-muted-foreground">
                I look forward to building user-friendly web experiences that
                drive business growth and improve customer satisfaction. I'm a
                Senior Frontend Engineer skilled in React, Next.js, and
                TypeScript, passionate about modernising applications. My goal
                is to deliver high-performance solutions, enhance user
                experience, and boost revenue for forward-thinking companies.
              </p>
            </div>

            {/* USP Highlights */}
            <div className="flex flex-wrap gap-3">
              <span className="bg-primary/10 text-primary border border-primary/20 rounded-full px-4 py-1 text-xs font-semibold">
                SEO & UX Impact: +25% SEO, +£8k/mo
              </span>
              <span className="bg-primary/10 text-primary border border-primary/20 rounded-full px-4 py-1 text-xs font-semibold">
                Code Quality: -30% Duplication, +£6.4k/project
              </span>
              <span className="bg-primary/10 text-primary border border-primary/20 rounded-full px-4 py-1 text-xs font-semibold">
                Legacy Modernisation: +40% Stability, -£5.6k/mo
              </span>
              <span className="bg-primary/10 text-primary border border-primary/20 rounded-full px-4 py-1 text-xs font-semibold">
                Accessibility: 1.5M users, +Compliance
              </span>
            </div>

            {/* Contact & Socials */}
            <div className="flex flex-wrap gap-4 items-center pt-2">
              <a
                href="mailto:jagdish.funn@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
                aria-label="Email"
              >
                <Mail size={18} /> jagdish.funn@gmail.com
              </a>
              <a
                href="tel:+447393069417"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
                aria-label="Phone"
              >
                <Phone size={18} /> +44 7393 069417
              </a>
              <a
                href="https://www.linkedin.com/in/jagdish-singh-mehra-75a616130/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} /> LinkedIn
              </a>
              <a
                href="https://calendly.com/jagdish-funn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
                aria-label="Calendly"
              >
                <Calendar size={18} /> Book a Call
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
                aria-label="Contact"
              >
                <ArrowDown size={18} /> Contact
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
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
