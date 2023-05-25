// import React from 'react'
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import './Quiz.scss'

const Quiz = () => {
  return (
    <div className="quiz_page">
      <div className="quiz_container">
        <div className="quiz_header">
          <CircularProgress value={60} color='#F9D949' size='150px' thickness='8px' >
            <CircularProgressLabel>12/20</CircularProgressLabel>
          </CircularProgress>
          <div className="question">sample question</div>
          <div className="time_circle">
          <CircularProgress value={75} color='#00ADB5' size='150px' thickness='8px' >
            <CircularProgressLabel>20</CircularProgressLabel>
          </CircularProgress>
          </div>
        </div>
        <div className="quiz_options_and_helpers">
          <div className="questions_container container sub">
            <p>sample question</p>
            <p>sample question</p>
            <p>sample question</p>
            <p>sample question</p>
          </div>
          <div className="options_container container">
            <div className="options">
              <p>A &nbsp;&nbsp;sample option</p>
            </div>
            <div className="options">
              <p>B &nbsp;&nbsp;sample option</p>
            </div>
            <div className="options">
              <p>C &nbsp;&nbsp;sample option</p>
            </div>
            <div className="options">
              <p>D &nbsp;&nbsp;sample option</p>
            </div>
            <div className="quite_skip">
              <p>Quite</p>
              <p>Skip</p>
            </div>
          </div>
          <div className="scoreboard_container container sub">
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default Quiz