import type React from "react";
import { Activity, TrendingUp, Users } from "lucide-react";

export function AboutSection() {
	return (
		<section className="py-20 bg-secondary/30">
			<div className="container mx-auto px-4 md:px-6">
				<div className="text-center mb-16 animate-in">
					<h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
						What Is{" "}
						<span className="gradient-text">Underdog Ranker</span>
					</h2>
					<p className="text-xl text-warm-gray max-w-2xl mx-auto">
						We surface the hidden gems of open source before they
						become mainstream
					</p>
				</div>

				<div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
					<FeatureCard
						icon={<Activity className="h-8 w-8 text-primary" />}
						title="Tracks Growing Projects"
						description="We monitor GitHub projects that are just starting to gain traction and show real promise."
						delay={1}
					/>

					<FeatureCard
						icon={<TrendingUp className="h-8 w-8 text-primary" />}
						title="Real Engagement Metrics"
						description="Rankings based on actual activity: stars, forks, PRs, watchers, and community engagement."
						delay={2}
					/>

					<FeatureCard
						icon={<Users className="h-8 w-8 text-primary" />}
						title="Support Builders Early"
						description="A community platform to discover and support developers before their projects go mainstream."
						delay={3}
					/>
				</div>
			</div>
		</section>
	);
}

interface FeatureCardProps {
	icon: React.ReactNode;
	title: string;
	description: string;
	delay: number;
}

function FeatureCard({ icon, title, description, delay }: FeatureCardProps) {
	return (
		<div
			className={`group p-6 rounded-xl border bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 animate-in`}
			style={{ animationDelay: `${0.1 * delay}s` }}>
			<div className="flex flex-col items-center text-center space-y-4">
				<div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
					{icon}
				</div>
				<h3 className="text-xl font-semibold">{title}</h3>
				<p className="text-warm-gray leading-relaxed">{description}</p>
			</div>
		</div>
	);
}
