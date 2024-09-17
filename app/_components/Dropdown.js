"use client";

import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

function Dropdown({ movieGenres, showGenres }) {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedGenreId, setSelectedGenreId] = useState();
	const [selectedGenreName, setSelectedGenreName] = useState("");

	const pathname = usePathname();
	const searchParams = useSearchParams();
	const { replace } = useRouter();

	let nameOfPath;
	if (pathname.includes("tv-shows")) {
		nameOfPath = "tv-shows";
	} else {
		nameOfPath = "movies";
	}

	useEffect(() => {
		if (selectedGenreId) {
			const params = new URLSearchParams(searchParams);
			params.set("genre", selectedGenreId);
			replace(`/browse/${nameOfPath}?${params.toString()}`);
		}
		// Usuwanie parametru, gdy gatunek nie jest wybrany
		if (!selectedGenreId) {
			const params = new URLSearchParams(searchParams);
			params.delete("genre");
			replace(`/browse/${nameOfPath}?${params.toString()}`);
		}
	}, [selectedGenreId, replace, nameOfPath, searchParams]);
	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const isSelected = selectedGenreId && selectedGenreName ? true : false;

	return (
		<div className='relative inline-block text-left'>
			<div>
				<button
					onClick={toggleDropdown}
					className='inline-flex justify-between items-center w-44 px-2 py-1.5 bg-zinc-950 text-zinc-100 border border-gray-300  shadow-sm hover:bg-zinc-700'>
					{isSelected ? selectedGenreName : "Genres"}

					<ChevronDownIcon className='w-5 h-5' />
				</button>
			</div>

			{isOpen && (
				<div
					className='absolute z-10 w-96 bg-zinc-950 text-white shadow-lg ring-1 ring-black ring-opacity-5'
					onMouseLeave={() => setIsOpen(false)}>
					<div className='grid grid-cols-3 gap-1 p-2 border border-zinc-700'>
						{nameOfPath === "tv-shows" &&
							showGenres?.map((genre) => (
								<div key={genre.id}>
									<button
										className='text-left text-sm hover:underline'
										onClick={(e) => {
											setIsOpen(false);
											setSelectedGenreId(genre.id);
											setSelectedGenreName(genre.name);
										}}>
										{genre.name}
									</button>
								</div>
							))}
						{nameOfPath === "movies" &&
							movieGenres?.map((genre) => (
								<div key={genre.id}>
									<button
										className='text-left text-sm hover:underline'
										onClick={(e) => {
											setIsOpen(false);
											setSelectedGenreId(genre.id);
											setSelectedGenreName(genre.name);
										}}>
										{genre.name}
									</button>
								</div>
							))}
					</div>
				</div>
			)}
		</div>
	);
}

export default Dropdown;
