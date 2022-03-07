import {
	fetchLatest,
	fetchHorror,
	fetchGenres,
	fetchComedy,
} from '../redux/actionCreators';

export const moviesData = [
	{
		slug: 'latest-movies',
		title: 'Latest movies',
		url: `movie/now_playing`,
		action: fetchLatest,
	},
	{
		slug: 'horror-movies',
		title: 'Horror Movies',
		url: `discover/movie?with_genres=27`,
		action: fetchHorror,
	},
	{
		slug: 'comedy-movies',
		title: 'Comedy Movies',
		url: `discover/movie?with_genres=35`,
		action: fetchComedy,
	},
	{
		slug: 'genres',
		title: 'Genres',
		url: `genre/movie/list`,
		action: fetchGenres,
	},
];
