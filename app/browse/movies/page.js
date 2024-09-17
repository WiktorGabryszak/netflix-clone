import MovieList from "@/app/_components/MovieList";
import { fetchMovies } from "@/app/_lib/data-service";

async function page() {
	const popularMovies = await fetchMovies("popular", 1);
	const topRatedMovies = await fetchMovies("top_rated", 3);
	const upcomingMovies = await fetchMovies("upcoming", 1);

	return (
		<div>
			<MovieList title='Popular Movies' data={popularMovies} />
			<MovieList title='Top-Rated Movies' data={topRatedMovies} />
			<MovieList title='Upcoming Movies' data={upcomingMovies} />
		</div>
	);
}

export default page;
