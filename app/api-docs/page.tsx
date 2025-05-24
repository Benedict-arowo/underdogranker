import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CodeBlock } from "@/components/code-block"
import { ArrowLeft, Book, FileJson, Webhook } from "lucide-react"

export default function ApiDocsPage() {
  return (
    <div className="container py-10 space-y-10">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/api-access">
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Back</span>
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">API Documentation</h1>
      </div>

      <div className="grid gap-8 md:grid-cols-[250px_1fr]">
        <div className="space-y-4">
          <div className="sticky top-20">
            <Card>
              <CardHeader>
                <CardTitle>API Reference</CardTitle>
                <CardDescription>Explore the Underdog Ranker API</CardDescription>
              </CardHeader>
              <CardContent>
                <nav className="space-y-1">
                  <Link href="#authentication" className="block py-2 text-sm hover:text-primary transition-colors">
                    Authentication
                  </Link>
                  <Link href="#endpoints" className="block py-2 text-sm hover:text-primary transition-colors">
                    Endpoints
                  </Link>
                  <Link href="#rate-limits" className="block py-2 text-sm hover:text-primary transition-colors">
                    Rate Limits
                  </Link>
                  <Link href="#errors" className="block py-2 text-sm hover:text-primary transition-colors">
                    Error Handling
                  </Link>
                  <Link href="#webhooks" className="block py-2 text-sm hover:text-primary transition-colors">
                    Webhooks
                  </Link>
                  <Link href="#sdks" className="block py-2 text-sm hover:text-primary transition-colors">
                    SDKs & Libraries
                  </Link>
                </nav>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="space-y-10">
          <section id="authentication" className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                <Book className="h-4 w-4 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Authentication</h2>
            </div>
            <p>
              All API requests require authentication using an API key. You can obtain an API key from your dashboard
              after signing up.
            </p>
            <Card>
              <CardHeader>
                <CardTitle>API Key Authentication</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Include your API key in the Authorization header of your requests:</p>
                <CodeBlock language="bash" code={`Authorization: Bearer YOUR_API_KEY`} />
              </CardContent>
            </Card>
          </section>

          <section id="endpoints" className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                <FileJson className="h-4 w-4 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Endpoints</h2>
            </div>
            <p>The Underdog Ranker API provides several endpoints to access repository data.</p>

            <Tabs defaultValue="repos">
              <TabsList>
                <TabsTrigger value="repos">Repositories</TabsTrigger>
                <TabsTrigger value="languages">Languages</TabsTrigger>
                <TabsTrigger value="tags">Tags</TabsTrigger>
              </TabsList>
              <TabsContent value="repos" className="space-y-4 pt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>GET /v1/repos</CardTitle>
                    <CardDescription>Retrieve a list of repositories</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Query Parameters</h4>
                      <ul className="space-y-2">
                        <li>
                          <code className="text-sm bg-muted px-1 py-0.5 rounded">language</code> - Filter by programming
                          language
                        </li>
                        <li>
                          <code className="text-sm bg-muted px-1 py-0.5 rounded">tags</code> - Filter by tags (comma
                          separated)
                        </li>
                        <li>
                          <code className="text-sm bg-muted px-1 py-0.5 rounded">minStars</code> - Minimum star count
                        </li>
                        <li>
                          <code className="text-sm bg-muted px-1 py-0.5 rounded">maxStars</code> - Maximum star count
                        </li>
                        <li>
                          <code className="text-sm bg-muted px-1 py-0.5 rounded">sort</code> - Sort by: trending, new,
                          stars
                        </li>
                        <li>
                          <code className="text-sm bg-muted px-1 py-0.5 rounded">page</code> - Page number (default: 1)
                        </li>
                        <li>
                          <code className="text-sm bg-muted px-1 py-0.5 rounded">per_page</code> - Results per page
                          (default: 20, max: 100)
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Example Request</h4>
                      <CodeBlock
                        language="bash"
                        code={`curl -X GET "https://api.underdogranker.com/v1/repos?language=javascript&minStars=50&maxStars=500&sort=trending" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`}
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>GET /v1/repos/{"{id}"}</CardTitle>
                    <CardDescription>Retrieve a specific repository by ID</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Path Parameters</h4>
                      <ul className="space-y-2">
                        <li>
                          <code className="text-sm bg-muted px-1 py-0.5 rounded">id</code> - Repository ID
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Example Request</h4>
                      <CodeBlock
                        language="bash"
                        code={`curl -X GET "https://api.underdogranker.com/v1/repos/repo_12345" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`}
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="languages" className="space-y-4 pt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>GET /v1/languages</CardTitle>
                    <CardDescription>Retrieve available programming languages</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div>
                      <h4 className="font-medium mb-2">Example Request</h4>
                      <CodeBlock
                        language="bash"
                        code={`curl -X GET "https://api.underdogranker.com/v1/languages" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`}
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="tags" className="space-y-4 pt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>GET /v1/tags</CardTitle>
                    <CardDescription>Retrieve available repository tags</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div>
                      <h4 className="font-medium mb-2">Example Request</h4>
                      <CodeBlock
                        language="bash"
                        code={`curl -X GET "https://api.underdogranker.com/v1/tags" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`}
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </section>

          <section id="rate-limits" className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
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
                  className="h-4 w-4 text-primary"
                >
                  <path d="M12 2v4" />
                  <path d="m4.93 7.93 2.83 2.83" />
                  <path d="M2 16h4" />
                  <path d="m7.93 19.07 2.83-2.83" />
                  <path d="M16 2v4" />
                  <path d="m19.07 7.93-2.83 2.83" />
                  <path d="M22 16h-4" />
                  <path d="m16.07 19.07-2.83-2.83" />
                  <path d="M12 10v4" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold">Rate Limits</h2>
            </div>
            <p>
              API requests are subject to rate limiting to ensure fair usage. Rate limits vary based on your
              subscription plan.
            </p>
            <Card>
              <CardHeader>
                <CardTitle>Rate Limit Headers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Each API response includes headers that provide information about your rate limit status:
                </p>
                <ul className="space-y-2">
                  <li>
                    <code className="text-sm bg-muted px-1 py-0.5 rounded">X-RateLimit-Limit</code> - Maximum number of
                    requests allowed in the current period
                  </li>
                  <li>
                    <code className="text-sm bg-muted px-1 py-0.5 rounded">X-RateLimit-Remaining</code> - Number of
                    requests remaining in the current period
                  </li>
                  <li>
                    <code className="text-sm bg-muted px-1 py-0.5 rounded">X-RateLimit-Reset</code> - Time when the
                    current rate limit period resets (Unix timestamp)
                  </li>
                </ul>
              </CardContent>
            </Card>
          </section>

          <section id="errors" className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
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
                  className="h-4 w-4 text-primary"
                >
                  <path d="m8 2 1.88 1.88" />
                  <path d="M14.12 3.88 16 2" />
                  <path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1" />
                  <path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6z" />
                  <path d="M12 20v-9" />
                  <path d="M6.53 9C4.6 8.8 3 7.1 3 5" />
                  <path d="M6 13H2" />
                  <path d="M3 21c0-2.1 1.7-3.9 3.8-4" />
                  <path d="M20.97 5c0 2.1-1.6 3.8-3.5 4" />
                  <path d="M22 13h-4" />
                  <path d="M17.2 17c2.1.1 3.8 1.9 3.8 4" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold">Error Handling</h2>
            </div>
            <p>The API uses conventional HTTP response codes to indicate the success or failure of an API request.</p>
            <Card>
              <CardHeader>
                <CardTitle>Error Responses</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p>Error responses include a JSON object with an error message:</p>
                  <CodeBlock
                    language="json"
                    code={`{
  "error": {
    "code": "invalid_request",
    "message": "The request was unacceptable, often due to missing a required parameter.",
    "status": 400
  }
}`}
                  />

                  <h4 className="font-medium">Common Error Codes</h4>
                  <ul className="space-y-2">
                    <li>
                      <code className="text-sm bg-muted px-1 py-0.5 rounded">400</code> - Bad Request
                    </li>
                    <li>
                      <code className="text-sm bg-muted px-1 py-0.5 rounded">401</code> - Unauthorized
                    </li>
                    <li>
                      <code className="text-sm bg-muted px-1 py-0.5 rounded">403</code> - Forbidden
                    </li>
                    <li>
                      <code className="text-sm bg-muted px-1 py-0.5 rounded">404</code> - Not Found
                    </li>
                    <li>
                      <code className="text-sm bg-muted px-1 py-0.5 rounded">429</code> - Too Many Requests
                    </li>
                    <li>
                      <code className="text-sm bg-muted px-1 py-0.5 rounded">500</code> - Internal Server Error
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>

          <section id="webhooks" className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                <Webhook className="h-4 w-4 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Webhooks</h2>
            </div>
            <p>
              Webhooks allow you to receive real-time notifications when specific events occur, such as when a
              repository's metrics change or when new repositories match your criteria.
            </p>
            <Card>
              <CardHeader>
                <CardTitle>Setting Up Webhooks</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  You can create webhooks through the API or in your dashboard. When creating a webhook, you'll need to
                  specify:
                </p>
                <ul className="space-y-2">
                  <li>A URL to receive the webhook payload</li>
                  <li>The events you want to subscribe to</li>
                  <li>An optional secret to verify webhook signatures</li>
                </ul>

                <div>
                  <h4 className="font-medium mb-2">Example Webhook Payload</h4>
                  <CodeBlock
                    language="json"
                    code={`{
  "event": "repo.updated",
  "created_at": "2025-05-22T14:32:10Z",
  "data": {
    "id": "repo_12345",
    "name": "innovative-framework",
    "full_name": "developer/innovative-framework",
    "stars": 342,
    "previous_stars": 340,
    "forks": 47,
    "watchers": 23,
    "underdog_score": 87.5
  }
}`}
                  />
                </div>
              </CardContent>
            </Card>
          </section>

          <section id="sdks" className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
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
                  className="h-4 w-4 text-primary"
                >
                  <path d="m7 11 2-2-2-2" />
                  <path d="M11 13h4" />
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold">SDKs & Libraries</h2>
            </div>
            <p>We provide official client libraries to make integrating with the Underdog Ranker API even easier.</p>
            <div className="grid gap-4 sm:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
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
                      className="h-5 w-5"
                    >
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                    </svg>
                    JavaScript/TypeScript
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Install the package:</p>
                  <CodeBlock language="bash" code={`npm install underdog-ranker-api`} />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
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
                      className="h-5 w-5"
                    >
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                    </svg>
                    Python
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Install the package:</p>
                  <CodeBlock language="bash" code={`pip install underdog-ranker`} />
                </CardContent>
              </Card>
            </div>
          </section>

          <div className="flex justify-center pt-6">
            <Button asChild>
              <Link href="/dashboard">Get Your API Key</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
