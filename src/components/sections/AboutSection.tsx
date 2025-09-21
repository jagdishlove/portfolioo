import { Code, Palette, Globe } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const AboutSection = () => {
  const skills = [
    {
      name: "Frontend Development",
      icon: <Code className="h-6 w-6" />,
      description: "React, Vue, TypeScript, HTML/CSS",
    },
    {
      name: "UX/UI Design",
      icon: <Palette className="h-6 w-6" />,
      description: "Figma, Adobe XD, User Research",
    },
    {
      name: "Backend Development",
      icon: <Globe className="h-6 w-6" />,
      description: "Node.js, Express, MongoDB, SQL",
    },
  ];

  return (
    <section id="about" className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg">
            I'm a passionate developer with a focus on creating beautiful,
            functional, and accessible web experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold mb-4">My Journey</h3>
            <p className="mb-4">
              With over 4 years of experience in web development, I've worked on
              a variety of projects from small business websites to large-scale
              applications. My background in both design and development allows
              me to bridge the gap between aesthetics and functionality.
            </p>
            <p className="mb-6">
              I'm passionate about creating inclusive digital experiences that
              work for everyone. When I'm not coding, you can find me hiking,
              reading, or experimenting with new technologies.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold mb-3 text-primary">
                  Experience
                </h4>
                <ul className="space-y-3">
                  <li>
                    <div className="font-medium">Senior Software Developer</div>
                    <div className="text-muted-foreground text-sm">
                      Birbal AI, 2022-2024
                    </div>
                  </li>
                  <li>
                    <div className="font-medium">Frontend Developer</div>
                    <div className="text-muted-foreground text-sm">
                      Brandwox, 2021-2022
                    </div>
                  </li>
                  <li>
                    <div className="font-medium">Junior Frontend Developer</div>
                    <div className="text-muted-foreground text-sm">
                      TCS, 2020-2021
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3 text-primary">
                  Education
                </h4>
                <ul className="space-y-3">
                  <li>
                    <div className="font-medium">
                      Master's in Computer Science
                    </div>
                    <div className="text-muted-foreground text-sm">
                      Birmingham City University, 2025-Present
                    </div>
                  </li>
                  <li>
                    <div className="font-medium">B.Tech Computer Science</div>
                    <div className="text-muted-foreground text-sm">
                      Graphic Era University, 2016-2020
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="bg-card p-6 rounded-lg border">
              <h4 className="text-lg font-semibold mb-4 text-center">
                Quick Facts
              </h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Experience:</span>
                  <span className="font-medium">4+ Years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Location:</span>
                  <span className="font-medium">Birmingham, UK</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Focus:</span>
                  <span className="font-medium">Full Stack</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Languages:</span>
                  <span className="font-medium">JS, TS, Reactjs, Nextjs</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-6 text-center">My Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center gap-4 pb-3">
                  <div className="bg-primary/10 p-2 rounded-full text-primary">
                    {skill.icon}
                  </div>
                  <CardTitle className="text-base">{skill.name}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription>{skill.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
