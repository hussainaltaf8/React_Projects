import React from 'react'
import "./Infobox.css"
import {Card,Typography} from "@material-ui/core";

function Infobox({title,cases,isRed,active,total,...props}) {
    return (
       <Card onClick={props.onClick} className={`infoBox ${active &&"infoBox--selected"} ${isRed && "infoBox--red"}`}
       >
       <Typography color="textSecondary" className="infoBox_title">{title}</Typography>
       <h2 className={`infoBox_cases ${!isRed && "infoBox_cases--green"}`}>{cases}</h2>
       <Typography color="textSecondary" className="infoBox_total">Total-{total}</Typography>

       </Card>
    )
}

export default Infobox



