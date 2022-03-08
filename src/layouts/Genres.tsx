import React from 'react';

type Props = {
	data: IGenres | null;
};

const Genres: React.FC<Props> = ({ data }) => {
	return (
		<div>{data && (data.isLoading ? 'loading' : data.body && data.name)}</div>
	);
};

export default Genres;
