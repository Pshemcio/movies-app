export const mainTheme = {
	colors: {
		white: '#fff',
		black: '#000',
		primary: {
			main: '#fff',
			hover: 'rgba(255, 255, 255, 0.75)',
		},
		secondary: {
			main: 'rgba(109,109,110,0.7)',
			hover: 'rgba(109,109,110,0.4)',
		},
		tertiary: {
			main: '#141414',
		},
	},
	typography: {
		primary: 'Poppins, Roboto, Helvetica, sans-serif',
		secondary: 'Montserrat, Roboto, Ubuntu, sans-serif',
	},
	breakpoints: {
		xs: `(min-width: 512px)`,
		sm: `(min-width: 768px)`,
		smP: `(orientation: portrait) and (min-width: 768px)`,
		md: `(min-width: 992px)`,
		lg: `(min-width: 1200px)`,
		xl: `(min-width: 1440px)`,
	},
};
