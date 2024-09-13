import ProfileComponent from "./_components/ProfileComponent";

function page() {
	return (
		<main className='h-full grid items-center'>
			<div className='flex item-center justify-center'>
				<div className='flex flex-col'>
					<div className='text-3xl md:text-5xl text-white text-center'>
						Who is watching?
					</div>
					<ProfileComponent />
				</div>
			</div>
		</main>
	);
}

export default page;
