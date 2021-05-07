import React from 'react';
import PostFooter from './PostFooter';
import PostItem from '../PostItem';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../../storev2/store';
import { BrowserRouter as Router } from 'react-router-dom';


const testProps = {
    setIsFaved: () => {},
    handleFave: () => {},
    postId: 1,
    isFaved: false,
    countFaves: 45,
    comments: []
}

const postItemProps = {
    id: 1,
    postId: 1,
    username: "Abdelrahman",
    avatarPhoto: "www.google.com",
    imageUrl: "www.google.com",
    caption: "this is a test caption",
    numFaves: 45,
    numComments: 10
}

afterEach(cleanup);

it('Number of likes is initially 45', () => {
    const { getByTestId, getByText } = render(<Provider store={store}><PostFooter {...testProps} /></Provider>);
    
    expect(getByText(/45/i).textContent).toBe("45");
})

it('Number of countFaves is now 46 after click', () => {
    const { getByTestId, getByText } = render(<Provider store={store}>
        <Router>
        <PostItem {...postItemProps} >
            <PostFooter />
        </PostItem>
        </Router>
    </Provider>);
    
    expect(getByText(/45/i).textContent).toBe("45");

    fireEvent.click(getByTestId("faveEmpty"));

    expect(getByText(/46/i).textContent).toBe("46");
})