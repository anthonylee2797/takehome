import React from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'

const Comment = (props) => {
  const { name, message, created } = props.comment
  const date = moment(created).format('MMMM-DD | hh:mm A')

  return (
    <div className="comment">
      <p>{name} - {date}</p>
      <p>{message}</p>
    </div>
  )
}

Comment.propTypes = {
  comment: PropTypes.shape({
    message: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired
  })
}

export default Comment
