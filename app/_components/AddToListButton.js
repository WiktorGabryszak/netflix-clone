"use client";

import { CheckIcon, PlusIcon } from "@heroicons/react/24/solid";
import {
	addMovieToList,
	addShowToList,
	deleteMovieFromList,
	deleteShowFromList,
} from "../_lib/actions";
import { usePathname } from "next/navigation";

function AddToListButton({
	data,
	isMovieAdded,
	matchedGenres,
	genres,
	isShowAdded,
}) {
	const pathname = usePathname();
	function handleAdd(e) {
		e.preventDefault();
		console.log("Add to List button clicked");
		if (data.title) {
			if (isMovieAdded) {
				if (pathname.includes("my-list")) {
					deleteMovieFromList(data.movie_id);
				} else {
					deleteMovieFromList(data.id);
				}
			} else {
				addMovieToList(data, matchedGenres, genres);
			}
		} else if (data.name) {
			if (isShowAdded) {
				if (pathname.includes("my-list")) {
					deleteShowFromList(data.show_id);
				} else {
					deleteShowFromList(data.id);
				}
			} else {
				addShowToList(data, matchedGenres, genres);
			}
		}
	}

	return (
		<button
			className='border-2 border-zinc-500 rounded-full w-12 h-12 flex items-center justify-center bg-zinc-900/50 text-zinc-100 hover:border-zinc-100 hover:bg-zinc-400/25'
			onClick={(e) => handleAdd(e)}>
			{data?.title ? (
				<>
					{isMovieAdded ? (
						<CheckIcon className='w-6 h-6 text-zinc-100' />
					) : (
						<PlusIcon className='w-6 h-6 text-zinc-100' />
					)}
				</>
			) : (
				<>
					{isShowAdded ? (
						<CheckIcon className='w-6 h-6 text-zinc-100' />
					) : (
						<PlusIcon className='w-6 h-6 text-zinc-100' />
					)}
				</>
			)}
		</button>
	);
}

export default AddToListButton;
