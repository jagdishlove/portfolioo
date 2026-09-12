"use client";

import { useEffect, useRef, useState } from "react";
import { Calendar, Globe, Mail, Phone } from "lucide-react";

const experienceData = [
  {
    company: "kewordal",
    position: "Senior Frontend Developer",
    dates: "Mar 2025 — Present",
    location: "Remote, UK",
    achievements: [
      "Led the development of a Stripe-based payment integration for the EdTech platform, taking full ownership from architectural design to deployment using React.js and Material UI.",
      "Engineered a custom AI-driven content generation engine and a bespoke chatbot from scratch, leveraging React.js and advanced API integrations to enhance user engagement.",
      "Implemented robust authentication workflows using Keycloak and optimised application performance, resulting in a seamless and secure experience across all platform features.",
    ],
  },
  {
    company: "Birbal Al",
    position: "Senior Frontend Developer",
    dates: "May 2022 — Dec 2024",
    location: "Remote, India",
    achievements: [
      "Developed modern frontend journeys using React Query and TypeScript, increasing application stability by 40% while resolving complex data handling issues through proactive code reviews.",
      "Implemented state and API functionalities via Axios, Redux, and Thunk to ensure efficient data flow, reducing errors by 30% during regular sprint planning.",
      "Delivered five high-impact frontend features using Figma wireframes and the GOV.UK Design System, improving WCAG accessibility for over 1.5 million users.",
    ],
  },
  {
    company: "Brandwox",
    position: "Mid Frontend Developer",
    dates: "Sep 2021 — May 2022",
    location: "Remote, India",
    achievements: [
      "Built three interactive React.js dashboards integrated with GraphQL and Hasura, decreasing page load times by 30% and boosting user retention through consistent code reviews.",
      "Documented internal design systems and integrated UI/UX principles using Tailwind CSS, reducing engineer onboarding duration by 15% through active sprint planning.",
      "Contributed to cross-client frontend development, increasing project efficiency by 10% while maintaining strict WCAG accessibility standards across all UI components.",
    ],
  },
  {
    company: "Tata Consultancy Services",
    position: "Junior Frontend Developer",
    dates: "Aug 2020 — Aug 2021",
    location: "Bangalore, India",
    achievements: [
      "Delivered ten pixel-perfect UI components using React.js and Figma wireframes, ensuring WCAG accessibility compliance across all major browsers.",
      "Supported development of five accessible features for key brands, applying Agile sprint planning methodologies while collaborating closely with the senior engineering team.",
      "Resolved over 15 daily UI issues using HTML/CSS and Bootstrap, improving user satisfaction scores through consistent application of UI/UX principles.",
    ],
  },
];

export function ExperienceSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-32 bg-card"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          className={`text-center max-w-3xl mx-auto mb-24 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
        >
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
            Experience
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
            Where I've Worked
          </h2>
          <p className="text-lg text-muted-foreground">
            A track record of delivering performant, accessible, and data-heavy B2B
            applications across multiple domains and industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {experienceData.map((exp, index) => {
            const delay = index * 0.1;
            return (
              <div
                key={exp.company}
                className={`group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 ${
                  isVisible ? "animate-fade-up" : "opacity-0"
                } flex flex-col h-full`}
                style={{ animationDelay: `${delay}s` }}
              >
                {/* Card Head: Company & Position */}
                <div className="relative h-20 bg-secondary/50 border-b border-border flex items-center px-6">
                  <h3 className="text-xl font-semibold text-foreground">
                    {exp.position}
                  </h3>
                  <p className="text-sm text-muted-foreground ml-4">
                    {exp.company}
                  </p>
                </div>

                {/* Card Body: Dates & Location */}
                <div className="px-6 py-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="text-primary" /> {exp.dates}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Globe className="text-primary" /> {exp.location}
                  </div>
                </div>

                {/* Card Body: Achievements */}
                <div className="px-6 py-6 flex-1">
                  <ul className="space-y-3 text-muted-foreground leading-relaxed">
                    {exp.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3"
                      >
                        <span className="text-primary flex-shrink-0">
                          {/* Icon placeholder */}
                        </span>
                        <span className="text-muted-foreground flex-1">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <div
          className={`text-center mt-12 ${isVisible ? "animate-fade-up delay-600" : "opacity-0"}`}
        >
          <a
            href="#contact"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 text-sm font-medium border border-border text-foreground rounded-full hover:bg-secondary transition-all hover:scale-105"
          >
            Get in Touch
            <Mail size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}