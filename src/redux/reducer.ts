import * as actionTypes from './actionTypes';

const initialState: MoviesState = {
	fetchedData: [],
	mainPageCategories: [],
	genres: null,
};

const reducer = (
	state: MoviesState = initialState,
	action: MoviesAction
): MoviesState => {
	switch (action.type) {
		case actionTypes.MAIN_CATEGORIES:
			return updateMainCategories(state, action);
		case actionTypes.FETCH_GENRES:
			return {
				...state,
				genres: prepareGenresList(action),
				fetchedData: addToFetched(state, action),
			};
	}
	return state;
};

const updateMainCategories = (
	state: MoviesState = initialState,
	action: MoviesAction
) => {
	const newArray = state.mainPageCategories
		.filter((obj: IMovies) => obj.slug !== action.data.slug)
		.concat(prepareMoviesList(action));

	return {
		...state,
		mainPageCategories: newArray,
		fetchedData: addToFetched(state, action),
	};
};

const addToFetched = (state: MoviesState, action: MoviesAction) => {
	const checkIfFetched =
		action.data.slug && !state.fetchedData.includes(action.data.slug);

	return checkIfFetched
		? [...state.fetchedData, action.data.slug]
		: state.fetchedData;
};

const prepareMoviesList = (action: MoviesAction) => {
	const { slug, name, url, body, isLoading } = action.data;

	const moviesList: IMovies = {
		slug,
		name,
		url,
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
	const { slug, name, url, body: bodyData, isLoading } = action.data;

	const moviesList: IGenres = {
		slug,
		name,
		url,
		body: bodyData.genres,
		isLoading,
	};

	return moviesList;
};

export default reducer;
