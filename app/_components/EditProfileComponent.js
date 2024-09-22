"use client";
import { PlusIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useState } from "react";

function EditProfileComponent({ name }) {
	const [profileName, setProfileName] = useState(name);

	return (
		<div className='flex flex-col items-center justify-center gap-2 mt-10'>
			<div className='flex items-start justify-center'>
				<div className='group flex flex-col items-center gap-4 w-1/2'>
					<button>
						<div className='flex-row w-44'>
							<div className='w-44 h-44 rounded-md flex items-center justify-center border-2 border-transparent group-hover:cursor-pointer group-hover:border-white overflow-hidden'>
								<img src='profile1.png' alt='profile picture' />
							</div>
						</div>
					</button>
					<div className=' text-gray-400 text-2xl text-center group-hover:text-white'>
						<input
							type='text'
							value={profileName}
							onChange={(e) => setProfileName(e.target.value)}
							className='w-1/2 px-2 py-1 text-zinc-50 bg-zinc-900 text-center'
						/>
					</div>
				</div>
				<div className='group flex flex-col gap-4 items-center'>
					<button>
						<div className='flex-row w-44'>
							<div className='w-44 h-44 rounded-md flex items-center justify-center border-2 border-transparent group-hover:cursor-pointer group-hover:border-white overflow-hidden bg-zinc-400/25'>
								<PlusIcon className='w-5 h-5 text-zinc-50' />
							</div>
						</div>
					</button>
					<div className=' text-gray-400 text-2xl text-center group-hover:text-white'>
						<p className='text-zinc-50 text-sm'>Add New Profile</p>
					</div>
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
