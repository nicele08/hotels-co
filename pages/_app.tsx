import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';

const ProgressBar = dynamic(
  () => import('@/components/shared/ProgessBar'),
  {
    ssr: false,
  },
);

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Component {...pageProps} />
      <ProgressBar />
    </>
  );
};

export default App;
