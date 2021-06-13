import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../Images/hp_logo.jpg'

const ContactCard=(props) =>{
    const {id,username,email}= props.property;
    console.log(username,email);
    
    return (
        <div className="item">
        <img className='ui avatar image' src={logo} alt="user" />
                <div className="content">
                <Link to={{pathname:`/property/${id}` , 
                state:{contact:props.property}}}>
                    <div className="header">{username}</div>
                    <div >{email}</div>
                    </Link>
                </div>
                <i className='trash alternate outline icon'
                 style={{color:'red' , marginTop:"7px",marginLeft:"10px"}}
                 onClick={()=>props.clickHandler(id)}
                  ></i>
                  <Link to={{pathname:`/edit` , 
                state:{contact:props.property}}}>
                  <i className='edit alternate outline icon'
                 style={{color:'blue' , marginTop:"7px"}}
                
                  ></i>
                  </Link>
            </div>
    )
}

export default ContactCard
