import netflixIcon from "@/public/netflix.png";
import Image from "next/image";
import Link from "next/link";
import Navigation from "./Navigation";
import ProfileButtons from "./ProfileButton";

async function Header() {
	// ${isScrolled ? "bg-neutral-950/80" : "bg-opacity-0"}

	return (
		<header
			className={`px-14  h-[68px] flex items-center justify-between sticky top-0 z-[10000]`}>
			<section className='flex gap-10'>
				<Link href='/browse' className='relative aspect-square'>
					<Image src={netflixIcon} width={94} alt='Netflix Icon' />
				</Link>
				<Navigation />
			</section>
			<ProfileButtons />
		</header>
	);
}

export default Header;
