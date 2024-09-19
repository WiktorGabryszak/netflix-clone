import SecurityContainer from "@/app/_components/SecurityContainer";

function page() {
	return (
		<>
			<section className='flex flex-col gap-4'>
				<div>
					<h2 className='text-zinc-50 font-semibold text-5xl'>Account</h2>
					<p className='text-zinc-50 font-medium text-base'>Account details</p>
				</div>
				<SecurityContainer />
			</section>
		</>
	);
}

export default page;
