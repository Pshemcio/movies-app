import * as actionTypes from './actionTypes';

const { FETCH_LATEST, FETCH_HORROR, FETCH_GENRES } = actionTypes;

export function fetchLatest(movie: IMovie) {
	const action: MoviesAction = {
		type: FETCH_LATEST,
		movie,
	};

	return dispatchAction(action);
}

export function fetchHorror(movie: IMovie) {
	const action: MoviesAction = {
		type: FETCH_HORROR,
		movie,
	};

	return dispatchAction(action);
}

export function fetchGenres(movie: IMovie) {
	const action: MoviesAction = {
		type: FETCH_GENRES,
		movie,
	};

	return dispatchAction(action);
}

export function dispatchAction(action: MoviesAction) {
	return (dispatch: DispatchType) => {
		dispatch(action);
	};
}
