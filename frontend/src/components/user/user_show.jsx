import React from 'react'
import NextUserShowContainer from './next_user_show_container'

class UserShow extends React.Component{
    constructor(props) {
        super(props);
    }

    componentWillMount(){
        debugger
        console.log('test')
        this.props.fetchUser(this.props.currentUserId)
    }

    render(){
        // const currentUser = this.props.currentUser
        // if (typeof currentUser === 'undefined'){
        //     return null
        // }
        
        return(
            <div>
                <NextUserShowContainer/>
            </div>
        )
    }
}

export default UserShow;