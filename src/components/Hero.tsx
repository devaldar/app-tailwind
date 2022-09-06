import React, { useEffect } from 'react';

import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import bgImg from '../assets/final2.png';
import { Button } from './Shared/Button';

export const Hero: React.FC<{ name: string }> = () => {
	const animation = useAnimation();

	const { ref, inView } = useInView({
		threshold: 0.6,
	});

	useEffect(() => {
		if (inView) {
			animation.start({
				opacity: 1,
				y: 0,
				x: 0,
				scale: 1,
				rotate: 0,
			});
		}
	}, [inView, animation]);

	return (
		<div id="home" className="flex flex-col justify-between w-full px-10 pt-28 " ref={ref}>
			<div className="flex flex-col justify-between w-full gap-3 m-auto sm:w-3/4 max-w-7xl md:flex-row">
				<div className="flex flex-col items-center justify-center flex-shrink-0 mb-16 text-center md:items-start md:text-start">
					<motion.h1
						initial={{ x: -100, opacity: 0 }}
						animate={animation}
						transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.3 }}
						className="max-w-xs text-5xl font-bold lg:text-6xl"
					>
						Get{' '}
						<span className="text-transparent bg-red-600 bg-cover bg-gradient-to-tr from-purple-500 to-pink-500 bg-clip-text">
							Cloud Certified
						</span>{' '}
						With Ease
					</motion.h1>
					<motion.p
						className="mt-4 mb-6 text-md md:w-80"
						initial={{ x: -100, opacity: 0 }}
						animate={animation}
						transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.5 }}
					>
						TestMaster will help you become a Cloud Expert. Access Practice Tests for
						multiple Cloud Certifications in one place.
					</motion.p>

					<motion.div
						initial={{ x: -100, opacity: 0 }}
						animate={animation}
						transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.7 }}
					>
						<Button twClasses="mt-4 px-8 py-3 text-lg shadow-[0_0_10px_0] shadow-rose-400 drop-shadow-lg">
							Get Started
						</Button>
					</motion.div>
				</div>
				<div className="flex justify-center flex-auto flex-shrink w-full h-full max-w-4xl ">
					<div
						className="relative w-full max-w-2xl md:translate-x-0 -translate-x-[6%]"
						style={{ aspectRatio: '17/10' }}
					>
						<motion.img
							initial={{ y: 50, opacity: 0 }}
							animate={animation}
							transition={{ duration: 1, ease: 'easeInOut' }}
							className="absolute h-[25%] left-[7%] top-[30%]"
							src={'images/hero/Big Dots.webp'}
							alt="/"
						/>
						<motion.img
							initial={{ y: 50, opacity: 0 }}
							animate={animation}
							transition={{ duration: 0.5, ease: 'easeInOut' }}
							className="absolute h-[25%] right-[6%] -bottom-[5%]"
							src={'images/hero/Big Dots.webp'}
							alt="/"
						/>
						<motion.img
							initial={{ x: 50, opacity: 0 }}
							animate={animation}
							transition={{ duration: 0.5, ease: 'easeInOut' }}
							className="absolute w-[85%] right-0 "
							src={'images/hero/main.webp'}
							alt="/"
						/>
						<motion.img
							initial={{ x: 100, opacity: 0 }}
							animate={animation}
							transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.3 }}
							className="absolute w-[28%] bottom-[12%] left-[45%]"
							src={'images/hero/aliens1.webp'}
							alt="/"
						/>
						<motion.img
							initial={{ x: 50, opacity: 0 }}
							animate={animation}
							transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.5 }}
							className="absolute h-[58%] -right-[8%] -bottom-[12%] "
							src={'images/hero/phone.webp'}
							alt="/"
						/>

						<motion.img
							initial={{ x: 50, opacity: 0 }}
							animate={animation}
							transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.7 }}
							className="absolute h-[28%] -right-[15%] -bottom-[12%]"
							src={'images/hero/aliens2.png'}
							alt="/"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
