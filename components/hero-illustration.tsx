"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { GitFork, Github, Star } from "lucide-react"

export function HeroIllustration() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isDark = theme === "dark"

  return (
    <div className="relative w-full max-w-[500px] h-[400px] animate-in stagger-2">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      {/* Floating GitHub cards */}
      <div className="absolute top-10 left-10 animate-float">
        <ProjectCard name="awesome-tool" stars={342} forks={47} isDark={isDark} delay={0} />
      </div>

      <div className="absolute top-40 right-10 animate-float" style={{ animationDelay: "1s" }}>
        <ProjectCard name="react-library" stars={289} forks={31} isDark={isDark} delay={1} />
      </div>

      <div className="absolute bottom-20 left-20 animate-float" style={{ animationDelay: "2s" }}>
        <ProjectCard name="data-viz" stars={178} forks={21} isDark={isDark} delay={2} />
      </div>

      {/* Rocket or upward trend */}
      <div className="absolute bottom-0 right-0 w-32 h-32 flex items-center justify-center">
        <svg
          width="100"
          height="100"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="animate-pulse-slow"
        >
          <path
            d="M22 2L15 22L11 13L2 9L22 2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  )
}

interface ProjectCardProps {
  name: string
  stars: number
  forks: number
  isDark: boolean
  delay: number
}

function ProjectCard({ name, stars, forks, isDark, delay }: ProjectCardProps) {
  return (
    <div
      className={`rounded-lg shadow-lg p-4 w-56 ${isDark ? "bg-card" : "bg-white"} border`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex items-center gap-2 mb-2">
        <Github className="h-5 w-5 text-primary" />
        <span className="font-semibold">{name}</span>
      </div>
      <p className="text-sm text-muted-foreground mb-3">A promising open-source project with great potential</p>
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <div className="flex items-center gap-1">
          <Star className="h-4 w-4" />
          <span>{stars}</span>
        </div>
        <div className="flex items-center gap-1">
          <GitFork className="h-4 w-4" />
          <span>{forks}</span>
        </div>
      </div>
    </div>
  )
}
