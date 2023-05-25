// import React from 'react'
// import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import Button from '../../Components/Button'
import Input from '../../Components/Input'
import './Home.scss'
import { QuizContext } from '../../context/QuizHolder'
// import { useContext } from 'react'
// import { QuizContext } from '../../context/QuizHolder'

const Home = () => {
    // const navigate = useNavigate()
    const {setStart} = useContext(QuizContext)
    
    return (
        <div className="page">
            <div className="start_container">
                <div className="start">
                    <form>
                        {/* <label htmlFor="">Code</label> */}
                        {/* <Input type={"text"} placeholder={"Code"}/> */}
                        <Button  text={"START"} onclick={(e)=>{
                            e.preventDefault()
                            // navigate('/quiz')
                            setStart(true)
                        }}/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Home