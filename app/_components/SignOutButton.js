import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";
import { signOutAction } from "../_lib/actions";

export default function SignOutButton() {
	return (
		<form action={signOutAction}>
			<button
				className={`py-3 px-2 w-full hover:bg-zinc-400/15 rounded-md hover:text-zinc-50 transition-colors flex items-center gap-4 font-medium text-zinc-200`}>
				<ArrowRightOnRectangleIcon className='w-5 h-5' />
				<span>Sign out</span>
			</button>
		</form>
	);
}
