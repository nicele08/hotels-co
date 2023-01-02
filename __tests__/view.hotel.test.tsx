import ViewHotel from '@/pages/[slug]/[id]';
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

describe('ViewHotel page', () => {
  // test('must render headers', async () => {
  //   const result = renderWithClient(<ViewHotel />);
  //   const heading = await result.findByText('You may like these');
  //   expect(heading).toBeInTheDocument();
  // });
  // test('must render hotel lists', async () => {
  //   const result = renderWithClient(<ViewHotel />);
  //   const emailLabel = await result.findByTestId('test-hotel-list');
  //   expect(emailLabel).toBeInTheDocument();
  // });
  test('must search form', async () => {
    const result = renderWithClient(<ViewHotel />);
    const searchForm = await result.findByTestId('test-search-form');
    expect(searchForm).toBeInTheDocument();
  });
})
