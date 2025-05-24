"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Heart, CreditCard, Loader2 } from "lucide-react";
import { Input } from "./ui/input";
import { Session } from "@supabase/supabase-js";

export function DonationSection({ user }: { user: Session["user"] | null }) {
	const [isProcessing, setIsProcessing] = useState<string | null>(null);
	const [customAmount, setCustomAmount] = useState("");
	const { toast } = useToast();

	const payWithPaystack = (amount: number) => {
		const paystack = window.PaystackPop.setup({
			key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY,
			amount: amount * 100,
			email: user?.email || "",
			currency: "USD",
			callback(response: any) {
				console.log(response);
				toast({
					title: "Thank you! ❤️",
					description: `Your support of ${
						amount ? `$${amount}` : ""
					} helps keep Underdog Ranker independent.`,
				});
			},
			onClose() {
				toast({
					title: "Transaction cancelled",
					description: `Transaction was not completed, window was closed.`,
					variant: "destructive",
				});
			},
		});
		paystack.openIframe();
	};

	// Simulate donation process with amount info
	const handleDonation = async (type: string, amount?: number) => {
		if (type === "custom" && (!amount || amount < 1)) {
			toast({
				title: "Invalid amount",
				description:
					"Please enter a valid donation amount of at least $1.",
				variant: "destructive",
			});
			return;
		}

		setIsProcessing(type);
		payWithPaystack(amount!);

		setIsProcessing(null);
		if (type === "custom") setCustomAmount("");
	};

	return (
		<section className="py-20 bg-secondary/30">
			<div className="container mx-auto px-4 md:px-6">
				<div className="max-w-4xl mx-auto text-center">
					<div className="mb-12 animate-in">
						<div className="flex items-center justify-center gap-2 mb-4">
							<Heart className="h-8 w-8 text-primary" />
							<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
								Support the Mission
							</h2>
						</div>
						<p className="text-xl text-warm-gray max-w-2xl mx-auto">
							Help keep Underdog Ranker open, indie, and
							independent. Every contribution helps us surface
							more hidden gems.
						</p>
					</div>

					<div className="grid gap-6 justify-center max-w-2xl mx-auto">
						<Card className="border-primary/20 bg-card/50 backdrop-blur-sm animate-in stagger-1">
							<CardHeader className="text-center">
								<CreditCard className="h-8 w-8 text-primary mx-auto mb-2" />
								<CardTitle>One-time Donation</CardTitle>
								<CardDescription>
									Support via Paystack
								</CardDescription>
							</CardHeader>
							<CardContent className="space-y-3">
								<Button
									onClick={() =>
										handleDonation("paystack", 5)
									}
									disabled={isProcessing === "paystack-5"}
									size={"sm"}
									variant={"outline"}
									className="flex-1">
									{isProcessing === "paystack-5" ? (
										<>
											<Loader2 className="mr-2 h-4 w-4 animate-spin" />
											Processing...
										</>
									) : (
										"$5"
									)}
								</Button>

								<Button
									size={"sm"}
									variant={"outline"}
									className="flex-1"
									onClick={() =>
										handleDonation("paystack", 25)
									}
									disabled={isProcessing === "paystack-15"}>
									{isProcessing === "paystack-15" ? (
										<>
											<Loader2 className="mr-2 h-4 w-4 animate-spin" />
											Processing...
										</>
									) : (
										"$15"
									)}
								</Button>
								<Button
									size={"sm"}
									variant={"outline"}
									className="flex-1"
									onClick={() =>
										handleDonation("paystack", 25)
									}
									disabled={isProcessing === "paystack-25"}>
									{isProcessing === "paystack-25" ? (
										<>
											<Loader2 className="mr-2 h-4 w-4 animate-spin" />
											Processing...
										</>
									) : (
										"$25"
									)}
								</Button>

								<div className="flex flex-row items-center justify-center gap-2 mt-4">
									<Input
										type="number"
										prefix="$"
										placeholder="$10"
										value={customAmount}
										onChange={(e) =>
											setCustomAmount(e.target.value)
										}
										disabled={isProcessing === "custom"}
										min={1}
										className="py-2 max-w-[60%] text-base"
									/>
									<Button
										variant="outline"
										className="h-full"
										onClick={() =>
											handleDonation(
												"custom",
												Number(customAmount)
											)
										}
										disabled={isProcessing === "custom"}>
										{isProcessing === "custom" ? (
											<>
												<Loader2 className="mr-2 h-4 w-4 animate-spin" />
												Processing...
											</>
										) : (
											"Donate"
										)}
									</Button>
								</div>
							</CardContent>
						</Card>
					</div>

					<p className="text-sm text-warm-gray mt-8 animate-in stagger-3">
						All donations go directly to development, hosting, and
						keeping the platform ad-free.
					</p>
				</div>
			</div>
		</section>
	);
}
