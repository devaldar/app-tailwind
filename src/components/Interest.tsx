import React, { useEffect } from 'react';
import { Button } from './Shared/Button';
import { InboxArrowDownIcon } from '@heroicons/react/24/outline';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const Interest = () => {
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
		<section className="relative flex px-10 py-10 m-auto mt-52 max-w-7xl" ref={ref}>
			<motion.img
				initial={{ x: -300, y: 300, rotate: -120, opacity: 0 }}
				animate={animation}
				transition={{ duration: 0.7, ease: 'easeInOut' }}
				src="/images/dots2.png"
				className="absolute w-32 overflow-hidden -left-7 -bottom-12 md:-left-3 md:rotate-6 md:-top-4"
			/>
			<motion.img
				initial={{ x: 300, y: -300, rotate: -120, opacity: 0 }}
				animate={animation}
				transition={{ duration: 0.7, ease: 'easeInOut' }}
				src="/images/shape1.png"
				className="absolute right-0 w-40 overflow-hidden ease-in-out bottom-4 -top-20 md:top-16 md:right-7 -z-10"
			/>
			{/* <hr className="  border-[1px] w-full absolute top-0 left-0 h-[1px] bg-stone-100 opacity-40 border-none" /> */}
			<div className="flex flex-col items-center max-w-full gap-5 m-auto text-center">
				<div className="flex flex-col flex-auto">
					<motion.h3
						className="w-full mb-6 text-6xl font-bold"
						initial={{ y: 50, opacity: 0 }}
						animate={animation}
						transition={{ duration: 0.5, ease: 'easeInOut' }}
					>
						<span className="text-transparent bg-red-600 bg-cover bg-gradient-to-tr from-orange-600 to-fuchsia-600 bg-clip-text">
							Register
						</span>{' '}
						Interest
					</motion.h3>
					<motion.div
						className="w-full mb-5 text-lg"
						initial={{ y: 50, opacity: 0 }}
						animate={animation}
						transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
					>
						Register your interest now and stay updated when new practice tests come out
					</motion.div>
				</div>

				<motion.div
					className="relative flex items-center px-2 py-2 rounded-full bg-zinc-700"
					initial={{ y: 50, opacity: 0 }}
					animate={animation}
					transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.4 }}
				>
					<InboxArrowDownIcon className="ml-2 mr-3 h-7" />
					<input
						className="border-none outline-none text-md bg-zinc-700"
						placeholder="Your Email"
					/>
					<Button twRounded="rounded-full" isSecondary twClasses="!px-6">
						Join
					</Button>
				</motion.div>
			</div>
		</section>
	);
};
