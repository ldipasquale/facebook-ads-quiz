import { useState, useCallback } from 'react'

const USERNAME = 'username'
const ACCESS_TOKEN = 'accessToken'

export default function useQuestions(questions) {
  const [answers, setAnswers] = useState([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

  const handleAnswer = selectedOption => {
    if (selectedOption.value) {
      setAnswers([
        ...answers,
        selectedOption.value,
      ])
    }

    if (questions.length > currentQuestionIndex + 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    }
  }

  return [questions[currentQuestionIndex], currentQuestionIndex + 1, answers, useCallback(handleAnswer)]
}
