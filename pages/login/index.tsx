/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Head from 'next/head';
import Scaffold from '@/components/widgets/Scaffold';

const Login = () => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
    /**
     * here there we'll be logic for login
     */
  };
  return (
    <>
      <Head>
        <title>Login - Hotels&Co</title>
      </Head>
      <Scaffold>
        <form
          onSubmit={handleSubmit}
          className="bg-slate-200 rounded-[30px] p-8 max-w-sm flex flex-col w-full"
        >
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="john02@example.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>
          <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300"
              />
            </div>
            <label
              htmlFor="remember"
              className="ml-2 text-sm font-medium text-gray-900"
            >
              Remember me
            </label>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Login
          </button>
        </form>
      </Scaffold>
    </>
  );
};

export default Login;
