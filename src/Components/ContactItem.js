import React from "react"
/*import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faHeart, faTrash } from '@fortawesome/free-solid-svg-icons'*/
import { connect } from "react-redux";
import { deleteContactAction, changeFavoriteAction } from "../redux/actions";
import { FaHeart, FaTrashAlt, FaRegHeart, FaPencilAlt } from "react-icons/fa";
import userImage from "../User_Circle.png";

class ContactItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id: props.contact.id,
            isFavorite: props.contact.isFavorite
        }
    }

    deleteContact = (id) => {
        deleteContactAction(id);
    }

    changeFavorite = (id) => {
        changeFavoriteAction(id);
        
        this.setState({
            isFavorite: this.props.contact.isFavorite
        })
    }
    
    render(){
        let fullName = this.props.contact.firstName + ' ' + this.props.contact.lastName;

        return(
        <div className="contact">
            {
                (this.state.isFavorite ? <FaHeart className="icon icon-heart" onClick={()=> this.changeFavorite(this.state.id)} style={{color: "#9ca4ab"}}/>
                : <FaRegHeart className="icon icon-heart" onClick={()=> this.changeFavorite(this.state.id)} style={{color: "#9ca4ab"}}/>)
            }            
            <img className="contact-image" src={userImage} alt="contact-profile"></img>
            <p className="contact-full-name">{fullName}</p>
            <FaPencilAlt className="icon icon-pencil" style={{color: "#9ca4ab"}}/>
            <FaTrashAlt className="icon icon-trash-bin" onClick={() => this.deleteContact(this.state.id)} style={{color: "#9ca4ab"}}/>
        </div>
        )
    }
}

export default connect()(ContactItem);