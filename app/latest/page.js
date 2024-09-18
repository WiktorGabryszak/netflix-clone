import Footer from "../_components/Footer";
import Header from "../_components/Header";
import MovieList from "../_components/MovieList";
import { fetchMovies, fetchShows } from "../_lib/data-service";

async function page() {
	const popularMovies = await fetchMovies("popular", 1);
	const upcomingMovies = await fetchMovies("upcoming", 1);
	const popularShows = await fetchShows("popular", 1);
	const onTheAirShows = await fetchShows("on_the_air", 1);

	return (
		<main className="bg-zinc-900">
			<Header />
			<MovieList title='Upcoming Movies' data={upcomingMovies} />
			<MovieList title='Popular Movies' data={popularMovies} />
			<MovieList title='Popular Shows' data={popularShows} />
			<MovieList title='On-The-Air Shows' data={onTheAirShows} />
			<Footer />
		</main>
	);
}

export default page;
