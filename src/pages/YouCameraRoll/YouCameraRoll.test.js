import React from 'react'
import YouCameraRoll from '../YouCameraRoll/YouCameraRoll'
import { render } from '@testing-library/react'

const DUMMY_IMAGES = ['https://image.shutterstock.com/image-photo/connected-flexible-series-metal-links-600w-1909534807.jpg', 
'https://upload.wikimedia.org/wikipedia/commons/8/82/Wide_angle_tetons.jpg'];

it ('Renders upload button and preview correctly', () => {
    const {getByText} = render(<YouCameraRoll currPics={DUMMY_IMAGES} />)
    expect(getByText('Click to upload new images')).toBeTruthy();
    expect(getByText('Preview')).toBeTruthy();
})