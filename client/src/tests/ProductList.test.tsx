import React from 'react';
import { render } from '@testing-library/react';
import Home from '../pages/Home';

test('renders the ProductList', () => {
    const { getByText } = render(<Home />);
    const linkElement = getByText(/home24/i);
    expect(linkElement).toBeInTheDocument();
});
