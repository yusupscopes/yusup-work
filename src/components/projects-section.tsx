"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export function ProjectsSection() {
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

  const projects = [
    {
      title: "URL Shortener UI",
      description:
        "A simple yet responsive UI page for URL shortening.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "https://github.com/yusupscopes/aws-url-shortener-web",
    },
    {
      title: "Currency Converter API",
      description:
        "A simple FastAPI application for currency conversion using AWS services.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Python", "FastAPI", "AWS Lambda"],
      liveUrl: "#",
      githubUrl: "https://github.com/yusupscopes/aws-simple-currency-converter",
    },
    {
      title: "Shift Reminder System (Automated Notifications)",
      description:
        "An automated system for managing and sending shift schedule reminders using AWS services.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Python", "AWS Lambda", "AWS SNS", "AWS S3", "AWS EventBridge", "AWS DynamoDB", "Terraform"],
      liveUrl: "#",
      githubUrl: "https://github.com/yusupscopes/aws-shift-reminder",
    },
    {
      title: "Merchant Storefront and Dashboard (Shopify-like)",
      description:
        "An e-commerce-like platform with product management, cart functionality, payment processing, and order tracking.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "AWS S3", "API Route", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="flex flex-col gap-12"
        >
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Featured Projects</h2>
            <p className="text-muted-foreground text-lg">
              A selection of my recent work showcasing my skills and expertise.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden group">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-4">
                  <Button asChild variant="outline" size="sm">
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Link>
                  </Button>
                  <Button asChild size="sm">
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-center mt-8">
            <Button variant="outline" size="lg">
              View All Projects
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

