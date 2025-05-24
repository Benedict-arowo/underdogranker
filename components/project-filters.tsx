"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"

export function ProjectFilters() {
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  const handleTagSelect = (tag: string) => {
    if (!selectedTags.includes(tag)) {
      setSelectedTags([...selectedTags, tag])
    }
  }

  const removeTag = (tag: string) => {
    setSelectedTags(selectedTags.filter((t) => t !== tag))
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Tabs defaultValue="hot" className="w-full sm:w-auto">
          <TabsList>
            <TabsTrigger value="hot">Hot</TabsTrigger>
            <TabsTrigger value="new">New</TabsTrigger>
            <TabsTrigger value="trending">Trending</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="flex flex-wrap gap-2 sm:flex-nowrap">
          <Select onValueChange={handleTagSelect}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Select Tag" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ai">#AI</SelectItem>
              <SelectItem value="webdev">#WebDev</SelectItem>
              <SelectItem value="tools">#Tools</SelectItem>
              <SelectItem value="database">#Database</SelectItem>
              <SelectItem value="mobile">#Mobile</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="javascript">JavaScript</SelectItem>
              <SelectItem value="typescript">TypeScript</SelectItem>
              <SelectItem value="python">Python</SelectItem>
              <SelectItem value="rust">Rust</SelectItem>
              <SelectItem value="go">Go</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {selectedTags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {selectedTags.map((tag) => (
            <Badge key={tag} variant="secondary" className="gap-1">
              #{tag}
              <Button
                variant="ghost"
                size="icon"
                className="h-4 w-4 p-0 hover:bg-transparent"
                onClick={() => removeTag(tag)}
              >
                <X className="h-3 w-3" />
                <span className="sr-only">Remove {tag} filter</span>
              </Button>
            </Badge>
          ))}

          {selectedTags.length > 1 && (
            <Button variant="ghost" size="sm" className="h-7 text-xs" onClick={() => setSelectedTags([])}>
              Clear all
            </Button>
          )}
        </div>
      )}
    </div>
  )
}
