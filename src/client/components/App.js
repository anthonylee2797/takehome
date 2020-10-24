import React, { useEffect, useState } from 'react'
import Comment from './Comment'
import Form from './Form'
import Api from '../api/api'

const App = () => {
  const [comments, setComments] = useState([])

  // Grabs comments
  useEffect(() => {
    async function getComments () {
      const comments = await Api.get('/getComments')
      setComments(comments)
    }

    getComments()
  }, [])

  return (
    <div className="App">
      Mailchimp Takehome
      <button onClick={() => console.log('hello')}>Click me</button>
      <Form comments={comments} setComments={setComments} />
      <h1>Recent Comments</h1>
      <div className='comments'>
        {comments.slice(0).reverse().map((comment) => <Comment key='comment' comment={comment} />)}
      </div>

    </div>
  )
}

export default App
