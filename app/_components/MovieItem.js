import Link from "next/link";

function MovieItem({ data }) {
	return (
		<Link
			className='group bg-zinc-900 relative min-w-[290px] rounded-md'
			href={`/browse/${data.id}`}>
			<img
				src={`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`}
				alt='Movie Poster'
				className='cursor-pointer object-cover transition duration shadow-xl rounded-md group-hover:opacity-90  delay-300 w-full h-[165px] overflow-hidden'
			/>
			<div className='absolute w-full h-full bg-black/25 top-0 left-0'></div>
			<p className='absolute bottom-3 left-3 text-zinc-50 font-semibold text-lg w-1/2'>
				{data?.title ? data.title : data?.name}
			</p>
		</Link>
	);
}

export default MovieItem;
