// import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../Components/Button'
import Input from '../../Components/Input'
import './Home.scss'

const Home = () => {
    const navigate = useNavigate()
    return (
        <div className="page">
            <div className="start_container">
                <div className="start">
                    <form action="">
                        {/* <label htmlFor="">Code</label> */}
                        <Input type={"text"} placeholder={"Code"}/>
                        <Button type={"submit"} text={"START"} onclick={()=>{
                            navigate('/quiz')
                        }}/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Home