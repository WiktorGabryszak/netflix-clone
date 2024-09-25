"use server";

import { redirect } from "next/navigation";
import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";
import { revalidatePath } from "next/cache";
import {
	createUser,
	getMoviesFromMyList,
	getProfilesByUserId,
	getShowsFromMyList,
	getUser,
	login,
	signUp,
	updateProfileName,
} from "./data-service";

export async function logIn(email, password) {
	if (!email || !password) return;

	const { data: users, error } = await supabase.from("users").select("*").eq("email", email).eq("password", password);

	if (error) {
		console.error("Login error:", error.message);
		return;
	}

	await signIn("credentials", { redirectTo: "/" });

	redirect("/");

	// const { data, error } = await supabase.auth.signInWithPassword({
	// 	email,
	// 	password,
	// });
}

export async function signInWithGoogleAction() {
	await signIn("google", { redirectTo: "/" });
}

export async function singUp(email, password) {
	if (!email || !password) return;

	const exsitingUser = await getUser(email);

	if (!exsitingUser) await createUser({ email: email, password: password, fullName: "" });

	redirect("/");
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

//////////////////////
// Movies and Shows
/////////////////////

export async function addMovieToList(data, matchedGenres) {
	const session = await auth();
	if (!session) throw new Error("You must be logged in");

	const moviesOnList = await getMoviesFromMyList(session.user.userId);
	const isOnList = moviesOnList.some((m) => m.movie_id === data.movie_id);

	if (isOnList) {
		throw new Error("You already have this on your list");
	}

	const newMovieData = {
		movie_id: data.id,
		title: data.title,
		overview: data.overview,
		genres: matchedGenres,
		backdrop_path: data.backdrop_path,
		user_id: session.user.userId,
	};

	const { error } = await supabase.from("my_movies").insert([newMovieData]);

	if (error) {
		console.error(error);
		throw new Error("Movie could not be added to the list");
	}
	revalidatePath(`/my-list`);
}
export async function addShowToList(data, matchedGenres, genres) {
	const session = await auth();
	if (!session) throw new Error("You must be logged in");

	const actuallyGenres = matchedGenres ? matchedGenres : genres;

	const newShowData = {
		show_id: data.id,
		name: data.name,
		overview: data.overview,
		genres: actuallyGenres,
		backdrop_path: data.backdrop_path,
		user_id: session.user.userId,
	};

	const { error } = await supabase.from("my_shows").insert([newShowData]);

	if (error) {
		console.error(error);
		throw new Error("Show could not be added to the list");
	}
	revalidatePath(`/my-list`);
}

export async function deleteMovieFromList(movie_id) {
	const session = await auth();
	if (!session) throw new Error("You must be logged in");

	const userMovies = await getMoviesFromMyList(session.user.userId);
	const userMoviesIds = userMovies.map((movie) => movie.movie_id);

	console.log(userMovies);

	if (!userMoviesIds.includes(movie_id)) throw new Error("You are not allowed to delete this movie");

	const { error } = await supabase.from("my_movies").delete().eq("movie_id", movie_id);

	if (error) {
		console.error(error);
		throw new Error("Movie could not be deleted");
	}
	revalidatePath(`/my-list`);
}

export async function deleteShowFromList(show_id) {
	const session = await auth();
	if (!session) throw new Error("You must be logged in");

	const userShows = await getShowsFromMyList(session.user.userId);
	const userShowsIds = userShows.map((show) => show.show_id);

	console.log(!userShowsIds.includes(show_id));

	if (!userShowsIds.includes(show_id)) throw new Error("You are not allowed to delete this show");

	const { error } = await supabase.from("my_shows").delete().eq("show_id", show_id);

	if (error) {
		console.error(error);
		throw new Error("Show could not be deleted");
	}
	revalidatePath(`/my-list`);
}

//////////////////////////
// Profiles
/////////////////////////

export async function addNewProfile(formData) {
	const session = await auth();
	if (!session) throw new Error("You must be logged in");

	const file = formData.get("avatar_url");
	let fileUrl;

	if (file) {
		fileUrl = URL.createObjectURL(file);
	}

	const fileName = `avatar-${session.user.userId}-${Math.random()}`;

	const { error: storageError } = await supabase.storage.from("profile_photos").upload(fileName, file);

	if (storageError) throw new Error(storageError.message);

	const newProfileData = {
		user_id: session.user.userId,
		profile_name: formData.get("profile_name"),
		avatar_url: `${process.env.SUPABASE_URL}/storage/v1/object/public/profile_photos/${fileName}`,
		preferences: { language: "en", age: "" },
	};

	const { error } = await supabase.from("profiles").insert([newProfileData]);

	if (error) {
		console.error(error);
		throw new Error("Profile could not be added");
	}
	revalidatePath(`/manage-profiles`, `/`);
}

export async function updateProfile(formData) {
	const session = await auth();
	if (!session) throw new Error("You must be logged in");

	const profiles = await getProfilesByUserId(session.user.userId);
	const ids = formData.getAll("id");
	const names = formData.getAll("profile_name");

	for (let i = 0; i < ids.length; i++) {
		const formId = Number(ids[i]);
		const formName = names[i];

		const profile = profiles.find((profile) => profile.id === formId);


		if (profile) {
			if (profile.profile_name !== formName) {
				await updateProfileName(formName, formId);
			}
		} else {
			throw new Error("No profile found ");
		}
	}
	revalidatePath("/");
	redirect("/");
}
