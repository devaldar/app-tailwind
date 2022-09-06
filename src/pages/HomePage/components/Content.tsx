import React, { useEffect } from 'react';
import { Button } from 'components/Shared';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface IContentProps {
	paragraphs: string[];
	heading: string;
	buttonText: string;
	onClick: () => void;
	image: string;
	isReverse?: boolean;
	top?: string;
}

export const Content: React.FC<IContentProps> = ({
	paragraphs,
	buttonText,
	heading,
	onClick,
	image,
	isReverse = false,
	top,
}) => {
	const animation = useAnimation();

	const { ref, inView } = useInView({
		threshold: 0.6,
	});

	useEffect(() => {
		if (inView) {
			animation.start({
				opacity: 1,
				x: 0,
			});
		}
	}, [inView, animation]);

	const dirX = isReverse ? -1 : 1;

	return (
		<section className="px-10 mt-52 " ref={ref}>
			<div
				className={`flex max-w-6xl gap-10 m-auto flex-wrap md:justify-start justify-center text-center md:text-left md:flex-nowrap ${
					isReverse ? 'md:flex-row-reverse' : 'md:flex-row'
				} `}
			>
				<motion.div
					className="flex flex-col items-start flex-auto w-1/2"
					initial={{ x: -100 * dirX, opacity: 0 }}
					animate={animation}
					transition={{ duration: 0.5 }}
				>
					{top && (
						<div className="px-2 py-1 mb-4 rounded-3xl border-[1px] flex items-center border-opacity-30 border-slate-200 md:mx-0 mx-auto">
							<div className="w-5 h-5 mr-2 rounded-full bg-fuchsia-500" />
							{top}
						</div>
					)}

					<h3 className="w-full mb-6 text-4xl font-semibold">{heading}</h3>
					{paragraphs.map((text, index) => (
						<div className="w-full mb-5" key={index}>
							{text}
						</div>
					))}
					<Button twClasses="md:m-0 m-auto" onClick={onClick}>
						{buttonText}
					</Button>
				</motion.div>
				<motion.div
					className="flex flex-col flex-auto w-1/2"
					initial={{ x: 100 * dirX, opacity: 0 }}
					animate={animation}
					transition={{ duration: 0.5 }}
				>
					<img
						src={image}
						className="shadow-md shadow-cyan-700 md:max-w-full w-full h-auto max-w-[70%] m-auto"
						// style={{
						// 	transform: isReverse
						// 		? 'rotate3d(1,.866,0,-20deg) rotate(-1deg)'
						// 		: 'rotate3d(1,-.866,0,20deg) rotate(1deg)',
						// }}
					/>
				</motion.div>
			</div>
		</section>
	);
};
