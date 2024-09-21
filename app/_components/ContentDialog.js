import { XMarkIcon } from "@heroicons/react/24/solid";
import { Dialog, DialogActions, DialogTitle } from "@mui/material";

import Image from "next/image";
import { usePathname } from "next/navigation";

import AddToListButton from "./AddToListButton";
import PlayButton from "./PlayButton";

export default function ContentDialog({ open, onClick, data, matchedGenres, genres, moviesOnList, showsOnList }) {
	const pathname = usePathname();

	let isMovieAdded;
	let isShowAdded;

	if (pathname.includes("my-list")) {
		isMovieAdded = moviesOnList?.some((m) => m.movie_id === data.movie_id);
		isShowAdded = showsOnList?.some((m) => m.show_id === data.show_id);
	} else {
		isMovieAdded = moviesOnList?.some((m) => m.movie_id === data.id);
		isShowAdded = showsOnList?.some((m) => m.show_id === data.id);
	}

	return (
		<>
			<Dialog fullWidth={true} maxWidth='md' scroll='body' open={open} className='rounded-md z-[100000]'>
				<div className='flex flex-col h-screen bg-zinc-900 rounded-md'>
					<div className='h-[90vh]'>
						<DialogActions className='absolute z-10 top-0 right-0'>
							<button onClick={onClick}>
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
								<AddToListButton
									data={data}
									isMovieAdded={isMovieAdded}
									isShowAdded={isShowAdded}
									matchedGenres={matchedGenres}
									genres={genres}
								/>
							</div>
						</DialogTitle>
					</div>
					<div className='h-screen flex flex-col w-full px-12 bg-zinc-900 py-4 rounded-md text-zinc-100'>
						<div className='flex justify-between py-4'>
							<div className='flex flex-col w-[60%] gap-4'>
								<p className='text-2xl'>{data?.title ? data.title : data?.name}</p>
								<p>{data.overview}</p>
							</div>
							<div className='flex items-start w-[30%] overflow-hidden'>
								<p className='text-sm text-zinc-500 font-normal flex gap-2'>
									Genres:
									<span className='flex gap-2 text-zinc-100 w-1/2 flex-wrap'>
										{(data.title || data.name) &&
											genres.length > 0 &&
											genres.map((genre, index) => <span key={index}>{genre.name || genre},</span>)}

										{data.genre_ids &&
											matchedGenres.length > 0 &&
											matchedGenres.map((genre) => <span key={genre.id}>{genre.name},</span>)}
									</span>
								</p>
							</div>
						</div>
					</div>
				</div>
			</Dialog>
		</>
	);
}
