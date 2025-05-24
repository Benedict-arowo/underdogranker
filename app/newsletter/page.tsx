"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/hooks/use-toast"
import { Loader2, Mail } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function NewsletterPage() {
  const [email, setEmail] = useState("")
  const [preferences, setPreferences] = useState<string[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const { toast } = useToast()

  const handlePreferenceToggle = (preference: string) => {
    if (preferences.includes(preference)) {
      setPreferences(preferences.filter((p) => p !== preference))
    } else {
      setPreferences([...preferences, preference])
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) {
      toast({
        title: "Email Required",
        description: "Please enter your email address",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSuccess(true)

    toast({
      title: "Subscription Successful",
      description: "You've been added to our newsletter",
    })
  }

  return (
    <div className="container py-10">
      <div className="mx-auto max-w-md space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Newsletter</h1>
          <p className="text-muted-foreground">Stay updated with the latest promising open-source projects</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Subscribe to Updates</CardTitle>
            <CardDescription>Get weekly digests of the best undiscovered repositories</CardDescription>
          </CardHeader>
          <CardContent>
            {isSuccess ? (
              <div className="flex flex-col items-center justify-center py-6 text-center space-y-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Thanks for subscribing!</h3>
                <p className="text-muted-foreground">
                  We've sent a confirmation email to your inbox. Please confirm your subscription to start receiving
                  updates.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isSubmitting}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Topics (optional)</Label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { id: "web-dev", label: "Web Dev" },
                      { id: "ai-ml", label: "AI/ML" },
                      { id: "dev-tools", label: "Dev Tools" },
                      { id: "all", label: "All Topics" },
                    ].map((topic) => (
                      <div key={topic.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={topic.id}
                          checked={preferences.includes(topic.id)}
                          onCheckedChange={() => handlePreferenceToggle(topic.id)}
                          disabled={isSubmitting}
                        />
                        <Label htmlFor={topic.id} className="text-sm font-normal">
                          {topic.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Subscribing...
                    </>
                  ) : (
                    "Subscribe"
                  )}
                </Button>
              </form>
            )}
          </CardContent>
          <CardFooter className="flex justify-between border-t px-6 py-4">
            <p className="text-xs text-muted-foreground">We respect your privacy. Unsubscribe at any time.</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
