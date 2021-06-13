import React,{useRef} from 'react'
import ContactCard from './ContactCard'
import {Link} from 'react-router-dom'

const ContactList= (props) =>{
    console.log(props);
const inputElem= useRef("");
    const deleteContactHandler = (id)=>{
    props.getContactid(id);
    };

    const getSearchTerm=(e)=>{
//const value=e.target.value;
props.searchKeyword(inputElem.current.value);

    }
    



    const renderContactList = props.contacts.map((index)=>{
        return(
    
    <ContactCard property={index}
     clickHandler={deleteContactHandler}
         key={index.id}
     />

        );

    });

    return (
        
        // CSS part class="main"
         <div class="main">
        <h2>
            Contact List
            <Link to='/add'>
            <button className="ui button blue right">Add Contact</button>
            </Link>
        </h2>
        <div className="ui search">
        <div className="ui icon input">
        <input type="text" placeholder="Search Contacts"
        className="prompt" 
        ref={inputElem}
            value={props.term}
            onChange={getSearchTerm}
        />
        <i className="search icon"></i>

        </div>

        </div>
       
<div className='ui celled list'>
{renderContactList.length>0?
renderContactList:"No Contacts available"
}</div>
           

        

        </div>
       
        
    );
};

export default ContactList;
