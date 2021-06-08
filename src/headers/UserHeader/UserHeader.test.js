import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import UserHeader from './UserHeader'
import '@testing-library/jest-dom/extend-expect'

describe('Input value', () => {
    it('updates on change', () => {
      const setSearchQuery = jest.fn((value) => {})
      
      const { queryByPlaceholderText } = render(<UserHeader setSearchQuery={setSearchQuery}/>)
  
      const searchInput = queryByPlaceholderText('Photos, people, or groups')
  
      fireEvent.change(searchInput, { target: { value: 'test' } })
  
      expect(searchInput.value).toBe('test')
    })
  })