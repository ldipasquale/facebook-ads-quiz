import React from 'react'
import PropTypes from 'prop-types'
import Loader from 'react-loader-spinner'

import './styles.sass'

function Spinner({ title }) {
  return (
    <div className="fb__Spinner">
      <Loader
        type="Puff"
        color="#426AAC"
        height="72"
        width="72"
      />

      <div className="fb__Spinner__Title">{title}</div>
    </div>
  )
}

Spinner.propTypes = {
  title: PropTypes.string,
}

Spinner.defaultProps = {
  title: null,
}

export default Spinner