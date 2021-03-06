import React, { useEffect, useState } from 'react'
import Comment from './Comment'
import Form from './Form'
import Api from '../api/api'
import mailchimp from '../assets/mailchimp-logo.png'

/* eslint-disable react/display-name */

const App = React.memo(() => {
  const [comments, setComments] = useState([])

  // Grabs comments from database
  useEffect(() => {
    async function getComments () {
      try {
        const data = await Api.get('/getComments')
        data.reverse()
        setComments(data)
      } catch (error) {
        console.log(error)
      }
    }

    getComments()
    setInterval(getComments, 3000)
  }, [])

  return (
    <div className="App">
      <img src={mailchimp}></img>
      <Form comments={comments} setComments={setComments} />
      <h2>Recent Comments</h2>
      <div className='comments-container'>
        {comments.map((comment) => <Comment key={comment.id} comment={comment} />)}
      </div>
    </div>
  )
})

export default App
