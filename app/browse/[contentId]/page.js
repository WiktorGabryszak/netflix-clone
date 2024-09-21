import AddToListButton from "@/app/_components/AddToListButton";
import PlayButton from "@/app/_components/PlayButton";
import { auth } from "@/app/_lib/auth";
import { fetchMovieById, getMoviesFromMyList } from "@/app/_lib/data-service";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import Image from "next/image";
import Link from "next/link";

export default async function page({ params }) {
	const session = await auth();
	const movie = await fetchMovieById(params.contentId);
	const { genres } = movie;
	const moviesFromList = await getMoviesFromMyList(session.user.userId);
	const isMovieAdded = moviesFromList.some((m) => m.movie_id === movie.id);
	const movieData = {
		movie_id: movie.id,
		title: movie.title,
		overview: movie.overview,
		genres: movie.genres,
		backdrop_path: movie.backdrop_path,
	};

	return (
		<>
			<Dialog
				fullWidth={true}
				maxWidth='md'
				scroll='body'
				open={true}
				className='rounded-md z-[100000]'>
				<div className='flex flex-col h-screen bg-zinc-900 rounded-md'>
					<div className='h-[90vh]'>
						<DialogActions className='absolute z-10 top-0 right-0'>
							<Link href='/browse'>
								<XMarkIcon className='w-10 h-10 text-white bg-zinc-900 rounded-full p-2 z-[10000]' />
							</Link>
						</DialogActions>
						<Image
							src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
							width={1000}
							height={500}
							alt='Content poster'
							className='object-cover rounded-t-md relative h-[450px]'
						/>
						<div className='absolute w-full h-[450px] bg-gradient-to-b from-zinc-950/25 to-zinc-900/90 bg-opacity-30 top-0 left-0'></div>
						<DialogTitle className='absolute top-[20%] left-5 text-zinc-100 text-5xl font-bold tracking-wider uppercase w-[75%] flex flex-col gap-8'>
							{movie.title}
							<div className='flex gap-4'>
								<PlayButton data={movie} />
								<AddToListButton
									movieData={movieData}
									isMovieAdded={isMovieAdded}
								/>
							</div>
						</DialogTitle>
					</div>
					<div className='h-screen flex flex-col w-full px-12 bg-zinc-900 py-4 rounded-md text-zinc-100'>
						<div className='flex justify-between py-4'>
							<div className='flex flex-col w-[60%] gap-4'>
								<p className='text-2xl'>{movie.title}</p>
								<p>{movie.overview}</p>
							</div>
							<div className='flex items-start w-[30%] overflow-hidden'>
								<p className='text-sm text-zinc-500 font-normal flex gap-2'>
									Genres:
									<span className='flex gap-2 text-zinc-100 w-1/2 flex-wrap'>
										{genres?.map((genre) => (
											<span key={genre.id}>{genre.name},</span>
										))}
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
