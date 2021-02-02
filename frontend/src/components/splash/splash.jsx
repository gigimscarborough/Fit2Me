import React from 'react';
import { Link } from 'react-router-dom';
import "./splash.scss";
import fitnessFail from '../../assets/images/fitness_fail.jpg'
import splashIntro from '../../assets/images/splash_intro.jpg';
import splashIntro2 from '../../assets/images/splash_intro2.jpg';
import splashIntro3 from '../../assets/images/splash_intro3.jpg'

class Splash extends React.Component {
    constructor(props){
        super(props);
    } 

    render(){
        return(
            <div className="splash-intro-container">
                <div className="slider">
                    <div className="slides">

                        <input type="radio" name="radio-btn" id="radio1"/>
                        <input type="radio" name="radio-btn" id="radio2"/>
                        <input type="radio" name="radio-btn" id="radio3"/>
                        <input type="radio" name="radio-btn" id="radio4"/>
                        <div className="slide first">
                            <img src={fitnessFail} />
                        </div>
                        <div className="slide">
                            <img src={splashIntro} />
                        </div>
                        <div className="slide">
                            <img src={splashIntro2} />
                        </div>
                        <div className="slide">
                            <img src={splashIntro3} />
                        </div>

                        <div className="navigation-auto">
                            <div className="auto-btn1"></div>
                            <div className="auto-btn2"></div>
                            <div className="auto-btn3"></div>
                            <div className="auto-btn4"></div>
                        </div>
                    </div>

                    <div className="navigation-manual">
                        <label for="radio1" className="manual-btn"></label>
                        <label for="radio2" className="manual-btn"></label>
                        <label for="radio3" className="manual-btn"></label>
                        <label for="radio4" className="manual-btn"></label>
                    </div>
                </div>

                <script type="text/javascript">
                    
                </script>
            </div>
            
        )
    }
}

export default Splash