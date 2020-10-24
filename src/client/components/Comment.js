import React from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'

const Comment = (props) => {
  const { name, message, created } = props.comment
  const date = moment(created).format('MMMM-DD | hh:mm A')

  return (
    <div className="comment">
      <h4>{name} - {date}</h4>
      <h3>{message}</h3>

    </div>
  )
}

Comment.propTypes = {
  comment: PropTypes.shape({
    message: PropTypes.number.isRequired,
    name: PropTypes.number.isRequired,
    created: PropTypes.number.isRequired
  })
}

export default Comment
