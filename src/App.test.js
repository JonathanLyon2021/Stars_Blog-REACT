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

test('About page', () => {
  render(<App />);
  const AboutElement = screen.getElement(/About);
  expect(AboutElement).toBeInTheDocument();
});

test('Registration page', () => {
  render(<App />);
  const RegistrationElement = screen.getElement(/Registiration);
  expect(RegistrationElement).toBeInTheDocument();
});

test('Login page', () => {
  render(<App />);
  const LoginElement = screen.getElement(/Login);
  expect(LoginElement).toBeInTheDocument();
});

test('Blog Details page', () => {
  render(<App />);
  const BlogDetailsElement = screen.getElement(/BlogDetails);
  expect(BlogDetailsElement).toBeInTheDocument();
});

test('Not Found page', () => {
  render(<App />);
  const NotFoundElement = screen.getElement(/NotFound);
  expect(NotFoundElement).toBeInTheDocument();
});
