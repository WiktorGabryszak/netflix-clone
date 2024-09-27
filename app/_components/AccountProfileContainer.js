import { auth } from "@/app/_lib/auth";
import { getProfilesByUserId } from "@/app/_lib/data-service";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import profile1 from "@/public/profile1.png";
import Link from "next/link";
import { PlusIcon } from "@heroicons/react/24/solid";

export default async function AccountProfileContainer() {
	const session = await auth();
	const profiles = await getProfilesByUserId(session.user.userId);

	return (
		<div className='border border-zinc-500 rounded-md px-2 py-2'>
			{profiles.map((profile) => (
				<>
					<Link
						href='/'
						className='flex items-center justify-between gap-4 py-4 px-6 text-zinc-50 hover:bg-zinc-500/25 rounded-md'
						key={profile.id}>
						<div className='flex gap-4 items-center'>
							<img src={profile.avatar_url} className='w-10 h-10 rounded-md' alt='Profile Icon' />
							<span>{profile.profile_name}</span>
						</div>
						<div className='flex gap-4 items-center'>
							{profile.is_active && <p className='bg-blue-600 rounded-md px-2 py-1 text-sm'>Active</p>}
							<ChevronRightIcon className='w-5 h-5' />
						</div>
					</Link>
					{profiles.length <= 2 && <hr className='w-[95%] border-zinc-500 mx-auto my-2'></hr>}
				</>
			))}
			<Link
				href='/manage-profiles'
				className='flex items-center justify-between gap-4 py-4 px-6 text-zinc-50 hover:bg-zinc-500/25 rounded-md group'>
				<div className='flex gap-4 items-center'>
					<div className='w-10 h-10 rounded-md flex items-center justify-center border-2 border-transparent group-hover:cursor-pointer group-hover:bg-zinc-400/25 overflow-hidden '>
						<PlusIcon className='w-6 h-6 text-zinc-50' />
					</div>
					<span>Add New Profile</span>
				</div>
				<div className='flex gap-4 items-center'>
					<ChevronRightIcon className='w-5 h-5' />
				</div>
			</Link>
		</div>
	);
}
