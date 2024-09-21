"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { HomeIcon, ShieldCheckIcon, UserGroupIcon } from "@heroicons/react/24/outline";

const navLinks = [
	{
		name: "Overview",
		href: "/account",
		icon: <HomeIcon className='w-6 h-6 ' />,
		activeIcon: <HomeIcon className='w-6 h-6 text-zinc-50' fill='white' />,
	},
	// {
	// 	name: "Membership",
	// 	href: "/account/reservations",
	// 	icon: <Card className='w-5 h-5 text-primary-600' />,
	// },
	{
		name: "Security",
		href: "/account/security",
		icon: <ShieldCheckIcon className='w-6 h-6 ' />,
		activeIcon: <ShieldCheckIcon className='w-6 h-6 text-zinc-900' fill='white' />,
	},
	{
		name: "Profiles",
		href: "/account/profiles",
		icon: <UserGroupIcon className='w-6 h-6' />,
		activeIcon: <UserGroupIcon className='w-6 h-6 text-zinc-50' fill='white' />,
	},
];

export default function AccountNavBar() {
	const pathname = usePathname();

	return (
		<nav>
			<ul className='flex flex-col h-full gap-2 text-base'>
				{navLinks.map((link) => (
					<li key={link.name}>
						<Link
							className={`py-3 px-2 hover:bg-zinc-400/15 rounded-md hover:text-zinc-50 transition-colors flex items-center gap-4 font-medium ${
								pathname === link.href ? "text-zinc-50" : "text-zinc-200"
							}`}
							href={link.href}>
							{pathname === link.href ? link.activeIcon : link.icon}
							<span>{link.name}</span>
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}
