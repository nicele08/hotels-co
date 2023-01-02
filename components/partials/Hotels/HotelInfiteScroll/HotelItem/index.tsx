import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { convertToSlug } from '@/utils/helpers';

const HotelItem = ({ hotel }: { hotel: Record<string, any> }) => {
  return (
    <Link
      href={`/${convertToSlug(hotel.name)}/${hotel.id}`}
      className="group flex flex-col rounded-2xl w-full"
    >
      <div className="relative w-full min-h-[250px]">
        <Image
          src={hotel.image}
          fill
          alt={hotel.name}
          loading="lazy"
          placeholder="blur"
          blurDataURL={hotel.image}
          className="rounded-2xl group-hover:drop-shadow"
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              25vw"
        />
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col py-2">
          <h1
            key={hotel.id}
            className="text-base md:text-xl font-bold truncate"
          >
            {hotel.name}
          </h1>
          <p className="text-gray-600 truncate">{hotel.hostedBy}</p>
        </div>
        <p className="font-bold">${hotel.price}</p>
      </div>
    </Link>
  );
};

export default HotelItem;
