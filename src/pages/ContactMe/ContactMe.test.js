import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ContactMe from './ContactMe';

const mockUser = {
  basics: {
    name: 'Rorie Armstrong',
    label: 'Software Engineer',
    image: '/avatar.png',
    profiles: [],
    summary: 'A developer.',
  },
};

const renderContactMe = () =>
  render(
    <MemoryRouter initialEntries={['/contactMe']}>
      <ContactMe user={mockUser} />
    </MemoryRouter>
  );

beforeEach(() => {
  global.fetch = jest.fn();
});

afterEach(() => {
  jest.resetAllMocks();
});

test('shows validation error when name is empty', () => {
  renderContactMe();
  fireEvent.click(screen.getByRole('button', { name: /submit/i }));
  expect(screen.getByText(/please enter your name/i)).toBeInTheDocument();
  expect(fetch).not.toHaveBeenCalled();
});

test('shows validation error when email is invalid', () => {
  renderContactMe();
  fireEvent.change(screen.getByLabelText(/^name/i), { target: { value: 'Alice' } });
  fireEvent.change(screen.getByLabelText(/email address/i), { target: { value: 'not-an-email' } });
  fireEvent.click(screen.getByRole('button', { name: /submit/i }));
  expect(screen.getByText(/valid email/i)).toBeInTheDocument();
  expect(fetch).not.toHaveBeenCalled();
});

test('shows validation error when message is empty', () => {
  renderContactMe();
  fireEvent.change(screen.getByLabelText(/^name/i), { target: { value: 'Alice' } });
  fireEvent.change(screen.getByLabelText(/email address/i), { target: { value: 'alice@example.com' } });
  fireEvent.click(screen.getByRole('button', { name: /submit/i }));
  expect(screen.getByText(/please enter a message/i)).toBeInTheDocument();
  expect(fetch).not.toHaveBeenCalled();
});

test('submits with correct payload and clears form on success', async () => {
  global.fetch.mockResolvedValueOnce({
    json: () => Promise.resolve({ status: 'success' }),
  });

  renderContactMe();
  fireEvent.change(screen.getByLabelText(/^name/i), { target: { value: 'Alice' } });
  fireEvent.change(screen.getByLabelText(/email address/i), { target: { value: 'alice@example.com' } });
  fireEvent.change(screen.getByLabelText(/message/i), { target: { value: 'Hello!' } });
  fireEvent.click(screen.getByRole('button', { name: /submit/i }));

  expect(fetch).toHaveBeenCalledWith(
    expect.stringContaining('send'),
    expect.objectContaining({
      method: 'POST',
      body: JSON.stringify({ name: 'Alice', email: 'alice@example.com', message: 'Hello!' }),
    })
  );

  await waitFor(() =>
    expect(screen.getByText(/message sent successfully/i)).toBeInTheDocument()
  );

  expect(screen.getByLabelText(/^name/i).value).toBe('');
  expect(screen.getByLabelText(/email address/i).value).toBe('');
  expect(screen.getByLabelText(/message/i).value).toBe('');
});

test('shows error message when API returns error status', async () => {
  global.fetch.mockResolvedValueOnce({
    json: () => Promise.resolve({ status: 'error' }),
  });

  renderContactMe();
  fireEvent.change(screen.getByLabelText(/^name/i), { target: { value: 'Alice' } });
  fireEvent.change(screen.getByLabelText(/email address/i), { target: { value: 'alice@example.com' } });
  fireEvent.change(screen.getByLabelText(/message/i), { target: { value: 'Hello!' } });
  fireEvent.click(screen.getByRole('button', { name: /submit/i }));

  await waitFor(() =>
    expect(screen.getByText(/something went wrong/i)).toBeInTheDocument()
  );
});

test('shows error message when fetch rejects', async () => {
  global.fetch.mockRejectedValueOnce(new Error('Network error'));

  renderContactMe();
  fireEvent.change(screen.getByLabelText(/^name/i), { target: { value: 'Alice' } });
  fireEvent.change(screen.getByLabelText(/email address/i), { target: { value: 'alice@example.com' } });
  fireEvent.change(screen.getByLabelText(/message/i), { target: { value: 'Hello!' } });
  fireEvent.click(screen.getByRole('button', { name: /submit/i }));

  await waitFor(() =>
    expect(screen.getByText(/something went wrong/i)).toBeInTheDocument()
  );
});

test('button is disabled with loading text during submission', () => {
  global.fetch.mockReturnValueOnce(new Promise(() => {}));

  renderContactMe();
  fireEvent.change(screen.getByLabelText(/^name/i), { target: { value: 'Alice' } });
  fireEvent.change(screen.getByLabelText(/email address/i), { target: { value: 'alice@example.com' } });
  fireEvent.change(screen.getByLabelText(/message/i), { target: { value: 'Hello!' } });
  fireEvent.click(screen.getByRole('button', { name: /submit/i }));

  const btn = screen.getByRole('button');
  expect(btn).toBeDisabled();
  expect(btn).toHaveTextContent(/sending/i);
});
