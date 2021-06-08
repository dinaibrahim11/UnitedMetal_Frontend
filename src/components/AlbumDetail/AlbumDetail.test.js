import React from 'react' ;
import {render, cleanup, fireEvent} from '@testing-library/react'
import ReactDOM from 'react-dom' ;
import store from '../../storev2/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import AlbumDetail from './AlbumDetail';

afterEach(cleanup);

it("renders without crashing", ()=> {
    const div = document.createElement("div");
    ReactDOM.render(<Provider store={store}><Router><AlbumDetail match={{params:{id:1}}}/></Router></Provider>, div);
})

test('action buttons rendering correctly',  () => {
        
    const { getByTestId } = render(<Provider store={store}><Router><AlbumDetail match={{params: {id: 1}}}/></Router></Provider>);
    const shareBtn = getByTestId("share-btn");
    expect(shareBtn).not.toBeNull();

    const downloadBtn = getByTestId("download-btn");
    expect(downloadBtn).not.toBeNull();
})

test('album name and album description render correctly',  () => {
        
    const { getByTestId } = render(<Provider store={store}><Router><AlbumDetail match={{params: {id: 1}}}/></Router></Provider>);
    const albumName = getByTestId("album-name");
    expect(albumName).not.toBeNull();
    
    const albumDescription = getByTestId("album-description");
    expect(albumDescription).not.toBeNull();
})

test('photos count is not equal to zero',  () => {
        
    const { getByTestId } = render(<Provider store={store}><Router><AlbumDetail match={{params: {id: 1}}}/></Router></Provider>);
    const photosCount = getByTestId("photos-count");
    expect(photosCount.textContent).not.toBe("0 photos");
})

