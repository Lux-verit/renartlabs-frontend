import { AppProps } from 'next/app';
import '@/styles/global.css';
import Head from "next/head";
import "react";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Footer from "../components/Layout/Footer";
import Nav from "../components/Layout/Nav";

const queryClient = new QueryClient();
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
        <Head>
          <title>DogFinity Discounts</title>
        </Head>
            <main className="flex flex-col justify-start">
              <Nav />

              <Component {...pageProps} />
            </main>

            <Footer />

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
