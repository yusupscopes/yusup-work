"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Globe, Server } from "lucide-react"

export function AboutSection() {
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
    <section id="about" className="py-20 bg-muted/50">
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="flex flex-col gap-12"
        >
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight mb-4">About Me</h2>
            <p className="text-muted-foreground text-lg">
              I'm a passionate fullstack developer with 6 years of experience creating modern web applications. I
              specialize in building scalable, high-performance solutions that deliver exceptional user experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="relative">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden border shadow-lg">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="John Doe working"
                  width={800}
                  height={600}
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-4 rounded-lg shadow-lg">
                <p className="font-bold text-xl">6+</p>
                <p className="text-sm">Years Experience</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col gap-6">
              <p className="text-lg">
                I started my journey as a frontend developer and gradually expanded my skills to become a fullstack
                developer. I'm passionate about creating clean, efficient code and staying up-to-date with the latest
                technologies and best practices.
              </p>
              <p className="text-lg">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or sharing my knowledge through blog posts and community events.
              </p>
              <div className="flex gap-4 mt-2">
                <Button>Download CV</Button>
                <Button variant="outline">Read More</Button>
              </div>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    <Globe className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mt-2">Frontend Development</h3>
                  <p className="text-muted-foreground">
                    Creating responsive, accessible, and performant user interfaces with modern frameworks.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    <Server className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mt-2">Backend Development</h3>
                  <p className="text-muted-foreground">
                    Building robust APIs, services, and database solutions that power applications.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    <Code className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mt-2">DevOps & Architecture</h3>
                  <p className="text-muted-foreground">
                    Designing scalable architectures and implementing CI/CD pipelines for seamless deployment.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

