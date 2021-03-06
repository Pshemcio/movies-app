interface IAction {
	slug: string;
	name: string;
	url: string;
	body: any;
	isLoading?: boolean;
}

interface IMovie {
	adult: boolean;
	backdrop_path: string;
	genre_ids: number[];
	id: number;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	release_date: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
}

interface IMovies {
	slug: string;
	name: string;
	url: string;
	body: {
		page: number;
		total_pages: number;
		movies: IMovie[];
	};
	isLoading?: boolean;
}

interface IGenre {
	id: number;
	name: string;
}

interface IGenres {
	slug: string;
	name: string;
	url: string;
	body: IGenre[];
	isLoading?: boolean;
}

type MoviesState = {
	fetchedData: string[];
	mainPageCategories: IMovies[];
	genres: any;
};

type MoviesAction = {
	type: string;
	data: IAction;
};

type DispatchType = (args: MoviesAction) => MoviesAction;
