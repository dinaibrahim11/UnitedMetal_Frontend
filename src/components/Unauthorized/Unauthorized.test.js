import { render, screen } from '@testing-library/react';
import Unauthorized from './Unauthorized';


test('renders activity selection dropdown list', () => {
    render(<Unauthorized />);

    const unauthorizedText = screen.getByText("Access Forbidden");
    expect(unauthorizedText).toBeInTheDocument();
});