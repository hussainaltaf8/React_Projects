import React, { useState, useEffect } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import { uuid } from 'uuidv4'
import Header from './Components/Header'
import ContactList from './Components/ContactList'
import AddContact from './Components/AddContact';
import ContactDetails from './Components/ContactDetails';
import api from '../src/api/contacts'
import EditContact from './Components/EditContact'


function App() {

  const LOCAL_STRG_KEY = "contacts";
  const [current, updateChildData] = useState([]);
  const [searchTerm,setSearchTerm] =  useState("");
  const [searchResults,setSearchResults]=useState([]);

  //Retrieve contacts
  const retrieveContacts=async ()=>{
    const response=await api.get("/contacts");
    return response.data;

  }

  const searchHandler=(searchTerm)=>{
    setSearchTerm(searchTerm);

    if(searchTerm !==""){
      const newContactList=current.filter((contact)=>{
        return Object.values(contact)
        .join("")
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      });
      setSearchResults(newContactList);

    }
    else{
      setSearchResults(current);
    }

  }

  const updateContactHandler=async(contact)=>{
    const response= 
    await api.put(`/contacts/${contact.id}`,contact);

    const{id,username,email}=response.data;

    updateChildData(
      current.map((ind)=>{
        return ind.id===id?{...response.data}:ind;

      })
    )

  };

  const addContactHandler =async(data) => {

    const request ={
      id:uuid(),
      ...data,

    }

    const response = await api.post("/contacts",request);

    updateChildData([...current, response.data]);
  };

  const removeContactHandler = async(id) => {
await api.delete(`/contacts/${id}`)
    const newContactList = current.filter((individual) => {
      return (individual.id !== id);


    })

    updateChildData(newContactList);
  };


  useEffect(() => {
    // const local_data = JSON.parse(localStorage.getItem(LOCAL_STRG_KEY));
    // if (local_data) updateChildData(local_data);

    const getAllContacts=async()=>{
      const allContacts= await retrieveContacts();

      if(allContacts) updateChildData(allContacts);
    };
    getAllContacts();
  }, [])
  useEffect(() => {
    // localStorage.setItem(LOCAL_STRG_KEY, JSON.stringify(current));

  }, [current])
  return (
    <div className='ui container'>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" render={
            (props)=>(<ContactList {...props}
             contacts={searchTerm.length<1?current
             :searchResults}
             getContactid={removeContactHandler}
               term={searchTerm}
               searchKeyword={searchHandler}
             />)
          }/>
          <Route exact path="/Contact-app" render={
            (props)=>(<ContactList {...props}
             contacts={searchTerm.length<1?current
             :searchResults}
             getContactid={removeContactHandler}
               term={searchTerm}
               searchKeyword={searchHandler}
             />)
          }/>

          <Route path='/add' 
          render={
            (props)=>(<AddContact {...props}
            passChildData={addContactHandler}/>)
          } />

          <Route path="/property/:id" component={ContactDetails}></Route>

          <Route path='/edit' 
          render={
            (props)=>(<EditContact {...props}
            passChildData={updateContactHandler}/>)
          } />

        </Switch>

        {/* <AddContact passChildData={addContactHandler}/> */}
        {/* <ContactList contacts={current} getContactid={removeContactHandler}/> */}

      </Router>

    </div>
  );
}

export default App;
