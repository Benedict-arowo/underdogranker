import { supabase } from "@/lib/superbase";

export async function getWaitlistCount() {
	const { count, error } = await supabase
		.from("waitlist")
		.select("*", { count: "exact", head: true });

	if (error) {
		console.error("Error fetching waitlist count:", error);
		return 0;
	}

	return count || 0;
}

export async function getUserInterests() {
	const { data, error } = await supabase.from("user_interests").select("*");

	if (error) {
		console.error("Error fetching user interests:", error);
		return [];
	}

	return data || [];
}
