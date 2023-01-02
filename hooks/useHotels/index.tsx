import axios from 'axios';
import {
  QueryFunction,
  useInfiniteQuery,
  useQuery,
} from '@tanstack/react-query';
import Keys from '@/utils/keys';

interface IFetchResponse {
  count: number;
  results: any[];
  pageInfo: {
    currentPage: number;
    nextPage: number;
    totalPages: number;
  };
}

const fetchHotels: QueryFunction<IFetchResponse> = async ({
  pageParam,
}) => {
  const { page = 1, limit = 8, search } = pageParam || {};
  let url = `${Keys.NEXT_PUBLIC_DEFAULT_API}/hotels?page=${page}&limit=${limit}`;
  if (search) {
    url += `&search=${search}`;
  }
  const { data: parsed } = await axios.get(url);
  const items: any[] = parsed?.items || [];

  return {
    count: parsed.count || 0,
    results: items,
    pageInfo: {
      currentPage: page,
      nextPage: Number(page) + 1,
      totalPages: Math.ceil(
        Number(parsed.count || 1) / Number(limit),
      ),
    },
  };
};

const fetchSingleHotel = async (id: number) => {
  const { data: parsed } = await axios.get(
    `${Keys.NEXT_PUBLIC_DEFAULT_API}/hotels/${id}`,
  );
  const { data: parsedHotelImages } = await axios.get(
    `${Keys.NEXT_PUBLIC_DEFAULT_API}/hotels/${id}/hotelImages`,
  );

  parsed.otherImages = parsedHotelImages;

  return parsed;
};

const useSingleHotel = (id: number) => {
  return useQuery(['hotel', id], () => fetchSingleHotel(id));
};

const useInfiniteHotels = () => {
  return useInfiniteQuery(['hotels'], fetchHotels, {
    getNextPageParam: lastPage =>
      lastPage.pageInfo.totalPages > lastPage.pageInfo.currentPage
        ? {
            page: lastPage.pageInfo.nextPage,
          }
        : undefined,
  });
};

const useSearchHotels = (search: string) => {
  return useInfiniteQuery(
    ['search'],
    params => {
      const pageParam = params.pageParam || {};
      const pageQuery = {
        ...params,
        pageParam: {
          ...pageParam,
          search,
        },
      };
      return fetchHotels(pageQuery);
    },
    {
      getNextPageParam: lastPage =>
        lastPage.pageInfo.totalPages > lastPage.pageInfo.currentPage
          ? {
              page: lastPage.pageInfo.nextPage,
            }
          : undefined,
    },
  );
};

export {
  useSingleHotel,
  useInfiniteHotels,
  fetchHotels,
  fetchSingleHotel,
  useSearchHotels,
};
