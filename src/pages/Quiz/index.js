import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import Question from 'components/Question'

function List({ title, number, options, onAnswer }) {
  const [selectedOption, setSelectedOption] = useState({})

  useEffect(() => setSelectedOption({}), [number])

  return (
    <Question
      title={title}
      number={number}
      options={options}
      onChangeOption={setSelectedOption}
      selectedOption={selectedOption}
      onAnswer={onAnswer}
    />
  )
}

List.propTypes = {
  title: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  options: Question.propTypes.options,
  onAnswer: PropTypes.func.isRequired,
}

export default React.memo(List)

