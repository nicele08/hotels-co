import React from 'react';
import Head from 'next/head';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import Scaffold from '@/components/widgets/Scaffold';
import { fetchHotels, useSearchHotels } from '@/hooks/useHotels';
import HotelItemListSkeleton from '@/components/partials/Hotels/HotelInfiteScroll/HotelItemList/HotelItemListSkeleton';
import HotelItemList from '@/components/partials/Hotels/HotelInfiteScroll/HotelItemList';
import DataWidget from '@/components/widgets/DataWidget';

const SingleHotelPage = () => {
  const router = useRouter();
  const { ref, inView } = useInView();
  const {
    status,
    data,
    error,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useSearchHotels(`${router.query.search}`);

  const onFetchNextPage = React.useRef(() => {});
  onFetchNextPage.current = () => {
    fetchNextPage();
  };

  React.useEffect(() => {
    if (inView) {
      onFetchNextPage.current();
    }
  }, [inView]);

  const count = data?.pages?.length
    ? data?.pages[Number(data?.pages?.length) - 1]?.count
    : 0;

  return (
    <>
      <Head>
        <title>Search place to stay - Hotels&Co</title>
      </Head>
      <Scaffold zeroResults={!!count}>
        <DataWidget
          status={status}
          error={error}
          skeleton={<HotelItemListSkeleton />}
        >
          <p className="w-full text-2xl md:text-3xl font-medium tracking-wide pb-2">
            Results: {count}
          </p>
          {!count && !isFetching && !isFetchingNextPage && (
            <div className="flex flex-col">
              <p className="text-slate-600">
                No hotel found, make another search or go{' '}
                <Link href="/" className="text-blue-500 font-bold">
                  Home
                </Link>{' '}
                start booking.
              </p>
            </div>
          )}
          {data?.pages?.map(page => (
            <HotelItemList
              key={page.pageInfo.currentPage}
              hotels={page.results}
            />
          ))}
          {isFetchingNextPage || isFetching ? (
            <HotelItemListSkeleton />
          ) : (
            <button
              type="button"
              ref={ref}
              onClick={() => fetchNextPage()}
              disabled={!hasNextPage || isFetchingNextPage}
              className="invisible bg-blue-500 rounded text-white px-2 py-1 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-slate-600 font-medium"
            >
              {hasNextPage ? 'Load more' : 'Nothing more to load'}
            </button>
          )}
        </DataWidget>
      </Scaffold>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  query,
}: any) => {
  const queryClient = new QueryClient();

  if (!query.search) {
    return {
      notFound: true,
    };
  }

  await queryClient.prefetchQuery(['search'], params => {
    const pageParam = params.pageParam || {};
    const pageQuery = {
      ...params,
      pageParam: {
        ...pageParam,
        search: query.search,
      },
    };
    return fetchHotels(pageQuery);
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default SingleHotelPage;
