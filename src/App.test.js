import { render, screen, within } from '@testing-library/react';
import App from './App';

test('renders the home page and header', () => {
  render(<App />);
  expect(screen.getByRole('main')).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /inicio/i })).toBeInTheDocument();
  const header = screen.getByRole('banner');
  expect(within(header).getByText('Multicine')).toBeInTheDocument();
  expect(within(header).queryByText('Cartelera')).not.toBeInTheDocument();
  expect(screen.queryByRole('link')).not.toBeInTheDocument();
});
