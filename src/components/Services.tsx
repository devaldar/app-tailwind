import React, { useEffect } from 'react';

import { SectionHeading } from './Shared/SectionHeading';
import { servicesData } from 'data/data';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const Services = () => {
	const initial = {
		opacity: 0,
		scale: 0.2,
		y: 50,
	};

	const animation = useAnimation();

	const { ref, inView } = useInView({
		threshold: 0.6,
	});

	useEffect(() => {
		if (inView) {
			animation.start({
				opacity: 1,
				scale: 1,
				y: 0,
			});
		}
	}, [inView, animation]);
	return (
		<section className="px-10 mt-52 " ref={ref}>
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				animate={animation}
				transition={{ duration: 0.5 }}
			>
				<SectionHeading title={'What is TestMaster?'} />
			</motion.div>
			<div className="flex flex-wrap justify-center gap-3 mx-auto md:max-w-5xl xl:max-w-7xl">
				{servicesData.map(({ title, description, icon }, index) => (
					<motion.div
						initial={initial}
						animate={animation}
						transition={{ duration: 0.5 + 0.1 * index }}
						key={index}
						className="flex flex-col items-center flex-auto max-w-sm md:max-w-[30%] p-5 text-center "
					>
						{icon('h-16 mb-6')}
						<h6 className="mb-2 text-xl font-semibold">{title}</h6>
						<p className="text-sm text-stone-300">{description}</p>
					</motion.div>
				))}
			</div>
		</section>
	);
};
