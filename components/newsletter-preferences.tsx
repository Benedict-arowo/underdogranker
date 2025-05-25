"use client";

import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export function NewsletterPreferences() {
	const [selectedTopics, setSelectedTopics] = useState<string[]>([]);

	const handleTopicChange = (topic: string) => {
		if (selectedTopics.includes(topic)) {
			setSelectedTopics(selectedTopics.filter((t) => t !== topic));
		} else {
			setSelectedTopics([...selectedTopics, topic]);
		}
	};

	const topics = [
		{ id: "ai", label: "AI & Machine Learning" },
		{ id: "webdev", label: "Web Development" },
		{ id: "devtools", label: "Developer Tools" },
		{ id: "mobile", label: "Mobile Development" },
		{ id: "database", label: "Databases" },
		{ id: "cloud", label: "Cloud & Infrastructure" },
		{ id: "security", label: "Security" },
		{ id: "ui", label: "UI Libraries" },
	];

	return (
		<section className="py-16">
			<div className="container px-4 md:px-6 max-w-4xl">
				<Card className="animate-in">
					<CardHeader className="text-center">
						<CardTitle className="text-2xl">
							Newsletter Preferences
						</CardTitle>
						<CardDescription>
							Tell us what you&apos;re interested in and
							we&apos;ll curate the best underdogs for you
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
							{topics.map((topic, index) => (
								<div
									key={topic.id}
									className="flex items-center space-x-2 animate-in"
									style={{
										animationDelay: `${0.05 * index}s`,
									}}>
									<Checkbox
										id={topic.id}
										checked={selectedTopics.includes(
											topic.id
										)}
										onCheckedChange={() =>
											handleTopicChange(topic.id)
										}
									/>
									<Label
										htmlFor={topic.id}
										className="text-sm cursor-pointer">
										{topic.label}
									</Label>
								</div>
							))}
						</div>
						<p className="text-center text-sm text-muted-foreground mt-6">
							{selectedTopics.length === 0
								? "Select topics you're interested in (optional)"
								: `You'll receive updates about ${
										selectedTopics.length
								  } topic${
										selectedTopics.length > 1 ? "s" : ""
								  }`}
						</p>
					</CardContent>
				</Card>
			</div>
		</section>
	);
}
