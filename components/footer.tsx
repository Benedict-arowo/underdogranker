import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { Logo } from "@/components/logo";
import { Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
	return (
		<footer className="border-t bg-card/30 backdrop-blur-sm">
			<div className="container mx-auto py-8 md:py-12">
				<div className="grid gap-8 md:grid-cols-3">
					<div className="space-y-4">
						<Logo />
						<p className="text-sm text-warm-gray max-w-xs">
							Built in public by a dev who loves open source.
							Discover the next big GitHub projects before they go
							viral.
						</p>
					</div>

					<div className="space-y-4">
						<h3 className="font-semibold">Legal</h3>
						<nav className="flex flex-col gap-2">
							<Link
								href="/privacy"
								className="text-sm text-warm-gray hover:text-foreground transition-colors">
								Privacy Policy
							</Link>
							<Link
								href="/terms"
								className="text-sm text-warm-gray hover:text-foreground transition-colors">
								Terms of Service
							</Link>
							<Link
								href="/cookies"
								className="text-sm text-warm-gray hover:text-foreground transition-colors">
								Cookie Notice
							</Link>
						</nav>
					</div>

					<div className="space-y-4">
						<h3 className="font-semibold">Connect</h3>
						<div className="flex items-center gap-4">
							<Link
								href="https://github.com/Benedict-arowo/underdogranker"
								target="_blank"
								className="text-warm-gray hover:text-foreground transition-colors"
								aria-label="GitHub">
								<Github className="h-5 w-5" />
							</Link>
							<Link
								href="https://www.linkedin.com/in/benedict-arowo/"
								className="text-warm-gray hover:text-foreground transition-colors"
								target="_blank"
								aria-label="LinkedIn">
								<Linkedin className="h-5 w-5" />
							</Link>
							<ThemeToggle />
						</div>
					</div>
				</div>

				<div className="mt-8 pt-8 border-t text-center">
					<p className="text-xs text-warm-gray">
						&copy; {new Date().getFullYear()} Underdog Ranker. Built
						with ❤️ for the open source community.
					</p>
				</div>
			</div>
		</footer>
	);
}
