"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react"
import { siteConfig } from "@/constants/config"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="border-t py-12 md:py-16">
      <div className="container flex flex-col gap-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link href="/" className="font-bold text-xl">
              {siteConfig.name}
            </Link>
            <p className="text-muted-foreground text-center md:text-left">
              Fullstack developer crafting exceptional digital experiences.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2">
            <Button variant="outline" size="icon" onClick={scrollToTop}>
              <ArrowUp className="h-4 w-4" />
              <span className="sr-only">Scroll to top</span>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-medium mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#experience" className="text-muted-foreground hover:text-foreground transition-colors">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:yusupmaulana950@gmail.com"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  yusupmaulana950@gmail.com
                </a>
              </li>
              <li className="text-muted-foreground">Jakarta, Indonesia</li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Social</h3>
            <ul className="space-y-2">
              {siteConfig.socials.map((social, index) => (
                <li key={index}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {social.name}
                  </a>
                </li>                
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

