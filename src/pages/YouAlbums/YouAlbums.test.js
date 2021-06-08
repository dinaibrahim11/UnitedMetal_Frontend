import React from 'react' ;
import {render, cleanup, fireEvent} from '@testing-library/react'
import ReactDOM from 'react-dom' ;
import store from '../../storev2/store';
import { Provider } from 'react-redux';
import YouAlbums from './YouAlbums';

afterEach(cleanup);

it("renders without crashing", ()=> {
    const div = document.createElement("div");
    ReactDOM.render(<Provider store={store}><YouAlbums /></Provider>, div);
})

it ('shows a certain header when camera roll is empty', () => {
    const { getByRole } = render(<Provider store={store}><YouAlbums match={{isCameraRollEmpty:true}} /></Provider>)
    const button = getByRole('button', {name: /New album/i} );

    expect(button).toBeNull();
})


