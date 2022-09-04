import React from 'react';
import { IShareComponent } from './ISharedComponent';

interface IHeadingProps extends IShareComponent {
	title: string;
	description?: string;
}

export const SectionHeading: React.FC<IHeadingProps> = ({ title, description }) => {
	return (
		<>
			<h3 className="text-4xl font-semibold text-center ">{title}</h3>
			{description && <div className="mt-2 text-xl">{description}</div>}
			<hr className="w-16 m-auto mt-3 mb-10 h-[2px] bg-fuchsia-500 border-none" />
		</>
	);
};
