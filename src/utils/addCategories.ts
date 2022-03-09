import { fetchMainCategories } from 'redux/actionCreators';

export const addCategories = [
	{
		slug: 'top-rated',
		name: 'Top rated',
		url: `movie/top_rated`,
		action: fetchMainCategories,
	},
	{
		slug: 'latest',
		name: 'Latest movies',
		url: `movie/now_playing`,
		action: fetchMainCategories,
	},
];
