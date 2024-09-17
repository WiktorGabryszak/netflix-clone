import Link from "next/link";
import Footer from "../_components/Footer";
import Header from "../_components/Header";
import { fetchMovieByQuery, fetchShowByQuery } from "../_lib/data-service";

export default async function page({ searchParams }) {
	const movies = await fetchMovieByQuery(searchParams.query);
	const shows = await fetchShowByQuery(searchParams.query);
	return (
		<>
			<Header />
			<main className='px-14 py-7 flex flex-col gap-8'>
				<h2 className='text-zinc-100 text-4xl font-normal'>
					Search &quot;{searchParams.query}&quot;
				</h2>
				<div className='flex flex-wrap gap-x-2 gap-y-12 overflow-x-scroll scrollbar-hide rounded-md w-[1920px]'>
					{movies?.results.map((movie) => (
						<Link
							key={movie?.id}
							className='group bg-zinc-900 relative min-w-[290px] rounded-md'
							href={`/browse/${movie?.id}`}>
							<img
								src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
								alt='Movie Poster'
								className='cursor-pointer object-cover transition duration shadow-xl rounded-md group-hover:opacity-90  delay-300 w-full h-[165px] overflow-hidden'
							/>
							<div className='absolute w-full h-full bg-black/25 top-0 left-0'></div>
							<p className='absolute bottom-3 left-3 text-zinc-50 font-semibold text-lg w-1/2'>
								{movie?.title}
							</p>
						</Link>
					))}
					{shows?.results.map((movie) => (
						<Link
							key={movie?.id}
							className='group bg-zinc-900 relative min-w-[290px] rounded-md'
							href={`/browse/${movie?.id}`}>
							<img
								src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
								alt='Movie Poster'
								className='cursor-pointer object-cover transition duration shadow-xl rounded-md group-hover:opacity-90  delay-300 w-full h-[165px] overflow-hidden'
							/>
							<div className='absolute w-full h-full bg-black/25 top-0 left-0'></div>
							<p className='absolute bottom-3 left-3 text-zinc-50 font-semibold text-lg w-1/2'>
								{movie?.name}
							</p>
						</Link>
					))}
				</div>
			</main>
			<Footer />
		</>
	);
}
