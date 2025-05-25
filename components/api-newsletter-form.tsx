"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

export function ApiNewsletterForm() {
	const [email, setEmail] = useState("");
	const [preferences, setPreferences] = useState<string[]>([]);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);
	const { toast } = useToast();

	const handlePreferenceToggle = (preference: string) => {
		if (preferences.includes(preference)) {
			setPreferences(preferences.filter((p) => p !== preference));
		} else {
			setPreferences([...preferences, preference]);
		}
	};

	const handleSubmit = async (e: React.FormEvent) => {
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

		// Simulate API call
		await new Promise((resolve) => setTimeout(resolve, 1500));

		setIsSubmitting(false);
		setIsSuccess(true);

		toast({
			title: "Subscription Successful",
			description: "You've been added to our API newsletter",
		});
	};

	return (
		<Card>
			<CardHeader className="space-y-1">
				<CardTitle className="text-2xl">API Newsletter</CardTitle>
				<CardDescription>
					Stay updated on new endpoints and features
				</CardDescription>
			</CardHeader>
			<CardContent>
				{isSuccess ? (
					<div className="flex flex-col items-center justify-center py-6 text-center space-y-4">
						<div className="rounded-full bg-primary/10 p-3">
							<Check className="h-6 w-6 text-primary" />
						</div>
						<h3 className="text-xl font-semibold">
							Thanks for subscribing!
						</h3>
						<p className="text-muted-foreground">
							We&apos;ll keep you updated on all the latest API
							features and improvements.
						</p>
					</div>
				) : (
					<form onSubmit={handleSubmit} className="space-y-4">
						<div className="space-y-2">
							<Label htmlFor="api-email">Email address</Label>
							<Input
								id="api-email"
								type="email"
								placeholder="you@example.com"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								disabled={isSubmitting}
							/>
						</div>

						<div className="space-y-2">
							<Label>Interests (optional)</Label>
							<div className="grid grid-cols-2 gap-2">
								{[
									{
										id: "new-endpoints",
										label: "New Endpoints",
									},
									{ id: "tutorials", label: "Tutorials" },
									{
										id: "case-studies",
										label: "Case Studies",
									},
									{ id: "all-updates", label: "All Updates" },
								].map((topic) => (
									<div
										key={topic.id}
										className="flex items-center space-x-2">
										<Checkbox
											id={topic.id}
											checked={preferences.includes(
												topic.id
											)}
											onCheckedChange={() =>
												handlePreferenceToggle(topic.id)
											}
											disabled={isSubmitting}
										/>
										<Label
											htmlFor={topic.id}
											className="text-sm font-normal">
											{topic.label}
										</Label>
									</div>
								))}
							</div>
						</div>

						<Button
							type="submit"
							className="w-full"
							disabled={isSubmitting}>
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
		</Card>
	);
}
