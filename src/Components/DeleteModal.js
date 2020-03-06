import React from "react";
import { deleteContactAction } from "../redux/actions";

class DeleteModal extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            active: this.props.active,
            visibilityState: 'block'
        }
    }

    deleteContact = (id) => {
        console.log(this.props.contact.id);
        deleteContactAction(id);
    }

    removeWindow = () => {
        console.log(this.state.active)
        this.setState({
            active: !this.props.active,
            visibilityState: 'none'
        })
    }

    render(){
        console.log(this.props.contact);
        return(
            <div className="delete-window" style={{display: `${this.state.visibilityState}`}}>
            {
                this.state.active ? (
                    <div className="delete-window-content">
                        <div className="delete-window-header">Delete {this.props.contact.fullName}?</div>
                        <div className="delete-window-text">Are you sure you want to delete this contact?</div>
                        <button className="cancel-button" onClick={this.removeWindow}>Cancel</button>
                        <button className="accept-button" onClick={() => this.deleteContact(this.props.contact.id)}>Delete</button>
                    </div>) 
                : null
            }
            </div>
        );
    }
}

export default DeleteModal;