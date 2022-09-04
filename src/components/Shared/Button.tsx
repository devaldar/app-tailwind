import React from 'react';
import classnames from 'classnames';
import { IShareComponent } from './ISharedComponent';

interface IButtonProps extends IShareComponent {
	title?: string;
	isSecondary?: boolean;
	children?: React.ReactNode;
}

export const Button: React.FC<IButtonProps> = ({
	title,
	isSecondary = false,
	children,
	twClasses,
}) => {
	const twSecondary = 'bg-stone-900 hover:text-black hover:border-stone-900 border-[1px] ';
	const twPrimary = ' bg-rose-500 border-none rounded-md hover:bg-rose-700 ';

	const twHoverBlocks = `absolute w-1/3 h-full scale-150 ${
		isSecondary ? 'bg-white ' : 'bg-yellow-500'
	} rounded-3xl translate-y-[150%] transition-all duration-700 group-hover:translate-y-0`;
	return (
		<div
			className={`group px-4 py-2 transition-colors rounded-md z-10 font-semibold relative cursor-pointer ${
				!isSecondary ? twPrimary : twSecondary
			} ${twClasses}`}
		>
			{title ? title : children}
			<div className=" h-full w-full  rounded-md overflow-hidden absolute top-0 left-0 bottom-[-3px] -z-10 ">
				<div className={`${twHoverBlocks} -left-[-10] `} />
				<div className={`${twHoverBlocks} delay-75  left-1/4 `} />
				<div className={`${twHoverBlocks} left-2/4 delay-[25ms]  `} />
				<div className={`${twHoverBlocks} left-3/4 delay-[50ms]  `} />
				{/* <div className={`${twHoverBlocks} -left-[-5px] `} />
				<div className={`${twHoverBlocks} delay-75  left-1/3 `} />
				<div className={`${twHoverBlocks} left-2/3 delay-[25ms]  `} /> */}
				{/* <div />
				<div /> */}
			</div>
		</div>
	);
};
