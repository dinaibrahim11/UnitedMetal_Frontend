import { getAllByTestId, render, screen, waitFor, waitForElement } from '@testing-library/react';
import Posts from './Posts';
import store from '../../storev2/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';


describe('Posts Feed component', () => {
    test('renders posts if correctly fetched from api', async () => {

        const { getByTestId } =  render(<Provider store={store}><Router><Posts /></Router></Provider>);
        const activityElement =  waitForElement(() => getByTestId("activity")); 
        expect(activityElement).not.toBeNull();
        
    })

    test('posts length is greater than 0', async () => {
        render(<Provider store={store}><Router><Posts /></Router></Provider>);
        const postElements =  waitFor(() => screen.getAllTestId("postItemElement"));
        expect(postElements.length).not.toBeNull();
    })
});