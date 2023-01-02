import React from 'react';
import HotelItemSkeleton from '../../HotelItem/HotelItemSkeleton';

const HotelItemListSkeleton = () => {
  const items = Array.from({ length: 12 }, (x, i) => i);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 w-full pb-12">
      {items.map(hotel => (
        <HotelItemSkeleton
          key={`hotel-skeleton-${items.indexOf(hotel)}`}
        />
      ))}
    </div>
  );
};

export default HotelItemListSkeleton;
