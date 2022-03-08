import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { addCategories } from 'utils/mainPageData';
import Categories from 'layouts/Categories';
import FetchingService from 'redux/services';
import { fetchGenres, fetchMainCategories } from 'redux/actionCreators';

type Props = {};

const Main = (props: Props) => {
	const dispatch: Dispatch<any> = useDispatch();
	const allMoviesData: MoviesState = useSelector((state: MoviesState) => state);
	const { genres, mainPageCategories, fetchedData } = allMoviesData;
	const [isOpen, setIsOpen] = useState(false);

	const toggleModal = (data: any) => {
		console.log(data);
		setIsOpen(!isOpen);
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

	return (
		<div>
			{!genres || !genres.body ? (
				<h1>PAGE LOADER</h1>
			) : (
				mainPageCategories.map(category => (
					<Categories
						key={category.slug}
						data={category}
						toggleModal={toggleModal}
					/>
				))
			)}
		</div>
	);
};

export default Main;
