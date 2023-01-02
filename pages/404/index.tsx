import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Scaffold from '@/components/widgets/Scaffold';

const PageNotFound = () => {
  return (
    <>
      <Head>
        <title>Page Not Found - Hotels&Co</title>
      </Head>
      <Scaffold>
        <div className="bg-slate-200 rounded-[30px] p-8 py-12 md:py-24 max-w-sm flex flex-col items-center w-full">
          <p className="text-4xl md:text-5xl tracking-wide font-bold">
            404
          </p>
          <p className="text-base text-center font-semibold pt-4">
            This is not the web page you are looking for.
          </p>

          <Link
            href="/"
            className="bg-blue-500 text-white font-bold px-6 py-3 rounded mt-8"
          >
            Back Home
          </Link>
        </div>
      </Scaffold>
    </>
  );
};

export default PageNotFound;
