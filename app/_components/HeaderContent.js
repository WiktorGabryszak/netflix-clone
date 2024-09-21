"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import Navigation from "./Navigation";
import ProfileButtons from "./ProfileButton";
import netflixIcon from "@/public/netflix.png";

export default function HeaderContent({ children }) {
	const [isScrolled, setIsScrolled] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		function checkScroll() {
			if (window.scrollY > 50) {
				setIsScrolled(true);
			}
			if (window.scrollY === 0) {
				setIsScrolled(false);
			}
		}
		if (!isScrolled) {
			window.addEventListener("scroll", checkScroll);
			return () => window.removeEventListener("resize", checkScroll);
		}
	}, [isScrolled]);

	return (
		<header className={`flex flex-col sticky top-0 z-[100] pb-2 ${isScrolled ? "bg-neutral-950/95" : "bg-opacity-0"} `}>
			<div className={`px-14  h-[68px] flex items-center justify-between`}>
				<section className='flex gap-10'>
					<Link href='/browse' className='relative aspect-square'>
						<Image src={netflixIcon} width={94} alt='Netflix Icon' />
					</Link>
					<Navigation />
				</section>
				<ProfileButtons />
			</div>
			{pathname === "/browse/tv-shows" && children}
			{pathname === "/browse/movies" && children}
		</header>
	);
}
