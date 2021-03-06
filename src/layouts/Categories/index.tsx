import React from 'react';
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import { CategoriesContainer, SlideContainer, SlideMask } from './styles';
import CategoriesLoader from 'components/CategoriesLoader';

type Props = {
	data: IMovies | null;
	toggleModal: any;
};

const Categories: React.FC<Props> = ({ data, toggleModal }) => {
	return (
		<CategoriesContainer>
			{data &&
				(data.isLoading ? (
					<CategoriesLoader />
				) : (
					data.body.movies && (
						<div>
							<h2>{data.name}</h2>
							<Swiper
								modules={[Navigation, A11y]}
								slidesPerView={2}
								slidesPerGroup={2}
								navigation
								loop
								spaceBetween={6}
								breakpoints={{
									440: {
										slidesPerView: 3,
										slidesPerGroup: 3,
									},
									640: {
										slidesPerView: 4,
										slidesPerGroup: 4,
									},
									1024: {
										slidesPerView: 5,
										slidesPerGroup: 5,
										speed: 600,
										allowTouchMove: false,
									},
									1366: {
										slidesPerView: 8,
										slidesPerGroup: 8,
										speed: 800,
										allowTouchMove: false,
									},
								}}>
								{data.body.movies.map(movie => {
									const { id, poster_path, release_date, title, vote_average } =
										movie;
									return (
										<SwiperSlide key={id}>
											<SlideContainer onClick={() => toggleModal(movie)}>
												<img
													alt={title}
													src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
												/>
												<SlideMask>
													<h4>{title}</h4>
													{release_date && <p>{release_date}</p>}
													<p>Rating: {vote_average ? vote_average : 'N/A'}</p>
												</SlideMask>
											</SlideContainer>
										</SwiperSlide>
									);
								})}
							</Swiper>
						</div>
					)
				))}
		</CategoriesContainer>
	);
};

export default Categories;
