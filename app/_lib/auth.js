import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { createUser, getUser } from "./data-service";
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
			console.log(auth);
			return !!auth?.user;
		},
		async signIn({ user, account, profile }) {
			try {
				const exsitingUser = await getUser(user.email);

				if (!exsitingUser) await createUser({ email: user.email, fullName: user.name });

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
};

export const {
	auth,
	signIn,
	signOut,
	handlers: { GET, POST },
} = NextAuth(authConfig);
