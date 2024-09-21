import { ChevronRightIcon, DevicePhoneMobileIcon, EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function SecurityContainer() {
	return (
		<div className='border border-zinc-500 rounded-md px-2 py-2'>
			<Link
				href='/account/security/password'
				className='flex items-center justify-between gap-4 py-4 px-6 text-zinc-50 hover:bg-zinc-500/25 rounded-md'>
				<div className='flex gap-4 items-center'>
					<LockClosedIcon className='w-6 h-6 ' />
					<span>Password</span>
				</div>
				<ChevronRightIcon className='w-5 h-5' />
			</Link>
			<hr className='w-[95%] border-zinc-500 mx-auto my-2'></hr>
			<Link
				href='/account/security/email'
				className='flex items-center justify-between gap-4 py-4 px-6 text-zinc-50 hover:bg-zinc-500/25 rounded-md'>
				<div className='flex gap-4 items-center'>
					<EnvelopeIcon className='w-6 h-6' />
					<span>Email</span>
				</div>
				<ChevronRightIcon className='w-5 h-5' />
			</Link>
			<hr className='w-[95%] border-zinc-500 mx-auto my-2'></hr>
			<Link
				href='/account/security/phone'
				className='flex items-center justify-between gap-4 py-4 px-6 text-zinc-50 hover:bg-zinc-500/25 rounded-md'>
				<div className='flex gap-4 items-center'>
					<DevicePhoneMobileIcon className='w-6 h-6' />
					<span>Mobile Phone</span>
				</div>
				<ChevronRightIcon className='w-5 h-5' />
			</Link>
		</div>
	);
}
