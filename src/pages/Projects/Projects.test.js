import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Projects from './Projects';

const mockUser = {
  basics: {
    name: 'Rorie Armstrong',
    label: 'Software Engineer',
    image: '/avatar.png',
    profiles: [],
    summary: 'A developer.',
  },
  projects: [
    {
      name: 'Project Alpha',
      url: 'https://example.com/alpha',
      summary: 'A great project.',
      languages: ['JavaScript', 'TypeScript'],
      libraries: ['React'],
    },
    {
      name: 'Project Beta',
      url: 'https://example.com/beta',
      summary: 'Another project.',
      languages: ['Python'],
      libraries: [],
    },
  ],
};

const renderProjects = () =>
  render(
    <MemoryRouter initialEntries={['/projects']}>
      <Projects user={mockUser} />
    </MemoryRouter>
  );

test('renders all project titles', () => {
  renderProjects();
  expect(screen.getByText('Project Alpha')).toBeInTheDocument();
  expect(screen.getByText('Project Beta')).toBeInTheDocument();
});

test('renders project summaries', () => {
  renderProjects();
  expect(screen.getByText('A great project.')).toBeInTheDocument();
  expect(screen.getByText('Another project.')).toBeInTheDocument();
});

test('renders language and library pills combined', () => {
  renderProjects();
  expect(screen.getByText('JavaScript')).toBeInTheDocument();
  expect(screen.getByText('TypeScript')).toBeInTheDocument();
  expect(screen.getByText('React')).toBeInTheDocument();
  expect(screen.getByText('Python')).toBeInTheDocument();
});

test('project links open in new tab with security attributes', () => {
  renderProjects();
  const links = screen.getAllByRole('link');
  const alphaLink = links.find(l => l.getAttribute('href') === 'https://example.com/alpha');
  expect(alphaLink).toHaveAttribute('target', '_blank');
  expect(alphaLink).toHaveAttribute('rel', 'noopener noreferrer');
});
