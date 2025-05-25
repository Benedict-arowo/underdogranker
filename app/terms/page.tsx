import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TermsPage() {
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
						<h1 className="text-3xl font-bold">Terms of Service</h1>
						<p className="text-warm-gray">
							Last updated: May 22, 2025
						</p>
					</div>
				</div>

				<div className="prose prose-slate dark:prose-invert max-w-none">
					<p>
						Welcome to Underdog Ranker. By accessing or using our
						website, you agree to be bound by these Terms of
						Service.
					</p>

					<h2>Use of Our Services</h2>
					<p>
						You must follow any policies made available to you
						within the Services. You may use our Services only as
						permitted by law.
					</p>

					<h2>Waitlist and Early Access</h2>
					<p>
						Joining our waitlist does not guarantee access to the
						platform. We reserve the right to invite users at our
						discretion based on various factors.
					</p>

					<h2>GitHub Integration</h2>
					<p>
						Our service integrates with GitHub&apos;s public API to
						analyze repository data. By connecting your GitHub
						account, you authorize us to access your public
						repository information.
					</p>

					<h2>Intellectual Property</h2>
					<p>
						The Service and its original content, features, and
						functionality are and will remain the exclusive property
						of Underdog Ranker and its licensors.
					</p>

					<h2>Contact Us</h2>
					<p>
						If you have any questions about these Terms, please
						contact us at{" "}
						<Link
							href="mailto:terms@underdogranker.com"
							className="text-primary hover:underline">
							terms@underdogranker.com
						</Link>
						.
					</p>
				</div>
			</div>
		</div>
	);
}
