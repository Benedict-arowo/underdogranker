"use client"

import type React from "react"

import { useState } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function SearchBar() {
  const [query, setQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle search logic here
    console.log("Searching for:", query)
  }

  return (
    <form onSubmit={handleSearch} className="relative w-full md:w-80">
      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Search projects..."
        className="w-full pl-9 pr-12"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button type="submit" size="sm" className="absolute right-1 top-1 h-7" disabled={!query.trim()}>
        Search
      </Button>
    </form>
  )
}
