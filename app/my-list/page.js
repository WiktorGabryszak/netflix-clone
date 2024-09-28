import Footer from "../_components/Footer";
import Header from "../_components/Header";
import MovieItem from "../_components/MovieItem";
import { auth } from "../_lib/auth";
import { fetchMoviesGenres, fetchShowsGenres, getMoviesFromMyList, getShowsFromMyList } from "../_lib/data-service";

export const metadata = {
	title: "My List",
};

async function page() {
	const session = await auth();
	const moviesOnList = await getMoviesFromMyList(session.user.userId);
	const showsOnList = await getShowsFromMyList(session.user.userId);

	const movieGenres = await fetchMoviesGenres();
	const showGenres = await fetchShowsGenres();

	return (
		<div className='bg-zinc-900 h-full'>
			<Header />
			<main className='px-14 py-7 flex flex-col gap-8 h-full'>
				<h2 className='text-zinc-100 text-4xl font-normal'>My List</h2>
				<div className='flex flex-wrap gap-2 overflow-x-scroll scrollbar-hide rounded-md w-[1920px]'>
					{moviesOnList.map((movie) => (
						<MovieItem
							key={movie.id}
							data={movie}
							movieGenres={movieGenres}
							showGenres={showGenres}
							moviesOnList={moviesOnList}
							showsOnList={showsOnList}
						/>
					))}
					{showsOnList.map((show) => (
						<MovieItem
							key={show.id}
							data={show}
							movieGenres={movieGenres}
							showGenres={showGenres}
							moviesOnList={moviesOnList}
							showsOnList={showsOnList}
						/>
					))}
				</div>
			</main>
			<Footer />
		</div>
	);
}

export default page;
