import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { createUser, getUser } from "./data-service";

const authConfig = {
	providers: [
		Google({
			clientId: process.env.AUTH_GOOGLE_ID,
			clientSecret: process.env.AUTH_GOOGLE_SECRET,
		}),
		Credentials({
			credentials: {
				email: { label: "Email" },
				password: { label: "Password", type: "password" },
				repeatPassword: { label: "repeatPassword", type: "password" },
			},
			async authorize(credentials) {
				if (credentials.password !== credentials.repeatPassword) {
					throw new Error("Passwords do not match");
				}

				const { data, error } = await supabase.auth.signInWithPassword({
					email: credentials.email,
					password: credentials.password,
				});

				if (error) {
					console.error(error.message);
					return null;
				}

				return data.user ?? null;
			},
		}),
	],
	secret: process.env.NEXTAUTH_SECRET,
	callbacks: {
		authorized({ auth, request }) {
			return !!auth?.user;
		},
		async signIn({ user, account, profile }) {
			try {
				const exsitingGuest = await getUser(user.email);

				if (!exsitingGuest)
					await createUser({ email: user.email, fullName: user.name });

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
