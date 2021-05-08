import React from 'react'
import YouMain from '../YouMain/YouMain'
import { render } from '@testing-library/react'

it ('Renders toolbar correctly', () => {
    const match = {params : { id: 1 } };
    const {getByText} = render(<YouMain match={match} currentTab='about'/>)
    expect(getByText('About')).toBeTruthy()
    expect(getByText('Photostream')).toBeTruthy()
    expect(getByText('Albums')).toBeTruthy()
    expect(getByText('Faves')).toBeTruthy()
    expect(getByText('Galleries')).toBeTruthy()
    expect(getByText('Groups')).toBeTruthy()
    expect(getByText('CameraRoll')).toBeTruthy()
})