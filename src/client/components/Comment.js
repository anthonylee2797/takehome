import React from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'

const Comment = (props) => {
  const { name, message, created } = props.comment
  const date = moment.utc(created).fromNow()
  
  return (
    <div className="comment">
      <span className="comment-top-p1">{name}</span>  
      <span className="comment-top-p2"> {message}</span>
      <p className="comment-bottom" >{date}</p>
    </div>
  )
}

Comment.propTypes = {
  comment: PropTypes.shape({
    message: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired,
  })
}

export default Comment
