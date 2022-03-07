import * as actionTypes from './actionTypes';

const { FETCH_LATEST, FETCH_HORROR, FETCH_GENRES } = actionTypes;

export function fetchLatest(data: IMovies) {
	const action: MoviesAction = {
		type: FETCH_LATEST,
		data,
	};

	return dispatchAction(action);
}

export function fetchHorror(data: IMovies) {
	const action: MoviesAction = {
		type: FETCH_HORROR,
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
