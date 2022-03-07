import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { moviesData } from '../utils/mainPageData';
import Categories from '../layouts/Categories';
import Genres from '../layouts/Genres';
import FetchingService from '../redux/services';

type Props = {};

const Main = (props: Props) => {
	const dispatch: Dispatch<any> = useDispatch();
	const allMoviesData: MoviesState = useSelector((state: MoviesState) => state);
	const { latestMovies, horrorMovies, genres, fetchedData } = allMoviesData;

	useEffect(() => {
		const fetchService = new FetchingService();

		moviesData.forEach(data => {
			if (fetchedData.includes(data.slug)) return;

			fetchService.getMovies(data, dispatch);
		});
	}, [dispatch, fetchedData]);

	return (
		<div>
			<Categories movies={latestMovies} />
			<Categories movies={horrorMovies} />
			<Genres genres={genres} />
		</div>
	);
};

export default Main;
