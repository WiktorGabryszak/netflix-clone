"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
	const pathname = usePathname();
	return (
		<nav className='flex items-center gap-6 text-sm text-neutral-300'>
			<ul>
				<li>
					<Link
						href='/browse'
						className={`transition-colors duration-300 hover:text-neutral-400 ${
							pathname === "/browse" && "text-zinc-100"
						}`}>
						Home
					</Link>
				</li>
			</ul>
			<ul>
				<li>
					<Link
						href='/browse/tv-shows'
						className={`transition-colors duration-300 hover:text-neutral-400 ${
							pathname === "/browse/tv-shows" && "text-zinc-100"
						}`}>
						TV Shows
					</Link>
				</li>
			</ul>
			<ul>
				<li>
					<Link
						href='/browse/movies'
						className={`transition-colors duration-300 hover:text-neutral-400 ${
							pathname === "/browse/movies" && "text-zinc-100"
						}`}>
						Movies
					</Link>
				</li>
			</ul>
			<ul>
				<li>
					<Link
						href='/latest'
						className={`transition-colors duration-300 hover:text-neutral-400 ${
							pathname === "/latest" && "text-zinc-100"
						}`}>
						New & Popular
					</Link>
				</li>
			</ul>
			<ul>
				<li>
					<Link
						href='/my-list'
						className={`transition-colors duration-300 hover:text-neutral-400 ${
							pathname === "/my-list" && "text-zinc-100"
						}`}>
						My List
					</Link>
				</li>
			</ul>
			<ul>
				<li>
					<Link
						href='browse/original-audio'
						className='transition-colors duration-300 hover:text-neutral-400'>
						Browse by Languages
					</Link>
				</li>
			</ul>
		</nav>
	);
}
