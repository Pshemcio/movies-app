import React from 'react';

type Props = {
	movies: IMovies | null;
};

const Categories: React.FC<Props> = ({ movies }) => {
	return (
		<div>
			{movies &&
				(movies.isLoading ? 'loading' : movies.body.movies && movies.title)}
		</div>
	);
};

export default Categories;
