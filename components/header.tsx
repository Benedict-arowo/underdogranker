"use client";

import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Logo } from "@/components/logo";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={`sticky top-0 z-50 w-full transition-all duration-300 ${
				isScrolled
					? "bg-background/80 backdrop-blur-md border-b"
					: "bg-transparent"
			}`}>
			<div className="container flex h-16 mx-auto items-center justify-between">
				<Logo />

				<div className="flex items-center gap-4">
					<Button
						variant="ghost"
						size="sm"
						className="hidden md:flex gap-2 text-warm-gray hover:text-foreground">
						<Github className="h-4 w-4" />
						<span>Star on GitHub</span>
					</Button>
					<ThemeToggle />
				</div>
			</div>
		</header>
	);
}
