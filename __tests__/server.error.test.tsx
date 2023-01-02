import ServerError from '@/pages/500';
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

describe('ServerErorr(500) page', () => {  
  test('must have reload button', async () => {
    const result = renderWithClient(<ServerError />);
    const reloadButton = await result.findByText('Reload');
    expect(reloadButton).toBeInTheDocument();
  });
  test('must have 500 text', async () => {
    const result = renderWithClient(<ServerError />);
    const text500 = await result.findByText('500');
    expect(text500).toBeInTheDocument();
  });
})
