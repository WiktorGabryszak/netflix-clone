import MovieList from "@/app/_components/MovieList";
import { fetchMovies, fetchShows } from "@/app/_lib/data-service";

async function page() {
	const popularShows = await fetchShows("popular", 1);
	const topRatedShows = await fetchShows("top_rated", 1);
	const onTheAirShows = await fetchShows("on_the_air", 1);
	return (
		<div>
			<MovieList title='Popular Shows' data={popularShows} />
			<MovieList title='Top-Rated Shows' data={topRatedShows} />
			<MovieList title='On-The-Air Shows' data={onTheAirShows} />
		</div>
	);
}

export default page;
