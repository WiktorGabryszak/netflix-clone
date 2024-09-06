import Link from "next/link";

function Navigation() {
	return (
		<nav className='flex items-center gap-6 text-sm text-neutral-300'>
			<ul>
				<li>
					<Link
						href='/'
						className='transition-colors duration-300 hover:text-neutral-400'>
						Home
					</Link>
				</li>
			</ul>
			{/* {CHANGE LATER} */}
			<ul>
				<li>
					<Link
						href='/genre/tvShows'
						className='transition-colors duration-300 hover:text-neutral-400'>
						TV Shows
					</Link>
				</li>
			</ul>
			<ul>
				<li>
					<Link
						href='/genre/Movies'
						className='transition-colors duration-300 hover:text-neutral-400'>
						Movies
					</Link>
				</li>
			</ul>
			<ul>
				<li>
					<Link
						href='/latest'
						className='transition-colors duration-300 hover:text-neutral-400'>
						New & Popular
					</Link>
				</li>
			</ul>
			<ul>
				<li>
					<Link
						href='/myList'
						className='transition-colors duration-300 hover:text-neutral-400'>
						My List
					</Link>
				</li>
			</ul>
			<ul>
				<li>
					<Link
						href='/original-audio'
						className='transition-colors duration-300 hover:text-neutral-400'>
						Browse by Languages
					</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Navigation;
