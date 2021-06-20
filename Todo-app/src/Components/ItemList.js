import React from 'react'

const ItemList = (props)=> {
  
    return (
        <>
        <div className="todo_style">
        <i className="fa fa-times" aria-hidden="true"
onClick={(e)=> props.handleDelete(props.id)}
        />
              <li>{props.pr}</li>
              </div>
        </>
    )
}

export default ItemList
