import React from "react"
import { connect } from "react-redux";
import { changeFavoriteAction } from "../../redux/actions";
import { FaHeart, FaTrashAlt, FaRegHeart, FaPencilAlt } from "react-icons/fa";
import DeleteModal from "../DeleteModal";
import { Link } from "react-router-dom";

class ContactItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: this.props.contact.email,
            isFavorite: this.props.contact.isFavorite,
            delete: false
        }
    }

    deleteContact = () => {
        this.setState({
            delete: true
        })
    }

    changeFavorite = (email) => {
        changeFavoriteAction(email);
        
        this.setState({
            isFavorite: this.props.contact.isFavorite
        })
    }
    
    removeModal = () => {
        this.setState({
            delete: false
        })
    }

    render(){
        let fullName = this.props.contact.fullName;
        
        return(
        <div>
        
            <div className="contact">
                {
                    (this.state.isFavorite ? <FaHeart className="icon icon-heart" onClick={()=> this.changeFavorite(this.state.email)} style={{color: "#80cbc4"}}/>
                    : <FaRegHeart className="icon icon-heart" onClick={()=> this.changeFavorite(this.state.email)} style={{color: "#9ca4ab"}}/>)
                }            
                <Link className="contact-image" to={{
                    pathname: `/individualcontact/${this.props.contact.email}`,
                    state: { 
                    contact: this.props.contact,
                    link: this.props.link
                    }
                }}>
                    <img className="contact-image" src={require(`../../Images/${this.props.contact.imagePath}`)} alt="contact-profile"></img>
                </Link>
                <Link className="contact-full-name" to={{
                    pathname: `/individualcontact/${this.props.contact.email}`,
                    state: {
                        contact: this.props.contact,
                        link: this.props.link
                    }
                }}
                style={{wordBreak: 'break-all', overflow:'hidden'}}>
                    {fullName}
                </Link>

                <Link to={{
                    pathname: `/editcontact/${this.props.contact.email}`,
                    state: {
                        contact: this.props.contact,
                        link: this.props.link
                    }
                    }} className="pencil-link">
                    <FaPencilAlt className="icon icon-pencil" style={{color: "#9ca4ab"}}/>
                </Link>
                <FaTrashAlt className="icon icon-trash-bin" onClick={this.deleteContact} style={{color: "#9ca4ab"}}/>
            </div>{
            this.state.delete ? 
            <DeleteModal removeModal={this.removeModal} active={this.state.delete} contact={this.props.contact} style={{position: 'fixed', margin: 'auto'}}></DeleteModal> : null
            }
        </div>
        )
    }
}

export default connect()(ContactItem);