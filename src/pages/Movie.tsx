import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import FetchingService from 'redux/services';

type Props = {};

export interface ISubmitResult {
	errorMsg?: string;
	title: string;
}

const Movie: React.FC<Props> = () => {
	const [movie, setMovie] = useState<ISubmitResult | false>();
	const location = useLocation();
	const { pathname } = location;

	useEffect(() => {
		const fetchMovie = new FetchingService();
		const movieId = pathname.substring(pathname.lastIndexOf('/') + 1);
		fetchMovie.getSingleMovie(movieId, setMovie);
	}, [pathname]);

	useEffect(() => {
		console.log('MOVIE DATA', movie);
	}, [movie]);

	return (
		<div>{movie ? (movie.errorMsg ? 'error' : movie.title) : 'loading'}</div>
	);
};

export default Movie;
