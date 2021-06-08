import React from 'react'
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import store from '../../storev2/store';
import { render, fireEvent } from '@testing-library/react'
import YouPhotostream from './YouPhotostream'
import '@testing-library/jest-dom/extend-expect'

describe('Photostream rendes without crashing', () => {
    it('updates on change', () => {
      
      const {getAllByTextId} = render(<Provider store={store}><YouPhotostream /></Provider>)
      const photostream=getAllByTestId("1");

    })
  })