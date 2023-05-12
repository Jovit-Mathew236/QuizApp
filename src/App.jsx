import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/HomePage/Home'
import Quiz from './Pages/QuizPage/Quiz'

function App() {

  return (
    <Routes>
      <Route path="*" element={<p>404 Page not found</p>} />
      <Route path="/" element={<Home />} />
      <Route path="/quiz" element={<Quiz />} />
    </Routes>
  )
}

export default App
