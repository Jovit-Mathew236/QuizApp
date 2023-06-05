import { CircularProgress, CircularProgressLabel, useInterval } from '@chakra-ui/react'
import './Quiz.scss'
import { useContext, useState } from 'react'
import { QuizContext } from '../../context/QuizHolder'


const Quiz = () => {
  const [count, setCount] = useState(0)
  const [second, setSecond] = useState(0)
  const { setExit, score, setScore } = useContext(QuizContext)

useInterval(() => {
  setSecond(second + 1)
  if (second === 30) {
    setExit(true)
  }
}, 1000)

  const questions = {
    "questions": [
      {
        "question": "What is the scientific name of a butterfly?",
        "answers": [
          "Apis",
          "Coleoptera",
          "Formicidae",
          "Rhopalocera"
        ],
        "correctIndex": 3
      },
      {
        "question": "How hot is the surface of the sun?",
        "answers": [
          "1,233 K",
          "5,778 K",
          "12,130 K",
          "101,300 K"
        ],
        "correctIndex": 1
      },
      {
        "question": "Who are the actors in The Internship?",
        "answers": [
          "Ben Stiller, Jonah Hill",
          "Courteney Cox, Matt LeBlanc",
          "Kaley Cuoco, Jim Parsons",
          "Vince Vaughn, Owen Wilson"
        ],
        "correctIndex": 3
      },
      {
        "question": "What is the capital of Spain?",
        "answers": [
          "Berlin",
          "Buenos Aires",
          "Madrid",
          "San Juan"
        ],
        "correctIndex": 2
      },
      {
        "question": "What are the school colors of the University of Texas at Austin?",
        "answers": [
          "Black, Red",
          "Blue, Orange",
          "White, Burnt Orange",
          "White, Old gold, Gold"
        ],
        "correctIndex": 2
      },
      {
        "question": "What is 70 degrees Fahrenheit in Celsius?",
        "answers": [
          "18.8889",
          "20",
          "21.1111",
          "158"
        ],
        "correctIndex": 2
      },
      {
        "question": "When was Mahatma Gandhi born?",
        "answers": [
          "October 2, 1869",
          "December 15, 1872",
          "July 18, 1918",
          "January 15, 1929"
        ],
        "correctIndex": 0
      },
      {
        "question": "How far is the moon from Earth?",
        "answers": [
          "7,918 miles (12,742 km)",
          "86,881 miles (139,822 km)",
          "238,400 miles (384,400 km)",
          "35,980,000 miles (57,910,000 km)"
        ],
        "correctIndex": 2
      },
      {
        "question": "What is 65 times 52?",
        "answers": [
          "117",
          "3120",
          "3380",
          "3520"
        ],
        "correctIndex": 2
      },
      {
        "question": "How tall is Mount Everest?",
        "answers": [
          "6,683 ft (2,037 m)",
          "7,918 ft (2,413 m)",
          "19,341 ft (5,895 m)",
          "29,029 ft (8,847 m)"
        ],
        "correctIndex": 3
      },
      {
        "question": "When did The Avengers come out?",
        "answers": [
          "May 2, 2008",
          "May 4, 2012",
          "May 3, 2013",
          "April 4, 2014"
        ],
        "correctIndex": 1
      },
      {
        "question": "What is 48,879 in hexidecimal?",
        "answers": [
          "0x18C1",
          "0xBEEF",
          "0xDEAD",
          "0x12D591"
        ],
        "correctIndex": 1
      }
    ]
  }
  const nextFunctions = () => {
    count + 1 === questions.questions.length ? setExit(true) : null
    setCount(count + 1)
  }
  const scoreFunction = (i) => {
    if (i === questions.questions[count].correctIndex) {
      setScore(score + 1)
    }
    nextFunctions()
  }
  // console.log((count*100/questions.questions.length));
  return (
    <div className="quiz_page">
      <div className="quiz_container">
        <div className="quiz_header">
          <CircularProgress value={(count*100/questions.questions.length)} color='#F9D949' size='150px' thickness='8px' >
            <CircularProgressLabel>{count+1}/{questions.questions.length}</CircularProgressLabel>
          </CircularProgress>
          <div className="question">{questions.questions[count].question}</div>
          <div className="time_circle">
            <CircularProgress value={second*100/30} color='#00ADB5' size='150px' thickness='8px' >
              <CircularProgressLabel>{second}</CircularProgressLabel>
            </CircularProgress>
          </div>
        </div>
        <div className="quiz_options_and_helpers">
          {/* <div className="questions_container container sub">
            {questions.questions.map((question, i) => (
              <>
                <p key={i}>{i + 1}&nbsp;&nbsp;{question.question}</p>
              </>
            ))}
          </div> */}
          <div className="options_container container">
            {questions.questions[count].answers.map((answer, i) => (
              <div className="options" key={i}>
                <p onClick={() => scoreFunction(i)}>{i + 1}&nbsp;&nbsp;{answer}</p>
              </div>
            ))}
            <div className="quite_skip">
              <p onClick={() => setExit(true)}>Quite</p>
              <p onClick={() => nextFunctions()}>Skip</p>
            </div>
          </div>
          {/* <div className="scoreboard_container container sub">
            <div className="score_member">
              <p>name</p>
            </div>
            <div className="score_member">
              <p>name</p>
            </div>
            <div className="score_member">
              <p>name</p>
            </div>
            <div className="score_member">
              <p>name</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Quiz
