import React from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'

/* eslint-disable react/display-name */

const Comment = React.memo((props) => {
  const { name, message, created } = props.comment
  const date = moment.utc(created).fromNow()

  return (
    <div className="comment">
      <span className="comment-top">
        <span className='comment-top-container'>{name}</span>
        {message}
      </span>
      <p className="comment-bottom" >{date}</p>
    </div>
  )
})

Comment.propTypes = {
  comment: PropTypes.shape({
    message: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired
  })
}

export default Comment
