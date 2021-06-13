import React from 'react'
import user from '../Images/screenshot_1.jpg'
import {Link} from 'react-router-dom'

const ContactDetails = (props)=> {
    console.log(props);

    const {username, email}=props.location.state.contact;
    return (
        <div className="main">
        <div className="ui card centered">
        <div className="image">
            <img src={user} alt="user" />
        </div>

        <div className="content">
            <div className="header">{username}</div>
            <div className="description">{email}</div>
        </div>

        </div>
            <div className="center-div">
           <Link to="/">
           <button className="ui button blue center">
                Back to Contact List</button>
           </Link>

               
            </div>
        </div>
    )
}

export default ContactDetails
