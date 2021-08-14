import React,{useState} from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './AddExercise.css'


function Formchild(props) {
  
  const [current,updateArrset]=useState([
    {
      reps:"",
      weights:"",
      rest:"",
    }
  ]);

  const handleChange =(e)=>{
    const name= e.target.name;
    const value= e.target.value;
    

    updateArrset({...current, [name] : value})

    


}
    return (
        <>
             <div className='setrow'>
            <div className='icon'>
            <i className="fa fa-times" aria-hidden="true"
              onClick={(e)=> props.handleDelete(props.id)}
            />
            
            <h6>set {props.pr}</h6>
            </div>
      <FormGroup>
        <Label for="reps">Reps</Label>
        <Input type="text" name="reps" id="reps" 
           value={current.reps}
                onChange={handleChange}
            
        />
      </FormGroup>
      <FormGroup>
        <Label for="weights">Weights</Label>
        <Input type="text" name="weights" id="weights"
          value={current.weights}
                onChange={handleChange}
            /> 
      </FormGroup>

      <FormGroup>
        <Label for="rest">Rest</Label>
        <Input type="text" name="rest" id="rest" 
           value={current.rest}
                onChange={handleChange}
            
        />
      </FormGroup>
      </div>
     
          
        </>
    )
}

export default Formchild
