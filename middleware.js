import { auth } from "@/app/_lib/auth";

const protectedRoutes = ["/"];
const publicRoutes = ["/login"];

export const middleware = auth;

export const config = {
	matcher: ["/"],
};
