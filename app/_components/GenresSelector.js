import { fetchMoviesGenres } from "../_lib/data-service";
import Dropdown from "./Dropdown";

async function GenresSelector() {
	const genres = await fetchMoviesGenres();
	return (
		<div className='flex gap-4 items-center'>
			<h1 className='text-4xl text-zinc-100 px-14'>TV Shows</h1>
			<Dropdown data={genres.genres} />
		</div>
	);
}

export default GenresSelector;
