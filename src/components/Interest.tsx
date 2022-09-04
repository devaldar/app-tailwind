import React from 'react';
import { Button } from './Shared/Button';

export const Interest = () => {
	const twInput =
		'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  ';

	return (
		<section className="flex px-10 m-auto mt-52 max-w-7xl">
			<div className="flex flex-wrap items-center gap-5 md:flex-nowrap">
				<div className="flex flex-col flex-auto w-1/2">
					<h3 className="w-full mb-6 text-6xl font-semibold">{'Register Interest'}</h3>
					<div className="w-full mb-5">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum doloremque
						cumque vitae fuga ab unde amet sequi corrupti cupiditate placeat repellendus
						vero dolores rerum molestiae ut deleniti ipsam, nisi earum. Ipsam temporibus
						nesciunt recusandae eaque nemo reprehenderit sit amet sint!
					</div>
				</div>
			</div>
		</section>
	);
};
