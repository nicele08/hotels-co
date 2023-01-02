import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Montserrat } from '@next/font/google';
import Scaffold from '@/components/widgets/Scaffold';

const montserrat = Montserrat({ subsets: ['latin'] });

const ServerError = () => {
  const router = useRouter();
  const reload = () => {
    router.reload();
  };
  return (
    <>
      <Head>
        <title>Server Error - Hotels&Co</title>
      </Head>
      <Scaffold>
        <div className="bg-slate-200 rounded-[30px] p-8 py-12 md:py-24 max-w-sm flex flex-col items-center w-full">
          <p className="text-4xl md:text-5xl tracking-wide font-bold">
            500
          </p>
          <p className="text-base text-center font-semibold pt-4">
            Ooops! Something went wrong, try to reload your browser.
            If the error persists feel free to contact me:{' '}
            <a
              href="mailto:celestin.niyindagiriye@andela.com"
              title="Celestin Niyindagiriye"
              className={`text-blue-500 ${montserrat.className}`}
            >
              celestin.niyindagiriye@andela.com
            </a>
          </p>

          <button
            type="button"
            onClick={reload}
            className="bg-blue-500 text-white font-bold px-6 py-3 rounded mt-8"
          >
            Reload
          </button>
        </div>
      </Scaffold>
    </>
  );
};

export default ServerError;
