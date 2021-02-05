import React from 'react';
import { Link } from 'react-router-dom';
import "./splash.scss";
import fitnessFail from '../../assets/images/fitness_fail.jpg'
import splashIntro from '../../assets/images/splash_intro.jpg';
import splashIntro2 from '../../assets/images/splash_intro2.jpg';
import splashIntro3 from '../../assets/images/splash_intro3.jpg'
import About from '../about/about';
class Splash extends React.Component {
    constructor(props){
        super(props);
        this.intervalId = 0;
    } 

    componentDidMount(){
        let counter = 1;
        this.intervalId = setInterval(() => {
            document.getElementById('radio' + counter).checked = true;
            counter++;
            if(counter > 4) {
                counter = 1
            }
        }, 5000) 

    }


    
    componentWillUnmount() {
        clearInterval(this.intervalId)
    }

    
    render(){
        return(
            <div>
                <div className="splash-intro-container">
                    <div className="slider">
                        <div className="slides">

                            <input type="radio" name="radio-btn" id="radio1"/>
                            <input type="radio" name="radio-btn" id="radio2"/>
                            <input type="radio" name="radio-btn" id="radio3"/>
                            <input type="radio" name="radio-btn" id="radio4"/>
                            <div className="slide first">
                                <img id="slidepic" className="slide-image" src={fitnessFail} />
                                <div className="slide-text-top">
                                    LACKING MOTIVATION WORKING OUT DURING THIS PANDEMIC?
                                </div>
                                <div className="slide-text-bot">
                                    ..NO PROFESSIONAL TRAINERS, NOT ENOUGH EQUIPMENT OR SPACE? 
                                </div>
                            </div>
                            <div className="slide">
                                <img id="slidepic" src={splashIntro} />
                                <div className="slide-text-intro">
                                    WE HAVE A SOLUTION- FIT2ME!
                                </div>
                            </div>
                            <div className="slide">
                                <img id="slidepic" src={splashIntro2} />
                                <div className="slide-text-main">
                                    <p>FIT2ME IS AN INNOVATIVE WEB APPLICATION THAT ALLOWS</p> 
                                    <p>TRAINEES TO SEARCH AND FIND THEIR BEST MATCHED TRAINERS</p>
                                    <p>BASED ON LOCATION AND THEIR SPECIALTIES!</p>
                                </div>
                            </div>
                            <div className="slide">
                                <img id="slidepic" src={splashIntro3} />
                                {/* <Link className="reserve-link" to="/trainers/:trainerId/reviews/create"><div className="slide-reserve-button">
                                    BOOK A TRAINER TODAY
                                </div></Link> */}
                            </div>

                        </div>
                        <div className="navigation-auto">
                            <div className="auto-btn1"></div>
                            <div className="auto-btn2"></div>
                            <div className="auto-btn3"></div>
                            <div className="auto-btn4"></div>
                        </div>

                        <div className="navigation-manual">
                            <label for="radio1" className="manual-btn"></label>
                            <label for="radio2" className="manual-btn"></label>
                            <label for="radio3" className="manual-btn"></label>
                            <label for="radio4" className="manual-btn"></label>
                        </div>
                    </div>
                </div>
                {/* <footer>
                    <About/>
                </footer> */}
            </div>
        )
    }
}

export default Splash