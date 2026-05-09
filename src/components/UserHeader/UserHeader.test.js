import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import UserHeader from './UserHeader';

jest.mock('react-lottie', () => () => <div data-testid="lottie-animation" />);

const mockUser = {
  basics: {
    name: 'Rorie Armstrong',
    label: 'Software Engineer',
    image: '/avatar.png',
    profiles: [
      { network: 'GitHub', url: 'https://github.com/test' },
      { network: 'LinkedIn', url: 'https://linkedin.com/test' },
    ],
    summary: 'A developer.',
  },
};

const renderUserHeader = (path = '/') =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <UserHeader user={mockUser} />
    </MemoryRouter>
  );

test('renders nothing when user is null', () => {
  const { container } = render(
    <MemoryRouter>
      <UserHeader user={null} />
    </MemoryRouter>
  );
  expect(container).toBeEmptyDOMElement();
});

test('renders full hero layout on home route', () => {
  renderUserHeader('/');
  expect(screen.getByTestId('lottie-animation')).toBeInTheDocument();
  expect(screen.getByText('Software Engineer')).toBeInTheDocument();
  expect(screen.getByText('A developer.')).toBeInTheDocument();
});

test('renders compact card on non-home route', () => {
  renderUserHeader('/projects');
  expect(screen.getByText('Rorie Armstrong')).toBeInTheDocument();
  expect(screen.getByText('Software Engineer')).toBeInTheDocument();
  expect(screen.queryByTestId('lottie-animation')).not.toBeInTheDocument();
});

test('profile image has descriptive alt text', () => {
  renderUserHeader('/projects');
  expect(screen.getByAltText('Profile-Picture')).toBeInTheDocument();
});

test('profile links (skipping first) open in new tab', () => {
  renderUserHeader('/');
  const linkedInLink = screen.getByRole('link', { name: /linkedin/i });
  expect(linkedInLink).toHaveAttribute('target', '_blank');
  expect(linkedInLink).toHaveAttribute('rel', expect.stringContaining('noopener'));
});

test('first profile is skipped in the links list', () => {
  renderUserHeader('/');
  const links = screen.getAllByRole('link');
  const githubLink = links.find(l => l.getAttribute('href') === 'https://github.com/test');
  expect(githubLink).toBeUndefined();
});
