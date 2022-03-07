import axios from 'axios';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { moviesData } from '../utils/mainPageData';
import Categories from '../layouts/Categories';
import Genres from '../layouts/Genres';

type Props = {};

const Main = (props: Props) => {
	const dispatch: Dispatch<any> = useDispatch();
	const allMoviesData: MoviesState = useSelector((state: MoviesState) => state);
	const { latestMovies, horrorMovies, genres, fetchedData } = allMoviesData;

	const getData = React.useCallback(
		async ({ slug, title, url, action }) => {
			try {
				dispatch(action({ slug: '', title: '', body: {}, isLoading: true }));

				const resp = await axios.get(url);
				const data = { slug, title, body: resp.data, isLoading: false };
				setTimeout(() => {
					dispatch(action(data));
				}, 1000); // temp mock server delay, this api is too freakin fast!
			} catch (error) {
				dispatch(action({ slug, title, body: {}, isLoading: false }));
			}
		},
		[dispatch]
	);

	useEffect(() => {
		moviesData.forEach(data => {
			if (fetchedData.includes(data.slug)) return;

			getData(data);
		});
	}, [fetchedData, getData]);

	return (
		<div>
			<Categories movies={latestMovies} />
			<Categories movies={horrorMovies} />
			<Genres genres={genres} />
		</div>
	);
};

export default Main;
