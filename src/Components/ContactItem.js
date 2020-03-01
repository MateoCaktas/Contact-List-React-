import React from "react"
/*import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faHeart, faTrash } from '@fortawesome/free-solid-svg-icons'*/

import { connect } from "react-redux";
import { deleteContactAction, changeFavoriteAction } from "../redux/actions";
import { FaHeart, FaTrashAlt } from "react-icons/fa";

class ContactItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id: props.contact.id
        }
    }

    deleteContact = (id) => {
        deleteContactAction(id);
    }

    changeFavorite = (id) => {
        changeFavoriteAction(id);
    }

    render(){
        return(
        <div className="contact">
            <h1>{this.props.contact.firstName + ' ' +this.props.contact.lastName}</h1>
            <h2>Contact number:{this.props.contact.number}</h2>
            <h2>Age:{this.props.contact.age}</h2>
            <FaTrashAlt className="icon" onClick={() => this.deleteContact(this.state.id)} style={{color: "#9ca4ab"}}/>
            <FaHeart className="icon" onClick={()=> this.changeFavorite(this.state.id)} style={{color: "#9ca4ab"}}/>
        </div>
        )
    }
}

export default connect()(ContactItem);