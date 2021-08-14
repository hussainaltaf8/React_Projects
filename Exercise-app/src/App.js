import React,{useState} from "react";
import './App.css';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import ExerciseList from "./Components/ExerciseList";
import AddExercise from "./Components/AddExercise";



const App=()=> {
 
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);
  
  
  return (
    <>
    <div className="App">
      <h1>Add Exercises</h1>
      <div className='dropdown'>
     
  <ButtonDropdown className="mb-3" isOpen={dropdownOpen} toggle={toggle}>
    <DropdownToggle caret>
      Reverse Lunge
    </DropdownToggle>
  </ButtonDropdown>


  <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
    <DropdownToggle caret>
      Reps/Weight/Sets/Rest
    </DropdownToggle>
  </ButtonDropdown>

      </div>

      <ExerciseList />
      
      
  </div>
    

    </>
  );
}

export default App;
