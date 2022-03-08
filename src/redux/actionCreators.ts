import * as actionTypes from './actionTypes';

const { MAIN_CATEGORIES, FETCH_GENRES } = actionTypes;

export function fetchMainCategories(data: IMovies) {
	const action: MoviesAction = {
		type: MAIN_CATEGORIES,
		data,
	};

	return dispatchAction(action);
}

export function fetchGenres(data: IGenres) {
	const action: MoviesAction = {
		type: FETCH_GENRES,
		data,
	};

	return dispatchAction(action);
}

export function dispatchAction(action: MoviesAction) {
	return (dispatch: DispatchType) => {
		dispatch(action);
	};
}
