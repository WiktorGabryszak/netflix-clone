import { flushAllTraces } from "next/dist/trace";
import { supabase } from "./supabase";

/////////////
// GET
////////////

export async function getUser(email) {
	const { data } = await supabase.from("users").select("*").eq("email", email).single();

	return data;
}

////////////////////////
//  USER MANAGEMENT (SUPABASE)
///////////////////////

export async function signUp({ email, password }) {
	// const { data, error } = await supabase.auth.signUp({
	// 	email,
	// 	password,
	// 	options: {
	// 		data: {
	// 			fullName: fullName,
	// 			avatar: "",
	// 		},
	// 	},
	// });

	// if (error) {
	// 	throw new Error("User could not be created");
	// }

	// return data;

	await createUser({ email: email, password: password, fullName: "" });
}

export async function login({ email, password }) {
	const { data, error } = await supabase.auth.signInWithPassword({
		email,
		password,
	});

	if (error) throw new Error(error.message);

	return data;
}

export async function getCurrentUser() {
	const { data: session } = await supabase.auth.getSession();
	if (!session.session) return null;

	const { data, error } = await supabase.auth.getUser();

	if (error) throw new Error(error.message);
	return data?.user;
}

export async function logout() {
	const { error } = await supabase.auth.signOut();
	if (error) throw new Error(error.message);
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

///////////////
// TMDB
//////////////

export async function fetchMovies(type, page) {
	const options = {
		method: "GET",
		headers: {
			accept: "application/json",
			Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
		},
	};

	const res = await fetch(`https://api.themoviedb.org/3/movie/${type}?page=${page}`, options);
	const data = await res.json();
	if (data.Response === "False") throw new Error("Movies not found");

	return data;
}

export async function fetchShows(type, page) {
	const options = {
		method: "GET",
		headers: {
			accept: "application/json",
			Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
		},
	};

	const res = await fetch(`https://api.themoviedb.org/3/tv/${type}?page=${page}`, options);
	const data = await res.json();
	if (data.Response === "False") throw new Error("Shows not found");

	return data;
}

export async function fetchMovieById(id) {
	const options = {
		method: "GET",
		headers: {
			accept: "application/json",
			Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
		},
	};

	const res = await fetch(`https://api.themoviedb.org/3/movie/${id}`, options);
	const data = await res.json();
	if (data.Response === "False") throw new Error("Movie not found");

	return data;
}

export async function fetchMoviesGenres() {
	const options = {
		method: "GET",
		headers: {
			accept: "application/json",
			Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
		},
	};

	const res = await fetch(`https://api.themoviedb.org/3/genre/movie/list`, options);
	const data = await res.json();
	if (data.Response === "False") throw new Error("Movie genres not found");

	return data;
}

export async function fetchShowsGenres() {
	const options = {
		method: "GET",
		headers: {
			accept: "application/json",
			Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
		},
	};

	const res = await fetch(`https://api.themoviedb.org/3/genre/tv/list`, options);
	const data = await res.json();
	if (data.Response === "False") throw new Error("Movie genres not found");

	return data;
}

export async function fetchMovieByQuery(query) {
	const options = {
		method: "GET",
		headers: {
			accept: "application/json",
			Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
		},
	};

	const res = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}`, options);
	const data = await res.json();
	if (data.Response === "False") throw new Error("Movie not found");

	return data;
}

export async function fetchShowByQuery(query) {
	const options = {
		method: "GET",
		headers: {
			accept: "application/json",
			Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
		},
	};

	const res = await fetch(`https://api.themoviedb.org/3/search/tv?query=${query}`, options);
	const data = await res.json();
	if (data.Response === "False") throw new Error("Shows not found");

	return data;
}

export async function fetchShowsByGenre(genre, page, type) {
	const options = {
		method: "GET",
		headers: {
			accept: "application/json",
			Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
		},
	};

	const res = await fetch(
		`https://api.themoviedb.org/3/discover/tv?with_genres=${genre}&page=${page}&sort_by=${type}`,
		options
	);
	const data = await res.json();
	if (data.Response === "False") throw new Error("Shows not found");

	return data;
}

export async function fetchMoviesByGenre(genre, page, type) {
	const options = {
		method: "GET",
		headers: {
			accept: "application/json",
			Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
		},
	};

	const res = await fetch(
		`https://api.themoviedb.org/3/discover/movie?with_genres=${genre}&page=${page}&sort_by=${type}`,
		options
	);
	const data = await res.json();
	if (data.Response === "False") throw new Error("Shows not found");

	return data;
}

////////////////////////
// My list ( Actions )
///////////////////////

export async function getMoviesFromMyList(userId) {
	const { data, error } = await supabase.from("my_movies").select("*").eq("user_id", userId);

	if (error) {
		console.error(error);
		throw new Error("Movies could not get loaded");
	}

	return data;
}

export async function getShowsFromMyList(userId) {
	const { data, error } = await supabase.from("my_shows").select("*").eq("user_id", userId);

	if (error) {
		console.error(error);
		throw new Error("Shows could not get loaded");
	}

	return data;
}

//////////////////////
// Profiles
//////////////////////

export async function getProfilesByUserId(user_id) {
	const { data, error } = await supabase.from("profiles").select("*").eq("user_id", user_id);

	if (error) throw new Error("There was some issue dowloading your profiles");

	return data;
}

export async function addProfile(newProfile) {
	const { data, error } = await supabase.from("profiles").insert([newProfile]);

	if (error) {
		console.error(error);
		throw new Error("Profile could not be added");
	}

	return data;
}

export async function updateProfileName(newName, profileId) {
	const { error } = await supabase.from("profiles").update({ profile_1_name: newName }).eq("id", profileId).select();

	if (error) throw new Error("That profile could not be updated");
}
