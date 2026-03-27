"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "FeedLoop",
    description:
      "Shaped an intuitive user experience by developing a lightweight, framework-agnostic feedback widget that can be integrated into any website via a single-line script tag.",
    image: "thoughtstyle.png",
    tags: ["React", "Node.js", "MongoDB"],
    liveUrl: "https://thoughtsyde-qxn4.vercel.app/",
    githubUrl: "https://github.com/jagdishlove/covid19-tracker",
  },
  {
    title: "Covid-19 Tracker",
    description:
      "A real-time web application that displays up-to-date global and country-specific Covid-19 statistics, including confirmed cases, recoveries, and deaths. The project fetches data from a public API and presents it in a clean, responsive interface with interactive charts and tables.",
    image: "covid-19-tracker.png",
    tags: ["React", "Node.js", "MongoDB"],
    liveUrl: "https://coive-19-tracker.web.app/",
    githubUrl: "https://github.com/jagdishlove/covid19-tracker",
  },
  {
    title: "Short-y",
    description:
      "Short-y is a lightweight and efficient web application that allows users to shorten long URLs into compact, easy-to-share links. Designed for simplicity and speed, Short-y helps make links more manageable while tracking usage data.",
    image: "short-y.png",
    tags: ["react", "Firebase", "Tailwind CSS"],
    liveUrl: "https://short-y-j4u3.vercel.app/",
    githubUrl: "https://github.com/jagdishlove/shortY",
  },
  {
    title: "Portfolio Website",
    description:
      "A responsive portfolio website showcasing projects and skills with a modern design.",
    image: "https://picsum.photos/id/24/600/400",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "GPT3 Animation Website",
    description:
      "A stunning website showcasing the capabilities of GPT-3 through interactive animations and examples.",
    image: "gpt3.png",
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "OpenAI"],
    liveUrl: "https://gpt3-jm.vercel.app/",
    githubUrl: "https://github.com/jagdishlove/gpt3-jm",
  },
  {
    title: "Batman Arkham shop E-commerce",
    description:
      "A stunning e-commerce website for the Batman: Arkham series, featuring a sleek design and user-friendly interface.",
    image: "batman.png",
    tags: [
      "React",
      "nodejs",
      "expressjs",
      "TypeScript",
      "zustand",
      "Tailwind CSS",
      "MongoDB",
    ],
    liveUrl: "https://batman-arkham-shop-client.vercel.app/",
    githubUrl: "https://github.com/jagdishlove/Batman_Arkham_shop",
  },
];

export function WorkSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative py-32 bg-secondary/30"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          className={`text-center max-w-3xl mx-auto mb-16 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
        >
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
            Selected Work
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
            Projects I've built
          </h2>
          <p className="text-lg text-muted-foreground">
            Here are some of my recent projects that showcase my skills in web
            development, design, and problem-solving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {project.image && (
                <div className="relative h-64 overflow-hidden bg-secondary">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-br from-card via-transparent to-transparent" />
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-secondary text-muted-foreground rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <a
                    href={project.liveUrl}
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:opacity-80 transition-opacity"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github size={16} />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`text-center mt-12 ${isVisible ? "animate-fade-up delay-600" : "opacity-0"}`}
        >
          <a
            href="https://github.com/jagdishlove"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 text-sm font-medium border border-border text-foreground rounded-full hover:bg-secondary transition-all hover:scale-105"
          >
            View All Projects on GitHub
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
