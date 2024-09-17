"use client";

import { usePathname } from "next/navigation";
import MovieList from "./MovieList";

function Content({ children }) {
	const pathname = usePathname();
	console.log(pathname);

	if (pathname === "/browse/movies") return <div>{children}</div>;
}

export default Content;
