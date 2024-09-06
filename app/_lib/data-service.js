import { supabase } from "./supabase";

/////////////
// GET
////////////

export async function getUser(email) {
	const { data } = await supabase
		.from("users")
		.select("*")
		.eq("email", email)
		.single();

	// No error here! We handle the possibility of no guest in the sign in callback
	return data;
}

////////////////////////
//  USER MANAGEMENT
///////////////////////

export async function signUp({ email, password }) {
	const { data, error } = await supabase.auth.signUp({
		email: email,
		password: password,
	});

	if (error) {
		throw new Error("User could not be created");
	}

	return data;
}

export async function login({ email, password }) {
	const { data, error } = await supabase.auth.signInWithPassword({
		email,
		password,
	});

	if (error) throw new Error(error.message);

	return data;
}

/////////////////
// CREATE
////////////////

export async function createUser(newUser) {
	const { data, error } = await supabase.from("users").insert([newUser]);

	if (error) {
		console.error(error);
		throw new Error("User could not be created");
	}

	return data;
}
