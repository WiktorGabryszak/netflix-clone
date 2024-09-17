import { fetchMovies } from "../_lib/data-service";
import MovieList from "./MovieList";

async function ContentItems() {
	const popularMovies = await fetchMovies("popular", 2);
	const topRatedMovies = await fetchMovies("top_rated", 1);
	const upcomingMovies = await fetchMovies("upcoming", 3);

	return (
		<div>
			<MovieList title='Popular Movies' data={popularMovies} />
			<MovieList title='Top-Rated Movies' data={topRatedMovies} />
			<MovieList title='Upcoming Movies' data={upcomingMovies} />
		</div>
	);
}

export default ContentItems;
