import Link from "next/link";
import { auth } from "../_lib/auth";
import { getUser } from "../_lib/data-service";

async function ProfileComponent() {
	
	const user = await auth();
	const [firstName, lastName] = user.user.name.split(" ");

	return (
		<div className='flex items-center justify-center gap-8 mt-10'>
			<Link href='/browse'>
				<div className='group flex-row w-44 mx-auto'>
					<div className='w-44 h-44 rounded-md flex items-center justify-center border-2 border-transparent group-hover:cursor-pointer group-hover:border-white overflow-hidden'>
						<img src='profile1.png' alt='profile picture' />
					</div>
					<div className='mt-4 text-gray-400 text-2xl text-center group-hover:text-white'>
						{firstName}
					</div>
				</div>
			</Link>
		</div>
	);
}

export default ProfileComponent;
