import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Comment from './Comment'
import moment from 'moment'


test('it should render comments with props', () => {
  jest.spyOn(moment, 'utc').mockImplementation(() => {
    return {
      fromNow: () => 'a few seconds ago'
    }
  })

  const testProps = {name: 'Mailchimp', message: 'I like emails', created: ""}
  const testComment = render(<Comment comment={testProps}/>)

  expect(testComment.container).toMatchSnapshot()
})
