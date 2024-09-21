"use client";

export default function Error({ error, reset }) {
	return (
		<main className='grid items-center h-full w-full justify-center text-zinc-50'>
			<div className='flex flex-col gap-6 items-center'>
				<h1 className='text-3xl font-semibold text-center '>Something went wrong!</h1>
				<p className='text-lg truncate text-wrap w-1/2 text-center'>{error.message}</p>

				<button className='px-6 py-3 text-lg bg-accent-500 text-primary-800 bg-zinc-50 text-zinc-900 w-1/2' onClick={reset}>
					Try again
				</button>
			</div>
		</main>
	);
}
