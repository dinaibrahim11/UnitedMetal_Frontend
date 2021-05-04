import { render, waitForElement } from '@testing-library/react';
import PostHeader from './PostHeader';


describe("Post Header component", () => {

    test('render PostHeader with mock props', () => {
        const dummyProps = {
            username: "testName",
            avatar: "<link>",
            onClickMore: () => {}
          };
        const { getByTestId } =  render(<PostHeader {...{dummyProps}}/>);
        const header = waitForElement(() => getByTestId("postHeader"));

        expect(header).not.toBeNull();
    })

})