import React from 'react';
import PostHeader from './PostHeader';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../../storev2/store';
import { BrowserRouter as Router } from 'react-router-dom';
import PostItem from '../PostItem';

const testProps = {
    username: "Abdelrahman",
    avatar: "www.google.com",
    onClickMore: () => {}
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

it('Username in PostHeader should be Abdelrahman', () => {
    const { getByTestId, getByText } = render(<PostHeader {...testProps} />);
    expect(getByText(/Abdelrahman/i).textContent).toBe("Abdelrahman");

    
})

it('More dropdown list should have share and go to profile buttons', () => {
    const { getByTestId, getByText } = render(<Provider store={store}>
        <Router>
        <PostItem {...postItemProps} >
            <PostHeader />
        </PostItem>
        </Router>
    </Provider>);
    expect(getByText(/Abdelrahman/i).textContent).toBe("Abdelrahman");

    fireEvent.click(getByTestId("moreButton"));
    expect(getByText(/Share/i).textContent).toBe("Share");
    expect(getByText(/Go to profile/i).textContent).toBe("Go to profile");


    fireEvent.click(getByTestId("shareButton"));
    expect(getByText(/Share the photo/i).textContent).toBe("Share the photo");
})