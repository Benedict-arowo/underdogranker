import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PrivacyPage() {
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
            <h1 className="text-3xl font-bold">Privacy Policy</h1>
            <p className="text-warm-gray">Last updated: May 22, 2025</p>
          </div>
        </div>

        <div className="prose prose-slate dark:prose-invert max-w-none">
          <p>
            At Underdog Ranker, we take your privacy seriously. This Privacy Policy explains how we collect, use,
            disclose, and safeguard your information when you visit our website.
          </p>

          <h2>Information We Collect</h2>
          <p>We collect information that you provide directly to us when you:</p>
          <ul>
            <li>Join our waitlist</li>
            <li>Connect your GitHub account</li>
            <li>Subscribe to our newsletter</li>
            <li>Contact us</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We may use the information we collect for various purposes, including to:</p>
          <ul>
            <li>Provide, maintain, and improve our services</li>
            <li>Send you updates about Underdog Ranker</li>
            <li>Respond to your comments, questions, and requests</li>
            <li>Monitor and analyze trends and usage</li>
          </ul>

          <h2>GitHub Integration</h2>
          <p>
            When you connect your GitHub account, we only access public repository information to provide our ranking
            service. We do not access private repositories or personal data beyond what's publicly available.
          </p>

          <h2>Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information against unauthorized access,
            alteration, disclosure, or destruction.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at{" "}
            <Link href="mailto:privacy@underdogranker.com" className="text-primary hover:underline">
              privacy@underdogranker.com
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
