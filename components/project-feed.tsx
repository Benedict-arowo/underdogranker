"use client"

import { useState, useEffect } from "react"
import { ProjectCard } from "@/components/project-card"
import { ProjectCardSkeleton } from "@/components/project-card-skeleton"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

// Mock project data
const MOCK_PROJECTS = [
  {
    id: "1",
    name: "react-query-builder",
    description: "A flexible and powerful query builder with a React UI",
    stars: 342,
    forks: 47,
    prs: 12,
    watchers: 23,
    tags: ["webdev", "tools", "react"],
    language: "TypeScript",
    url: "https://github.com/example/react-query-builder",
  },
  {
    id: "2",
    name: "tiny-ml-engine",
    description: "Lightweight machine learning engine for edge devices",
    stars: 289,
    forks: 31,
    prs: 8,
    watchers: 19,
    tags: ["ai", "tools", "embedded"],
    language: "Python",
    url: "https://github.com/example/tiny-ml-engine",
  },
  {
    id: "3",
    name: "serverless-db",
    description: "Serverless database with automatic scaling and zero config",
    stars: 412,
    forks: 52,
    prs: 18,
    watchers: 37,
    tags: ["database", "tools", "cloud"],
    language: "Go",
    url: "https://github.com/example/serverless-db",
  },
  {
    id: "4",
    name: "css-in-rust",
    description: "Type-safe CSS-in-JS for Rust web applications",
    stars: 178,
    forks: 21,
    prs: 5,
    watchers: 14,
    tags: ["webdev", "tools", "css"],
    language: "Rust",
    url: "https://github.com/example/css-in-rust",
  },
  {
    id: "5",
    name: "mobile-ar-toolkit",
    description: "Augmented reality toolkit for mobile web applications",
    stars: 267,
    forks: 38,
    prs: 9,
    watchers: 22,
    tags: ["mobile", "webdev", "ar"],
    language: "JavaScript",
    url: "https://github.com/example/mobile-ar-toolkit",
  },
  {
    id: "6",
    name: "neural-code-search",
    description: "Search code repositories using natural language queries",
    stars: 356,
    forks: 43,
    prs: 15,
    watchers: 29,
    tags: ["ai", "tools", "search"],
    language: "Python",
    url: "https://github.com/example/neural-code-search",
  },
]

export function ProjectFeed() {
  const [projects, setProjects] = useState<typeof MOCK_PROJECTS>([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)
  const { toast } = useToast()

  // Simulate loading data
  useEffect(() => {
    const loadProjects = async () => {
      setLoading(true)

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      if (page === 1) {
        setProjects(MOCK_PROJECTS)
      } else {
        // For demo purposes, only load more once
        if (page === 2) {
          setProjects([...projects, ...MOCK_PROJECTS.slice(0, 3)])
        } else {
          setHasMore(false)
        }
      }

      setLoading(false)
    }

    loadProjects()
  }, [page])

  const loadMore = () => {
    setPage(page + 1)
  }

  const handleSupport = (projectName: string) => {
    toast({
      title: "Supporting Project",
      description: `You're being redirected to support ${projectName}`,
    })
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {loading && page === 1
          ? Array(6)
              .fill(0)
              .map((_, i) => <ProjectCardSkeleton key={i} />)
          : projects.map((project) => (
              <ProjectCard key={project.id} project={project} onSupport={() => handleSupport(project.name)} />
            ))}
      </div>

      {loading && page > 1 && (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array(3)
            .fill(0)
            .map((_, i) => (
              <ProjectCardSkeleton key={i} />
            ))}
        </div>
      )}

      {!loading && hasMore && (
        <div className="flex justify-center">
          <Button onClick={loadMore} variant="outline" className="min-w-[200px]">
            Load More
          </Button>
        </div>
      )}

      {!loading && !hasMore && projects.length > 0 && (
        <p className="text-center text-sm text-muted-foreground">You've reached the end of the list</p>
      )}
    </div>
  )
}
