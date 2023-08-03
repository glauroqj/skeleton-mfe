import React from 'react';
import { render } from '@testing-library/react';
import { BasicSidemenu } from './sidemenu.composition';

it('renders with the correct text', () => {
  const { getByText } = render(<BasicSidemenu />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
