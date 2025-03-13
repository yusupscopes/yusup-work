"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Star } from "lucide-react"

export function TestimonialsSection() {
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

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CTO, TechStart Inc.",
      image: "https://doodleipsum.com/100x100/avatar?i=33027857756ff71ebec44e01ec26387b",
      content:
        "Yusup is an exceptional developer who consistently delivers high-quality work. His technical expertise and problem-solving skills have been invaluable to our projects.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      position: "Product Manager, InnovateCorp",
      image: "https://doodleipsum.com/100x100/avatar?i=0982f4df9832c64655e0d5a3d03c7ec1",
      content:
        "Working with Yusup was a pleasure. He not only understood our technical requirements but also provided valuable insights that improved our product.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      position: "Founder, DesignHub",
      image: "https://doodleipsum.com/100x100/avatar?i=3533bd4fd20e8ae0528f2006722f958a",
      content:
        "Yusup's ability to translate complex designs into functional code is impressive. He's a reliable developer who consistently meets deadlines.",
      rating: 5,
    },
    {
      name: "David Kim",
      position: "Lead Developer, WebSolutions",
      image: "https://doodleipsum.com/100x100/avatar?i=8cb73ce685d8071fc7374ccd71072c5d",
      content:
        "I've worked with many developers, but Yusup stands out for his attention to detail and commitment to writing clean, maintainable code.",
      rating: 4,
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-muted/50">
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="flex flex-col gap-12"
        >
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Client Testimonials</h2>
            <p className="text-muted-foreground text-lg">
              What clients and colleagues have to say about working with me.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Carousel className="w-full">
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <Card className="h-full">
                      <CardContent className="p-6 flex flex-col h-full">
                        <div className="flex items-center gap-4 mb-4">
                          <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            width={60}
                            height={60}
                            className="rounded-full object-cover"
                          />
                          <div>
                            <h3 className="font-bold">{testimonial.name}</h3>
                            <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                          </div>
                        </div>
                        <div className="flex mb-4">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"
                              }`}
                            />
                          ))}
                        </div>
                        <p className="flex-1 italic">{testimonial.content}</p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-8">
                <CarouselPrevious className="relative static mr-2" />
                <CarouselNext className="relative static" />
              </div>
            </Carousel>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

