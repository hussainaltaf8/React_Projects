import React,{useState} from 'react'

function EditContact(props) {
    
    const {username,email,id}=props.location.state.contact;

    const [contacts,setContacts]=useState({
        username:username,
        email:email,
        id:id,
    });

    

  
    const update = (e)=>{
        e.preventDefault();

        const name= e.target.name;
        const value= e.target.value;
        

        
        props.passChildData({...contacts});
        

        setContacts({...contacts, [name] : value})
        
      const newRecord={...contacts};
      
      setContacts({username:"" , email:""});
      console.log(props);
      props.history.push("/");

        
      };

      const handleChange =(e)=>{
          const name= e.target.name;
          const value= e.target.value;
          

          setContacts({...contacts, [name] : value})


      }

    


    
    return (
        <div className='ui main'>
        <h2>Edit Contact</h2>
        <form className='ui form'
        onSubmit={update}
        >
            
            
    
        
        <div className='field'>
            <label >Name</label>
            <input type="text" name="username" placeholder='Name'
            value={contacts.username}
                onChange={handleChange}
            />
        </div>
        <div className='field'>
            <label >Email</label>
            <input type="text" name="email" placeholder='Email'
                 value={contacts.email}
                 onChange={handleChange}
            />
        </div>
        <button className='ui button blue'
        >Update</button>
        </form>

            
        </div>
    )
}

export default EditContact
