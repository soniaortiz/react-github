import React from 'react';
import {render } from '@testing-library/react';
import App from './App';

test('renders the view', async () => {
  const { getByText, findByAltText } = render(<App />);
  const titleElement = getByText(/GitHub Search/);
  expect(titleElement).toBeInTheDocument();

  const searchBar = await findByAltText('searchBar')
  expect(searchBar).toBeInTheDocument()
  
});
