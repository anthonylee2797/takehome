import React from 'react'
import Form from './Form'
import { render, screen, fireEvent, getByPlaceholderText, getByText, waitFor } from '@testing-library/react'
// import api from '../api/api'
import '@testing-library/jest-dom'


const setup = () => {
  const utils = render (<Form />)
  const nameInput = utils.getByPlaceholderText('Insert Name')
  const commentInput = utils.getByPlaceholderText('Insert Comment')
  const submit = utils.getByTestId('submit-btn')

  return {
    submit,
    nameInput,
    commentInput,
    ...utils
  }
}

test('should render form correctly', () => {
  const { nameInput, commentInput, submit } = setup()

  expect(nameInput).toBeTruthy()
  expect(commentInput).toBeTruthy()
  expect(submit).toBeTruthy()
})

test('should not submit form when no values in name input or message text area', () => {
  const { nameInput, commentInput, submit } = setup()
  const alertMock = jest.spyOn(window,'alert'); 
  
  global.alert = jest.fn()

  fireEvent.change(nameInput, { target: { value: '' } })
  fireEvent.change(commentInput, { target: { value: '' } })
  fireEvent.click(submit)
  expect(global.alert).toHaveBeenCalledTimes(1)
})

test('should submit comment and reset input values upon submit', async () => {
  const { nameInput, commentInput, submit } = setup()
  fireEvent.change(nameInput, {target: {value: "name"}})
  fireEvent.change(commentInput, {target: {value: "comment"}})
  fireEvent.click(submit)

  expect(nameInput.value).toBe("")
  expect(commentInput.value).toBe("")
})

