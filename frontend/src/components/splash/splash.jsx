import React from 'react';
import { Link } from 'react-router-dom';
import "./splash.scss";
import fitnessFail from '../../assets/images/fitness_fail.jpg'
import splashIntro from '../../assets/images/splash_intro.jpg';
import splashIntro2 from '../../assets/images/splash_intro2.jpg';
import splashIntro3 from '../../assets/images/splash_intro3.jpg'
import reactimg from '../../assets/images/react.png'
import mongo from '../../assets/images/mongo.png'
import  express from '../../assets/images/express.png'
import About from '../about/about';
class Splash extends React.Component {
    constructor(props){
        super(props);
        this.intervalId = 0;
    } 

    // componentDidMount(){
    //     let counter = 1;
    //     this.intervalId = setInterval(() => {
    //         document.getElementById('radio' + counter).checked = true;
    //         counter++;
    //         if(counter > 4) {
    //             counter = 1
    //         }
    //     }, 6000) 

    // }


    
    // componentWillUnmount() {
    //     clearInterval(this.intervalId)
    // }

    
    render(){

        return(
            <div className="hold">
                <div  className="photo p1">
                    <div className=" photo-1">
                        <img src={fitnessFail} ></img>
                    </div>
                    <div className="cap cap-1">
                       <h2>LOOKING FOR THAT EXTRA PUSH</h2>
                       <p>Quarantine workouts turning out to be more a struggle than you expected? Let our trainers motivate you to stay on track.</p>
                   </div>
                </div>
                <div  className="photo p2">
                    <div className=" photo-2">
                        <img src={splashIntro} alt=""/>
                    </div>
                    <div className="cap cap-2">
                        <h2>AN ON DEMAND SOLUTION</h2>
                        <p>Beat the workout blues. We know during these uncertain times working out can be a struggle. At FIT2ME we take the guess work out of your workouts so you can focus on reaching your fitness goals.</p>
                    </div>
                  
                </div>
                <div  className="photo p3">
                    <div className=" photo-3">
                        <img src={splashIntro2} alt="" />
                    </div>
                    <div className="cap cap-3">
                        <h2>A FULL WORKOUT EXPERIENCE</h2>
                        <p>FIT2ME provides the structure of a gym workout while allowing you to determine where you feel most safe and comfortable. Whether that's your front door, backyard, or a variety of outdoor and prescreened locations, its sure to be the next setting for your perfect workout!</p>
                    </div>
                </div>
                <div className="photo p4">
                    <div className=" photo-4">
                        <img src={splashIntro3} alt="" />
                    </div>
                    <div className="cap cap-4">
                        <h2>NOTHIN' BUT A NUMBER</h2>
                        <p>No matter your age, experience, or fitness level, FIT2ME'S cutting edge technology will ensure that you match with the trainer thats right for you.</p>
                    </div>
                </div>
                <div className="splash-footer">
                    <div className="footer-div">
                        <h2>Our Team</h2>
                        <div className="member-div">
                            <div className="member">
                                <p>Ralles Liu</p>
                                <p>Flex Developer</p>
                                <div className="ftr-links">
                                    <div className="ftr-link">
                                        <a href="https://github.com/ralles-liu">
                                            <i class=" ftl fc fas fa-circle"></i>
                                            <i class=" ftl fi fab fa-github-square"></i>
                                        </a>
                                    </div>
                                    <div className="ftr-link">
                                        <a href="https://angel.co/u/gigi-scarborough">
                                            <i class="ftl fc fas fa-circle"></i>
                                            <i class="ftl fi fab fa-angellist"></i>
                                        </a>
                                    </div>
                                    <div className="ftr-link">
                                        <a href="https://www.linkedin.com/in/ralles-liu">
                                            <i class="ftl fc fas fa-circle"></i>
                                            <i class="ftl fi fab fa-linkedin-in"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="member">
                                <p>Gigi Scarborough</p>
                                <p>Project Manager</p>
                                <div className="ftr-links">
                                    <div className="ftr-link">
                                        <a href="https://github.com/gigimscarborough">
                                            <i class=" ftl fc fas fa-circle"></i>
                                            <i class=" ftl fi fab fa-github-square"></i>
                                        </a>
                                    </div>
                                    <div className="ftr-link">
                                        <a href="https://angel.co/u/gigi-scarborough">
                                            <i class="ftl fc fas fa-circle"></i>
                                            <i class="ftl fi fab fa-angellist"></i>
                                        </a>
                                    </div>
                                    <div className="ftr-link">
                                        <a href="https://linkedin.com/in/gigimscarborough">
                                            <i class="ftl fc fas fa-circle"></i>
                                            <i class="ftl fi fab fa-linkedin-in"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="member">
                                <p>Hojung Cha</p>
                                <p>Frontend Lead</p>
                                <div className="ftr-links">
                                    <div className="ftr-link">
                                        <a href="https://github.com/hoj0210">
                                            <i class=" ftl fc fas fa-circle"></i>
                                            <i class=" ftl fi fab fa-github-square"></i>
                                        </a>
                                    </div>
                                    <div className="ftr-link">
                                        <a href="https://angel.co/u/hojung-cha">
                                            <i class="ftl fc fas fa-circle"></i>
                                            <i class="ftl fi fab fa-angellist"></i>
                                        </a>
                                    </div>
                                    <div className="ftr-link">
                                        <a href="https://www.linkedin.com/in/hojung-cha-4b613b206/">
                                            <i class="ftl fc fas fa-circle"></i>
                                            <i class="ftl fi fab fa-linkedin-in"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="member">
                                <p>Daniel Giovinazzo</p>
                                <p>Backend Lead</p>
                                <div className="ftr-links">
                                    <div className="ftr-link">
                                        <a href="https://github.com/ddgiovinazzo">
                                            <i class=" ftl fc fas fa-circle"></i>
                                            <i class=" ftl fi fab fa-github-square"></i>
                                        </a>
                                    </div>
                                    <div className="ftr-link">
                                        <a href="https://angel.co/u/domenicodanielgiovinazzo">
                                            <i class="ftl fc fas fa-circle"></i>
                                            <i class="ftl fi fab fa-angellist"></i>
                                        </a>
                                    </div>
                                    <div className="ftr-link">
                                        <a href="https://www.linkedin.com/in/domenicodanielgiovinazzo/">
                                            <i class="ftl fc fas fa-circle"></i>
                                            <i class="ftl fi fab fa-linkedin-in"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="techs">
                            <p>This site built with</p>
                            <div className="techs-img">
                                <img id="react-img" src={mongo} alt="" />
                                <img id="express" src={express} alt="" />
                                <i class="fab fa-node node-t"></i>
                                <img id="react-img" src={reactimg} alt=""/>
                            </div>
                        </div>
                        <p className="copyr">FIT2ME is not a subsidiary of App Academy, LLC or Hash Map Labs, Inc. (but probably should be). Copyright &#169; 2021 FIT2ME, Inc.- All Rights Reserved.</p>
                    </div>
                    
                </div>
            </div>

        )

        // return(
        //     <div>
        //         <div className="splash-intro-container">
        //             <div className="slider">
        //                 <div className="slides">

        //                     <input type="radio" name="radio-btn" id="radio1"/>
        //                     <input type="radio" name="radio-btn" id="radio2"/>
        //                     <input type="radio" name="radio-btn" id="radio3"/>
        //                     <input type="radio" name="radio-btn" id="radio4"/>
        //                     <div className="slide first">
        //                         <img id="slidepic" className="slide-image" src={fitnessFail} />
        //                         <div className="slide-text-top">
        //                             LOOKING FOR THAT EXTRA PUSH TO GET YOU THROUGH THOSE QUARANTINE WORKOUTS?
        //                         </div>
        //                         <div className="slide-text-bot">
        //                             LET OUR TRAINERS MOTIVATE YOU TO STAY ON TRACK! 
        //                         </div>
        //                     </div>
        //                     <div className="slide">
        //                         <img id="slidepic" src={splashIntro} />
        //                         <div className="slide-text-intro">
        //                             FIT2ME IS YOUR ON DEMAND SOLUTION FOR BEATING THE WORKOUT BLUES
        //                         </div>
        //                     </div>
        //                     <div className="slide">
        //                         <img id="slidepic" src={splashIntro2} />
        //                         <div className="slide-text-main">
        //                             FIT2ME BRINGS A FULL WORKOUT EXPERIENCE DIRECTLY TO YOUR FRONT DOOR, BACKYARD, OR A VARIETY OF OUTDOOR LOCATIONS SURE TO BE THE NEXT SETTING FOR YOUR PERFECT WORKOUT! 
        //                         </div>
        //                     </div>
        //                     <div className="slide">
        //                         <img id="slidepic" src={splashIntro3} />
        //                         <div className="slide-text-con">
        //                             NO MATTER YOUR AGE, EXPERIENCE, OR FITNESS LEVEL, FIT2ME'S CUTTING EDGE TECHNOLOGY WILL ENSURE YOU A MATCH WITH THE RIGHT TRAINER. 
        //                         </div>
        //                     </div>

        //                 </div>
        //                 <div className="navigation-auto">
        //                     <div className="auto-btn1"></div>
        //                     <div className="auto-btn2"></div>
        //                     <div className="auto-btn3"></div>
        //                     <div className="auto-btn4"></div>
        //                 </div>

        //                 <div className="navigation-manual">
        //                     <label for="radio1" className="manual-btn"></label>
        //                     <label for="radio2" className="manual-btn"></label>
        //                     <label for="radio3" className="manual-btn"></label>
        //                     <label for="radio4" className="manual-btn"></label>
        //                 </div>
        //             </div>
        //         </div>
        //         {/* <footer>
        //             <About/>
        //         </footer> */}
        //     </div>
        //)
    }
}

export default Splash