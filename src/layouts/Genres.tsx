import React from 'react';

type Props = {
	data: IGenres | null;
};

const Genres: React.FC<Props> = ({ data }) => {
	// console.log(data);

	return (
		<div>{data && (data.isLoading ? 'loading' : data.body && data.title)}</div>
	);
};

export default Genres;
