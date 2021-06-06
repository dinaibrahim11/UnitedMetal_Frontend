import { render, screen, fireEvent, act, cleanup, waitForElement } from '@testing-library/react';
import TagItem from './TagItem';
import store from '../../../storev2/store';
import { Provider } from 'react-redux';

describe("Tag item component", () => {

    test('testing tag item',  () => {
        
        render(<Provider store={store}><TagItem editable={false} photoId="1" tagText="Hello" /></Provider>);

        const activityText = screen.getByTestId("tag-text");
        expect(activityText).toBeInTheDocument();
    })

})

