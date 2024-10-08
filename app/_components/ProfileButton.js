"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { setActiveProfile, signOutAction } from "../_lib/actions";

import profile1 from "@/public/profile1.png";
import { ChevronDownIcon, MagnifyingGlassIcon, PencilIcon, UserIcon } from "@heroicons/react/24/solid";
import { Divider, ListItemIcon, MenuItem, MenuList, Paper } from "@mui/material";

export default function ProfileButtons({ profiles }) {
	const [isHoverProfile, setIsHoverProfile] = useState(false);
	const [isOpenInput, setIsOpenInput] = useState(false);
	const [queryValue, setQueryValue] = useState("");
	const [clicked, setClicked] = useState(null);

	const searchParams = useSearchParams();
	const { replace } = useRouter();

	const activeProfile = profiles.find((profile) => profile.is_active === true);

	function handleClick() {
		if (activeProfile.id === clicked) return;
		setActiveProfile(clicked);
	}

	function handleSubmit(e) {
		e.preventDefault();
		const params = new URLSearchParams(searchParams);
		if (queryValue) {
			params.set("query", queryValue);
		} else {
			params.delete("query");
		}
		replace(`/search?${params.toString()}`);
	}

	return (
		<section className='flex items-center gap-4 justify-normal'>
			<div className='flex items-center gap-4'>
				<form onSubmit={(e) => handleSubmit(e)}>
					<div
						className={`flex gap-2 transition-all duration-500 ease-in-out bg-zinc-900 border border-zinc-100 p-1  ${
							isOpenInput ? "w-64 opacity-100" : "w-0 opacity-0"
						}`}
						onMouseLeave={() => setIsOpenInput(false)}
						onSubmit={() => setIsOpenInput(false)}>
						<MagnifyingGlassIcon className='w-6 h-6 text-neutral-50' />
						<input
							type='text'
							value={queryValue}
							className={`bg-zinc-900 focus:outline-none text-zinc-100 placeholder:text-sm text-sm ${
								isOpenInput ? "w-64 opacity-100" : "w-0 opacity-0"
							}`}
							placeholder='Titles, people, genres'
							onChange={(e) => setQueryValue(e.target.value)}
						/>
					</div>
				</form>
				{isOpenInput === false && (
					<button className='hover:cursor-pointer' onClick={() => setIsOpenInput((input) => !input)}>
						<MagnifyingGlassIcon className='w-6 h-6 text-neutral-50' />
					</button>
				)}
			</div>

			{/* <button>
				<BellIcon className='w-6 h-6 text-neutral-50' />
			</button> */}
			<div className='flex items-center gap-1 hover:cursor-pointer' onMouseEnter={() => setIsHoverProfile(true)}>
				<img
					src={activeProfile?.avatar_url === "" ? profile1 : activeProfile?.avatar_url}
					className='rounded-md w-8 h-8'
					alt='Profile Image of User'
				/>
				<button className='relative'>
					<ChevronDownIcon
						className={`w-4 h-4 text-neutral-100 ${isHoverProfile && "rotate-180 transition duration-300"} `}
					/>
				</button>
				{isHoverProfile && (
					<Paper
						sx={{ width: 200, maxWidth: "100%" }}
						className='absolute top-16 right-14'
						onMouseEnter={() => setIsHoverProfile(true)}
						onMouseLeave={() => setIsHoverProfile(false)}>
						<MenuList className='bg-zinc-950 text-zinc-100 rounded-none border border-zinc-700'>
							<form action={handleClick}>
								{profiles.map((profile) => (
									<MenuItem key={profile.id}>
										<button
											className='flex items-center gap-2 text-sm hover:underline w-full'
											onClick={() => setClicked(profile.id)}>
											<ListItemIcon>
												<img
													src={profile.avatar_url ? profile.avatar_url : "profile1.png"}
													alt='profile picture'
													className='w-8 h-8 rounded-md'
												/>
											</ListItemIcon>
											<p>{profile.profile_name}</p>
										</button>
									</MenuItem>
								))}
							</form>

							<MenuItem>
								<Link href='/manage-profiles' className='flex items-center gap-2 text-sm hover:underline w-full'>
									<ListItemIcon>
										<PencilIcon className='h-7 w-7 text-zinc-100 text-center' />
									</ListItemIcon>
									<p>Manage Profiles</p>
								</Link>
							</MenuItem>
							<MenuItem>
								<Link href='/account' className='flex items-center gap-2 text-sm hover:underline w-full'>
									<ListItemIcon>
										<UserIcon className='h-7 w-7 text-zinc-100 text-center' />
									</ListItemIcon>
									<p>Account</p>
								</Link>
							</MenuItem>

							<Divider className='bg-zinc-600' />
							<MenuItem>
								<form action={signOutAction}>
									<button className='flex items-center justify-center gap-2 text-sm hover:underline w-full'>
										Sign out of Netflix
									</button>
								</form>
							</MenuItem>
						</MenuList>
					</Paper>
				)}
			</div>
		</section>
	);
}
