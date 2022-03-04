import * as actionTypes from './actionTypes';

const initialState: MoviesState = {
	fetchedData: [],
	latestMovies: null,
	horrorMovies: null,
	genres: null,
};

const reducer = (
	state: MoviesState = initialState,
	action: MoviesAction
): MoviesState => {
	switch (action.type) {
		case actionTypes.FETCH_LATEST:
			return {
				...state,
				latestMovies: prepareMoviesList(action),
				fetchedData: addToFetched(state, action),
			};
		case actionTypes.FETCH_HORROR:
			return {
				...state,
				horrorMovies: prepareMoviesList(action),
				fetchedData: addToFetched(state, action),
			};
		case actionTypes.FETCH_GENRES:
			return {
				...state,
				genres: prepareGenresList(action),
				fetchedData: addToFetched(state, action),
			};
	}
	return state;
};

const addToFetched = (state: any, action: any) => {
	let fetchedData = state.fetchedData;
	if (action.data.slug) fetchedData = [...state.fetchedData, action.data.slug];

	return fetchedData;
};

const prepareMoviesList = (action: MoviesAction) => {
	const { slug, title, body, isLoading } = action.data;

	const moviesList: IMovies = {
		slug,
		title,
		body: {
			page: body.page,
			total_pages: body.total_pages,
			movies: body.results,
		},
		isLoading,
	};

	return moviesList;
};

const prepareGenresList = (action: MoviesAction) => {
	const { slug, title, body: bodyData, isLoading } = action.data;

	const moviesList: IGenres = {
		slug,
		title,
		body: bodyData.genres,
		isLoading,
	};

	return moviesList;
};

export default reducer;
