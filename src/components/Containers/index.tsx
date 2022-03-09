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
	children?: React.ReactNode;
};

const Container = ({
	display = 'block',
	direction = 'row',
	alignItems = 'center',
	justifyContent = 'start',
	children,
}: ContainerProps) => {
	return (
		<StyledContainer
			display={display}
			alignItems={alignItems}
			justifyContent={justifyContent}
			direction={direction}>
			{children}
		</StyledContainer>
	);
};

export default Container;
