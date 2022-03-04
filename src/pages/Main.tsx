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

	const getData = React.useCallback(
		async ({ slug, title, url, action }) => {
			try {
				dispatch(
					action({ slug: 'sfsf', title: 'sfs', body: {}, isLoading: true })
				);

				const resp = await axios.get(url);
				const data = { slug, title, body: resp.data, isLoading: false };
				setTimeout(() => {
					dispatch(action(data));
				}, 1000); // mock server delay, this api is to freakin fast!
			} catch (error) {
				console.log(error);
			}
		},
		[dispatch]
	);

	const allMoviesData: MoviesState = useSelector((state: MoviesState) => state);
	console.log('REDUXMOVIES', allMoviesData);

	useEffect(() => {
		moviesData.forEach(data => {
			getData(data);
		});
	}, [getData]);

	return (
		<div>
			<Categories test={allMoviesData.latestMovies} />
			<Categories test={allMoviesData.horrorMovies} />
			<Genres test={allMoviesData.genres} />
		</div>
	);
};

export default Main;
