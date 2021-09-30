import React from 'react'
import '../assets/css/login.css'
import '../assets/css/choose.css'
import logo from '../assets/images/logo.png'
import login from '../assets/images/login.png'
import pic from '../assets/images/trans-r-pic.png'
import { Link } from 'react-router-dom'
import MyRetro from './MyRetro'
import RetroRight from './RetroRight'
import RetroChooseTrans from './RetroChooseTrans'

const RetroChoose = () => {
    return (
        <div className="retro-container2">
            <div className="retro-wrapper2">
                <div className="card">
                    <RetroChooseTrans />
                </div>

                <div className="info-right-trans">
                    <img src={pic} alt="InfoPhoto" />
                </div>
            </div>
        </div> 
    )
}

export default RetroChoose
