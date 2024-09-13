import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { createUser, getUser } from "./data-service";

const authConfig = {
	providers: [
		Google({
			clientId: process.env.AUTH_GOOGLE_ID,
			clientSecret: process.env.AUTH_GOOGLE_SECRET,
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

// const authConfig = {
// 	providers: [
// 		Credentials({
// 			credentials: {
// 				email: {
// 					label: "Email",
// 					type: "text",
// 				},
// 				password: {
// 					label: "Password",
// 					type: "password",
// 				},
// 			},
// 			authorize: async (credentials) => {
// 				if (!credentials?.email || !credentials?.password) {
// 					throw new Error("Email and password required");
// 				}

// 				const user = await getUser(credentials?.email, credentials?.password);

// 				if (!user || !user?.password) {
// 					throw new Error("User does not exist.");
// 				}

// 				const isCorrectPassword = credentials?.password === user?.password;

// 				if (!isCorrectPassword) {
// 					throw new Error("Incorrect Password");
// 				}
// 				return user;
// 			},
// 		}),
// 	],
