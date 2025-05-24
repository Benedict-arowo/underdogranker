"use client"

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { GitFork, Github, Heart, Star, Eye } from "lucide-react"

interface ProjectCardProps {
  project: {
    name: string
    description: string
    stars: number
    forks: number
    prs: number
    watchers: number
    tags: string[]
    language: string
    url: string
  }
  onSupport: () => void
}

export function ProjectCard({ project, onSupport }: ProjectCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden transition-all hover:shadow-md">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="flex items-center space-x-2">
          <Github className="h-5 w-5 text-primary" />
          <Link href={project.url} className="font-semibold hover:underline">
            {project.name}
          </Link>
        </div>
        <Badge variant="outline">{project.language}</Badge>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              #{tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex flex-col space-y-4 pt-0">
        <div className="flex items-center justify-between w-full text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4" />
            <span>{project.stars}</span>
          </div>
          <div className="flex items-center gap-1">
            <GitFork className="h-4 w-4" />
            <span>{project.forks}</span>
          </div>
          <div className="flex items-center gap-1">
            <Heart className="h-4 w-4" />
            <span>{project.prs}</span>
          </div>
          <div className="flex items-center gap-1">
            <Eye className="h-4 w-4" />
            <span>{project.watchers}</span>
          </div>
        </div>

        <Button onClick={onSupport} className="w-full" variant="outline">
          Support
        </Button>
      </CardFooter>
    </Card>
  )
}
