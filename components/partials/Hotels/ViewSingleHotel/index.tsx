import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import HotelInfiteScroll from '../HotelInfiteScroll';

const ViewSingleHotel = ({ hotel }: { hotel: any }) => {
  const router = useRouter();
  if (!hotel) {
    return null;
  }
  const otherImages: any[] = hotel.otherImages || [];

  const handleBooking = () => {
    /**
     * here there will be a logic to check if user is authenticated
     * then continue booking process.
     */

    // for now user is redirected to the login page
    router.push('/login');
  };

  return (
    <>
      <h1 className="w-full text-2xl">{hotel.name}</h1>
      <p className="text-slate-600 w-full py-2">
        Location: {hotel.city}, {hotel.country}
      </p>
      <div className="flex flex-col md:flex-row gap-2 w-full">
        <div className="relative w-full min-h-[350px] md:max-w-[70vw] md:min-h-[400px]">
          <Image
            src={hotel.image}
            fill
            alt={hotel.name}
            priority
            className="rounded-2xl"
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw"
          />
        </div>
        {otherImages.length > 0 && (
          <div className="hidden md:grid md:grid-cols-2 gap-2">
            {otherImages.slice(0, 4).map(item => (
              <Image
                src={item.url}
                alt={hotel.name}
                loading="lazy"
                width={200}
                height={200}
                className="rounded-2xl w-full min-h-[200px]"
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw"
              />
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-col-reverse md:inline-grid md:grid-cols-2 md:items-start gap-3 md:gap-x-12 py-4 w-full">
        <div className="flex flex-col">
          <h2 className="text-slate-800">
            Hosted by: {hotel.hostedBy}
          </h2>
          <p className="text-slate-600 mt-3 md:mt-6">
            {hotel.description}
          </p>

          <h2 className="text-2xl md:text-3xl mt-4 mb-2 md:mt-6 font-bold">
            Place to stay
          </h2>
          <iframe
            title="Place to stay"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31899.96002622042!2d30.07316975!3d-1.9554034999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca425bad95f0b%3A0x3acd1e34ee1be6a8!2s2000%20Supermarket!5e0!3m2!1sen!2srw!4v1672666282119!5m2!1sen!2srw"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="flex max-w-xs flex-col rounded-[40px] border border-red-400 p-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold">Price</h2>
          <p className="font-bold text-xl md:text-2xl mt-2">
            ${hotel.price}
            <sub>/night</sub>
          </p>

          <button
            type="button"
            onClick={handleBooking}
            className="mt-4 md:mt-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
          >
            Book Now
          </button>
        </div>
      </div>

      <h1 className="text-2xl md:text-4xl font-semibold tracking-wide mt-8 md:mt-12 mb-2 md:mb-4 w-full">
        You may like these
      </h1>
      <HotelInfiteScroll />
    </>
  );
};

export default ViewSingleHotel;
