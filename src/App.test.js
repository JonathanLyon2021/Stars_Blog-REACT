import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('create page', () => {
  render(<App />);
  const CreateElement = screen.getElement(/Create);
  expect(CreateElement).toBeInTheDocument();
});
