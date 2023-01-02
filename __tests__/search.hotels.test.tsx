import SearchHotels from '@/pages/hotels';
import React from 'react';
import { renderWithClient } from '@/utils/wrapper';

jest.mock('next/router', () => ({
  useRouter() {
    return ({
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn()
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => null)
    });
  },
}));

const mockObserveFn = () => {
  return {
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn()
  };
};


window.IntersectionObserver = jest
          .fn()
          .mockImplementation(mockObserveFn);

describe('SearchHotels page', () => {
  // test('must render hotel lists', async () => {
  //   const result = renderWithClient(<SearchHotels />);
  //   const hotelList = await result.findByTestId('test-hotel-list');
  //   expect(hotelList).toBeInTheDocument();
  // });
  test('must search form', async () => {
    const result = renderWithClient(<SearchHotels />);
    const searchForm = await result.findByTestId('test-search-form');
    expect(searchForm).toBeInTheDocument();
  });
})
