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
import React from 'react';

export const examsData = [
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

export const servicesData = [
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
