import React from 'react';
import classnames from 'classnames';
import { IShareComponent } from './ISharedComponent';

interface IButtonProps extends IShareComponent {
	title: string;
	isTransparent?: boolean;
	isSecondary?: boolean;
}

export const Button: React.FC<IButtonProps> = ({ title, isTransparent, isSecondary = false }) => {
	const twSecondary = 'bg-transparent hover:text-pink-500 ';
	const twPrimary =
		'text-white transition-colors bg-pink-500 border-none rounded-md hover:bg-pink-700 ';

	return (
		<button
			className={`px-4 py-2 text-white transition-colors bg-pink-500 border-none rounded-md hover:bg-pink-700 `}
		>
			{title}
		</button>
	);
};
