"use client";

import * as React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import PlayButton from "./PlayButton";

function MovieItem({ data, moviesOnList, movieGenres, showGenres }) {
	const [open, setOpen] = React.useState(false);

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

	if (data.title && pathname !== "/my-list") {
		matchedGenres = movieGenres.filter((genre) =>
			data.genre_ids.includes(genre.id)
		);
	} else if (pathname !== "/my-list") {
		matchedGenres = showGenres.filter((genre) =>
			data.genre_ids.includes(genre.id)
		);
	}

	moviesOnList;

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
				<React.Fragment>
					<Dialog
						fullWidth={true}
						maxWidth='md'
						scroll='body'
						open={open}
						className='rounded-md z-[100000]'>
						<div className='flex flex-col h-screen bg-zinc-900 rounded-md'>
							<div className='h-[90vh]'>
								<DialogActions className='absolute z-10 top-0 right-0'>
									<button onClick={handleClick}>
										<XMarkIcon className='w-10 h-10 text-white bg-zinc-900 rounded-full p-2 z-[10000]' />
									</button>
								</DialogActions>
								<Image
									src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
									width={1000}
									height={500}
									alt='Content poster'
									className='object-cover rounded-t-md relative h-[450px]'
								/>
								<div className='absolute w-full h-[450px] bg-gradient-to-b from-zinc-950/25 to-zinc-900/90 bg-opacity-30 top-0 left-0'></div>
								<DialogTitle className='absolute top-[30%] left-5 text-zinc-100 text-5xl font-bold tracking-wider uppercase w-[75%] flex flex-col gap-8'>
									{data?.title ? data.title : data?.name}
									<div className='flex gap-4'>
										<PlayButton data={data} />
										{/* <AddToListButton
											movieData={data}
											isMovieAdded={isMovieAdded}
										/> */}
									</div>
								</DialogTitle>
							</div>
							<div className='h-screen flex flex-col w-full px-12 bg-zinc-900 py-4 rounded-md text-zinc-100'>
								<div className='flex justify-between py-4'>
									<div className='flex flex-col w-[60%] gap-4'>
										<p className='text-2xl'>
											{data?.title ? data.title : data?.name}
										</p>
										<p>{data.overview}</p>
									</div>
									<div className='flex items-start w-[30%] overflow-hidden'>
										<p className='text-sm text-zinc-500 font-normal flex gap-2'>
											Genres:
											<span className='flex gap-2 text-zinc-100 w-1/2 flex-wrap'>
												{data.genres &&
													genres?.map((genre, index) => (
														<span key={index}>{genre},</span>
													))}
												{data.genre_ids &&
													matchedGenres?.map((genre) => (
														<span key={genre.id}>{genre.name},</span>
													))}
											</span>
										</p>
									</div>
								</div>
							</div>
						</div>
					</Dialog>
				</React.Fragment>
			)}
		</>
	);
}

export default MovieItem;
