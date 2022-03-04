import React from 'react';

type Props = {
	genres: IGenres | null;
};

const Genres: React.FC<Props> = ({ genres }) => {
	return <div>{genres && (genres.isLoading ? 'loading' : genres.title)}</div>;
};

export default Genres;
