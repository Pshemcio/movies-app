import * as actionTypes from './actionTypes';

const initialState: MoviesState = {
	fetchedData: [],
	latestMovies: null,
	horrorMovies: null,
	comedyMovies: null,
	genres: null,
};

const reducer = (
	state: MoviesState = initialState,
	action: MoviesAction
): MoviesState => {
	switch (action.type) {
		case actionTypes.FETCH_LATEST:
			return test(state, action, 'latestMovies');
		case actionTypes.FETCH_HORROR:
			return test(state, action, 'horrorMovies');
		case actionTypes.FETCH_COMEDY:
			return test(state, action, 'comedyMovies');
		case actionTypes.FETCH_GENRES:
			return {
				...state,
				genres: prepareGenresList(action),
				fetchedData: addToFetched(state, action),
			};
	}
	return state;
};

const test = (
	state: MoviesState = initialState,
	action: MoviesAction,
	key: string
) => {
	return {
		...state,
		[key]: prepareMoviesList(action),
		fetchedData: addToFetched(state, action),
	};
};

const addToFetched = (state: any, action: any) => {
	const checkIfFetched =
		action.data.slug && !state.fetchedData.includes(action.data.slug);

	return checkIfFetched
		? [...state.fetchedData, action.data.slug]
		: state.fetchedData;
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
