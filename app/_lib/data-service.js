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

	const res = await fetch(
		`https://api.themoviedb.org/3/movie/${type}?page=${page}`,
		options
	);
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

	const res = await fetch(
		`https://api.themoviedb.org/3/tv/${type}?page=${page}`,
		options
	);
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

	const res = await fetch(
		`https://api.themoviedb.org/3/genre/movie/list`,
		options
	);
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

	const res = await fetch(
		`https://api.themoviedb.org/3/genre/tv/list`,
		options
	);
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

	const res = await fetch(
		`https://api.themoviedb.org/3/search/movie?query=${query}`,
		options
	);
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

	const res = await fetch(
		`https://api.themoviedb.org/3/search/tv?query=${query}`,
		options
	);
	const data = await res.json();
	if (data.Response === "False") throw new Error("Shows not found");

	return data;
}

export async function fetchShowsByGenre(genre, page, type) {
	// const randomNumber = Math.floor(Math.random() * 8);
	// console.log(randomNumber)

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
	// const randomNumber = Math.floor(Math.random() * 8);
	// console.log(randomNumber)

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

export async function getMovieFromList(movie_id) {
	const { data } = await supabase
		.from("my_movies")
		.select("*")
		.eq("movie_id", movie_id)
		.single();

	return data;
}

export async function getMoviesFromList() {
	const { data, error } = await supabase.from("my_movies").select("movie_id");

	if (error) {
		console.error(error);
		throw new Error("Movies could not be found");
	}

	return data;
}

export async function getMoviesFromMyList(userId) {
	const { data, error } = await supabase
		.from("my_movies")
		.select("*")
		.eq("user_id", userId);

	if (error) {
		console.error(error);
		throw new Error("Movies could not get loaded");
	}

	return data;
}

export async function getShowsFromMyList(userId) {
	const { data, error } = await supabase
		.from("my_shows")
		.select("*")
		.eq("user_id", userId);

	if (error) {
		console.error(error);
		throw new Error("Shows could not get loaded");
	}

	return data;
}
