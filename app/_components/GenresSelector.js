import { Suspense } from "react";
import { fetchMoviesGenres, fetchShowsGenres } from "../_lib/data-service";

import Dropdown from "./Dropdown";
import Spinner from "./Spinner";

export default async function GenresSelector() {
	const movieGenres = await fetchMoviesGenres();
	const showGenres = await fetchShowsGenres();

	return (
		<div className='flex gap-4 items-center px-14'>
			<Suspense fallback={<Spinner />}>
				<Dropdown movieGenres={movieGenres.genres} showGenres={showGenres.genres} />
			</Suspense>
		</div>
	);
}
