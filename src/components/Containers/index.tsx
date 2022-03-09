import React from 'react';
import { StyledContainer } from './styles';

export type ContainerProps = {
	display?: 'block' | 'flex';
	direction?: 'row' | 'column';
	alignItems?: 'start' | 'stretch' | 'center' | 'end';
	justifyContent?:
		| 'start'
		| 'center'
		| 'space-between'
		| 'space-around'
		| 'space-evenly';
	px?: number;
	py?: number;
	children?: React.ReactNode;
};

const Container = ({
	display = 'block',
	direction = 'row',
	alignItems = 'center',
	justifyContent = 'start',
	px = 0,
	py = 0,
	children,
}: ContainerProps) => {
	return (
		<StyledContainer
			display={display}
			alignItems={alignItems}
			justifyContent={justifyContent}
			direction={direction}
			px={px}
			py={py}>
			{children}
		</StyledContainer>
	);
};

export default Container;
