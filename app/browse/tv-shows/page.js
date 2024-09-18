import MovieList from "@/app/_components/MovieList";
import {
	fetchShows,
	fetchShowsByGenre,
	fetchShowsGenres,
} from "@/app/_lib/data-service";

async function page({ searchParams }) {
	const showGenres = await fetchShowsGenres();

	const selectedGenre = showGenres?.genres.find(
		(genre) => genre.id === Number(searchParams.genre)
	);

	const showsOne = await fetchShowsByGenre(
		searchParams.genre,
		1,
		"popularity.desc"
	);
	const showsTwo = await fetchShowsByGenre(
		searchParams.genre,
		1,
		"vote_average.desc"
	);
	const showsThree = await fetchShowsByGenre(
		searchParams.genre,
		1,
		"revenue.desc"
	);

	const popularShows = await fetchShows("popular", 1);
	const topRatedShows = await fetchShows("top_rated", 2);
	const onTheAirShows = await fetchShows("on_the_air", 1);
	return (
		<div className="mt-10">
			{searchParams.genre ? (
				<>
					<MovieList
						title={`${selectedGenre.name} - Popular`}
						data={showsOne}
					/>
					<MovieList
						title={`${selectedGenre.name} - Top Rated by Users`}
						data={showsTwo}
					/>
					<MovieList
						title={`${selectedGenre.name} - Most profitable`}
						data={showsThree}
					/>
				</>
			) : (
				<>
					<MovieList title='Popular Shows' data={popularShows} />
					<MovieList title='Top-Rated Shows' data={topRatedShows} />
					<MovieList title='On-The-Air Shows' data={onTheAirShows} />
				</>
			)}
		</div>
	);
}

export default page;
