import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import FetchingService from 'redux/services';

type Props = {};

export interface ISubmitResult {
	errorMsg?: string;
	adult: boolean;
	backdrop_path: string;
	belongs_to_collection: number;
	budget: number;
	genres: any[];
	homepage: string;
	id: number;
	imdb_id: string;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	production_companies: any[];
	production_countries: any[];
	release_date: string;
	revenue: number;
	runtime: number;
	spoken_languages: any[];
	status: string;
	tagline: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
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
		<div>
			{movie ? (
				movie.errorMsg ? (
					'error'
				) : (
					<div>
						<h1>{movie.title}</h1>
						<img
							src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
							alt={movie.title}
						/>
						<p>{movie.overview}</p>
						<p>{movie.vote_average}</p>
						<p>{movie.vote_count}</p>
					</div>
				)
			) : (
				'loading'
			)}
		</div>
	);
};

export default Movie;
