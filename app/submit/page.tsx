"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/hooks/use-toast"
import { Github, Loader2 } from "lucide-react"
import { SubmitFormSkeleton } from "@/components/submit-form-skeleton"

export default function SubmitPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [repoUrl, setRepoUrl] = useState("")
  const [repoInfo, setRepoInfo] = useState<any>(null)
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const router = useRouter()
  const { toast } = useToast()

  // Mock login function - would be replaced with actual GitHub OAuth
  const handleLogin = async () => {
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsLoggedIn(true)
    setIsLoading(false)
  }

  const fetchRepoInfo = async () => {
    if (!repoUrl.includes("github.com/")) {
      toast({
        title: "Invalid Repository URL",
        description: "Please enter a valid GitHub repository URL",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Mock repo data
    setRepoInfo({
      name: "example-repo",
      description: "An example repository for demonstration purposes",
      stars: 123,
      forks: 45,
      language: "TypeScript",
    })

    setIsLoading(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!repoInfo) {
      toast({
        title: "Missing Repository Information",
        description: "Please fetch repository information first",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Project Submitted Successfully",
      description: "Your project has been submitted for review",
    })

    // Redirect to home page
    router.push("/")
  }

  const handleTagToggle = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag))
    } else {
      setSelectedTags([...selectedTags, tag])
    }
  }

  if (!isLoggedIn) {
    return (
      <div className="container py-10">
        <div className="mx-auto max-w-md space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold">Submit a Project</h1>
            <p className="text-muted-foreground">Please log in with GitHub to submit a project</p>
          </div>

          <Card>
            <CardContent className="pt-6">
              <Button onClick={handleLogin} className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Connecting to GitHub
                  </>
                ) : (
                  <>
                    <Github className="mr-2 h-4 w-4" />
                    Login with GitHub
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  if (isLoading && !repoInfo) {
    return <SubmitFormSkeleton />
  }

  return (
    <div className="container py-10">
      <div className="mx-auto max-w-2xl space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Submit a Project</h1>
          <p className="text-muted-foreground">Share an open-source project that deserves more attention</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Project Details</CardTitle>
            <CardDescription>Enter the GitHub repository URL to fetch project information</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="repo-url">GitHub Repository URL</Label>
                  <div className="flex gap-2">
                    <Input
                      id="repo-url"
                      placeholder="https://github.com/username/repo"
                      value={repoUrl}
                      onChange={(e) => setRepoUrl(e.target.value)}
                      disabled={!!repoInfo || isLoading}
                    />
                    <Button type="button" onClick={fetchRepoInfo} disabled={!repoUrl || !!repoInfo || isLoading}>
                      {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Fetch"}
                    </Button>
                  </div>
                </div>

                {repoInfo && (
                  <>
                    <div className="rounded-lg border p-4 space-y-4">
                      <div className="space-y-2">
                        <Label>Repository Information</Label>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm font-medium">Name</p>
                            <p className="text-sm text-muted-foreground">{repoInfo.name}</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium">Language</p>
                            <p className="text-sm text-muted-foreground">{repoInfo.language}</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium">Stars</p>
                            <p className="text-sm text-muted-foreground">{repoInfo.stars}</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium">Forks</p>
                            <p className="text-sm text-muted-foreground">{repoInfo.forks}</p>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Description</p>
                          <p className="text-sm text-muted-foreground">{repoInfo.description}</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Tags (select up to 5)</Label>
                      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                        {["ai", "webdev", "tools", "database", "mobile", "cloud", "security", "ui", "testing"].map(
                          (tag) => (
                            <div key={tag} className="flex items-center space-x-2">
                              <Checkbox
                                id={`tag-${tag}`}
                                checked={selectedTags.includes(tag)}
                                onCheckedChange={() => handleTagToggle(tag)}
                                disabled={!selectedTags.includes(tag) && selectedTags.length >= 5}
                              />
                              <Label htmlFor={`tag-${tag}`} className="text-sm font-normal">
                                #{tag}
                              </Label>
                            </div>
                          ),
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="category">Primary Category</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="developer-tools">Developer Tools</SelectItem>
                          <SelectItem value="ai-ml">AI & Machine Learning</SelectItem>
                          <SelectItem value="web-framework">Web Framework</SelectItem>
                          <SelectItem value="database">Database</SelectItem>
                          <SelectItem value="mobile">Mobile Development</SelectItem>
                          <SelectItem value="devops">DevOps & Infrastructure</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </>
                )}
              </div>

              {repoInfo && (
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit Project"
                  )}
                </Button>
              )}
            </form>
          </CardContent>
          {!repoInfo && (
            <CardFooter className="flex justify-between border-t px-6 py-4">
              <p className="text-sm text-muted-foreground">Already submitted a project?</p>
              <Button variant="ghost" size="sm" onClick={() => router.push("/")}>
                View Projects
              </Button>
            </CardFooter>
          )}
        </Card>
      </div>
    </div>
  )
}
