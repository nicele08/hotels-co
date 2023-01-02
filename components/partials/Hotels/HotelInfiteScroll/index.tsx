import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useInfiniteHotels } from '@/hooks/useHotels';
import DataWidget from '@/components/widgets/DataWidget';
import HotelItemList from './HotelItemList';
import HotelItemListSkeleton from './HotelItemList/HotelItemListSkeleton';

const HotelInfiteScroll = () => {
  const { ref, inView } = useInView();
  const {
    status,
    data,
    error,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteHotels();

  const onFetchNextPage = React.useRef(() => {});
  onFetchNextPage.current = () => {
    fetchNextPage();
  };

  React.useEffect(() => {
    if (inView) {
      onFetchNextPage.current();
    }
  }, [inView]);

  return (
    <DataWidget
      status={status}
      error={error}
      skeleton={<HotelItemListSkeleton />}
    >
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
  );
};

export default HotelInfiteScroll;
