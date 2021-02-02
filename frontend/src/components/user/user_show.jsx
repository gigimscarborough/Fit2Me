import React from 'react'

class UserShow extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div>
                <h1>this.props.currentUser.firstName</h1>
            </div>
        )
    }
}

export default UserShow;