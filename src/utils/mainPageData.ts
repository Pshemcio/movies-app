import { fetchMainCategories } from '../redux/actionCreators';

export const addCategories = [
	{
		slug: 'latest',
		name: 'Latest movies',
		url: `movie/now_playing`,
		action: fetchMainCategories,
	},
];
