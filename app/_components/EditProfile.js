import { useState } from "react";

function EditProfile({ profile }) {
	const [profileName, setProfileName] = useState(profile.profile_name);

	return (
		<>
			<div className='group flex flex-col w-44 mx-auto gap-2'>
				<div className='w-44 h-44 rounded-md flex items-center justify-center border-2 border-transparent group-hover:cursor-pointer group-hover:border-white overflow-hidden'>
					<img src={profile.avatar_url ? profile.avatar_url : "profile1.png"} alt='profile picture' />
				</div>

				<div className='text-gray-400 text-2xl text-center group-hover:text-white'>
					<input name='id' value={profile.id} hidden />
					<input
						name='profile_name'
						type='text'
						value={profileName}
						onChange={(e) => setProfileName(e.target.value)}
						className='w-1/2 px-2 py-1 text-zinc-50 bg-zinc-900 text-center'
					/>
				</div>
			</div>
		</>
	);
}

export default EditProfile;
