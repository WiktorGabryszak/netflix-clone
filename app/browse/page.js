import MovieList from "../_components/MovieList";
import { fetchMovies, fetchShows } from "../_lib/data-service";

export default async function page({ children }) {
	const popularMovies = await fetchMovies("popular", 1);
	const topRatedMovies = await fetchMovies("top_rated", 3);
	const upcomingMovies = await fetchMovies("upcoming", 1);
	const popularShows = await fetchShows("popular", 1);
	const topRatedShows = await fetchShows("top_rated", 1);
	const onTheAirShows = await fetchShows("on_the_air", 1);
	return (
		<div>
			<MovieList title='Popular Movies' data={popularMovies} />
			<MovieList title='Popular Shows' data={popularShows} />
			<MovieList title='Top-Rated Shows' data={topRatedShows} />
			<MovieList title='Top-Rated Movies' data={topRatedMovies} />
			<MovieList title='On-The-Air Shows' data={onTheAirShows} />
			<MovieList title='Upcoming Movies' data={upcomingMovies} />
		</div>
	);
}
