import { useState } from 'react'
import './App.css'
import Home from './Pages/HomePage/Home'
import { QuizContext } from './context/QuizHolder'
import Quiz from './Pages/QuizPage/Quiz'
import Score from './Pages/ScorePage/Score'

function App() {
  const [start, setStart] = useState(false)
  const [exit, setExit] = useState(false)
  const [score, setScore] = useState(0)
  return (
    <QuizContext.Provider value={{ start, setStart, setExit, score, setScore }}>
      {!start && !exit ? <Home /> : exit ? <Score score={score} /> : <Quiz />}
    </QuizContext.Provider>
  )
}

export default App
