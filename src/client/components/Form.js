import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Api from '../api/api'

const Form = ({comments, setComments}) => {
  const [input, setInput] = useState({name: "", comment: ""})

  async function addComment (e) {
    e.preventDefault()

    const { name , comment } = {...input}

    if (name.length === 0 || comment.length === 0) {
      alert('name or message not inputted correctly')
      return
    }

    // clearing input
    setInput({name: "", comment: ""})

    // posting to database and returning comment to client
    try {
      const commentID = await Api.post('/createComment', { name, message: comment })
      const addedComment = await Api.get(`/getComment/?id=${commentID.id}`)

      // setting state of comments
      const newComments = [addedComment, ...comments]
      setComments(newComments)
    } catch (error) {
      console.log(error)
    }
  }

  function handleNameInput (e) {
    const name = e.target.value
    setInput({...input, name})
  }

  function handleCommentInput (e) {
    const comment = e.target.value
    setInput({...input, comment})
  }

  return (
    <div>
      <form className="form" onSubmit={addComment}>
        <div  className='form-name'>
          <label htmlFor='name'>Name</label>
          <input name="name" onChange={handleNameInput} value={input.name} placeholder="Insert Name" />
        </div>

        <div className='form-comment'>
          <label htmlFor='comment'>Comment</label>
          <textarea name="comment" onChange={handleCommentInput} value={input.comment}  placeholder="Insert Comment" />
        </div>
        <button data-testid="submit-btn" className='form-button' type="submit">Add Comment</button>
      </form>
    </div>
  )
}

Form.propTypes = {
  comments: PropTypes.array,
  setComments: PropTypes.func
}

export default Form
