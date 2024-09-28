"use client";
import { ChevronRightIcon, DevicePhoneMobileIcon, EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function SecurityContainer({ user }) {
	const [isOpenPassword, setIsOpenPassword] = useState(false);
	const [isOpenEmail, setIsOpenEmail] = useState(false);
	const [isOpenPhone, setIsOpenPhone] = useState(false);

	return (
		<div className='border border-zinc-500 rounded-md px-2 py-2'>
			<button
				onClick={() => setIsOpenPassword((open) => !open)}
				className='flex items-center justify-between gap-4 py-4 px-6 text-zinc-50 hover:bg-zinc-500/25 rounded-md w-full'>
				<div className='flex gap-4 items-center'>
					<LockClosedIcon className='w-6 h-6 ' />
					<span>Password</span>
				</div>
				<ChevronRightIcon className={`w-5 h-5 ${isOpenPassword && "rotate-90 transition-transform duration-200"}`} />
			</button>
			{isOpenPassword && (
				<div className='flex items-center justify-center py-8 px-5 gap-2'>
					<input
						type='text'
						id='password'
						value={user[0].password}
						disabled={true}
						placeholder={!user[0].password && "You logged via service"}
						className='bg-zinc-900 w-[90%] px-6 py-3 border border-zinc-500 rounded-md text-zinc-50 text-base font-normal placeholder:text-zinc-500 placeholder:font-normal'
					/>
				</div>
			)}
			<hr className='w-[95%] border-zinc-500 mx-auto my-2'></hr>
			<button
				className='flex items-center justify-between gap-4 py-4 px-6 text-zinc-50 hover:bg-zinc-500/25 rounded-md w-full'
				onClick={() => setIsOpenEmail((open) => !open)}>
				<div className='flex gap-4 items-center'>
					<EnvelopeIcon className='w-6 h-6' />
					<span>Email</span>
				</div>
				<ChevronRightIcon className={`w-5 h-5 ${isOpenEmail && "rotate-90 transition-transform duration-200"}`} />
			</button>
			{isOpenEmail && (
				<div className='flex items-center justify-center py-8 px-5 gap-2'>
					<input
						type='text'
						id='email'
						value={user[0].email}
						disabled={true}
						className='bg-zinc-900 w-[90%] px-6 py-3 border border-zinc-500 rounded-md text-zinc-50 text-base font-normal'
					/>
				</div>
			)}
			<hr className='w-[95%] border-zinc-500 mx-auto my-2'></hr>
			<button
				className='flex items-center justify-between gap-4 py-4 px-6 text-zinc-50 hover:bg-zinc-500/25 rounded-md w-full'
				onClick={() => setIsOpenPhone((open) => !open)}>
				<div className='flex gap-4 items-center'>
					<DevicePhoneMobileIcon className='w-6 h-6' />
					<span>Mobile Phone</span>
				</div>
				<ChevronRightIcon className={`w-5 h-5 ${isOpenPhone && "rotate-90 transition-transform duration-200"}`} />
			</button>
			{isOpenPhone && (
				<div className='flex items-center justify-center py-8 px-5 gap-2'>
					<input
						type='text'
						id='phone'
						disabled={true}
						placeholder='The feature will be available later on.'
						className='bg-zinc-900 w-[90%] px-6 py-3 border border-zinc-500 rounded-md text-zinc-50 text-base font-normal placeholder:text-red-500 '
					/>
				</div>
			)}
		</div>
	);
}
