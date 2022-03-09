import styled from 'styled-components';

export const StyledHeader = styled.header`
	position: relative;
	img {
		min-height: 300px;
		height: 75vh;
		width: 100%;
		object-fit: cover;
	}

	h1 {
		line-height: 0.75em;
		font-size: clamp(20px, 7vw, 80px);
		font-weight: 400;
		text-transform: uppercase;
	}

	p {
		max-width: 50%;
		margin: 20px 0;
		font-size: 24px;
		line-height: 1.3em;
	}
`;

export const MaskContainer = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.4);
`;
