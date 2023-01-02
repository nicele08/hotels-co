import ky from 'ky-universal';
import { useQuery } from '@tanstack/react-query';
import Keys from '@/utils/keys';

const fetchHotelImages = async (id: number, page = 1, limit = 10) => {
  const parsed: any[] = await ky(
    `${Keys.NEXT_PUBLIC_DEFAULT_API}/hotels/${id}/hotelImages?page=${page}&limit=${limit}`,
  ).json();
  return parsed;
};

const useHotelImages = (limit: number) => {
  return useQuery(['hotelImages', limit], () =>
    fetchHotelImages(limit),
  );
};

export { useHotelImages, fetchHotelImages };
