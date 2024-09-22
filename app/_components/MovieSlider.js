"use client";

import { useRef, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import MovieItem from "./MovieItem";

export default function MovieSlider({ data, movieGenres, showGenres, moviesOnList, showsOnList }) {
	const [showArrows, setShowArrows] = useState(false);
	const sliderRef = useRef(null);

	function handleScrollLeft() {
		if (sliderRef.current) {
			sliderRef.current.scrollBy({
				left: -1850,
				behavior: "smooth",
			});
		}
	}
	function handleScrollRight() {
		sliderRef.current.scrollBy({
			left: 1800,
			behavior: "smooth",
		});
	}

	return (
		<div
			className='flex space-x-2 overflow-x-scroll scrollbar-hide rounded-md w-full '
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
						className='absolute md:left-12 flex rounded-l-md items-center justify-center h-[165px] w-[60px] bg-black bg-opacity-50 hover:bg-opacity-75 text-white z-10'
						onClick={handleScrollLeft}>
						<ChevronLeftIcon className='w-8 h-8' />
					</button>
					<button
						className='absolute md:right-0 flex items-center justify-center h-[165px] w-[60px] bg-black bg-opacity-50 hover:bg-opacity-75 text-white z-10'
						onClick={handleScrollRight}>
						<ChevronRightIcon className='w-8 h-8' />
					</button>
				</>
			)}
		</div>
	);
}
