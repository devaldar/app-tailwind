import React from 'react';
import { CloudIcon } from '@heroicons/react/24/solid';
export const Exams = () => {
	const list = ['Azure', 'AWS', 'GCP', 'Oracle', 'IBM', 'Salesforce', 'Linux'];
	const exams = [
		{ name: 'Azure', logo: 'azure' },
		{ name: 'AWS', logo: 'aws' },
		{ name: 'GCP', logo: 'google' },
		{ name: 'Oracle', logo: 'oracle' },
		{ name: 'Salesforce', logo: 'salesforce' },
	];
	return (
		<section className="flex justify-center mt-48 align-center">
			<div className="w-3/4 py-10 rounded-lg max-w-7xl bg-neutral-800/50">
				<h3 className="w-full text-2xl text-center">Exams include:</h3>
				<div className="flex flex-row flex-wrap items-center justify-center max-w-md mx-auto md:max-w-3xl md:justify-between md:flex-nowrap mt-7">
					{exams.map(({ name, logo }) => (
						<div key={name} className="flex flex-col items-center">
							<div className="flex w-20 h-20 p-4 m-4 shadow-inner shadow-pink-300 bg-neutral-900 rounded-xl">
								{/* <CloudIcon className="h-10 m-auto text-md" /> */}
								<img src={`images/logos_${logo}.png`} className="object-contain" />
							</div>
							<div className="">{name}</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
