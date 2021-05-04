import { render, screen, waitForElement } from '@testing-library/react';
import PostItem from './PostItem';
import store from '../../storev2/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';



describe("Post Item component", () => {

    test('render PostItem with mock props', () => {
        const dummyProps = {
            id: 1,
            ownerId: "abdelrahman1999",
            username: "Abdelrahman",
            imageUrl: "https://images.template.net/wp-content/uploads/2016/05/19130256/Beach-Resort-Sunset-HD-Wallpaper-Background.jpg",
            avatarPhoto: "https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg",
            externalShareLink: "https://img.youm7.com/large/20190117025809589.jpg",
            caption: "This is a cool caption",
            viewType: "All",
            numFaves: 45,
            numComments: 1,
            comments: [
              {
                postId: 1,
                commentId: 7,
                commentText: "cool!!!",
                username: "selene",
                avatarPhoto: "https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png",
                dateCommented: "February 31 2020"
              }
            ]
          };
        const { getByTestId } =  render(<Provider store={store}><Router><PostItem {...{dummyProps}}/></Router></Provider>);
        const header = waitForElement(() => getByTestId("postHeader"));

        expect(header).not.toBeNull();
    })

})