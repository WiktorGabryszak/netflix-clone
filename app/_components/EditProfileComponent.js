"use client";

import { updateProfile } from "../_lib/actions";
import AddNewProfile from "./AddNewProfile";
import EditProfile from "./EditProfile";

function EditProfileComponent({ profiles }) {
	return (
		<div className='flex flex-col items-center justify-center gap-2 mt-10'>
			<div className='flex gap-4'>
				<form className='flex flex-col items-center gap-2' action={(formData) => updateProfile(formData)}>
					<div className='flex items-center gap-4'>
						{profiles.map((profile) => (
							<EditProfile key={profile.id} profile={profile} />
						))}
					</div>
					<button className='bg-zinc-500/25 text-zinc-50 py-3 px-6 font-medium text-sm rounded-md hover:bg-zinc-500/50 mt-4'>
						Save
					</button>
				</form>
				{profiles.length < 5 && (
					<div className='group flex flex-col gap-4 items-center'>
						<AddNewProfile />
					</div>
				)}
			</div>
		</div>
	);
}

export default EditProfileComponent;
