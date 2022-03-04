import * as actionTypes from './actionTypes';

const initialState: MoviesState = {
	latestMovies: [],
	horrorMovies: [],
	genres: [],
};

const reducer = (
	state: MoviesState = initialState,
	action: MoviesAction
): MoviesState => {
	switch (action.type) {
		case actionTypes.FETCH_LATEST:
			const latest: IMovie = {
				id: Math.random(),
				title: action.movie.title,
				body: action.movie.body,
			};
			return {
				...state,
				latestMovies: [latest],
			};
		case actionTypes.FETCH_HORROR:
			const horror: IMovie = {
				id: Math.random(),
				title: action.movie.title,
				body: action.movie.body,
			};
			return {
				...state,
				horrorMovies: [horror],
			};
		case actionTypes.FETCH_GENRES:
			const genres: IMovie = {
				id: Math.random(),
				title: action.movie.title,
				body: action.movie.body,
			};
			return {
				...state,
				genres: [genres],
			};
	}
	return state;
};

export default reducer;
