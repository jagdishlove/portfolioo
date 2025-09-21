import { ExternalLink, Github } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Covid-19 Tracker",
      description:
        "A real-time web application that displays up-to-date global and country-specific Covid-19 statistics, including confirmed cases, recoveries, and deaths. The project fetches data from a public API and presents it in a clean, responsive interface with interactive charts and tables.",
      image: "/public/images/covid-19-tracker.png",
      tags: ["React", "Node.js", "MongoDB"],
      liveUrl: "https://coive-19-tracker.web.app/",
      githubUrl: "https://github.com/jagdishlove/covid19-tracker",
    },
    {
      title: "Short-y",
      description:
        "Short-y is a lightweight and efficient web application that allows users to shorten long URLs into compact, easy-to-share links. Designed for simplicity and speed, Short-y helps make links more manageable while tracking usage data.",
      image: "/public/images/short-y.png",
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
      image: "/public/images/gpt3.png",
      tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "OpenAI"],
      liveUrl: "https://gpt3-jm.vercel.app/",
      githubUrl: "https://github.com/jagdishlove/gpt3-jm",
    },
    {
      title: "Batman Arkham shop E-commerce",
      description:
        "A stunning e-commerce website for the Batman: Arkham series, featuring a sleek design and user-friendly interface.",
      image: "/public/images/batman.png",
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

  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg">
            Here are some of the projects I've worked on. Each project
            represents different skills and challenges I've tackled.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project: any, index) => (
            <Card key={index} className="overflow-hidden flex flex-col h-full">
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" /> Code
                  </a>
                </Button>
                <Button size="sm" asChild>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
