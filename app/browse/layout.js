import { fetchMovieById } from "../_lib/data-service";
import NetflixBillboard from "../_components/NetflixBillboard";
import Footer from "../_components/Footer";
import Header from "../_components/Header";

async function layout({ children }) {
	let randomMovie;
	let data = [];

	do {
		randomMovie = Math.floor(Math.random() * 10000);
		data = await fetchMovieById(randomMovie);
	} while (!data.backdrop_path);

	return (
		<div>
			<Header />
			<main>
				<NetflixBillboard data={data} />
				{children}
			</main>
			<Footer />
		</div>
	);
}

export default layout;
