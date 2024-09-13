import { PlayIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

function PlayButton({ data }) {
	return (
		<Link
			href={`/browse/${data.id}`}
			className='bg-white text-zinc-900 rounded-md py-1 md:py-2 px-2 md:pr-8 md:pl-4 w-auto text-sm lg:text-lg font-medium flex flex-row items-center hover:bg-white/70 transition gap-2'>
			<PlayIcon className='w-8 h-8' />
			Play
		</Link>
	);
}

export default PlayButton;
