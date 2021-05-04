import { render, screen } from '@testing-library/react';
import ActivityView from './ActivityView';
import store from '../../storev2/store';
import { Provider } from 'react-redux';


test('renders activity selection dropdown list', () => {
    render(<Provider store={store}><ActivityView /></Provider>);

    const activityText = screen.getByText("All Activity");
    expect(activityText).toBeInTheDocument();
});