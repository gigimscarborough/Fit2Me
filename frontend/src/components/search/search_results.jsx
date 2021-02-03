import React from 'react'
import { Link } from 'react-router-dom'
import './search.scss'

class SearchResults extends React.Component {
    constructor(props) {
        super(props);

    }




    render() {
        if (Object.keys(this.props.trainers).length === 0){
            return null
        }

        const trainers = this.props.trainers.map(trainer =>
            <div className="trainers-container">
                <div className="trainer-div" >
                    <div className="trainer-l">
                        <Link to={`/trainers/${trainer._id}`}>
                            <img className="trainer-image" src={trainer.imageUrl} />
                        </Link>
                        <Link className="trainer-link" to={`/trainers/${trainer._id}`}>
                            View Profile
                        </Link>
                    </div>
                    <div className="trainer-r">
                        <Link to={`/trainers/${trainer._id}`}>{trainer.firstName} { trainer.lastName }</Link>

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
                            <p>You matched with {this.props.trainers.length} trainers in your area</p>
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