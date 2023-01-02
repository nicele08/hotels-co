import PageNotFound from '@/pages/404';
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

describe('NotFound page', () => {  
  test('must have link to back to home', async () => {
    const result = renderWithClient(<PageNotFound />);
    const backHomeLink = await result.findByText('Back Home');
    expect(backHomeLink).toBeInTheDocument();
  });
  test('must have 404 text', async () => {
    const result = renderWithClient(<PageNotFound />);
    const text404 = await result.findByText('404');
    expect(text404).toBeInTheDocument();
  });
})
