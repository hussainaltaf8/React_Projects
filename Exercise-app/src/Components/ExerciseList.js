import React,{useState} from 'react'
import img from './reverse_lunge.jpg'
import './ExerciseList.css'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
  import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
  import AddExercise from "./AddExercise";

const ExerciseList=()=> {

    const [dropdownOpen, setOpen] = useState(false);
    

    const toggle = () => setOpen(!dropdownOpen);
    const isdropOpen=dropdownOpen;
    console.log(isdropOpen);
     const count=[[12,10,30],[15,50,20]];
    

    
  
    
    
        const renderreps= count.map((index)=>{
            
            const [reps, Weights, rest] = index;
            return ( 
                <div>
            <CardText className='text-muted'>{reps} </CardText>

</div>
            )
          }).reduce((acc, x) => acc === null ? x : <>{acc} - {x}</>, null);
          
          
          const renderweights= count.map((index)=>{
            const [reps, Weights, rest] = index;
            return ( 
                <div>
            <CardText className='text-muted'>{Weights} </CardText>

</div>
            )
          
            }).reduce((acc, x) => acc === null ? x : <>{acc} - {x}</>, null);
            

          const renderrest= count.map((index)=>{
            const [reps, Weights, rest] = index;
            return ( 
                <div>
            <CardText className='text-muted'>{rest} </CardText>

</div>
            )

          }).reduce((acc, x) => acc === null ? x : <>{acc} - {x}</>, null);
          ;
          
        
     
    
      
   
    return (
        <>
          <div>
          <Card>
        <CardImg top src={img} alt="Reverse Lunge" />
        <CardBody>
          <CardTitle tag="h5">Reverse Lunge</CardTitle>
          <CardSubtitle tag="h6" className="mb-2">
          <div className="arrtext"> reps </div>{renderreps}</CardSubtitle>
          <CardSubtitle tag="h6" className="mb-2 ">
          <div className="arrtextwt"> Weights </div>{renderweights} </CardSubtitle>
          <CardSubtitle tag="h6" className="mb-2 ">
         <div className="arrtext"> rest </div>{renderrest} </CardSubtitle>
          

         
          
          
        </CardBody>
        <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
  <DropdownToggle caret size="sm">
    Exit Button
  </DropdownToggle>

</ButtonDropdown>

      </Card>
      
      {
  isdropOpen?null:<AddExercise count={count}/>
};
     
          </div>  
        </>
    )
}

export default ExerciseList

