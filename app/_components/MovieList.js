import MovieSlider from "./MovieSlider";

export default function MovieList({ title, data }) {
	return (
		<div className='px-4 md:pl-16 space-y-2 h-[30vh]'>
			<p className='text-zinc-100 text-base md:text-xl lg:text-2xl font-medium tracking-wide'>
				{title}
			</p>
			<MovieSlider data={data} />
		</div>
	);
}
