import { render, screen, fireEvent, act, cleanup, waitForElement } from '@testing-library/react';
import NewComment from './NewComment';
import store from '../../../storev2/store';
import { Provider } from 'react-redux';

describe("New Commment component", () => {

    test('testing input form',  () => {
        
        render(<Provider store={store}><NewComment postId="1"/></Provider>);
        const inputBox = screen.getByRole("textbox");
        expect(inputBox).not.toBeNull();

        fireEvent.change(inputBox, { target: {value: "testText"} });
        expect(inputBox.value).toBe("testText");

    })

})

