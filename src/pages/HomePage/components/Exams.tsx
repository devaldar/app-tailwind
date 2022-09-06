import React, { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { examsData } from 'data/data';

export const Exams = () => {
	const initial = {
		opacity: 0,
		translateZ: 400,
	};

	const animation = useAnimation();
	const imageAnimation = useAnimation();

	const { ref, inView } = useInView({
		threshold: 0.6,
	});

	useEffect(() => {
		if (inView) {
			animation.start({
				// scale: 1,
				// y: 0,
				opacity: 1,
				translateZ: 0,
			});
			imageAnimation.start({ x: 0, opacity: 1, rotate: 180 });
		}
	}, [inView, animation]);

	return (
		<section
			className="relative flex justify-center m-auto mt-48 px-15 align-center max-w-7xl "
			ref={ref}
		>
			<motion.img
				initial={{ x: -300, opacity: 0 }}
				animate={imageAnimation}
				transition={{
					duration: 0.5,
				}}
				className="absolute hidden object-contain w-24 md:block -top-6 left-24 -z-10"
				src="/images/dots.png"
			/>
			<motion.img
				initial={{ x: 300, opacity: 0 }}
				animate={imageAnimation}
				transition={{
					duration: 0.5,
				}}
				className="absolute right-0 hidden object-contain w-24 -bottom-12 sm:block md:bottom-6 md:right-24 -z-10"
				src="/images/dots.png"
			/>
			<div className="relative w-3/4 py-10 rounded-lg max-w-7xl md:bg-neutral-800/50">
				<h3 className="w-full text-2xl text-center">Exams include:</h3>
				<div
					className="flex flex-row flex-wrap items-center justify-center max-w-md mx-auto md:max-w-3xl md:justify-between sm:flex-nowrap mt-7"
					style={{ perspective: '1000px' }}
				>
					{examsData.map(({ name, logo, twColor, link }, index) => (
						<motion.div
							key={name}
							className="flex flex-col items-center"
							initial={initial}
							animate={animation}
							transition={{
								duration: 0.5 + index * 0.2,
							}}
						>
							<div
								className={`flex w-20 h-20 p-4 m-4 shadow-inner shadow-blue-300  ${twColor}  transition-all duration-200 bg-neutral-900 rounded-xl`}
							>
								<img
									src={`images/exam/logos_${logo}.png`}
									className="object-contain w-full h-auto"
								/>
							</div>
							<div className="">{name}</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};
