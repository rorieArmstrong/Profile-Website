import { render } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  global.fetch = jest.fn(() => new Promise(() => {}));
});

afterEach(() => {
  jest.resetAllMocks();
});

test('renders without crashing', () => {
  render(<App />);
});

test('calls the GitConnected API on mount', () => {
  render(<App />);
  expect(fetch).toHaveBeenCalledWith(
    'https://gitconnected.com/v1/portfolio/roriearmstrong'
  );
});
