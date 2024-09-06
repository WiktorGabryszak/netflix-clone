"use server";

import { redirect } from "next/navigation";
import { signIn } from "./auth";

export async function signInWithGoogleAction() {
	await signIn("google", { redirectTo: "/" });
}

export async function signUpAction(formData) {
	const email = formData.get("email");
	const password = formData.get("password");
	const repeatPassword = formData.get("repeatPassword");


	if (!email || !password) return;

	await signUp({ email, password });
	redirect("/");
}

export async function signOutAction() {
	await signOut({ redirectTo: "/login" });
}
