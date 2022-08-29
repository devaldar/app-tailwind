import React from 'react';

import { IShareComponent } from './ISharedComponent';

export const Container: React.FC<IShareComponent> = ({}) => {
	return <div className={`flex container`}>Container</div>;
};

export const test = () => {
	return <Container></Container>;
};
