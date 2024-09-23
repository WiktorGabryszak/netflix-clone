"use client";
import Link from "next/link";
import EditProfile from "./EditProfile";
import AddNewProfile from "./AddNewProfile";

function EditProfileComponent({ profiles }) {
	return (
		<div className='flex flex-col items-center justify-center gap-2 mt-10'>
			<div className='flex items-start justify-center'>
				{profiles.map((profile) => (
					<EditProfile key={profile.id} profile={profile} />
				))}
				<div className='group flex flex-col gap-4 items-center'>
					<AddNewProfile />
				</div>
			</div>

			<Link
				href='/'
				className='bg-zinc-500/25 text-zinc-50 py-3 px-6 font-medium text-sm rounded-md hover:bg-zinc-500/50 mt-4'>
				Save
			</Link>
		</div>
	);
}

export default EditProfileComponent;
