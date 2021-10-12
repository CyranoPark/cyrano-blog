import { AppProps } from 'next/app';

import '../styles/normalize.css';

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

export default MyApp;
