import React from 'react';
import HotelItem from '../HotelItem';

const HotelItemList = ({ hotels = [] }: { hotels: any[] }) => {
  return (
    <div data-testid="test-hotel-list" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 w-full pb-12">
      {hotels.map(hotel => (
        <HotelItem key={hotel.id} hotel={hotel} />
      ))}
    </div>
  );
};

export default HotelItemList;
