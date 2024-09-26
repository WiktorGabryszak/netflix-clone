"use client";
import { useState } from "react";
import { setActiveProfile } from "../_lib/actions";

function Profile({ profiles }) {
	const [clicked, setClicked] = useState(null);

	function handleClick() {
		setActiveProfile(clicked);
	}

	return (
		<form action={handleClick}>
			<div className='flex items-center gap-4'>
				{profiles.map((profile) => (
					<button key={profile.id} onClick={() => setClicked(profile.id)}>
						<div className='group flex-row w-44 mx-auto'>
							<div className='w-44 h-44 rounded-md flex items-center justify-center border-2 border-transparent group-hover:cursor-pointer group-hover:border-white overflow-hidden'>
								<img src={profile.avatar_url ? profile.avatar_url : "profile1.png"} alt='profile picture' />
							</div>
							<div className='mt-4 text-gray-400 text-2xl text-center group-hover:text-white'>{profile.profile_name}</div>
						</div>
						<input name='id' value={profile.id} hidden />
					</button>
				))}
			</div>
		</form>
	);
}

export default Profile;
