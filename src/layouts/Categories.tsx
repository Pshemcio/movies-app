import React from 'react';

type Props = {
	test: IMovies | null;
};

const Categories: React.FC<Props> = ({ test }) => {
	return <div>{test && test.title}</div>;
};

export default Categories;
