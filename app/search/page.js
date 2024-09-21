import Link from "next/link";
import Footer from "../_components/Footer";
import Header from "../_components/Header";
import {
	fetchMovieByQuery,
	fetchMoviesGenres,
	fetchShowByQuery,
	fetchShowsGenres,
	getMoviesFromMyList,
	getShowsFromMyList,
} from "../_lib/data-service";
import MovieItem from "../_components/MovieItem";
import { auth } from "../_lib/auth";

export default async function page({ searchParams }) {
	const movieGenres = await fetchMoviesGenres();
	const showGenres = await fetchShowsGenres();

	const session = await auth();
	const moviesOnList = await getMoviesFromMyList(session?.user.userId);
	const showsOnList = await getShowsFromMyList(session?.user.userId);

	console.log(moviesOnList[0]);

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
						<MovieItem
							key={movie.id}
							data={movie}
							movieGenres={movieGenres.genres}
							moviesOnList={moviesOnList}
						/>
					))}
					{shows?.results.map((movie) => (
						<MovieItem
							key={movie.id}
							data={movie}
							showGenres={showGenres.genres}
							showsOnList={showsOnList}
						/>
					))}
				</div>
			</main>
			<Footer />
		</>
	);
}
