import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import theme from '../context/theme';

import '../styles/normalize.css';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
