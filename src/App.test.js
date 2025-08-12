import { render, screen } from '@testing-library/react';
import App from './App';

test('renders site title', () => {
  render(<App />);
  const headingElement = screen.getByRole('heading', { name: /Hydroponics\.NYC/i });
  expect(headingElement).toBeInTheDocument();
});
