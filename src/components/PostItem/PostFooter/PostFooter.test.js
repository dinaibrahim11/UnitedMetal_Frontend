import { render, screen } from '@testing-library/react';
import PostFooter from './PostFooter';
import store from '../../../storev2/store';
import { Provider } from 'react-redux';


describe('Post Footer component', () => {
    test('renders the numbers of favorites after click', () => {
        render(
            <Provider store={store}>
                <PostFooter countFaves={0} comments={[]} postId={"1"} />
            </Provider>
        );

        // const countFaves = screen.getByText("0");
        // expect(countFaves).toBeInTheDocument();
    })
})