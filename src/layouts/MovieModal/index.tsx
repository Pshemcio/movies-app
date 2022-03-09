import Container from 'components/Containers';
import Modal from 'react-responsive-modal';
import { ModalContainer, Content, ImageWrapper, StyledLink } from './styles';

type Props = {
	currentMovie: IMovie | undefined;
	setCurrentMovie: any;
};

const closeIcon = (
	<svg fill='currentColor' width={24} height={24}>
		<path
			fillRule='evenodd'
			d='M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z'
		/>
	</svg>
);

const MovieModal: React.FC<Props> = ({ currentMovie, setCurrentMovie }) => {
	return (
		<Modal
			open={!!currentMovie}
			onClose={() => setCurrentMovie(undefined)}
			center
			closeIcon={closeIcon}
			blockScroll={false}
			classNames={{
				overlay: 'customOverlay',
				modal: 'customModal',
				closeButton: 'customCloseBtn',
			}}>
			<ModalContainer>
				{currentMovie && (
					<>
						<ImageWrapper>
							<img
								alt={currentMovie.title}
								src={`https://image.tmdb.org/t/p/original/${
									currentMovie.backdrop_path
										? currentMovie.backdrop_path
										: currentMovie.poster_path
								}`}
							/>
						</ImageWrapper>
						<Content>
							<h2>{currentMovie.title}</h2>
							<Container>
								<p>
									Release date:{' '}
									<strong>
										{currentMovie.release_date
											? currentMovie.release_date
											: 'N/A'}
									</strong>
								</p>
								<p>
									Rating:{' '}
									<strong>
										{currentMovie.vote_average
											? `${currentMovie.vote_average} / 10`
											: 'N/A'}
									</strong>
								</p>
							</Container>
							<p>{currentMovie.overview}</p>
							<StyledLink to={`/movie/${currentMovie.id}`}>SEE MORE</StyledLink>
						</Content>
					</>
				)}
			</ModalContainer>
		</Modal>
	);
};

export default MovieModal;
