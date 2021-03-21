import '@/css/styles.css'
import Head from 'next/head'
import { AppProps } from 'next/app'
import create from 'zustand'
import { persist } from 'zustand/middleware'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

type State = {
    counter: number
    increase: () => void
    reset: () => void
}

export const useStore = create<State>(
    persist(
        (set) => ({
            counter: 0,
            increase: () => set((state) => ({ counter: state.counter + 1 })),
            reset: () => set((state) => ({ counter: 0 })),
        }),
        {
            name: 'placeholder-name',
        }
    )
)

const queryClient = new QueryClient()
export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800;900&display=swap"
                    rel="stylesheet"
                />
                <link rel="icon" href="/favicon.ico" />

                <title>PLACEHOLDER</title>

                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta charSet="utf-8" />
                <meta name="description" content="" />
                <meta property="og:title" content="" />
                <meta property="og:type" content="website" />
                <meta property="og:description" content="" />
                <meta property="og:image" content="https://via.placeholder.com/450x200.png" />
                <meta property="og:url" content="" />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>

            <QueryClientProvider client={queryClient}>
                <Component {...pageProps} />
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </>
    )
}
