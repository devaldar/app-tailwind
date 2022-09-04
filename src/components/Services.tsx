import React from 'react';
import {
	CloudIcon,
	ChartBarIcon,
	ChartPieIcon,
	PresentationChartLineIcon,
	CodeBracketIcon,
	SquaresPlusIcon,
	RectangleGroupIcon,
	BoltIcon,
	ClockIcon,
} from '@heroicons/react/24/solid';
import { PlusCircleIcon } from '@heroicons/react/24/outline';
import { SectionHeading } from './Shared/SectionHeading';

export const Services = () => {
	const data = [
		{
			title: 'Variety of tests',
			description:
				'We offer a wide variety of practice tests for different cloud certifications. Practice for multiple certification in one platform',
			icon: (className?: string) => <RectangleGroupIcon className={className} />,
		},
		{
			title: 'Consistent',
			description:
				'We care about your progress, that is why you can set up daily reminders to continue your practice tests.',
			icon: (className?: string) => <ChartPieIcon className={className} />,
		},
		{
			title: 'Track your progress',
			description:
				'Track your progress through the advanced dashboard. See how many consistent you are at practicing. ',
			icon: (className?: string) => <PresentationChartLineIcon className={className} />,
		},
		{
			title: 'Focus your weaknesses ',
			description:
				'The platform will identify your weaknesses, and show you the areas that you should focus on. ',
			icon: (className?: string) => <CodeBracketIcon className={className} />,
		},
		{
			title: 'Learn the answer quickly',
			description:
				'You do not have to wait for the test to finish to learn the answer. You can see the answer and learn it right away.',
			icon: (className?: string) => <BoltIcon className={className} />,
		},
		{
			title: 'Create your own questions',
			description:
				'Want to create study cards for yourself or your exam is not available for practice yet? Try creating your own test.',
			icon: (className?: string) => <PlusCircleIcon className={className} />,
		},
	];
	return (
		<section className="mt-52">
			<SectionHeading title={'What is TestMaster?'} />
			<div className="flex flex-wrap justify-center mx-auto gap-7 md:max-w-4xl xl:max-w-7xl">
				{data.map(({ title, description, icon }, index) => (
					<div
						key={index}
						className="flex flex-col items-center flex-auto max-w-sm p-5 text-center "
					>
						{icon('h-16 mb-6')}
						<h6 className="mb-2 text-xl font-semibold">{title}</h6>
						<p className="text-stone-300">{description}</p>
					</div>
				))}
			</div>
		</section>
	);
};
