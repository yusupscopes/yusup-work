"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const frontendSkills = [
    { name: "React / Next.js", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "HTML / CSS", level: 90 },
    { name: "Tailwind CSS", level: 85 },
    { name: "Vue.js", level: 90 },
  ];

  const backendSkills = [
    { name: "Node.js", level: 90 },
    { name: "NestJS", level: 85 },
    { name: "PostgreSQL", level: 80 },
    { name: "MongoDB", level: 85 },
    { name: "REST APIs", level: 90 },
  ];

  const otherSkills = [
    { name: "Git / GitHub", level: 90 },
    { name: "Docker", level: 80 },
    { name: "AWS", level: 75 },
    { name: "CI/CD", level: 85 },
    { name: "Testing", level: 80 },
    { name: "Agile / Scrum", level: 85 },
  ];

  const SkillList = ({ skills }) => (
    <div className="space-y-6">
      {skills.map((skill, index) => (
        <motion.div key={index} variants={itemVariants} className="space-y-2">
          <div className="flex justify-between">
            <span className="font-medium">{skill.name}</span>
            <span className="text-muted-foreground">{skill.level}%</span>
          </div>
          <Progress value={skill.level} className="h-2" />
        </motion.div>
      ))}
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="flex flex-col gap-12"
        >
          <motion.div
            variants={itemVariants}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              My Skills
            </h2>
            <p className="text-muted-foreground text-lg">
              A comprehensive overview of my technical skills and proficiency
              levels.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Tabs defaultValue="frontend" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="frontend">Frontend</TabsTrigger>
                <TabsTrigger value="backend">Backend</TabsTrigger>
                <TabsTrigger value="other">Other</TabsTrigger>
              </TabsList>
              <TabsContent value="frontend" className="mt-0">
                <SkillList skills={frontendSkills} />
              </TabsContent>
              <TabsContent value="backend" className="mt-0">
                <SkillList skills={backendSkills} />
              </TabsContent>
              <TabsContent value="other" className="mt-0">
                <SkillList skills={otherSkills} />
              </TabsContent>
            </Tabs>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mt-8"
          >
            {[
              "TypeScript",
              "React/Next.js",
              "Node.js",
              "NestJS",
              "Vue.js",
              "MongoDB",
              "PostgreSQL",
              "AWS",
              "Docker",
            ].map((tech, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 bg-background rounded-lg border shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="font-medium text-center">{tech}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
