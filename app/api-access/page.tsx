import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, Code, Database, Filter, GitFork, Webhook } from "lucide-react"
import { CodeBlock } from "@/components/code-block"
import { ApiNewsletterForm } from "@/components/api-newsletter-form"

// Example API request and response
const curlExample = `curl -X GET "https://api.underdogranker.com/v1/repos" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`

const jsExample = `import axios from 'axios';

const fetchUnderdogs = async () => {
  try {
    const response = await axios.get('https://api.underdogranker.com/v1/repos', {
      headers: {
        'Authorization': \`Bearer \${process.env.UNDERDOG_API_KEY}\`,
        'Content-Type': 'application/json'
      },
      params: {
        language: 'javascript',
        minStars: 50,
        maxStars: 500,
        sort: 'trending'
      }
    });
    
    return response.data;
  } catch (error) {
    console.error('Error fetching underdog repos:', error);
  }
};`

const responseExample = `{
  "data": [
    {
      "id": "repo_12345",
      "name": "innovative-framework",
      "full_name": "developer/innovative-framework",
      "description": "A lightweight framework for building modern web applications",
      "url": "https://github.com/developer/innovative-framework",
      "stars": 342,
      "forks": 47,
      "watchers": 23,
      "open_issues": 12,
      "language": "TypeScript",
      "tags": ["webdev", "framework", "typescript"],
      "underdog_score": 87.5,
      "trending_factor": 0.92,
      "updated_at": "2025-05-21T14:32:10Z"
    },
    {
      "id": "repo_67890",
      "name": "data-visualizer",
      "full_name": "coder/data-visualizer",
      "description": "Powerful library for creating interactive data visualizations",
      "url": "https://github.com/coder/data-visualizer",
      "stars": 289,
      "forks": 31,
      "watchers": 19,
      "open_issues": 8,
      "language": "JavaScript",
      "tags": ["data", "visualization", "javascript"],
      "underdog_score": 82.3,
      "trending_factor": 0.88,
      "updated_at": "2025-05-20T09:15:45Z"
    }
  ],
  "meta": {
    "total_count": 156,
    "page": 1,
    "per_page": 2,
    "total_pages": 78
  }
}`

export default function ApiAccessPage() {
  return (
    <div className="container py-10 space-y-16">
      {/* Header Section */}
      <section className="space-y-6 text-center">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Access the Underdog Ranker API</h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground text-lg">
            Build apps, bots, dashboards, or tools with real-time insights into trending GitHub underdogs.
          </p>
        </div>
        <div className="flex justify-center">
          <Button size="lg" asChild>
            <Link href="/dashboard">Get an API Key</Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold">Powerful API Features</h2>
          <p className="text-muted-foreground mx-auto max-w-[600px]">
            Everything you need to build applications powered by underdog repository data
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="space-y-1">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 mb-2">
                <GitFork className="h-5 w-5 text-primary" />
              </div>
              <CardTitle>Real-time GitHub Data</CardTitle>
              <CardDescription>
                Access up-to-date information on stars, forks, issues, and more for promising repositories.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader className="space-y-1">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 mb-2">
                <Database className="h-5 w-5 text-primary" />
              </div>
              <CardTitle>Underdog Score</CardTitle>
              <CardDescription>
                Our proprietary algorithm identifies repositories with high potential but low visibility.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader className="space-y-1">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 mb-2">
                <Filter className="h-5 w-5 text-primary" />
              </div>
              <CardTitle>Advanced Filtering</CardTitle>
              <CardDescription>
                Filter by language, tags, stars, and more to find exactly what you're looking for.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader className="space-y-1">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 mb-2">
                <Webhook className="h-5 w-5 text-primary" />
              </div>
              <CardTitle>Webhooks</CardTitle>
              <CardDescription>
                Get notified when new repositories match your criteria or when tracked repos change.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader className="space-y-1">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 mb-2">
                <Code className="h-5 w-5 text-primary" />
              </div>
              <CardTitle>Comprehensive Docs</CardTitle>
              <CardDescription>
                Detailed documentation with examples in multiple languages to get you started quickly.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader className="space-y-1">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-primary"
                >
                  <path d="M12 2H2v10h10V2Z" />
                  <path d="M12 12H2v10h10V12Z" />
                  <path d="M22 2h-10v20h10V2Z" />
                </svg>
              </div>
              <CardTitle>Historical Data</CardTitle>
              <CardDescription>
                Track repository growth over time with historical metrics and trend analysis.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold">Simple, Transparent Pricing</h2>
          <p className="text-muted-foreground mx-auto max-w-[600px]">
            Choose the plan that fits your needs, from hobbyist projects to enterprise applications
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 max-w-3xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Free Tier</CardTitle>
              <CardDescription>For personal and community projects</CardDescription>
              <div className="mt-4">
                <span className="text-3xl font-bold">$0</span>
                <span className="text-muted-foreground ml-1">/month</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>1,000 API requests per month</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Basic filtering options</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Access to public repositories only</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Community support</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" asChild>
                <Link href="/dashboard">Get Started</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="border-primary">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Pro Tier</CardTitle>
                <Badge>Coming Soon</Badge>
              </div>
              <CardDescription>For professional developers and teams</CardDescription>
              <div className="mt-4">
                <span className="text-3xl font-bold">$29</span>
                <span className="text-muted-foreground ml-1">/month</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>50,000 API requests per month</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Advanced filtering and sorting</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Webhook notifications</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Historical data access</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Priority support</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="outline" disabled>
                Join Waitlist
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="text-center">
          <p className="text-muted-foreground">
            Need a custom plan for your enterprise?{" "}
            <Link href="/contact" className="text-primary hover:underline">
              Contact us
            </Link>
          </p>
        </div>
      </section>

      {/* Code Sample Section */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold">Easy to Integrate</h2>
          <p className="text-muted-foreground mx-auto max-w-[600px]">
            Simple, RESTful API with examples in multiple languages
          </p>
        </div>

        <div className="space-y-6">
          <Tabs defaultValue="javascript" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
              <TabsTrigger value="curl">cURL</TabsTrigger>
              <TabsTrigger value="javascript">JavaScript</TabsTrigger>
            </TabsList>
            <TabsContent value="curl" className="mt-6">
              <div className="space-y-4">
                <div className="rounded-md overflow-hidden">
                  <CodeBlock code={curlExample} language="bash" />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="javascript" className="mt-6">
              <div className="space-y-4">
                <div className="rounded-md overflow-hidden">
                  <CodeBlock code={jsExample} language="javascript" />
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Example Response</h3>
            <div className="rounded-md overflow-hidden">
              <CodeBlock code={responseExample} language="json" />
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <Button variant="outline" asChild>
            <Link href="/api-docs">View Full Documentation</Link>
          </Button>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold">Stay Updated</h2>
          <p className="text-muted-foreground mx-auto max-w-[600px]">
            Subscribe to receive updates about new endpoints, features, and best practices
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <ApiNewsletterForm />
        </div>
      </section>
    </div>
  )
}
