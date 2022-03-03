import axios from 'axios';
import { ThemeProvider } from 'styled-components';
import './App.css';
import Button from './components/Button';
import { mainTheme } from './utils/theme';

function App() {
	const getMovies = async (e: React.FormEvent) => {
		e.preventDefault();
		const url = `${process.env.REACT_APP_MOVIEDB_URL}movie/now_playing?api_key=${process.env.REACT_APP_MOVIEDB_KEY}`;
		const resp = await axios.get(url);
		console.log('latest', resp.data);

		const url2 = `${process.env.REACT_APP_MOVIEDB_URL}genre/movie/list?api_key=${process.env.REACT_APP_MOVIEDB_KEY}`;
		const resp2 = await axios.get(url2);
		console.log('genres', resp2.data);

		const url3 = `${process.env.REACT_APP_MOVIEDB_URL}discover/movie?api_key=${process.env.REACT_APP_MOVIEDB_KEY}&with_genres=27`;
		const resp3 = await axios.get(url3);
		console.log('horrors', resp3.data);
	};

	return (
		<ThemeProvider theme={mainTheme}>
			<div className='App'>
				<header className='App-header'>
					<form onSubmit={e => getMovies(e)}>
						<Button color='primary'>Siema</Button>
					</form>
				</header>
			</div>
		</ThemeProvider>
	);
}

export default App;
