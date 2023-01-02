import Home from '@/pages/index'
import PageNotFound from '@/pages/404'
import { renderWithClient } from '@/utils/wrapper'
import ServerError from '@/pages/500';

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

describe('Unchanged pages', () => {
  it('renders index page unchanged', () => {
    const { container } = renderWithClient(<Home />)
    expect(container).toMatchSnapshot()
  })
  it('renders notFoundPage(404) page unchanged', () => {
    const { container } = renderWithClient(<PageNotFound />)
    expect(container).toMatchSnapshot()
  })
  it('renders serverError(500) page unchanged', () => {
    const { container } = renderWithClient(<ServerError />)
    expect(container).toMatchSnapshot()
  })
});
