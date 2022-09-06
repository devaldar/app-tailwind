import React from 'react';

export const Footer = () => {
	return (
		<footer className="p-4 m-auto mt-32 text-center rounded-lg shadow md:px-6 md:py-8 max-w-7xl">
			<hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

			<div className="justify-center sm:flex sm:items-center sm:justify-between">
				<a
					href="https://flowbite.com/"
					className="flex items-center justify-center mb-4 sm:mb-0"
				>
					<span className="self-center text-2xl font-semibold whitespace-nowrap ">
						TestMaster
					</span>
				</a>
				<ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 jusitfy-center sm:mb-0 ">
					<li>
						<a href="#" className="mr-4 hover:underline md:mr-6 ">
							About
						</a>
					</li>
					<li>
						<a href="#" className="mr-4 hover:underline md:mr-6">
							Privacy Policy
						</a>
					</li>
					<li>
						<a href="#" className="mr-4 hover:underline md:mr-6 ">
							Licensing
						</a>
					</li>
					<li>
						<a href="#" className="hover:underline">
							Contact
						</a>
					</li>
				</ul>
			</div>
			<span className="block mt-4 text-sm text-gray-500 sm:text-center dark:text-gray-400">
				© 2022{' '}
				<a href="https://flowbite.com/" className="hover:underline">
					TestMaster™
				</a>
				. All Rights Reserved.
			</span>
		</footer>
	);
};
