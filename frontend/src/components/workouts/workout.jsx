import React from 'react'
import './workouts.scss'


class Workout extends React.Component {
    constructor(props) {
        super(props);
    }

   

    render() {


        return (
            <div className="workout-cont">
                <div className="workout-inner">
                    <div className="workout-head">
                     <h1>Reserve Your Workout</h1>
                 </div>
             </div>
            </div>
        )
    }
}

export default Workout;