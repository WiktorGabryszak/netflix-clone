import Link from "next/link";
import { auth } from "../_lib/auth";
import { getProfilesByUserId } from "../_lib/data-service";
import { setActiveProfile } from "../_lib/actions";
import Profile from "./Profile";

export default async function ProfileComponent() {
	const user = await auth();
	const { user: userData } = user;
	const dataProfiles = await getProfilesByUserId(userData?.userId);

	return (
		<div className='flex flex-col items-center justify-center gap-8 mt-10'>
			<Profile profiles={dataProfiles} />
			<Link
				href='/manage-profiles'
				className='bg-zinc-500/25 text-zinc-50 py-3 px-6 font-medium text-sm rounded-md hover:bg-zinc-500/50'>
				Edit Profiles
			</Link>
		</div>
	);
}
