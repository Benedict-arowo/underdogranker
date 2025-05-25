import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Heart, Coffee } from "lucide-react";
import Link from "next/link";

export function DonationSection() {
	const { toast } = useToast();

	const handleDonation = async () => {
		toast({
			title: "Thank you! ❤️",
			description: `Your support helps keep Underdog Ranker independent.`,
		});
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
						<Card className="border-primary/20 bg-card/50 backdrop-blur-sm animate-in stagger-2">
							<CardHeader className="text-center">
								<Coffee className="h-8 w-8 text-primary mx-auto mb-2" />
								<CardTitle>Buy Me a Coffee</CardTitle>
								<CardDescription>
									Quick & easy support
								</CardDescription>
							</CardHeader>
							<CardContent>
								<Button
									variant="outline"
									className="w-full border-primary/40 hover:bg-primary/10"
									onClick={() => handleDonation()}>
									<Link
										className="flex items-center justify-center w-full"
										href={
											"https://nowpayments.io/donation/underdogranker"
										}>
										<Coffee className="mr-2 h-4 w-4" />
										Buy Me a Coffee
									</Link>
								</Button>
								<p className="text-xs text-warm-gray text-center mt-3">
									Perfect for a quick thank you
								</p>
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
