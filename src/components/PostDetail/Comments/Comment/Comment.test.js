import { render, screen, fireEvent, act, cleanup, waitForElement } from '@testing-library/react';
import Comment from './Comment';
import store from '../../storev2/store';
import { Provider } from 'react-redux';

describe("Commment component", () => {

    test('testing input form',  () => {
        
        const { getByTestId } = render(<Provider store={store}>
            <Comment 
                photoId="1"
                commentText="Test comment"
                token="0"
                commentId="1"
                date="2020-05-01"
            />
            </Provider>);
        const commentText = getByTestId("comment-text");
        expect(commentText.textContent).toBe("Test comment")


    })

})

