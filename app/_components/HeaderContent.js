"use client";
import Link from "next/link";
import Navigation from "./Navigation";
import ProfileButtons from "./ProfileButton";
import Image from "next/image";
import netflixIcon from "@/public/netflix.png";
import { usePathname } from "next/navigation";

function HeaderContent({ children }) {
	const pathname = usePathname();
	return (
		<header className='flex flex-col sticky top-0 z-[100]'>
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

export default HeaderContent;
