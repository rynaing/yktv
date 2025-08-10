import { render, screen } from '@testing-library/react';
import App from './App';

test('renders site header', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { name: /Hydroponics\.NYC/i });
  expect(heading).toBeInTheDocument();
});
