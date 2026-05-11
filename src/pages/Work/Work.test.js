import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Experience from './Work';

const mockUser = {
  basics: {
    name: 'Rorie Armstrong',
    label: 'Software Engineer',
    image: '/avatar.png',
    profiles: [],
    summary: 'A developer.',
  },
  work: [
    {
      company: 'Acme Corp',
      position: 'Frontend Developer',
      location: 'New York',
      start: { year: 2021 },
      end: { year: 2023 },
      summary: 'Built user interfaces.',
    },
    {
      company: 'Beta Inc',
      position: 'Junior Developer',
      location: 'Remote',
      start: { year: 2019 },
      end: { year: 2021 },
      summary: 'Wrote backend services.',
    },
  ],
  education: [
    {
      institution: 'State University',
      studyType: 'BSc',
      area: 'Computer Science',
      start: { year: 2015 },
      end: { year: 2019 },
      description: 'Studied algorithms and systems.',
    },
  ],
};

const renderExperience = () =>
  render(
    <MemoryRouter initialEntries={['/experience']}>
      <Experience user={mockUser} />
    </MemoryRouter>
  );

test('renders all work entries', () => {
  renderExperience();
  expect(screen.getAllByText('Acme Corp').length).toBeGreaterThan(0);
  expect(screen.getAllByText('Beta Inc').length).toBeGreaterThan(0);
  expect(screen.getByText('Frontend Developer')).toBeInTheDocument();
  expect(screen.getByText('Junior Developer')).toBeInTheDocument();
});

test('renders education entries', () => {
  renderExperience();
  expect(screen.getAllByText('State University').length).toBeGreaterThan(0);
  expect(screen.getByText(/bsc.*computer science/i)).toBeInTheDocument();
});

test('renders work summaries', () => {
  renderExperience();
  expect(screen.getByText('Built user interfaces.')).toBeInTheDocument();
  expect(screen.getByText('Wrote backend services.')).toBeInTheDocument();
});

test('timeline entries are sorted newest first', () => {
  renderExperience();
  const timelineLabels = screen.getAllByRole('link', { name: /2019|2021|2015/i });
  const years = timelineLabels.map(el => Number(el.querySelector('small')?.textContent));
  const sorted = [...years].sort((a, b) => b - a);
  expect(years).toEqual(sorted);
});

test('renders without IntersectionObserver errors', () => {
  expect(() => renderExperience()).not.toThrow();
});
