import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import profile from "@/public/profile1.png";
import { auth } from "@/app/_lib/auth";
import { getUser } from "@/app/_lib/data-service";

async function AccountProfileContainer() {
	const session = await auth();
	const user = await getUser(session.user.email);
	const [firstName, secondName] = user.fullName.split(" ");
	return (
		<div className='border border-zinc-500 rounded-md px-2 py-2'>
			<Link
				href='/'
				className='flex items-center justify-between gap-4 py-4 px-6 text-zinc-50 hover:bg-zinc-500/25 rounded-md'>
				<div className='flex gap-4 items-center'>
					<Image
						src={profile}
						alt='Profile Picture'
						className='w-10 h-10 rounded-md'
					/>
					<span>{firstName}</span>
				</div>
				<ChevronRightIcon className='w-5 h-5' />
			</Link>
			{/* <hr className='w-[95%] border-zinc-500 mx-auto my-2'></hr> */}
		</div>
	);
}

export default AccountProfileContainer;
