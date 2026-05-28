"use client";

import { useEffect, useRef, useState } from "react";
import { Code2, Layers3, Library, Package } from "lucide-react";
import { FaAws } from "react-icons/fa";
import type { IconType } from "react-icons";
import {
  SiCypress,
  SiDocker,
  SiFigma,
  SiGit,
  SiGraphql,
  SiJavascript,
  SiJest,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSass,
  SiStorybook,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVuedotjs,
  SiWebpack,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Vue.js", level: 80 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Python", level: 75 },
      { name: "PostgreSQL", level: 80 },
      { name: "GraphQL", level: 85 },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git / GitHub", level: 90 },
      { name: "Docker", level: 75 },
      { name: "Figma", level: 85 },
      { name: "AWS / Vercel", level: 80 },
    ],
  },
];

const technologyGroups = [
  {
    title: "Programming",
    icon: Code2,
    items: ["JavaScript", "TypeScript", "Python"],
  },
  {
    title: "Frameworks",
    icon: Layers3,
    items: ["React", "Next.js", "Vue.js", "Node.js"],
  },
  {
    title: "Libraries",
    icon: Library,
    items: ["Tailwind CSS", "GraphQL", "REST APIs", "Sass", "Jest", "Cypress"],
  },
  {
    title: "Packages & Tools",
    icon: Package,
    items: [
      "PostgreSQL",
      "MongoDB",
      "Git",
      "Docker",
      "AWS",
      "Vercel",
      "Figma",
      "Storybook",
      "Webpack",
    ],
  },
];

const technologyIconMap: Record<string, IconType> = {
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  Python: SiPython,
  React: SiReact,
  "Next.js": SiNextdotjs,
  "Vue.js": SiVuedotjs,
  "Node.js": SiNodedotjs,
  "Tailwind CSS": SiTailwindcss,
  GraphQL: SiGraphql,
  "REST APIs": TbApi,
  Sass: SiSass,
  Jest: SiJest,
  Cypress: SiCypress,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  Git: SiGit,
  Docker: SiDocker,
  AWS: FaAws,
  Vercel: SiVercel,
  Figma: SiFigma,
  Storybook: SiStorybook,
  Webpack: SiWebpack,
};

export function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="relative py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          className={`text-center max-w-3xl mx-auto mb-16 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
        >
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
            Skills & Expertise
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
            Technologies I work with
          </h2>
          <p className="text-lg text-muted-foreground">
            I've worked with a variety of technologies in the web development
            world. Here's a quick overview of my main technical skill set.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${categoryIndex * 0.15}s` }}
            >
              <h3 className="text-xl font-bold text-foreground mb-6">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-linear-to-r from-primary to-primary/60 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: isVisible ? `${skill.level}%` : "0%",
                          transitionDelay: `${(categoryIndex * 4 + skillIndex) * 0.1}s`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technology Groups */}
        <div
          className={`${isVisible ? "animate-fade-up delay-500" : "opacity-0"}`}
        >
          <h3 className="text-center text-lg font-semibold text-foreground mb-8">
            Full Technology Stack
          </h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {technologyGroups.map((group, index) => {
              const Icon = group.icon;

              return (
                <div
                  key={group.title}
                  className="rounded-2xl border border-border bg-card p-6 hover:border-primary/50 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-9 w-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                      <Icon size={18} />
                    </div>
                    <h4 className="text-base font-semibold text-foreground">
                      {group.title}
                    </h4>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) =>
                      (() => {
                        const TechIcon = technologyIconMap[item];

                        return (
                          <span
                            key={`${group.title}-${item}`}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-secondary text-foreground rounded-full"
                          >
                            {TechIcon && <TechIcon className="text-[13px]" />}
                            {item}
                          </span>
                        );
                      })(),
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
