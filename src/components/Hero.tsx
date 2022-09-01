import React from 'react';
import {
	CloudArrowUpIcon,
	CircleStackIcon,
	PaperAirplaneIcon,
	ServerIcon,
} from '@heroicons/react/24/solid';

import bgImg from '../assets/final2.png';
import { Button } from './Shared/Button';

export const Hero: React.FC<{ name: string }> = () => {
	return (
		<div id="home" className="flex flex-col justify-between w-full px-10 pt-12">
			<div className="flex flex-col justify-between w-full gap-3 m-auto sm:w-3/4 max-w-7xl md:flex-row">
				<div className="flex flex-col items-center justify-center flex-shrink-0 mb-16 text-center md:items-start md:text-start">
					<h1 className="max-w-xs text-5xl font-bold lg:text-6xl">
						Get{' '}
						<span className="text-transparent bg-red-600 bg-cover bg-gradient-to-tr from-purple-500 to-pink-500 bg-clip-text">
							Cloud Certified
						</span>{' '}
						With Ease
					</h1>
					<p className="mt-4 mb-6 text-md md:w-80">
						TestMaster will help you become a Cloud Expert. Access Practice Tests for
						multiple Cloud Certifications in one place.
					</p>
					{/* <button className="mt-4 font-semibold text-blue-500 transition-colors hover:text-blue-600">
						Get Started
					</button> */}
					<Button twClasses="mt-4 px-8 py-3 text-lg shadow-[0_0_10px_0] shadow-rose-400 drop-shadow-lg">
						Get Started
					</Button>
				</div>
				<div className="flex justify-center flex-auto flex-shrink w-full h-full max-w-4xl">
					<img className="w-full max-w-2xl" src={bgImg} alt="/" />
				</div>
				{/* <div
					className="absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%]
            mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
            border border-slate-300 rounded-xl text-center shadow-xl"
				>
					<p>Data Services</p>
					<div className="flex flex-wrap justify-between px-4">
						<p className="flex px-4 py-2 text-slate-500">
							<CloudArrowUpIcon className="h-6 text-indigo-600" /> App Security
						</p>
						<p className="flex px-4 py-2 text-slate-500">
							<CircleStackIcon className="h-6 text-indigo-600" /> Dashboard Design
						</p>
						<p className="flex px-4 py-2 text-slate-500">
							<ServerIcon className="h-6 text-indigo-600" /> Cloud Data
						</p>
						<p className="flex px-4 py-2 text-slate-500">
							<PaperAirplaneIcon className="h-6 text-indigo-600" /> API
						</p>
					</div>
				</div> */}
			</div>
		</div>
	);
};

export default Hero;
