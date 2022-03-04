import { ThemeProvider } from 'styled-components';
import './App.css';
import Router from './routes/Routes';
import { GlobalStyle } from './settings';
import { mainTheme } from './settings/theme';

function App() {
	return (
		<ThemeProvider theme={mainTheme}>
			<GlobalStyle />
			<Router />
		</ThemeProvider>
	);
}

export default App;
