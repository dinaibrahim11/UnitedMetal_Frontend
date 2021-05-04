import { render, screen, waitForElement } from '@testing-library/react';
import Comment from './Comment';
import store from '../../../storev2/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';


describe("Comment component", () => {

    test('render Comment with mock props', () => {
        const dummyProps = {
            commentText: "this is a comment",
            commentId: "1",
            postId: "1",
            avatarPhoto: "photolink",
            username: "testUser"
          };
        render(<Provider store={store}><Router><Comment {...dummyProps}/></Router></Provider>);
        const avatar = screen.getByTestId("avatar");

        expect(avatar).not.toBeNull();
    })

})