import React from 'react';
export const Exams = () => {
	const list = ['Azure', 'AWS', 'GCP', 'Oracle', 'IBM', 'Salesforce', 'Linux'];
	const exams = [
		{
			name: 'Azure',
			logo: 'azure',
			twColor: 'hover:shadow-blue-500',
			link: 'https://docs.microsoft.com/en-us/certifications/',
		},
		{
			name: 'AWS',
			logo: 'aws',
			twColor: 'hover:shadow-amber-400',
			link: 'https://aws.amazon.com/certification/',
		},
		{
			name: 'GCP',
			logo: 'google',
			twColor: 'hover:shadow-green-500',
			link: 'https://cloud.google.com/certification',
		},
		{
			name: 'Oracle',
			logo: 'oracle',
			twColor: 'hover:shadow-red-400',
			link: 'https://education.oracle.com/certification',
		},
		{
			name: 'Salesforce',
			logo: 'salesforce',
			twColor: 'hover:shadow-sky-500',
			link: 'https://trailhead.salesforce.com/en/credentials/administratoroverview/',
		},
	];

	return (
		<section className="relative flex justify-center px-5 mt-48 align-center">
			<div className="absolute h-52 ">
				<img className="absolute left-0 object-contain w-24" src="/images/dots.png" />
			</div>
			<div className="relative w-3/4 px-10 py-10 rounded-lg max-w-7xl md:bg-neutral-800/50">
				<img
					className="absolute hidden object-contain w-24 md:block -top-6 -left-12 -z-10"
					src="/images/dots.png"
				/>
				<img
					className="absolute bottom-0 hidden object-contain w-24 -right-36 sm:block md:bottom-6 md:-right-16 -z-10"
					src="/images/dots.png"
				/>
				<h3 className="w-full text-2xl text-center">Exams include:</h3>
				<div className="flex flex-row flex-wrap items-center justify-center max-w-md mx-auto md:max-w-3xl md:justify-between sm:flex-nowrap mt-7">
					{exams.map(({ name, logo, twColor, link }) => (
						<div key={name} className="flex flex-col items-center">
							<a href={link} target="_blank">
								<div
									className={`flex w-20 h-20 p-4 m-4 shadow-inner shadow-blue-300  ${twColor}  transition-all duration-200 bg-neutral-900 rounded-xl cursor-pointer`}
								>
									<img
										src={`images/exam/logos_${logo}.png`}
										className="object-contain"
									/>
								</div>
							</a>
							<div className="">{name}</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
