"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import ContentDialog from "./ContentDialog";
import { useState } from "react";

function MovieItem({
	data,
	moviesOnList,
	showsOnList,
	movieGenres,
	showGenres,
}) {
	const [open, setOpen] = useState(false);

	const pathname = usePathname();
	const searchParams = useSearchParams();
	const { replace } = useRouter();

	function handleClick() {
		setOpen((open) => !open);

		const params = new URLSearchParams(searchParams);
		if (data.id) {
			params.set("id", data.id);
		} else {
			params.delete("id");
		}

		if (open === true) {
			params.delete("id");
		}
		replace(`${pathname}?${params.toString()}`, { scroll: false });
	}
	let genres = [];

	if (data.genres) {
		try {
			genres = JSON.parse(data.genres);
		} catch (error) {
			console.error("Error parsing genres:", error);
		}
	}

	let matchedGenres = [];

	if (data.genre_ids && data.title) {
		matchedGenres = movieGenres?.filter((genre) =>
			data.genre_ids.includes(genre.id)
		);
	} else if (data.genre_ids && data.name) {
		matchedGenres = showGenres?.filter((genre) =>
			data.genre_ids.includes(genre.id)
		);
	}

	return (
		<>
			<button
				className='group bg-zinc-900 relative min-w-[290px] rounded-md'
				onClick={handleClick}>
				<img
					src={`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`}
					alt='Movie Poster'
					className='cursor-pointer object-cover transition duration shadow-xl rounded-md group-hover:opacity-90  delay-300 w-full h-[165px] overflow-hidden'
				/>
				<div className='absolute w-full h-full bg-black/25 top-0 left-0'></div>
				<p className='absolute bottom-3 left-3 text-zinc-50 font-semibold text-lg w-1/2'>
					{data?.title ? data.title : data?.name}
				</p>
			</button>
			{open && (
				<ContentDialog
					onClick={handleClick}
					data={data}
					matchedGenres={matchedGenres}
					open={open}
					genres={genres}
					moviesOnList={moviesOnList}
					showsOnList={showsOnList}
				/>
			)}
		</>
	);
}

export default MovieItem;
