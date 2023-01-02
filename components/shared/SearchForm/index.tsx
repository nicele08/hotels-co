/* eslint-disable jsx-a11y/label-has-associated-control */
import { useRouter } from 'next/router';
import React from 'react';

const SearchForm = ({ zeroResults = false }) => {
  const router = useRouter();
  const [search, setSearch] = React.useState('');

  const searchQuery = router.query.search;

  React.useEffect(() => {
    if (typeof searchQuery === 'string') {
      setSearch(searchQuery);
    }
  }, [searchQuery]);

  const handleSearch = (event: any) => {
    event.preventDefault();
    if (!search.trim()) {
      return;
    }
    router.push(`/hotels?search=${search}`).then(() => {
      if (!zeroResults) {
        router.reload();
      }
    });
  };

  const onChangeInput = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(target.value);
  };
  return (
    <form
      onSubmit={handleSearch}
      data-testid="test-search-form"
      className="flex relative flex-grow sm:px-12 md:px-24"
    >
      <label
        htmlFor="default-search"
        className="text-sm font-medium text-gray-900 sr-only"
      >
        Search
      </label>
      <div className="flex relative flex-grow">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="outline-none block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Search..."
          onChange={onChangeInput}
          value={search}
        />
        <button
          type="submit"
          className="hidden md:block text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
