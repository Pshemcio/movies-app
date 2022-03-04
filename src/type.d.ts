interface IMovie {
	id?: number;
	title: string;
	body: string;
}

type MoviesState = {
	latestMovies: IMovie[];
	horrorMovies: IMovie[];
	genres: IMovie[];
};

type MoviesAction = {
	type: string;
	movie: IMovie;
};

type DispatchType = (args: MoviesAction) => MoviesAction;
