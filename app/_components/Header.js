import netflixIcon from "@/public/netflix.png";
import profile1 from "@/public/profile1.png";
import {
	BellIcon,
	ChevronDownIcon,
	MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import Navigation from "./Navigation";

function Header() {
	return (
		<header className='px-14 bg-neutral-950 max-h-[68px] flex items-center justify-between'>
			<section className='flex gap-10'>
				<div className='relative aspect-square'>
					<Image src={netflixIcon} width={94} alt='Netflix Icon' />
				</div>
				<Navigation />
			</section>
			<section className='flex items-center gap-4 justify-normal'>
				<button>
					<MagnifyingGlassIcon className='w-6 h-6 text-neutral-50' />
				</button>
				<button>
					<BellIcon className='w-6 h-6 text-neutral-50' />
				</button>
				<div className='flex items-center gap-1'>
					<Image
						src={profile1}
						width={32}
						height={32}
						className='rounded-md'
						alt='Profile Image of User'
					/>
					<button>
						<ChevronDownIcon className='w-4 h-4 text-neutral-50' />
					</button>
				</div>
			</section>
		</header>
	);
}

export default Header;
