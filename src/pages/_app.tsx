import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import '../styles/slickDots.css';
import '../styles/defaultStyle.css';

import * as gtag from '../utils/gtag';

import { ChakraProvider, useColorMode, useTheme } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { client } from '../apollo';
import store from '../../store';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { withChakraProvider } from '../styles/provider';

function MyApp({ Component, pageProps }: AppProps) {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                retry: false,
                refetchOnWindowFocus: false,
                refetchOnMount: false,
            },
        },
    });

    const { colorMode } = useColorMode();
    const theme = useTheme();

    const router = useRouter();
    useEffect(() => {
        const handleRouteChange = (url: string) => {
            gtag.pageview(url, window);
        };
        if (typeof window === 'object') {
            router.events.on('routeChangeComplete', handleRouteChange);
            return () => {
                router.events.off('routeChangeComplete', handleRouteChange);
            };
        }
    }, [router.events]);

    return (
        // Provide the client to your App
        // <QueryClientProvider client={queryClient}>
        <ApolloProvider client={client}>
            <Provider store={store}>
                <QueryClientProvider client={queryClient}>
                    <ChakraProvider theme={theme}>
                        {/* <ToggleColorModeButton /> */}

                        <Component {...pageProps} />
                    </ChakraProvider>
                </QueryClientProvider>
            </Provider>
        </ApolloProvider>

        // {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        // </QueryClientProvider>
    );
}

export default withChakraProvider(MyApp);
