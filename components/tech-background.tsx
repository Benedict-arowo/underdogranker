"use client"

import { useEffect, useState } from "react"
import { GitFork, Star, Eye, GitPullRequest } from "lucide-react"

export function TechBackground() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern"></div>

      {/* Floating GitHub Elements */}
      <div className="absolute top-20 left-10 floating" style={{ animationDelay: "0s" }}>
        <GitHubCard name="awesome-lib" stars={234} forks={45} delay={0} />
      </div>

      <div className="absolute top-40 right-20 floating" style={{ animationDelay: "1s" }}>
        <GitHubCard name="cool-tool" stars={156} forks={23} delay={1} />
      </div>

      <div className="absolute bottom-32 left-20 floating" style={{ animationDelay: "2s" }}>
        <GitHubCard name="new-framework" stars={89} forks={12} delay={2} />
      </div>

      {/* Floating Icons */}
      <div className="absolute top-1/4 left-1/4 text-primary/20 floating">
        <Star className="h-8 w-8" />
      </div>

      <div className="absolute top-3/4 right-1/4 text-primary/20 floating" style={{ animationDelay: "1.5s" }}>
        <GitFork className="h-6 w-6" />
      </div>

      <div className="absolute top-1/2 right-1/3 text-primary/20 floating" style={{ animationDelay: "0.5s" }}>
        <GitPullRequest className="h-7 w-7" />
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-background/50 to-transparent"></div>
    </div>
  )
}

interface GitHubCardProps {
  name: string
  stars: number
  forks: number
  delay: number
}

function GitHubCard({ name, stars, forks, delay }: GitHubCardProps) {
  return (
    <div
      className="bg-card/80 backdrop-blur-sm border rounded-lg p-3 w-48 shadow-lg animate-in"
      style={{ animationDelay: `${delay * 0.2}s` }}
    >
      <div className="flex items-center gap-2 mb-2">
        <div className="w-4 h-4 bg-primary rounded-full"></div>
        <span className="font-mono text-sm font-medium">{name}</span>
      </div>
      <p className="text-xs text-muted-foreground mb-2">A promising open-source project</p>
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <div className="flex items-center gap-1">
          <Star className="h-3 w-3" />
          <span>{stars}</span>
        </div>
        <div className="flex items-center gap-1">
          <GitFork className="h-3 w-3" />
          <span>{forks}</span>
        </div>
        <div className="flex items-center gap-1">
          <Eye className="h-3 w-3" />
          <span>{Math.floor(stars * 0.3)}</span>
        </div>
      </div>
    </div>
  )
}
