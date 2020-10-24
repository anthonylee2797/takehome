import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Api from '../api/api'

const Form = (props) => {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  async function addComment (e) {
    e.preventDefault()

    if (name.length === 0 || message.length === 0) {
      alert('name or message not inputted correctly')
      return
    }

    // posting to database and returning comment to client
    const commentID = await Api.post('/createComment', { name, message })

    console.log(commentID.id, 'commentid')
    const addedComment = await Api.get(`/getComment/?id=${commentID.id}`)

    // clearing input
    setName('')
    setMessage('')

    // setting state of comments
    const newComments = [...props.comments, addedComment]
    props.setComments(newComments)
  }

  function handleNameInput (e) {
    const name = e.target.value
    setName(name)
  }

  function handleCommentInput (e) {
    const comment = e.target.value
    setMessage(comment)
  }

  return (
    <div>
      <form onSubmit={addComment}>
        <label htmlFor='name'>Name</label>
        <input name="name" onChange={handleNameInput} value={name} placeholder="Insert Name" />
        <label htmlFor='comment'>Comment</label>
        <textarea name="comment" onChange={handleCommentInput} value={message} placeholder="Insert Comment" />
        <button type="submit">Add Comment</button>
      </form>
    </div>
  )
}

Form.propTypes = {
  comments: PropTypes.array,
  setComments: PropTypes.func
}

export default Form
