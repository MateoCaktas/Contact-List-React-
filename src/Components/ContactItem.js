import React from "react"
/*import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faHeart, faTrash } from '@fortawesome/free-solid-svg-icons'*/
import { connect } from "react-redux";
import { changeFavoriteAction } from "../redux/actions";
import { FaHeart, FaTrashAlt, FaRegHeart, FaPencilAlt } from "react-icons/fa";
import userImage from "../User_Circle.png";
import DeleteModal from "./DeleteModal";
import { Link } from "react-router-dom";

class ContactItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id: this.props.contact.id,
            isFavorite: this.props.contact.isFavorite,
            delete: false
        }
    }

    deleteContact = (id) => {
        //deleteContactAction(id);
        this.setState({
            delete: true
        })
    }

    changeFavorite = (id) => {
        changeFavoriteAction(id);
        
        this.setState({
            isFavorite: this.props.contact.isFavorite
        })
    }
    
    render(){
        console.log('inside render contactitem')
        console.log(this.props.contact);
        let fullName = this.props.contact.fullName;

        return(
        <div>
        
            <div className="contact">
                {
                    (this.state.isFavorite ? <FaHeart className="icon icon-heart" onClick={()=> this.changeFavorite(this.state.id)} style={{color: "#80cbc4"}}/>
                    : <FaRegHeart className="icon icon-heart" onClick={()=> this.changeFavorite(this.state.id)} style={{color: "#9ca4ab"}}/>)
                }            
                <Link className="contact-image" to={{
                    pathname: `/individualcontact/${this.props.contact.id}`,
                    state: { 
                    contact: this.props.contact,
                    link: this.props.link
                    }
                }}>
                    <img className="contact-image" src={userImage} alt="contact-profile"></img>
                </Link>
                <Link className="contact-full-name" to={{
                    pathname: `/individualcontact/${this.props.contact.id}`,
                    state: {
                        contact: this.props.contact,
                        link: this.props.link
                    }
                }}
                style={{wordBreak: 'break-all'}}>
                    {fullName}
                </Link>

                <Link to={{
                    pathname: `/editcontact/${this.props.contact.id}`,
                    state: {
                        contact: this.props.contact,
                        link: this.props.link
                    }
                    }} className="pencil-link">
                    <FaPencilAlt className="icon icon-pencil" style={{color: "#9ca4ab"}}/>
                </Link>
                <FaTrashAlt className="icon icon-trash-bin" onClick={() => this.deleteContact(this.state.id)} style={{color: "#9ca4ab"}}/>
            </div>{
            this.state.delete ? 
            <DeleteModal active={this.state.delete} contact={this.props.contact} style={{position: 'fixed', margin: 'auto'}}></DeleteModal> : null
            }
        </div>
        )
    }
}

export default connect()(ContactItem);