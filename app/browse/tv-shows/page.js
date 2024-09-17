import MovieList from "@/app/_components/MovieList";
import { fetchShows, fetchShowsByGenre } from "@/app/_lib/data-service";

async function page({ searchParams }) {
	const showsOne = await fetchShowsByGenre(searchParams.genre, 1);
	const showsTwo = await fetchShowsByGenre(searchParams.genre, 2);
	const showsThree = await fetchShowsByGenre(searchParams.genre, 3);

	const topRatedShows1 = await fetchShows("top_rated", 1);
	const topRatedShows2 = await fetchShows("top_rated", 2);
	const onTheAirShows = await fetchShows("on_the_air", 1);
	return (
		<div>
			{searchParams.genre ? (
				<>
					<MovieList title={`Shows Page 1`} data={showsOne} />
					<MovieList title={`Shows Page 2`} data={showsTwo} />
					<MovieList title={`Shows Page 3`} data={showsThree} />
				</>
			) : (
				<>
					<MovieList title={`Top-Rated Shows 1`} data={topRatedShows1} />
					<MovieList title='Top-Rated Shows 2' data={topRatedShows2} />
					<MovieList title='On-The-Air Shows' data={onTheAirShows} />
				</>
			)}
		</div>
	);
}

export default page;
