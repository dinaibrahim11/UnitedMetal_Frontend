import React from 'react' ;
import {render, cleanup, fireEvent} from '@testing-library/react'
import ReactDOM from 'react-dom' ;
import store from '../../storev2/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import AlbumItem from './AlbumItem';

afterEach(cleanup);



describe("Album Item component", () => {

    test('render AlbumItem with mock props', () => {
        const dummyProps = {
            "id": "QhTpUwY",
            "albumName": "album1",
            "description": "album1_description",
            "photocount": 5,
            "primaryphoto": 2,
            "photos": [
              {
                "id": 2,
                "url": "https://wallpapercave.com/fwp/wp5716268.jpg"
              },
              {
                "id": 4,
                "url": "https://wallpapercave.com/uwp/uwp404136.jpeg"
              },
              {
                "id": 5,
                "url": "https://wallpapercave.com/wp/wp170202.jpg"
              },
              {
                "id": 6,
                "url": "https://wallpapercave.com/wp/wp4202055.jpg"
              },
              {
                "id": 9,
                "url": "https://wallpapercave.com/wp/wp4203600.jpg"
              }
            ]
          };
        const { getByTestId } =  render(<Provider store={store}><Router><AlbumItem {...{dummyProps}}/></Router></Provider>);
        const title = waitForElement(() => getByTestId("albumName"));

        expect(title).not.toBeNull();
    })

})