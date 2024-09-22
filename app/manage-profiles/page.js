import EditProfileComponent from "../_components/EditProfileComponent";
import { auth } from "../_lib/auth";
import { getProfilesByUserId } from "../_lib/data-service";

async function page() {
	const user = await auth();
	const { user: userData } = user;
	const dataProfiles = await getProfilesByUserId(userData?.userId);
	return (
		<main className='h-full grid items-center bg-zinc-900'>
			<div className='flex item-center justify-center'>
				<div className='flex flex-col'>
					<div className='text-3xl md:text-5xl text-white text-center'>Edit your profiles</div>
					<EditProfileComponent name={dataProfiles[0].profile_1_name} />
				</div>
			</div>
		</main>
	);
}

export default page;
