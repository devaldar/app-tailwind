import React, { useEffect } from 'react';
import { SectionHeading } from 'components/Shared';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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
		<section
			className="relative flex flex-col items-center px-10 m-auto text-center mt-52 max-w-7xl"
			ref={ref}
		>
			<motion.div>
				<SectionHeading
					description="Companies that have a high demand for certified cloud engineers"
					title={'Companies'}
				/>
			</motion.div>

			<motion.img
				initial={{
					opacity: 0,
					x: -90,
					y: -40,
					rotate: -150,
				}}
				animate={animation}
				transition={{
					duration: 0.7,
					ease: 'easeInOut',
				}}
				className="absolute object-contain w-32 ease-in-out md:rotate-45 -top-20 md:top-16 right-12 md:left-5 rotate-6 -z-10"
				src="/images/shape.png"
			/>
			<motion.img
				initial={{
					opacity: 0,
					y: 120,
					x: -70,
					rotate: 120,
				}}
				animate={animation}
				transition={{ duration: 0.7, delay: 0, ease: 'easeInOut' }}
				className="absolute bottom-0 object-contain w-32  ease-in-out right-[80%] md:right-0 md:bottom-2 rotate-6 -z-10"
				src="/images/shape2.png"
			/>
			<div className="flex flex-wrap max-w-[800px] justify-center mx-6">
				{data.map(({ img, name }) => (
					<div
						key={name}
						className="flex max-w-[200px] border p-8 border-stone-400 border-opacity-50 flex-auto justify-center w-[200px]"
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
