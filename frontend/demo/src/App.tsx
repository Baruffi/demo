import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';
import React from 'react';
import Routes from './routes';

const theme = createMuiTheme({
	palette: {
		type: 'dark',
		primary: {
			main: purple[500],
		},
		secondary: {
			main: '#11cb5f',
		},
	},
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Routes />
		</ThemeProvider>
	);
}

export default App;
