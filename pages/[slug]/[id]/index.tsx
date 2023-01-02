import React from 'react';
import Head from 'next/head';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import Scaffold from '@/components/widgets/Scaffold';
import { fetchSingleHotel, useSingleHotel } from '@/hooks/useHotels';
import ViewSingleHotel from '@/components/partials/Hotels/ViewSingleHotel';

const SingleHotelPage = () => {
  const router = useRouter();
  const invisibleRef = React.useRef<HTMLDivElement>(null);
  const { data } = useSingleHotel(Number(router.query.id));

  React.useEffect(() => {
    if (router.query.id && invisibleRef.current) {
      invisibleRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [router.query.id]);
  return (
    <>
      <Head>
        <title>{`${data?.name || 'Hotel'} - Hotels&Co`}</title>
      </Head>
      <div ref={invisibleRef} className="invisible" />
      <Scaffold>
        <ViewSingleHotel hotel={data} />
      </Scaffold>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  query,
}: any) => {
  const queryClient = new QueryClient();

  const id = Number(query?.id);

  if (!id) {
    return {
      notFound: true,
    };
  }

  await queryClient.prefetchQuery(['hotel', id], () =>
    fetchSingleHotel(id),
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default SingleHotelPage;
