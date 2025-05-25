"use client";

import { useEffect, useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Settings } from "lucide-react";
import { supabase } from "@/lib/superbase";
import { Button } from "./ui/button";
import { Session } from "@supabase/supabase-js";
import { toast } from "@/hooks/use-toast";
import { getUserInterests } from "./ui/get-waitlist-count";

export function TopicPreferences({ user }: { user: Session["user"] | null }) {
	const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
	const [showButton, setShowButton] = useState(false);

	useEffect(() => {
		getUserInterests().then((interests) => {
			setSelectedTopics(
				interests.map((interest) => interest.interest_id)
			);
		});
	}, []);

	const handleTopicChange = (topic: string) => {
		if (selectedTopics.includes(topic)) {
			setSelectedTopics(selectedTopics.filter((t) => t !== topic));
		} else {
			setSelectedTopics([...selectedTopics, topic]);
		}
		if (!showButton) setShowButton(true);
	};

	const updateUserInterests = async (interestIds: string[]) => {
		if (!user || !interestIds) {
			console.error("User is not authenticated");
			return;
		}

		const { error } = await supabase
			.from("user_interests")
			.delete()
			.eq("user_id", user.id);

		if (error) {
			console.error("Failed to delete old interests", error);
			return;
		}

		if (interestIds.length > 0) {
			const inserts = interestIds.map((id) => ({
				user_id: user.id,
				interest_id: id,
			}));

			const { error: insertError } = await supabase
				.from("user_interests")
				.insert(inserts);

			if (insertError) {
				toast({
					title: "Error",
					description: "Failed to update interests.",
					variant: "destructive",
				});
				return;
			}

			setShowButton(false);
			toast({
				title: "Success",
				description: "Interests updated successfully.",
				variant: "default",
			});
		}
	};

	const topics = [
		{
			id: "9d1829b5-0c4d-419a-8b03-90d76127cd83",
			label: "DevTools",
			color: "bg-blue-500",
		},
		{
			id: "11d7317d-55c9-4198-bf74-e7f40d0dd2da",
			label: "AI/ML",
			color: "bg-purple-500",
		},
		{
			id: "2adbd657-04ab-4756-8029-afc930107b33",
			label: "Design Tools",
			color: "bg-pink-500",
		},
		{
			id: "76a32496-05be-46fa-bc89-1fc2b549d513",
			label: "Web Dev",
			color: "bg-green-500",
		},
		{
			id: "b37b27b7-a04b-4232-a789-d87d997bea86",
			label: "Mobile Dev",
			color: "bg-orange-500",
		},
		{
			id: "75ac3f24-2217-41cc-801a-79bc8bbbdc2c",
			label: "All Topics",
			color: "bg-primary",
		},
	];

	return (
		<section className="py-20">
			<div className="container mx-auto px-4 md:px-6">
				<div className="max-w-3xl mx-auto">
					<Card className="border-primary/20 bg-card/50 backdrop-blur-sm animate-in">
						<CardHeader className="text-center">
							<div className="flex items-center justify-center gap-2 mb-2">
								<Settings className="h-6 w-6 text-primary" />
								<CardTitle className="text-2xl">
									Topic Preferences
								</CardTitle>
							</div>
							<CardDescription className="text-base">
								Choose what types of underdog projects you want
								to discover
							</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
								{topics.map((topic, index) => (
									<div
										key={topic.id}
										className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-accent/50 transition-colors animate-in"
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
											className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
										/>
										<Label
											htmlFor={topic.id}
											className="flex items-center gap-2 cursor-pointer">
											<div
												className={`w-3 h-3 rounded-full ${topic.color}`}></div>
											<span className="font-medium">
												{topic.label}
											</span>
										</Label>
									</div>
								))}
							</div>

							{selectedTopics.length > 0 && (
								<div className="text-center animate-in stagger-1">
									<p className="text-sm text-warm-gray mb-3">
										You&apos;ll receive updates about:
									</p>
									<div className="flex flex-wrap justify-center gap-2">
										{selectedTopics.map((topicId) => {
											const topic = topics.find(
												(t) => t.id === topicId
											);
											return (
												<Badge
													key={topicId}
													variant="secondary"
													className="gap-1">
													<div
														className={`w-2 h-2 rounded-full ${topic?.color}`}></div>
													{topic?.label}
												</Badge>
											);
										})}
									</div>
								</div>
							)}

							{selectedTopics.length > 0 && showButton && (
								<div className="w-full flex flex-row justify-center mt-4 animate-in stagger-1">
									<Button
										variant={user ? "default" : "outline"}
										onClick={() =>
											updateUserInterests(selectedTopics)
										}
										disabled={!user}>
										{user
											? "Save Changes"
											: "Join our waitlist in to add interests"}
									</Button>
								</div>
							)}
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	);
}
