import Link from 'next/link';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Rubik } from '@next/font/google';
import SearchForm from '@/components/shared/SearchForm';

const logoFont = Rubik({ subsets: ['latin'] });

const Scaffold = ({
  children,
  zeroResults = false,
}: {
  children: React.ReactNode;
  zeroResults?: boolean;
}) => {
  const { ref, inView } = useInView();
  return (
    <>
      <header
        className={`${
          inView
            ? 'bg-white'
            : 'bg-white sticky shadow transition bg-opacity-95'
        } z-50 flex flex-col items-center px-4 md:px-8 py-3 top-0 w-full`}
      >
        <nav className="flex justify-between items-center space-x-3 max-w-7xl w-full">
          <div className="flex">
            <Link
              href="/"
              data-testid="test-logo"
              className={`font-black tracking-wide text-xl md:text-2xl ${logoFont.className}`}
            >
              Hotels&co
            </Link>
          </div>

          <SearchForm zeroResults={zeroResults} />

          <Link
            href="/login"
            className="rounded-full font-medium p-2 border border-blue-500 md:px-4 hover:bg-blue-500 hover:text-white"
          >
            Login
          </Link>
        </nav>
      </header>
      <div className="invisible" ref={ref} />

      <div className="flex flex-col items-center p-4 md:px-8 bg-white border-gray-200 border-t w-full">
        <main className="w-full flex flex-col items-center max-w-7xl">
          {children}
        </main>
      </div>
      <footer className="z-50 bg-white mt-auto w-full flex flex-col items-center border-t border-gray-200 px-4 md:px-8 py-2 bottom-0 sticky">
        <div className="flex gap-x-4 gap-y-2 md:gap-x-12 flex-wrap justify-between items-center space-x-3 w-full max-w-7xl">
          <div className="flex items-center space-x-3 md:space-x-6">
            <p className="text-slate-800">
              &copy; Hotels&co, {new Date().getFullYear()}.
            </p>
            <p className="text-slate-800">Terms</p>
            <p className="text-slate-800">Privacy</p>
          </div>
          <Link href="/login" className="text-blue-500">
            Login
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Scaffold;
