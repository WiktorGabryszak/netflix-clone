export default function AccountTitle({ title, desc }) {
	return (
		<div>
			<h2 className='text-zinc-50 font-semibold text-5xl'>{title}</h2>
			<p className='text-zinc-50 font-normal text-base'>{desc}</p>
		</div>
	);
}

