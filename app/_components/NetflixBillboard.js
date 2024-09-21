"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { InformationCircleIcon } from "@heroicons/react/24/solid";
import PlayButton from "./PlayButton";

export default function NetflixBillboard({ data }) {
	const pathname = usePathname();
	if (pathname.includes("movies") || pathname.includes("tv-shows") || pathname.includes("original-audio")) return null;

	return (
		<>
			<Image
				src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
				className='w-full object-cover brightness-[60%] h-[50vh] -z-10'
				fill
				alt='Random Movie Poster'
			/>
			<div className='relative h-[80vh] z-50'>
				<div className='absolute top-[30%] md:top-[40%] ml-4 md:ml-16 '>
					<p className='text-white text-1xl md:text-5xl h-full w-[50%] lg:text-6xl font-bold drop-shadow-xl'>{data.title}</p>
					<p className='text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl'>
						{data.overview}
					</p>
					<div className='flex flex-row items-center mt-3 md:mt-4 gap-3'>
						<PlayButton data={data} />
						<Link
							href={`/browse/${data.id}`}
							className='bg-white text-white bg-opacity-30 rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-sm lg:text-lg font-medium flex flex-row items-center hover:bg-opacity-20 transition gap-2'>
							<InformationCircleIcon className='w-8 h-8' />
							More Info
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}
