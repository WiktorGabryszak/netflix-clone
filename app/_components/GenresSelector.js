import { Suspense } from "react";
import { fetchMoviesGenres, fetchShowsGenres } from "../_lib/data-service";
import Dropdown from "./Dropdown";
import Spinner from "./Spinner";

async function GenresSelector() {
	const movieGenres = await fetchMoviesGenres();
	const showGenres = await fetchShowsGenres();
	return (
		<div className='flex gap-4 items-center px-14'>
			{/* <h1 className='text-4xl text-zinc-100 px-14'>TV Shows</h1> */}
			<Suspense fallback={<Spinner />}>
				<Dropdown
					movieGenres={movieGenres.genres}
					showGenres={showGenres.genres}
				/>
			</Suspense>
		</div>
	);
}

export default GenresSelector;
