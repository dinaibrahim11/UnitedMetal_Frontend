import React from 'react'
import YouMain from '../YouMain/YouMain'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux';
import store from '../../storev2/store';

it ('Renders toolbar correctly', () => {
    const match = {params : { id: 1 } };
    const {getByText} = render(<Provider store={store}><YouMain match={match} currentTab='about'/></Provider>)
    expect(getByText('About')).toBeTruthy()
    expect(getByText('Photostream')).toBeTruthy()
    expect(getByText('Albums')).toBeTruthy()
    expect(getByText('Faves')).toBeTruthy()
    expect(getByText('Galleries')).toBeTruthy()
    expect(getByText('Groups')).toBeTruthy()
    expect(getByText('CameraRoll')).toBeTruthy()
})