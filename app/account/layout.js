import Link from "next/link";
import AccountHeader from "../_components/AccountHeader";
import AccountNavBar from "../_components/AccountNavBar";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import SignOutButton from "../_components/SignOutButton";

export default function Layout({ children }) {
	return (
		<>
			<AccountHeader />
			<div className='flex flex-col w-[1200px] mx-auto gap-10 mt-10'>
				<div className='grid grid-cols-[16rem_1fr] h-full gap-12'>
					<div className='flex flex-col gap-10'>
						<Link
							href='/browse'
							className='flex gap-3 items-center py-3 px-2 hover:bg-zinc-400/15 rounded-md hover:text-zinc-50'>
							<ArrowLeftIcon className='w-5 h-5 text-zinc-50' />
							<span className='text-sm text-zinc-50'>Back to Netflix</span>
						</Link>
						<AccountNavBar />
						<div className='mt-auto'>
							<SignOutButton />
						</div>
					</div>
					{children}
				</div>
			</div>
		</>
	);
}
