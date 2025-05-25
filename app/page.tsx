"use client";

import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { TopicPreferences } from "@/components/topic-preferences";
import { DonationSection } from "@/components/donation-section";
import { SocialProof } from "@/components/social-proof";
import { Footer } from "@/components/footer";
import { useEffect, useState } from "react";
import { supabase } from "../lib/superbase";
import { Session } from "@supabase/supabase-js";

export default function Home() {
	const [user, setUser] = useState<Session["user"] | null>(null);

	useEffect(() => {
		supabase.auth.getSession().then(({ data }) => {
			console.log(data.session?.user);
			setUser(data?.session?.user || null);
		});

		const {
			data: { subscription },
		} = supabase.auth.onAuthStateChange((_event, session) => {
			setUser(session?.user || null);
		});

		return () => subscription.unsubscribe();
	}, []);

	return (
		<div className="flex flex-col min-h-screen">
			<main className="flex-1">
				<HeroSection user={user} />
				<AboutSection />
				<TopicPreferences user={user} />
				<DonationSection />
				<SocialProof />
			</main>
			<Footer />
		</div>
	);
}

export interface User {
	id: string;
	aud: string;
	role?: string | undefined;
	email?: string;
	email_confirmed_at: Date;
	phone: string;
	confirmed_at: Date;
	last_sign_in_at: Date;
	app_metadata: {
		provider: string;
		providers: string[];
	};
	user_metadata: {
		avatar_url: string;
		email: string;
		email_verified: boolean;
		full_name: string;
		iss: string;
		name: string;
		phone_verified: boolean;
		preferred_username: string;
		provider_id: string;
		sub: string;
		user_name: string;
	};
	identities: [
		{
			identity_id: string;
			id: string;
			user_id: string;
			identity_data: {
				avatar_url: string;
				email: string;
				email_verified: boolean;
				full_name: string;
				iss: string;
				name: string;
				phone_verified: boolean;
				preferred_username: string;
				provider_id: string;
				sub: string;
				user_name: string;
			};
			provider: string;
			last_sign_in_at: Date;
			created_at: Date;
			updated_at: Date;
			email: string;
		}
	];
	created_at: Date;
	updated_at: Date;
	is_anonymous: boolean;
}
