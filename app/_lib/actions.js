"use server";

import { redirect } from "next/navigation";
import { auth, signIn } from "./auth";
import { supabase } from "./supabase";
import { revalidatePath } from "next/cache";
import { getMoviesFromMyList } from "./data-service";

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

export async function addMovieToList(movieData) {
	const session = await auth();
	if (!session) throw new Error("You must be logged in");

	const newMovieData = {
		movie_id: movieData.movie_id,
		title: movieData.title,
		overview: movieData.overview,
		genres: movieData.genres.map((genre) => genre.name),
		backdrop_path: movieData.backdrop_path,
		user_id: session.user.userId,
	};

	const { error } = await supabase.from("my_movies").insert([newMovieData]);

	if (error) {
		console.error(error);
		throw new Error("Movie could not be added to the list");
	}
	revalidatePath(`/browse/${movieData.movie_id}`);
}

export async function deleteMovieFromList(movie_id) {
	const session = await auth();
	if (!session) throw new Error("You must be logged in");

	const userMovies = await getMoviesFromMyList(session.user.userId);
	const userMoviesIds = userMovies.map((movie) => movie.movie_id);
	

	if (!userMoviesIds.includes(movie_id))
		throw new Error("You are not allowed to delete this movie");

	const { error } = await supabase
		.from("my_movies")
		.delete()
		.eq("movie_id", movie_id);

	if (error) {
		console.error(error);
		throw new Error("Movie could not be deleted");
	}
	revalidatePath(`/browse/${movie_id}`);
}
