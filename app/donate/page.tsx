import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Coffee, Github } from "lucide-react"

export default function DonatePage() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-3xl space-y-10">
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Heart className="h-6 w-6 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl font-bold">Support Underdog Ranker</h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground">
            Your donations help us maintain and improve the platform, allowing us to continue highlighting promising
            open-source projects that deserve more attention.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Github className="h-5 w-5" />
                GitHub Sponsors
              </CardTitle>
              <CardDescription>Support us through GitHub Sponsors with monthly donations</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                GitHub Sponsors allows you to support our work with monthly recurring donations and get exclusive
                benefits.
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full" asChild>
                <Link href="https://github.com/sponsors" target="_blank" rel="noopener noreferrer">
                  Sponsor on GitHub
                </Link>
              </Button>
            </CardFooter>
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
                  <path d="M2.3 6.73a11 11 0 0 0 .66-1.6 1 1 0 0 1 1.2-.65c1.47.33 2.78 1.26 3.4 1.6a5.34 5.34 0 0 0 4.88 0c.62-.34 1.93-1.27 3.4-1.6a1 1 0 0 1 1.2.65c.5.15.37.82.66 1.6.3.8.76 1.55 1.17 2.83.83 2.55.83 4.2.83 5.17 0 2.17-1.36 4.1-3.44 4.82a5.6 5.6 0 0 0-2.2.98c-.53.4-.97.74-1.64.74-.67 0-1.11-.34-1.64-.74a5.6 5.6 0 0 0-2.2-.98c-2.08-.72-3.44-2.65-3.44-4.82 0-.97 0-2.62.83-5.17.41-1.28.87-2.03 1.17-2.83Z" />
                </svg>
                Stripe
              </CardTitle>
              <CardDescription>Make a one-time donation through Stripe</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Support our project with a one-time donation of any amount. All major credit cards accepted.
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="outline" asChild>
                <Link href="#" target="_blank" rel="noopener noreferrer">
                  Donate with Stripe
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Coffee className="h-5 w-5" />
                Buy Me a Coffee
              </CardTitle>
              <CardDescription>Support us with a small donation</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                If you enjoy using Underdog Ranker, consider buying us a coffee to help keep us going.
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="outline" asChild>
                <Link href="https://www.buymeacoffee.com" target="_blank" rel="noopener noreferrer">
                  Buy Me a Coffee
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-8">
            <div className="flex-1 space-y-2">
              <h3 className="text-xl font-semibold">Why Your Support Matters</h3>
              <p className="text-muted-foreground">
                Your donations help us maintain the infrastructure, improve the platform, and continue our mission of
                highlighting promising open-source projects.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-w-[200px]">
              <Button asChild>
                <Link href="#" scroll={false}>
                  Donate Now
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/">Explore Projects</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-center">Our Supporters</h2>
          <p className="text-center text-muted-foreground">
            We&apos;re grateful to all our supporters who make this project possible.
          </p>

          <div className="flex flex-wrap justify-center gap-4 py-6">
            {Array(8)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                  <span className="text-xl font-semibold text-muted-foreground">{String.fromCharCode(65 + i)}</span>
                </div>
              ))}
          </div>

          <p className="text-center text-sm text-muted-foreground">
            Want to see your name here?{" "}
            <Link href="#" className="text-primary hover:underline">
              Make a donation
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
