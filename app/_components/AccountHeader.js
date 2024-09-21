import Image from "next/image";
import Link from "next/link";
import netflixIcon from "@/public/netflix.png";
import profileIcon from "@/public/profile1.png";

export default function AccountHeader() {
	return (
		<header className='bg-zinc-950'>
			<div className='h-[68px] flex items-center justify-between w-[1200px] mx-auto'>
				<Link href='/browse' className='relative aspect-square'>
					<Image src={netflixIcon} width={94} alt='Netflix Icon' />
				</Link>
				<Image src={profileIcon} className='w-10 h-10 rounded-md' alt='Profile Icon' />
			</div>
		</header>
	);
}
