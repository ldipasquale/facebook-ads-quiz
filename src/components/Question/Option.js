import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

function QuestionOption({ label, value, isSelected, onSelect }) {
  return (
    <div
      className={cx({
        fb__Question__Option: true,
        "fb__Question__Option--selected": isSelected,
      })}
      onClick={() => onSelect({ label, value })}
    >
      <div className="fb__Question__Option__Tick" />
      {label}
    </div>
  )
}

export default QuestionOption
