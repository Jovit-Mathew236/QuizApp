// import React from 'react'
import Input from '../../Components/Input'
import './Home.scss'

const Home = () => {
    return (
        <div className="page">
            <div className="start_container">
                <div className="start">
                    <form action="">
                        <label htmlFor="">Code</label>
                        <Input type="number" />
                        <button type="submit">Start</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Home