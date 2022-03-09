import Button from 'components/Button';
import Container from 'components/Containers';
import React from 'react';
import { StyledHeader, MaskContainer } from './styles';

type Props = {
	headerMovie: IMovie;
	toggleModal: any;
};

const MainHeader: React.FC<Props> = ({ headerMovie, toggleModal }) => {
	return (
		<StyledHeader>
			<img
				alt={headerMovie.title}
				src={`https://image.tmdb.org/t/p/original/${headerMovie.backdrop_path}`}
			/>
			<MaskContainer>
				<Container
					display='flex'
					direction='column'
					alignItems='start'
					justifyContent='center'
					px={30}>
					<h1>{headerMovie.title}</h1>
					<p>{headerMovie.overview}</p>
					<Button onClick={() => toggleModal(headerMovie)} color='secondary'>
						More info
					</Button>
				</Container>
			</MaskContainer>
		</StyledHeader>
	);
};

export default MainHeader;
