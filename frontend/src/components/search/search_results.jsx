import React from 'react'
import { Link } from 'react-router-dom'
import './search.scss'

class SearchResults extends React.Component {
    constructor(props) {
        super(props);

    }




    render() {

        const trainers = this.props.trainers.map(trainer =>
            <div className="trainers-container">
                <div className="trainer-div" >
                    <div className="trainer-l">
                        <Link to={`/trainers/${trainer._id}`}>
                        <img className="trainer-image" src={trainer.imageUrl} />
                        </Link>
                    </div>
                    <div className="trainer-r">
                        <Link to={`/trainers/${trainer._id}`}>{trainer.firstName}</Link>
                    </div> 

                </div>

                    </div>
        )

        return (
            <div className="results-container">
                        <div className="trainer-content">
                            <div className="t-content-header">
                                <h1>TRAINER SEARCH</h1>
                                <div className="matches">
                                    <p>You matched with {this.props.trainers.length} trainers</p>
                                    <Link to="/search">New Search</Link>
                                </div>
                            </div>
                            {trainers}
                        </div>
                        <div>

                        </div>

                    </div>
        )
    }
}

export default SearchResults;