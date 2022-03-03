import styled, { css } from 'styled-components';
import { ButtonProps } from '.';

const COLOR = {
	primary: css`
		color: ${props => props.theme.cTertiary.main};
		background: ${props => props.theme.cPrimary.main};

		&:hover,
		&:focus {
			background: ${props => props.theme.cPrimary.hover};
		}
	`,
	secondary: css`
		color: ${props => props.theme.cTertiary.main};
		background: ${props => props.theme.cSecondary.main};

		&:hover,
		&:focus {
			background: ${props => props.theme.cSecondary.hover};
		}
	`,
};

const DISABLED = css`
	cursor: not-allowed;
	background: #d4d4d4;
	color: #f5f5f5;
`;

export const Container = styled.button<ButtonProps>`
	padding: 10px 25px;
	cursor: pointer;
	border: none;
	border-radius: 6px;
	font-weight: 500;
	font-size: 22px;
	outline: none;
	transition: all 0.2s;

	${props => props.color && COLOR[props.color]}
	${props => props.disabled && DISABLED}
`;
