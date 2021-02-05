import React from 'react';
import {Link} from 'react-router-dom'
import gymAni from '../../assets/images/gym_animation.jpg';
import './about.scss'

const About = (props) => {
    return(
        <div>
            <img className="about-animation" src={gymAni} alt=""/>
        </div>
    )
}

export default About