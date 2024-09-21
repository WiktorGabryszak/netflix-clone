"use client";

import { usePathname } from "next/navigation";

export default function Content({ children }) {
	const pathname = usePathname();
	if (pathname === "/browse/movies") return <div>{children}</div>;
}
