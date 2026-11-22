import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders the hero headline and main sections', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Hi, I'm Syauqi/i);
  expect(screen.getByRole('heading', { name: /selected work/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /where i've worked/i })).toBeInTheDocument();
});

test('skill tabs switch the visible panel', () => {
  render(<App />);
  fireEvent.click(screen.getByRole('tab', { name: 'Web' }));
  expect(screen.getByRole('tabpanel')).toHaveTextContent(/Laravel back-ends/i);
});

test('project filter shows only matching projects', () => {
  render(<App />);
  fireEvent.click(screen.getByRole('button', { name: 'Mobile' }));
  expect(screen.getByRole('heading', { name: 'Herbify Telemedicine' })).toBeInTheDocument();
  expect(screen.queryByRole('heading', { name: 'Virulearn' })).not.toBeInTheDocument();
});

test('featured project spotlight links to the live game', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: 'Type Beat' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /play type beat/i })).toHaveAttribute('href', 'https://tybeat.fajrsyauqi.com');
});
