import React from 'react';
import { Container } from './styles';

export type ButtonProps = {
	type?: 'button' | 'submit' | 'reset' | undefined;
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
	color?: 'primary' | 'secondary';
	disabled?: boolean;
	children?: React.ReactNode;
};

const Button = ({
	onClick,
	type,
	color = 'primary',
	disabled,
	children,
}: ButtonProps) => {
	return (
		<Container type={type} onClick={onClick} color={color} disabled={disabled}>
			{children}
		</Container>
	);
};

export default Button;
