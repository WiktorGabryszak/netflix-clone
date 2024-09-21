import MovieList from "@/app/_components/MovieList";
import { fetchMovies, fetchMoviesByGenre, fetchMoviesGenres } from "@/app/_lib/data-service";

export const metadata = {
	title: 'Movies'
}

async function page({ searchParams }) {
	const showGenres = await fetchMoviesGenres();
	const selectedGenre = showGenres?.genres.find((genre) => genre.id === Number(searchParams.genre));

	const moviesOne = await fetchMoviesByGenre(searchParams.genre, 1, "popularity.desc");
	const moviesTwo = await fetchMoviesByGenre(searchParams.genre, 1, "vote_average.desc");
	const moviesThree = await fetchMoviesByGenre(searchParams.genre, 1, "revenue.desc");

	const popularMovies = await fetchMovies("popular", 1);
	const topRatedMovies = await fetchMovies("top_rated", 1);
	const upcomingMovies = await fetchMovies("upcoming", 1);
	return (
		<div className='mt-10 '>
			{searchParams.genre ? (
				<>
					<MovieList title={`${selectedGenre.name} - Popular`} data={moviesOne} />
					<MovieList title={`${selectedGenre.name} - Top Rated By Users`} data={moviesTwo} />
					<MovieList title={`${selectedGenre.name} - Most profitable`} data={moviesThree} />
				</>
			) : (
				<>
					<MovieList title='Popular Movies' data={popularMovies} />
					<MovieList title='Top-Rated Movies' data={topRatedMovies} />
					<MovieList title='Upcoming Movies' data={upcomingMovies} />
				</>
			)}
		</div>
	);
}

export default page;
