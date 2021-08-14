import React, { useState } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './AddExercise.css'
import Formchild from './Formchild';

const AddExercise=(props) =>{

const [myArray, setArray] = useState([1])
  var tmpArray = JSON.parse(JSON.stringify(myArray))

  
const handleClick=(e)=>{
e.preventDefault();

tmpArray.push(tmpArray[tmpArray.length - 1] + 1)
          setArray(tmpArray);
         
};


const handleDelete=(id)=>{

  setArray((myArray)=>{
      return  myArray.filter((arrElem,index)=>{
          return index!==id;
  })

  })

};

    return (
      
     
<Form>
      
    {myArray.map((value,id)=>{
            
            return <Formchild pr={value}
                key={id}
                id={id}
                handleDelete={handleDelete}

            />
          })
          }
  
         
           
            <Button outline  color="primary" onClick={handleClick}>
      Add New Set</Button>

    
      </Form>
    )
}

export default AddExercise;
