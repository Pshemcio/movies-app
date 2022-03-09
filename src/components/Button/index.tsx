import React from 'react';
import { StyledButton } from './styles';

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
		<StyledButton
			type={type}
			onClick={onClick}
			color={color}
			disabled={disabled}>
			{children}
		</StyledButton>
	);
};

export default Button;
