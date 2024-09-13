"use client";

import { CheckIcon, PlusIcon } from "@heroicons/react/24/solid";
import { addMovieToList, deleteMovieFromList } from "../_lib/actions";

function AddToListButton({ movieData, isMovieAdded }) {
	function handleAdd(e) {
		e.preventDefault();
		if (isMovieAdded) {
			deleteMovieFromList(movieData.movie_id);
		} else {
			addMovieToList(movieData);
		}
	}

	return (
		<form onSubmit={(e) => handleAdd(e)}>
			<button className='border-2 border-zinc-500 rounded-full w-12 h-12 flex items-center justify-center bg-zinc-900/50 text-zinc-100 hover:border-zinc-100 hover:bg-zinc-400/25'>
				{isMovieAdded ? (
					<CheckIcon className='w-6 h-6 text-zinc-100' />
				) : (
					<PlusIcon className='w-6 h-6 text-zinc-100' />
				)}
			</button>
		</form>
	);
}

export default AddToListButton;
