export function SocialProof() {
	// const testimonials = [
	// 	{
	// 		text: "Finally, a way to discover promising projects before they hit the front page of HN!",
	// 		author: "Sarah Chen",
	// 		role: "Senior Engineer",
	// 		avatar: "SC",
	// 	},
	// 	{
	// 		text: "Love the focus on real GitHub metrics. No vanity numbers, just genuine project health.",
	// 		author: "Alex Rivera",
	// 		role: "Open Source Maintainer",
	// 		avatar: "AR",
	// 	},
	// 	{
	// 		text: "This is exactly what the dev community needs. Can't wait for the launch!",
	// 		author: "Jordan Kim",
	// 		role: "Tech Lead",
	// 		avatar: "JK",
	// 	},
	// ];

	return (
		<section className="py-20">
			<div className="container mx-auto px-4 md:px-6">
				<div className="text-center mb-12 animate-in">
					<h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
						Loved by the{" "}
						<span className="gradient-text">Build-in-Public</span>{" "}
						Community
					</h2>
					<p className="text-xl text-warm-gray">
						Developers who believe in supporting each other&#39;s
						work
					</p>
				</div>

				{/* Community Avatars */}
				{/* <div className="flex flex-wrap justify-center gap-3 mb-12 animate-in stagger-1">
					{Array.from({ length: 12 }).map((_, i) => (
						<div
							key={i}
							className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center font-semibold text-sm animate-in"
							style={{ animationDelay: `${0.05 * i}s` }}>
							{String.fromCharCode(65 + i)}
						</div>
					))}
					<div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-xs">
						+247
					</div>
				</div>

				<div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
					{testimonials.map((testimonial, index) => (
						<div
							key={index}
							className="p-6 rounded-xl border bg-card/50 backdrop-blur-sm animate-in"
							style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
							<blockquote className="text-warm-gray italic mb-4">
								&quot;{testimonial.text}&quot;
							</blockquote>
							<div className="flex items-center gap-3">
								<div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-semibold text-sm">
									{testimonial.avatar}
								</div>
								<div>
									<p className="font-semibold">
										{testimonial.author}
									</p>
									<p className="text-sm text-warm-gray">
										{testimonial.role}
									</p>
								</div>
							</div>
						</div>
					))}
				</div> */}
			</div>
		</section>
	);
}
