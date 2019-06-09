import React from 'react'
import ReactDOM from 'react-dom'

import Quiz from 'pages/Quiz'
import Spinner from 'components/Spinner'

import questions from 'config/questions'
import hypothesis from 'config/hypothesis'

import 'stylesheets/vendor/sanitize.css'
import 'stylesheets/vendor/reset.css'
import 'stylesheets/global.sass'

import useQuestions from './useQuestions'

import './styles.sass'

const REDIRECT_DELAY = 1500

function App() {
  const [currentQuestion, currentQuestionNumber, answers, onAnswerQuestion] = useQuestions(questions)
  const { label, options } = currentQuestion

  function renderContent() {
    if (answers.length === 2) {
      const [objective, stage] = answers

      const hypothesisUrl = hypothesis[objective][stage]

      if (hypothesisUrl) {
        setTimeout(() => window.location.href = hypothesisUrl, REDIRECT_DELAY)
      }

      return (
        <Spinner title="We are taking you to the hypothesis..." />
      )
    }

    return (
      <Quiz
        title={label}
        number={currentQuestionNumber}
        options={options}
        onAnswer={onAnswerQuestion}
      />
    )
  }

  return (
    <div className="fb__App">
      <div className="fb__App__Header">
        <div className="fb__App__Header__Logo" />
        <div className="fb__App__Header__Title">Quiz</div>
      </div>

      <div className="fb__App__Content">
        {renderContent()}
      </div>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
)
