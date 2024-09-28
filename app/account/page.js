import { ChevronRightIcon, LockClosedIcon } from "@heroicons/react/24/solid";
import { auth } from "../_lib/auth";
import { getUserByUserId } from "../_lib/data-service";

export const metadata = {
	title: "Account Settings",
};

export default async function page() {
	const session = await auth();
	const user = await getUserByUserId(session.user.userId);

	return (
		<>
			<section className='flex flex-col gap-2'>
				<div>
					<h2 className='text-zinc-50 font-semibold text-5xl'>Account</h2>
					<p className='text-zinc-50 font-medium text-base'>Account details</p>
				</div>
				<div className='border border-zinc-500 rounded-md px-2 py-2'>
					<div className='flex items-center justify-between gap-4 py-4 px-6 text-zinc-50  rounded-md w-full'>
						<p className='flex gap-2 items-center'>
							Hello <span className='text-xl font-semibold'>{user[0].fullName}</span>
						</p>
					</div>
				</div>
			</section>
		</>
	);
}
