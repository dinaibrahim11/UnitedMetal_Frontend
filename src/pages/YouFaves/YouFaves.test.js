import React from 'react'
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import store from '../../storev2/store';
import { render, fireEvent } from '@testing-library/react'
import YouFaves from './YouFaves'
import '@testing-library/jest-dom/extend-expect'

describe('Faves renders without crashing', () => {
    it('updates on change', () => {
     
        const {getAllByTextId} = render(<Provider store={store}><YouFaves /></Provider>)
        const faves=getAllByTestId("2");
    })
  })