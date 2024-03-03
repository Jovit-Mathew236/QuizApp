import { CircularProgress, CircularProgressLabel, useInterval } from '@chakra-ui/react'
import './Quiz.scss'
import { useContext, useState, useEffect, useCallback } from 'react'
import { QuizContext } from '../../context/QuizHolder'
import questions from '../QuizPage/assets/question.json'


const Quiz = () => {
  const [count, setCount] = useState(0)
  const [second, setSecond] = useState(0)
  const { setExit, score, setScore } = useContext(QuizContext)

  const fetchQuestion = useCallback((questionNumber) => {
    if (questionNumber >= 0 && questionNumber < questions.questions.length) {
      return questions.questions[questionNumber];
    }
    return null;
  }, []);

  useEffect(() => {
    fetchQuestion(count);
  }, [count, fetchQuestion]);

  useInterval(() => {
    setSecond(second + 1);
    if (second === 30) {
      count + 1 === questions.questions.length ? setExit(true) : nextFunctions()
    }
  }, 1000);

  const nextFunctions = () => {
    if (count + 1 === questions.questions.length) {
      setExit(true);
    } else {
      setCount(count + 1);
      fetchQuestion(count + 1);
      setSecond(0);
    }
  };

  const scoreFunction = (selectedOptionIndex) => {
    const currentQuestion = fetchQuestion(count);
    if (currentQuestion && selectedOptionIndex === currentQuestion.correctIndex) {
      setScore(score + 1);
    }
    nextFunctions();
  };
  // console.log((count*100/questions.questions.length));
  return (
    <div className="quiz_page">
      <div className="quiz_container">
        <div className="quiz_header">
          <CircularProgress value={(count * 100 / questions.questions.length)} color='#F9D949' size='150px' thickness='8px' >
            <CircularProgressLabel>{count + 1}/{questions.questions.length}</CircularProgressLabel>
          </CircularProgress>
          <div className="question">{fetchQuestion(count)?.question}</div>
          <div className="time_circle">
            <CircularProgress value={second * 100 / 30} color='#00ADB5' size='150px' thickness='8px' >
              <CircularProgressLabel>{second}</CircularProgressLabel>
            </CircularProgress>
          </div>
        </div>
        <div className="quiz_options_and_helpers">
          <div className="options_container container">
            {fetchQuestion(count)?.answers.map((answer, i) => (
              <div className="options" key={i}>
                <p onClick={() => scoreFunction(i)}>{i + 1}&nbsp;&nbsp;{answer}</p>
              </div>
            ))}
            <div className="quite_skip">
              <p onClick={() => setExit(true)}>Quit</p>
              <p onClick={() => nextFunctions()}>Skip</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Quiz
