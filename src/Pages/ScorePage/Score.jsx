import { useContext } from "react"
import { QuizContext } from "../../context/QuizHolder"
import './Score.scss'

const Score = () => {
    const { score } = useContext(QuizContext)
  return (
    <div>
        <div className="page">
            <div className="score_container">
                <div className="start">
                    <div className="score_box">
                        <h1>You got scored</h1> <br />
                        <h1>{score}</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Score