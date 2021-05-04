import { render, screen } from '@testing-library/react';
import PostPhoto from './PostPhoto';
import { BrowserRouter as Router } from 'react-router-dom';



    test('render PostPhoto with mock props', () => {
        const dummyProps = {
            postId: "1",
            imageUrl: "<link>",
            description: "this is a description"
          };
        render(<Router><PostPhoto {...dummyProps}/></Router>);
        const descr = screen.getByTestId("description");

        expect(descr).not.toBeNull();
    })

