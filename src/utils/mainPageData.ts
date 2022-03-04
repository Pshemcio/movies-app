import { fetchLatest, fetchHorror, fetchGenres } from '../store/actionCreators';

export const moviesData = [
	{
		name: 'Latest movies',
		url: `${process.env.REACT_APP_MOVIEDB_URL}movie/now_playing?api_key=${process.env.REACT_APP_MOVIEDB_KEY}`,
		action: fetchLatest,
	},
	{
		name: 'Horror Movies',
		url: `${process.env.REACT_APP_MOVIEDB_URL}discover/movie?api_key=${process.env.REACT_APP_MOVIEDB_KEY}&with_genres=27`,
		action: fetchHorror,
	},
	{
		name: 'Genres',
		url: `${process.env.REACT_APP_MOVIEDB_URL}genre/movie/list?api_key=${process.env.REACT_APP_MOVIEDB_KEY}`,
		action: fetchGenres,
	},
];
