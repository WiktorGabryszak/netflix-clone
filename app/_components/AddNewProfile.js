import { PlusIcon } from "@heroicons/react/24/solid";
import { Modal } from "@mui/material";
import { useState } from "react";

function AddNewProfile() {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	return (
		<>
			<button onClick={handleOpen}>
				<div className='flex-row w-44'>
					<div className='w-44 h-44 rounded-md flex items-center justify-center border-2 border-transparent group-hover:cursor-pointer group-hover:border-white overflow-hidden bg-zinc-400/25'>
						<PlusIcon className='w-5 h-5 text-zinc-50' />
					</div>
				</div>
			</button>
			<div className=' text-gray-400 text-2xl text-center group-hover:text-white'>
				<p className='text-zinc-50 text-sm'>Add New Profile</p>
			</div>
			<Modal open={open} onClose={handleClose} aria-labelledby='Add new Profile' aria-describedby='modal-modal-description'>
				<form className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] shadow-md p-8 bg-zinc-900 text-zinc-50 rounded-md'>
					<section className='flex flex-col gap-6'>
						<div className='flex w-full items-center justify-center'>
							<div className='w-44 h-44 rounded-md flex items-center justify-center border-2 border-transparent group-hover:cursor-pointer group-hover:border-white overflow-hidden'>
								<img src='profile1.png' alt='profile picture' />
							</div>
						</div>
						<div className='flex items-center justify-center w-full'>
							<input
								type='text'
								// value={profileName}
								// onChange={(e) => setProfileName(e.target.value)}
								className='w-44 py-1 px-4 text-zinc-50 bg-zinc-900 text-center border border-zinc-500 rounded-md'
							/>
						</div>
						<button className='bg-zinc-500/25 text-zinc-50 py-3 px-6 font-medium text-sm rounded-md hover:bg-zinc-500/50'>
							Add Profile
						</button>
					</section>
				</form>
			</Modal>
		</>
	);
}

export default AddNewProfile;
