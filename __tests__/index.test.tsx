import Index from '@/pages/index';
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

describe('Home page', () => {
  test('must render home page successfully', async () => {
    const result = renderWithClient(<Index />);
    const logoLink = await result.findByTestId('test-logo');
    expect(logoLink).toBeInTheDocument();
    expect(logoLink).toHaveTextContent('Hotels&co');
  });
  test('must search form', async () => {
    const result = renderWithClient(<Index />);
    const searchForm = await result.findByTestId('test-search-form');
    expect(searchForm).toBeInTheDocument();
  });
})
