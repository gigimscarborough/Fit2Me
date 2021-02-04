import React from 'react'
import {Link} from 'react-router-dom'
import './search.scss'

class SearchResults extends React.Component {
    constructor(props) {
        super(props);

    }




    render() {

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
                </div>
                <div>

                </div>

            </div>
        )
    }
}

export default SearchResults;