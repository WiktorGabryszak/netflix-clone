import Link from "next/link";
import { auth } from "../_lib/auth";
import { getProfilesByUserId } from "../_lib/data-service";

export default async function ProfileComponent() {
	const user = await auth();
	const { user: userData } = user;
	const dataProfiles = await getProfilesByUserId(userData?.userId);

	console.log(dataProfiles[0].avatar_url);

	return (
		<div className='flex flex-col items-center justify-center gap-8 mt-10'>
			<div className='flex items-center gap-4'>
				{dataProfiles.map((profile) => (
					<Link href='/browse' key={profile.id}>
						<div className='group flex-row w-44 mx-auto'>
							<div className='w-44 h-44 rounded-md flex items-center justify-center border-2 border-transparent group-hover:cursor-pointer group-hover:border-white overflow-hidden'>
								<img src={profile.avatar_url ? profile.avatar_url : "profile1.png"} alt='profile picture' />
							</div>
							<div className='mt-4 text-gray-400 text-2xl text-center group-hover:text-white'>{profile.profile_name}</div>
						</div>
					</Link>
				))}
			</div>
			<Link
				href='/manage-profiles'
				className='bg-zinc-500/25 text-zinc-50 py-3 px-6 font-medium text-sm rounded-md hover:bg-zinc-500/50'>
				Edit Profiles
			</Link>
		</div>
	);
}
