import MovieList from "../_components/MovieList";
import NetflixBillboard from "../_components/NetflixBillboard";
import { fetchMovies, fetchShows } from "../_lib/data-service";

async function page() {
	const popularMovies = await fetchMovies("popular");
	const topRatedMovies = await fetchMovies("top_rated");
	const upcomingMovies = await fetchMovies("upcoming");
	const popularShows = await fetchShows("popular");
	const topRatedShows = await fetchShows("top_rated");
	const onTheAirShows = await fetchShows("on_the_air");
	return null
		// <div>
		// 	<NetflixBillboard />

		// 	<MovieList title='Popular Movies' data={popularMovies} />
		// 	<MovieList title='Popular Shows' data={popularShows} />
		// 	<MovieList title='Top-Rated Shows' data={topRatedShows} />
		// 	<MovieList title='Top-Rated Movies' data={topRatedMovies} />
		// 	<MovieList title='On-The-Air Shows' data={onTheAirShows} />
		// 	<MovieList title='Upcoming Movies' data={upcomingMovies} />
		// </div>
}

export default page;
