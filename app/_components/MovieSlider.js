"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import MovieItem from "./MovieItem";
import { useRef, useState } from "react";

export default function MovieSlider({
	data,
	movieGenres,
	showGenres,
	moviesOnList,
	showsOnList
}) {
	const [showArrows, setShowArrows] = useState(false);

	const sliderRef = useRef(null);

	const scrollLeft = () => {
		if (sliderRef.current) {
			sliderRef.current.scrollBy({
				left: -sliderRef.current.offsetWidth,
				behavior: "smooth",
			});
		}
	};
	const scrollRight = () => {
		sliderRef.current.scrollBy({
			left: sliderRef.current.offsetWidth,
			behavior: "smooth",
		});
	};

	return (
		<div
			className='flex space-x-2 overflow-x-scroll scrollbar-hide rounded-md w-[1920px]'
			onMouseEnter={() => setShowArrows(true)}
			onMouseLeave={() => setShowArrows(false)}
			ref={sliderRef}>
			{data?.results?.map((movie) => (
				<MovieItem
					key={movie.id}
					data={movie}
					movieGenres={movieGenres}
					showGenres={showGenres}
					moviesOnList={moviesOnList}
					showsOnList={showsOnList}
				/>
			))}
			{showArrows && (
				<>
					<button
						className='absolute md:left-14 flex rounded-l-md items-center justify-center h-[165px] w-[65px] bg-black bg-opacity-50 hover:bg-opacity-75 text-white z-10'
						onClick={scrollLeft}>
						<ChevronLeftIcon className='w-8 h-8' />
					</button>

					<button
						className='absolute md:right-0 flex items-center justify-center
             h-[165px] w-[65px] bg-black bg-opacity-50 hover:bg-opacity-75 text-white z-10
            '
						onClick={scrollRight}>
						<ChevronRightIcon className='w-8 h-8' />
					</button>
				</>
			)}
		</div>
	);
}
