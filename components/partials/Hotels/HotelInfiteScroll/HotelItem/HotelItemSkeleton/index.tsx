import React from 'react';

const HotelItemSkeleton = () => {
  return (
    <div className="group flex flex-col rounded-2xl w-full">
      <div className="relative w-full min-h-[250px] rounded-2xl bg-gray-200 animate-pulse" />
      <div className="flex flex-col">
        <div className="flex flex-col py-2">
          <div className="text-base md:text-xl font-bold truncate bg-gray-200 animate-pulse py-2" />
          <div className="text-gray-600 truncate bg-gray-200 animate-pulse py-2 mt-1" />
        </div>
        <div className="font-bold bg-gray-200 animate-pulse py-2" />
      </div>
    </div>
  );
};

export default HotelItemSkeleton;
