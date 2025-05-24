import type React from "react";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({
	subsets: ["latin"],
	variable: "--font-mono",
});

export const metadata: Metadata = {
	title: "Underdog Ranker - Discover the Next GitHub Hit",
	description:
		"A radar for underdog GitHub projects worth watching. Join the waitlist to discover rising open-source stars before they go viral.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${inter.variable} ${jetbrainsMono.variable} font-sans`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange={false}>
					<div className="flex min-h-screen flex-col">
						<Header />
						{children}
					</div>
					<Toaster />
				</ThemeProvider>
			</body>
		</html>
	);
}
