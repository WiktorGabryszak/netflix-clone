"use client";

import { ChevronDownIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

const Dropdown = ({ data }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedGenre, setSelectedGenre] = useState(null);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className='relative inline-block text-left'>
			<div>
				<button
					onClick={toggleDropdown}
					className='inline-flex justify-between items-center w-36 px-2 py-1.5 bg-zinc-950 text-zinc-100 border border-gray-300  shadow-sm hover:bg-zinc-700'>
					{selectedGenre ? selectedGenre.name : "Genres"}
					<ChevronDownIcon className='w-5 h-5' />
				</button>
			</div>

			{isOpen && (
				<form>
					<div
						className='absolute z-10 w-96 bg-zinc-950 text-white shadow-lg ring-1 ring-black ring-opacity-5'
						onMouseLeave={() => setIsOpen(false)}>
						<div className='grid grid-cols-3 gap-1 p-2 border border-zinc-700'>
							{data?.map((genre) => (
								<div key={genre.id}>
									<button
										className='text-left text-sm hover:underline'
										onClick={() => {
											setIsOpen(false);
											setSelectedGenre(genre);
										}}>
										{genre.name}
									</button>
								</div>
							))}
						</div>
					</div>
				</form>
			)}
		</div>
	);
};

export default Dropdown;
