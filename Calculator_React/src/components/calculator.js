import React, { useState } from 'react';
import "../index.css";







function Calculator()
{
 
    const [result,setResult]=useState("");
    
  function handleClick(event){
setResult(result+event.target.name);
  }
  function del(){
setResult(result.slice(0,result.length-1));
  }
  function clr(){
    setResult("");
  }
  function calc(){
    try{
      setResult(eval(result).toString());
    }
    catch(error)
    {
      setResult("Error");
    }
   
  }
    
    
    
    
    
        return ( 
            
             
          <div className="mainapp">

<form>
      <input type="text" value={result}/>
    </form>
            <div className="button-row"> 
            <button onClick={clr} id="clear">Clear</button> 
      <button onClick={del} id="delete">Delete</button>
      

      <button onClick={handleClick} name=".">.</button>
      <button onClick={handleClick} name="/">/</button>
      </div>
      <div className="button-row"> 
      <button onClick={handleClick} name='7'>7</button> 
      <button onClick={handleClick} name='8'>8</button> 
      <button onClick={handleClick} name='9'>9</button> 
      <button onClick={handleClick} name='*'>*</button> 
    </div> 
              
              

      
            <div className="button-row"> 
              <button onClick={handleClick} name='4'>4</button> 
              <button onClick={handleClick} name='5'>5</button> 
              <button onClick={handleClick} name='6'>6</button> 
              <button onClick={handleClick} name='-'>-</button> 
            </div>
            <div className="button-row"> 
              <button onClick={handleClick} name='1'>1</button> 
              <button onClick={handleClick} name='2'>2</button> 
              <button onClick={handleClick} name='3'>3</button> 
              <button onClick={handleClick} name='+'>+</button> 
           </div>
           <div className="button-row"> 
              <button onClick={handleClick} name='0'>0</button> 
              <button onClick={calc} name='='>=</button> 
            </div> 








            </div> 
            
            ); 
          
        } 
        
    


export default Calculator;