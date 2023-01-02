import Login from '@/pages/login';
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

describe('Login page', () => {  
  test('must have an email', async () => {
    const result = renderWithClient(<Login />);
    const emailLabel = await result.findByTestId('test-login-email');
    expect(emailLabel).toBeInTheDocument();
    expect(emailLabel).toHaveTextContent('Email');
  });
  test('must have password', async () => {
    const result = renderWithClient(<Login />);
    const passwordLabel = await result.findByTestId('test-login-password');
    expect(passwordLabel).toBeInTheDocument();
    expect(passwordLabel).toHaveTextContent('Password');
  });
})
