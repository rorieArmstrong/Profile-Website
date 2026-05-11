import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import TopNav from './index';

const renderTopNav = (path = '/') =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <TopNav />
    </MemoryRouter>
  );

test('renders all nav links', () => {
  renderTopNav();
  expect(screen.getByRole('link', { name: /experience/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /projects/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /contact me/i })).toBeInTheDocument();
});

test('hamburger toggles aria-expanded state', () => {
  renderTopNav();
  const hamburger = screen.getByRole('button', { hidden: true });

  expect(hamburger).toHaveAttribute('aria-expanded', 'false');
  fireEvent.click(hamburger);
  expect(hamburger).toHaveAttribute('aria-expanded', 'true');
  fireEvent.click(hamburger);
  expect(hamburger).toHaveAttribute('aria-expanded', 'false');
});

test('mobile menu appears after hamburger click', () => {
  renderTopNav();
  expect(screen.queryByText('01')).not.toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { hidden: true }));
  expect(screen.getByText('01')).toBeInTheDocument();
});

test('clicking a mobile nav link closes the menu', () => {
  renderTopNav('/');
  const hamburger = screen.getByRole('button', { hidden: true });
  fireEvent.click(hamburger);
  expect(hamburger).toHaveAttribute('aria-expanded', 'true');

  fireEvent.click(screen.getByText('01'));
  expect(hamburger).toHaveAttribute('aria-expanded', 'false');
});

test('renders logo link', () => {
  renderTopNav();
  expect(screen.getByRole('link', { name: '.R' })).toBeInTheDocument();
});
