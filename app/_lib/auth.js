import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { addProfile, createUser, getProfilesByUserId, getUser } from "./data-service";
import { supabase } from "./supabase";

const authConfig = {
	providers: [
		Google({
			clientId: process.env.AUTH_GOOGLE_ID,
			clientSecret: process.env.AUTH_GOOGLE_SECRET,
		}),
		// Credentials({
		// 	CredentialsSignin: {
		// 		email: { label: "Email" },
		// 		password: { label: "Password", type: "password" },
		// 	},
		// 	async authorize(credentials) {
		// 		// const { data, error } = await supabase.auth.signInWithPassword({
		// 		// 	email: credentials.email,
		// 		// 	password: credentials.password,
		// 		// });

		// 		// if (error) {
		// 		// 	console.error(error.message);
		// 		// 	return null;
		// 		// }

		// 		const { data: users, error } = await supabase
		// 			.from("users")
		// 			.select("*")
		// 			.eq("email", credentials.email)
		// 			.eq("password", credentials.password);

		// 		if (error) {
		// 			console.error("Login error:", error.message);
		// 			return;
		// 		}

		// 		return users ?? null;
		// 	},
		// }),
	],
	secret: process.env.NEXTAUTH_SECRET,
	callbacks: {
		authorized({ auth, request }) {
			return !!auth?.user;
		},
		async signIn({ user, account, profile }) {
			try {
				const exsitingUser = await getUser(user.email);

				if (!exsitingUser) await createUser({ email: user.email, fullName: user.name });

				const data = await getProfilesByUserId(exsitingUser?.id);
				const [firstName, lastName] = exsitingUser?.fullName.split(" ");

				if (data.length === 0) {
					const newProfileData = {
						user_id: exsitingUser?.id,
						profile_name: firstName,
						avatar_url: "https://blwjabmlaqkrlojvhjab.supabase.co/storage/v1/object/public/profile_photos/default",
						preferences: { language: "en", age: 28 },
						is_active: false,
						is_default: true,
					};
					await addProfile(newProfileData);
				}

				return true;
			} catch {
				return false;
			}
		},
		async session({ session, user }) {
			const userData = await getUser(session.user.email);

			session.user.userId = userData.id;

			return session;
		},
	},
	pages: {
		signIn: "/login",
	},
	trustHost: true,
};

export const {
	auth,
	signIn,
	signOut,
	handlers: { GET, POST },
} = NextAuth(authConfig);
