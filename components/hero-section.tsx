"use client";

import type React from "react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Github, Loader2, Radar } from "lucide-react";
import { TechBackground } from "@/components/tech-background";
import { supabase } from "@/lib/superbase";
import { Session } from "@supabase/supabase-js";
import { getWaitlistCount } from "./ui/get-waitlist-count";

export function HeroSection({ user }: { user: Session["user"] | null }) {
	const [email, setEmail] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isGitHubConnecting, setIsGitHubConnecting] = useState(false);
	const { toast } = useToast();
	const [count, setCount] = useState<number>(0);

	useEffect(() => {
		getWaitlistCount().then(setCount);
	}, []);

	const handleEmailSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!email) {
			toast({
				title: "Email Required",
				description: "Please enter your email address",
				variant: "destructive",
			});
			return;
		}

		setIsSubmitting(true);
		try {
			const { error } = await supabase.from("waitlist").insert({ email });

			if (error) {
				throw new Error(error.message);
			} else {
				toast({
					title: "You're on the radar! 🎯",
					description:
						"We'll notify you when Underdog Ranker launches.",
				});
				setEmail("");
			}
		} catch (error) {
			console.error("Error inserting email:", error);
			toast({
				title: "Error",
				description: "There was an error submitting your email.",
				variant: "destructive",
			});
			return;
		} finally {
			setIsSubmitting(false);
		}
	};

	const handleGitHubConnect = async () => {
		setIsGitHubConnecting(true);
		await supabase.auth.signInWithOAuth({ provider: "github" });

		setIsGitHubConnecting(false);
	};

	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
			<TechBackground />

			<div className="container px-4 md:px-6 relative z-10">
				<div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
					{/* Main Headline */}
					<div className="space-y-4 animate-in">
						<h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
							Discover the Next{" "}
							<span className="gradient-text">GitHub Hit</span>{" "}
							Before It Goes Viral
						</h1>
						<p className="text-xl text-warm-gray md:text-2xl max-w-2xl mx-auto animate-in stagger-1">
							A radar for underdog projects worth watching.
						</p>
					</div>
					{/* Email Signup */}
					<div className="w-full max-w-md space-y-4 animate-in stagger-2">
						{!user && (
							<form
								onSubmit={handleEmailSubmit}
								className="flex gap-2">
								<div className="flex-1">
									<Input
										type="email"
										placeholder="Enter your email"
										value={email}
										onChange={(e) =>
											setEmail(e.target.value)
										}
										disabled={isSubmitting}
										className="h-12 text-base"
									/>
								</div>
								<Button
									type="submit"
									disabled={isSubmitting}
									className="h-12 px-6 bg-primary hover:bg-primary/90 pulse-glow">
									{isSubmitting ? (
										<>
											<Loader2 className="mr-2 h-4 w-4 animate-spin" />
											Joining...
										</>
									) : (
										<>
											<Radar className="mr-2 h-4 w-4" />
											Join the Waitlist
										</>
									)}
								</Button>
							</form>
						)}

						{/* GitHub Connect */}
						{!user && (
							<Button
								variant="outline"
								className="w-full h-12 gap-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5"
								onClick={handleGitHubConnect}
								disabled={isGitHubConnecting}>
								{isGitHubConnecting ? (
									<>
										<Loader2 className="h-4 w-4 animate-spin" />
										Connecting...
									</>
								) : (
									<>
										<Github className="h-4 w-4" />
										Connect GitHub & Reserve Handle
									</>
								)}
							</Button>
						)}

						{user && (
							<Button
								variant="default"
								className="w-full h-12 gap-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5">
								<Github className="h-4 w-4" />
								GitHub Connected – You&apos;re on the Waitlist!
							</Button>
						)}
					</div>

					{/* Stats Preview */}
					<div className="flex items-center gap-8 text-sm text-warm-gray animate-in stagger-3">
						<div className="flex items-center gap-2">
							<div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
							<span>{count} developers waiting</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
