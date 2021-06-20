import React,{useState} from 'react'
import ItemList from './ItemList';


const Additems=()=> {
const [current, setCurrent] = useState("")
const [click, setClick] = useState([]);

    const handleChange=(e)=>{

setCurrent(e.target.value);
    };

    const handleClick=(e)=>{
        
 setClick([...click,current]);
 setCurrent("");
    };

    const handleDelete=(id)=>{

        setClick((click)=>{
            return  click.filter((arrElem,index)=>{
                return index!==id;
        })

        
       
})

    };

    return (
        <div className="center_div">
        <input type="text" placeholder="Enter items"
        onChange={handleChange}
        value={current}
         />

         <button onClick={handleClick}>Add</button>

         <ul>
         

         {click.map((value,id)=>{
            
           return <ItemList pr={value}
               key={id}
               id={id}
               handleDelete={handleDelete}
           />
         })
         }
             
         </ul>
            
        </div>
    )
}

export default Additems
