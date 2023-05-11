import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/HomePage/Home'

function App() {

  return (
    <Routes>
      <Route path="*" element={<p>404 Page not found</p>} />
      <Route path="/" element={<Home/>} />
    </Routes>
  )
}

export default App
