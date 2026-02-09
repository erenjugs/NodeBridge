// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders NodeBridge title', () => {
    render(<App />);
    const titleElement = screen.getByText(/NodeBridge/i);
    expect(titleElement).toBeInTheDocument();
});
