import React from 'react'
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import store from '../../storev2/store';
import { render, fireEvent } from '@testing-library/react'
import UserHeader from './UserHeader'
import '@testing-library/jest-dom/extend-expect'

describe('Input value', () => {
    it('updates on change', () => {
      const setSearchQuery = jest.fn((value) => {})
      
      const { queryByPlaceholderText } = render(<Provider store={store}><UserHeader setSearchQuery={setSearchQuery}/></Provider>)
  
      const searchInput = queryByPlaceholderText('Photos, people, or groups')
  
      fireEvent.change(searchInput, { target: { value: 'test' } })
  
      expect(searchInput.value).toBe('test')
    })
  })