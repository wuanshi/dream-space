// import '@/styles/globals.css'
import type { AppProps } from "next/app";
import useSWR, { SWRConfig } from "swr";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        refreshInterval: 3000,
        fetcher: (resource, init) =>
          fetch(resource, init).then((res) => res.json()),
      }}
    >
      <Component {...pageProps} />
    </SWRConfig>
  );
}
