import React, { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Button } from 'components/Shared/Button';

export const Navbar = () => {
	const [nav, setNav] = useState(false);
	const handleClick = () => setNav(!nav);

	const handleClose = () => setNav(!nav);
	// const menuItems = ["home", "about", "support", "platforms", "pricing"];
	const menuItems = [
		{ name: 'home' },
		{ name: 'about', offset: -200 },
		{ name: 'support' },
		{ name: 'platforms' },
		{ name: 'pricing' },
	];
	return (
		<div className="w-screen h-[80px] z-10  fixed drop-shadow-lg">
			<div className="flex items-center justify-between w-full h-full px-2">
				<div className="flex items-center">
					<h1 className="mr-4 text-2xl font-bold sm:text-2xl">TestMaster</h1>
					<ul className="hidden md:flex">
						{menuItems.map(({ name, offset }) => (
							<li
								className="transition-colors duration-300 ease-in first-letter:uppercase hover:cursor-pointer hover:text-blue-500"
								key={name}
							>
								<Link to={name} smooth={true} duration={500} offset={offset}>
									{name}
								</Link>
							</li>
						))}
					</ul>
				</div>
				<div className="items-center hidden pr-4 md:flex">
					<Button title="Sign in" isSecondary={true} />
					<Button title="Sign Up" />
				</div>
				<div className="mr-4 md:hidden" onClick={handleClick}>
					{!nav ? <Bars3Icon className="w-5" /> : <XMarkIcon className="w-5" />}
				</div>
			</div>

			<ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
				<li className="w-full border-b-2 border-zinc-300">
					<Link onClick={handleClose} to="home" smooth={true} duration={500}>
						Home
					</Link>
				</li>
				<li className="w-full border-b-2 border-zinc-300">
					<Link
						onClick={handleClose}
						to="about"
						smooth={true}
						offset={-200}
						duration={500}
					>
						About
					</Link>
				</li>
				<li className="w-full border-b-2 border-zinc-300">
					<Link
						onClick={handleClose}
						to="support"
						smooth={true}
						offset={-50}
						duration={500}
					>
						Support
					</Link>
				</li>
				<li className="w-full border-b-2 border-zinc-300">
					<Link
						onClick={handleClose}
						to="platforms"
						smooth={true}
						offset={-100}
						duration={500}
					>
						Platforms
					</Link>
				</li>
				<li className="w-full border-b-2 border-zinc-300">
					<Link
						onClick={handleClose}
						to="pricing"
						smooth={true}
						offset={-50}
						duration={500}
					>
						Pricing
					</Link>
				</li>

				<div className="flex flex-col my-4">
					<button className="px-8 py-3 mb-4 text-indigo-600 bg-transparent">
						Sign In
					</button>
					<button className="px-8 py-3">Sign Up</button>
				</div>
			</ul>
		</div>
	);
};
