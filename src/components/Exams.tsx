import React from 'react';
import { CloudIcon } from '@heroicons/react/24/solid';
export const Exams = () => {
	const list = ['Azure', 'AWS', 'GCP', 'Oracle', 'IBM', 'Salesforce', 'Linux'];
	return (
		<section className="flex justify-center mt-28 align-center">
			<div className="w-3/4 py-10 rounded-lg max-w-7xl h-72 bg-neutral-800/50">
				<h3 className="w-full text-2xl text-center">Exams include:</h3>
				<div className="flex flex-row flex-wrap items-center justify-center max-w-md mx-auto md:max-w-3xl md:justify-between md:flex-nowrap mt-7">
					{list.map((item) => (
						<div key={item} className="flex flex-col items-center">
							<div className="flex w-16 h-16 m-4 shadow-inner shadow-pink-300 bg-neutral-900 rounded-xl ">
								<CloudIcon className="h-10 m-auto text-md" />
							</div>
							<div className="">{item}</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
