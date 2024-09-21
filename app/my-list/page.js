import Link from "next/link";
import Footer from "../_components/Footer";
import Header from "../_components/Header";
import { auth } from "../_lib/auth";
import { getMoviesFromMyList } from "../_lib/data-service";
import MovieItem from "../_components/MovieItem";

export const metadata = {
	title: "My List",
};

async function page() {
	const session = await auth();
	const movies = await getMoviesFromMyList(session.user.userId);
	
	return (
		<div className='bg-zinc-900 h-full'>
			<Header />
			<main className='px-14 py-7 flex flex-col gap-8'>
				<h2 className='text-zinc-100 text-4xl font-normal'>My List</h2>
				<div className='flex flex-wrap gap-2 overflow-x-scroll scrollbar-hide rounded-md w-[1920px]'>
					{movies.map((movie) => (
						<MovieItem key={movie.id} data={movie} moviesOnList={movies} />
					))}
				</div>
			</main>
			<Footer />
		</div>
	);
}

export default page;
