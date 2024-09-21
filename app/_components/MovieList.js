import { fetchMoviesGenres, fetchShowsGenres } from "../_lib/data-service";
import MovieSlider from "./MovieSlider";

export default async function MovieList({ title, data }) {
	const movieGenres = await fetchMoviesGenres();
	const showGenres = await fetchShowsGenres();
	return (
		<div className='px-4 md:pl-14 space-y-2 h-[30vh]'>
			<p className='text-zinc-100 text-base md:text-xl lg:text-2xl font-medium tracking-wide'>
				{title}
			</p>
			<MovieSlider
				data={data}
				movieGenres={movieGenres.genres}
				showGenres={showGenres.genres}
			/>
		</div>
	);
}
