import axios from 'axios';

interface IMoviesData {
	slug: string;
	name: string;
	url: string;
	action: any;
}

class FetchingService {
	baseUrl: string | undefined;
	apiKey: string | undefined;

	constructor() {
		const { REACT_APP_MOVIEDB_URL, REACT_APP_MOVIEDB_KEY } = process.env;

		this.baseUrl = REACT_APP_MOVIEDB_URL;
		this.apiKey = REACT_APP_MOVIEDB_KEY;
	}

	async getMovies(data: IMoviesData, dispatch: any) {
		const { slug, name, url, action }: IMoviesData = data;
		try {
			dispatch(
				action({ slug: slug, name: name, url: url, body: {}, isLoading: true })
			);
			const actualUrl = `${this.baseUrl}${url}`;

			const resp = await axios.get(actualUrl, {
				headers: {
					Authorization: `Bearer ${this.apiKey}`,
				},
			});

			const data = { slug, name, url, body: resp.data, isLoading: false };
			setTimeout(() => {
				dispatch(action(data));
			}, 400);
		} catch (error) {
			dispatch(action({ slug, name, url, body: {}, isLoading: false }));
		}
	}
}

export default FetchingService;
