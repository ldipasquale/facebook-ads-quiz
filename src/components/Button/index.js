import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import './styles.sass'

function Button({ children, onClick, disabled }) {
  return (
    <div
      className={cx({
        fb__Button: true,
        "fb__Button--disabled": disabled,
      })}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
}

Button.defaultProps = {
  disabled: false,
}

export default Button