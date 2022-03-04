import axios from 'axios';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { moviesData } from '../utils/mainPageData';

type Props = {};

const Main = (props: Props) => {
	const dispatch: Dispatch<any> = useDispatch();

	const getData = React.useCallback(
		async (title: string, url: string, action) => {
			try {
				const resp = await axios.get(url);
				console.log(`FETCHED_DATA - ${title}`, resp.data);
				dispatch(action(resp.data));
			} catch (error) {
				console.log(error);
			}
		},
		[dispatch]
	);

	const latestMovies: readonly IMovie[] = useSelector(
		(state: MoviesState) => state.latestMovies
	);
	console.log('REDUXMOVIES', latestMovies);

	useEffect(() => {
		moviesData.forEach(data => {
			getData(data.name, data.url, data.action);
		});
	}, [getData]);

	return <div></div>;
};

export default Main;
