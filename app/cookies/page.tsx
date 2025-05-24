import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CookiesPage() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Back to home</span>
            </Link>
          </Button>
          <div>
            <h1 className="text-3xl font-bold">Cookie Notice</h1>
            <p className="text-warm-gray">Last updated: May 22, 2025</p>
          </div>
        </div>

        <div className="prose prose-slate dark:prose-invert max-w-none">
          <p>
            This Cookie Notice explains how Underdog Ranker uses cookies and similar technologies to recognize you when
            you visit our website.
          </p>

          <h2>What are cookies?</h2>
          <p>
            Cookies are small data files that are placed on your computer or mobile device when you visit a website.
            Cookies help us provide you with a better experience.
          </p>

          <h2>How we use cookies</h2>
          <p>We use cookies for the following purposes:</p>
          <ul>
            <li>To remember your theme preference (light/dark mode)</li>
            <li>To analyze how you use our website</li>
            <li>To remember your newsletter preferences</li>
            <li>To provide essential website functionality</li>
          </ul>

          <h2>Types of cookies we use</h2>
          <ul>
            <li>
              <strong>Essential cookies:</strong> Necessary for the website to function properly
            </li>
            <li>
              <strong>Preference cookies:</strong> Remember your settings and preferences
            </li>
            <li>
              <strong>Analytics cookies:</strong> Help us understand how visitors use our site
            </li>
          </ul>

          <h2>Managing cookies</h2>
          <p>
            You can control and/or delete cookies as you wish. You can delete all cookies that are already on your
            computer and you can set most browsers to prevent them from being placed.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about our use of cookies, please contact us at{" "}
            <Link href="mailto:cookies@underdogranker.com" className="text-primary hover:underline">
              cookies@underdogranker.com
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
