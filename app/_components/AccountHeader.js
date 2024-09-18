import Image from "next/image";
import Link from "next/link";
import netflixIcon from '@/public/netflix'

function AccountHeader() {
	return (
		<header
			className={`flex flex-col sticky top-0 z-[100] pb-2 ${
				isScrolled ? "bg-neutral-950/95" : "bg-opacity-0"
			}`}>
			<div className={`px-14  h-[68px] flex items-center justify-between`}>
				<section className='flex gap-10'>
					<Link href='/browse' className='relative aspect-square'>
						<Image src={netflixIcon} width={94} alt='Netflix Icon' />
					</Link>
				</section>
			</div>
		</header>
	);
}

export default AccountHeader;
