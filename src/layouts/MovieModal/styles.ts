import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ModalContainer = styled.div`
	img {
		width: 100%;
		min-height: 300px;
		height: 40vh;
		object-fit: cover;
	}
`;

export const Content = styled.div`
	padding: 15px 24px;
	& > * {
		margin: 12px 0;
	}
`;

export const ImageWrapper = styled.div`
	position: relative;
	&:after {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		top: 80%;
		bottom: 0;
		z-index: 2;
		background-image: linear-gradient(
			transparent 0,
			${props => props.theme.colors.tertiary.main} 100%
		);
	}
`;

export const StyledLink = styled(Link)`
	display: inline-block;
	border: 1px solid white;
	border-radius: 5px;
	padding: 6px 20px;
	text-decoration: none;
	transition: background-color 0.4s;

	&:hover {
		background-color: rgba(255, 255, 255, 0.2);
	}
`;
