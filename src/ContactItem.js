import React from "react"
/*import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faHeart, faTrash } from '@fortawesome/free-solid-svg-icons'*/

import { FaHeart, FaTrashAlt } from "react-icons/fa";

export default class ContactItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id: props.contact.number
        }
        
    }
    render(){
        return(
        <div className="contact">
            <h1>{this.props.contact.name}</h1>
            <h2>Contact number:{this.props.contact.number}</h2>
            <h2>Age:{this.props.contact.age}</h2>
            <FaTrashAlt className="icon" onClick={()=>{console.log(this.state.id);}} style={{color: "#9ca4ab"}}/>
            <FaHeart className="icon" onClick={()=>{console.log(this.state.id);}} style={{color: "#9ca4ab"}}/>
        </div>
        )
    }
}