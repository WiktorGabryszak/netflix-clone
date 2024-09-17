import Link from "next/link";
import Footer from "../_components/Footer";
import Header from "../_components/Header";
import { auth } from "../_lib/auth";
import { getMoviesFromMyList } from "../_lib/data-service";

export const metadata = {
	title: "My List",
};

async function page() {
	const session = await auth();
	const movies = await getMoviesFromMyList(session.user.userId);
	return (
		<>
			<Header />
			<main className='px-14 py-7 flex flex-col gap-8'>
				<h2 className='text-zinc-100 text-4xl font-normal'>My List</h2>
				<div className='flex flex-wrap gap-2 overflow-x-scroll scrollbar-hide rounded-md w-[1920px]'>
					{movies.map((movie) => (
						<Link
							key={movie?.id}
							className='group bg-zinc-900 relative min-w-[290px] rounded-md'
							href={`/browse/${movie?.movie_id}`}>
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
				</div>
			</main>
			<Footer />
		</>
	);
}

export default page;
