import { useState } from "react";
import { updateProfile } from "../_lib/actions";
import RemoveProfile from "./RemoveProfile";

export default function EditProfile({ profile }) {
	const [profileName, setProfileName] = useState(profile.profile_name);
	const [error, setError] = useState("");
	const [isChanged, setIsChanged] = useState(false);

	function handleChangeName(formData) {
		if (profileName) {
			updateProfile(formData);
			setIsChanged(false);
		} else {
			setError("Field can't be blank.");
		}
	}

	return (
		<>
			<div className='group flex flex-col items-center w-44 mx-auto gap-4'>
				<div className='w-44 h-44 rounded-md flex items-center justify-center border-2 border-transparent group-hover:cursor-pointer group-hover:border-white overflow-hidden'>
					<img src={profile.avatar_url ? profile.avatar_url : "profile1.png"} alt='profile picture' />
				</div>

				<form
					className='text-gray-400 text-2xl text-center group-hover:text-white flex flex-col items-center gap-2'
					action={handleChangeName}>
					<div>
						<input name='id' value={profile.id} hidden />
						<input
							name='profile_name'
							type='text'
							value={profileName}
							onChange={(e) => {
								setProfileName(e.target.value);
								setIsChanged(true);
								setError("");
							}}
							className='w-3/4 px-2 py-1 text-zinc-50 bg-zinc-900 text-center group-hover:'
						/>
					</div>
					<div className={` ${error ? "w-full" : "w-2/4"}`}>
						{isChanged ? (
							<button
								className={`w-full bg-zinc-500/25 text-zinc-50 px-2 py-2 rounded-md flex items-center justify-center gap-2 ${
									error ? "bg-red-600/50" : "bg-zinc-500/25"
								}`}>
								<span className='font-medium text-sm'>{!error ? "Save" : error}</span>
							</button>
						) : null}
					</div>
				</form>
				{!profile.is_default ? <RemoveProfile profileId={profile.id} /> : null}
			</div>
		</>
	);
}
