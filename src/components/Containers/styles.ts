import styled from 'styled-components';
import { ContainerProps } from '.';

export const StyledContainer = styled.div<ContainerProps>`
	display: ${props => props.display};
	flex-direction: ${props => props.direction};
	align-items: ${props => props.alignItems};
	justify-content: ${props => props.justifyContent};
`;
