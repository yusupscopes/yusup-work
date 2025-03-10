"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { calculateYearsFromNow } from "@/lib/date"
import { siteConfig } from "@/constants/config"

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="experience" className="py-20">
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="flex flex-col gap-12"
        >
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Work Experience</h2>
            <p className="text-muted-foreground text-lg">
              My professional journey spanning {calculateYearsFromNow("2019-02-11")} years in the software development industry.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 h-full w-px bg-border transform md:-translate-x-1/2 hidden md:block" />

            <div className="space-y-12">
              {siteConfig.experiences.map((exp, index) => (
                <motion.div key={index} variants={itemVariants} className="relative">
                  <div className={`md:flex items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                    {/* Timeline dot */}
                    <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-primary transform md:-translate-x-1/2 hidden md:block" />

                    <div className="md:w-1/2 md:px-8">
                      <Card>
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-start flex-wrap gap-2">
                            <div>
                              <h3 className="font-bold text-xl">{exp.title}</h3>
                              <p className="text-muted-foreground">{exp.company}</p>
                            </div>
                            <Badge variant="outline" className="font-normal">
                              {exp.period}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="mb-4">{exp.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, techIndex) => (
                              <Badge key={techIndex} variant="secondary">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

