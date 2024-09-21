import Link from "next/link";
import Header from "./_components/Header";

export default async function notFound() {
	return (
		<>
			<div className='bg-neutral-950 z-[1000]'>
				<Header color='bg-neutral-950' />
			</div>
			<div className='grid items-center justify-center h-[80vh] w-full text-zinc-50'>
				<div className='flex flex-col gap-10 items-center'>
					<h1 className='text-7xl'>Lost your way?</h1>
					<p className='text-3xl truncate font-light w-3/4 text-center text-wrap'>
						Sorry, we can&apos;t find that page. You&apos;ll find lots to explore on the home page.
					</p>
					<Link href='/browse' className='bg-zinc-50 text-zinc-900 px-6 py-3 w-1/3 text-xl text-center rounded-md'>
						Netflix Home
					</Link>
				</div>
			</div>
		</>
	);
}
