import React from 'react';
import { SectionHeading } from './Shared/SectionHeading';

export const Companies = () => {
	const data = [
		{ name: 'Amazon', img: 'amazon' },
		{ name: 'IBM', img: 'ibm' },
		{ name: 'Oracle', img: 'oracle' },
		{ name: 'Microsoft', img: 'microsoft' },
		{ name: 'Deloitte', img: 'deloitte' },
		{ name: 'Google', img: 'google' },
		{ name: 'Accenture', img: 'accenture' },
		{ name: 'Salesforce', img: 'salesforce1' },
	];

	const transformData = [[{ name: 'Amazon', img: 'amazon' }]];
	return (
		<section className="relative flex flex-col items-center px-10 m-auto text-center mt-52 max-w-7xl">
			<SectionHeading
				description="Companies that have a high demand for certified cloud engineers"
				title={'Companies'}
			/>
			<img
				className="absolute object-contain w-32 transition-all duration-500 ease-in-out md:rotate-45 -top-20 md:top-16 right-12 md:left-5 rotate-6 -z-10"
				src="/images/shape.png"
			/>
			<div className="flex flex-wrap max-w-[800px] justify-center mx-6">
				{data.map(({ img, name }) => (
					<div
						key={name}
						className="flex max-w-[200px] border p-8 border-stone-400 border-opacity-50 flex-auto justify-center"
					>
						<img
							src={`/images/companies/${img}.png`}
							className="object-contain grayscale brightness-0 invert-[1] opacity-60 h-14 "
						/>
					</div>
				))}
			</div>
		</section>
	);
};
