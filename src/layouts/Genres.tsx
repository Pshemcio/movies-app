import React from 'react';

type Props = {
	test: IGenres | null;
};

const Genres: React.FC<Props> = ({ test }) => {
	return <div>{test && test.title}</div>;
};

export default Genres;
