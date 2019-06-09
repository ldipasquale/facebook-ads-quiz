import React, { useCallback } from 'react'
import PropTypes from 'prop-types'

import Button from '../Button'
import QuestionOption from './Option'

import './styles.sass'

function Question({ title, number, options, selectedOption, onChangeOption, onAnswer }) {
  const handleAnswer = () => onAnswer(selectedOption)

  const renderOption = ({ label, value }) => (
    <QuestionOption
      key={label}
      label={label}
      value={value}
      onSelect={onChangeOption}
      isSelected={selectedOption.label === label}
    />
  )

  return (
    <div className="fb__Question">
      <div className="fb__Question__Title">
        <span className="fb__Question__Title__Number">{number})</span>
        {title}
      </div>

      <div className="fb__Question__Options">
        {options.map(useCallback(renderOption))}
      </div>

      <Button
        onClick={useCallback(handleAnswer)}
        disabled={selectedOption.label === undefined}
      >
        Next step
      </Button>
    </div>
  )
}

Question.propTypes = {
  title: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
  })).isRequired,
  selectedOption: PropTypes.shape({
    label: PropTypes.string,
  }),
  onChangeOption: PropTypes.func.isRequired,
  onAnswer: PropTypes.func.isRequired,
}

Question.defaultProps = {
  selectedOption: {
    label: null,
  },
}

export default Question
