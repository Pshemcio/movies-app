import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { addCategories } from 'utils/addCategories';
import Categories from 'layouts/Categories';
import FetchingService from 'redux/services';
import { fetchGenres, fetchMainCategories } from 'redux/actionCreators';
import MovieModal from 'layouts/MovieModal';
import MainHeader from 'layouts/MainHeader';
import Container from 'components/Containers';

const Main: React.FC = () => {
	const dispatch: Dispatch<any> = useDispatch();
	const allMoviesData: MoviesState = useSelector((state: MoviesState) => state);
	const { genres, mainPageCategories, fetchedData } = allMoviesData;
	const [currentMovie, setCurrentMovie] = useState<IMovie>();
	const [headerMovie, setHeaderMovie] = useState<IMovie>();

	const toggleModal = (data: IMovie) => {
		setCurrentMovie(data);
	};

	useEffect(() => {
		if (fetchedData.includes('genres')) return;

		const getGenres = new FetchingService();

		getGenres.getMovies(
			{
				slug: 'genres',
				name: 'Genres',
				url: `genre/movie/list`,
				action: fetchGenres,
			},
			dispatch
		);
	}, [dispatch, fetchedData]);

	useEffect(() => {
		const fetchService = new FetchingService();
		if (!genres || !genres.body) return;

		const modifiedGenres = genres.body.map((genre: any) => ({
			slug: `category-${genre.id}`,
			name: genre.name,
			url: `discover/movie?with_genres=${genre.id}`,
			action: fetchMainCategories,
		}));

		const mainPageData = [...addCategories, ...modifiedGenres];

		mainPageData.forEach(data => {
			if (fetchedData.includes(data.slug)) return;

			fetchService.getMovies(data, dispatch);
		});
	}, [dispatch, fetchedData, genres]);

	useEffect(() => {
		if (mainPageCategories) {
			const latestMovies = mainPageCategories.find(e => e.slug === 'latest');

			if (latestMovies && latestMovies.body.movies) {
				setHeaderMovie(latestMovies.body.movies[0]);
			}
		}
	}, [mainPageCategories]);

	return (
		<div>
			{!headerMovie ? (
				<h1>PAGE LOADER</h1>
			) : (
				<>
					{headerMovie && (
						<MainHeader headerMovie={headerMovie} toggleModal={toggleModal} />
					)}
					<Container px={30}>
						{mainPageCategories.map(category => (
							<Categories
								key={category.slug}
								data={category}
								toggleModal={toggleModal}
							/>
						))}
					</Container>
					<MovieModal
						currentMovie={currentMovie}
						setCurrentMovie={setCurrentMovie}
					/>
				</>
			)}
		</div>
	);
};

export default Main;
