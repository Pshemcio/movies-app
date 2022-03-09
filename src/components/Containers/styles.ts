import styled from 'styled-components';
import { ContainerProps } from '.';

export const StyledContainer = styled.div<ContainerProps>`
	height: 100%;
	display: ${props => props.display};
	flex-direction: ${props => props.direction};
	align-items: ${props => props.alignItems};
	justify-content: ${props => props.justifyContent};
	padding: ${props => props.py}px ${props => props.px}px;
`;
