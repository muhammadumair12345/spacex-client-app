import React from 'react';
import { render, screen } from '@testing-library/react';
import SpaceXApp from './SpaceXApp';

test('renders learn react link', () => {
  render(<SpaceXApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
