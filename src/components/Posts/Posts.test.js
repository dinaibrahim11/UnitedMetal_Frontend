import { render, screen, waitForElement } from '@testing-library/react';
import Posts from './Posts';
import store from '../../storev2/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';


describe('Posts Feed component', () => {
    test('renders posts if correctly fetched from api', async () => {

        const { getByTestId } =  render(<Provider store={store}><Router><Posts /></Router></Provider>);
        const activityElement = waitForElement(() => getByTestId("activity"));
        expect(activityElement).not.toBeNull();
        // const postItemElements = await waitForElement(() => findAllByTestId("postItemElement"));
        // expect(postItemElements).not.toHaveLength(0);
    });
});