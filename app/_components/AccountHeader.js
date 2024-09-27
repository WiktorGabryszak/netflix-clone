import { getProfilesByUserId } from "../_lib/data-service";
import { auth } from "../_lib/auth";
import Image from "next/image";
import Link from "next/link";
import netflixIcon from "@/public/netflix.png";

export default async function AccountHeader() {
	const session = await auth();
	const profiles = await getProfilesByUserId(session.user.userId);

	const activeProfile = profiles.find((profile) => profile.is_active === true);

	return (
		<header className='bg-zinc-950'>
			<div className='h-[68px] flex items-center justify-between w-[1200px] mx-auto'>
				<Link href='/browse' className='relative aspect-square'>
					<Image src={netflixIcon} width={94} alt='Netflix Icon' />
				</Link>
				<img src={activeProfile.avatar_url} className='w-10 h-10 rounded-md' alt='Profile Icon' />
			</div>
		</header>
	);
}
