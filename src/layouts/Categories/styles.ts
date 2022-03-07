import styled from 'styled-components';

export const CategoriesContainer = styled.div`
	--swiper-navigation-size: 30px;
	margin: 20px 0;

	h2 {
		margin-bottom: 10px;
		font-weight: 400;
	}

	.swiper-button-next,
	.swiper-button-prev {
		opacity: 0;
		color: ${props => props.theme.colors.primary.hover};
		transition: opacity 0.5s, transform 0.5s, color 0.5s;

		&:hover {
			color: ${props => props.theme.colors.primary.main};
			transform: scale(1.5);
		}
	}

	&:hover {
		.swiper-button-next,
		.swiper-button-prev {
			opacity: 1;
		}
	}
`;

export const SlideContainer = styled.div`
	cursor: pointer;
	position: relative;

	img {
		display: block;
		width: 100%;
		min-height: 250px;
		max-height: 25vh;
		object-fit: cover;
		object-position: bottom;
	}

	p {
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
`;

export const SlideMask = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: absolute;
	background-color: rgba(0, 0, 0, 0.7);
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	padding: 4px;
	opacity: 0;
	text-align: center;
	font-size: 14px;
	transition: opacity 0.5s;

	& > * {
		margin: 2px 0;
	}

	&:hover {
		opacity: 1;
	}
`;
