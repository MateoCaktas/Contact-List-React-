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

    deleteContact = (email) => {
        deleteContactAction(email);
    }

    removeWindow = () => {
        this.setState({
            active: !this.props.active,
            visibilityState: 'none'
        });
        this.props.removeModal();
    }

    render(){
        return(
            <div className="delete-window" style={{display: `${this.state.visibilityState}`}}>
            {
                this.state.active ? (
                    <div className="delete-window-content">
                        <div className="delete-window-header">Delete {this.props.contact.fullName}?</div>
                        <div className="delete-window-text">Are you sure you want to delete this contact?</div>
                        <div className="delete-modal-position-buttons">
                            <button className="accept-button" onClick={() => this.deleteContact(this.props.contact.email)}>Delete</button>
                            <button className="cancel-button" onClick={this.removeWindow}>Cancel</button>
                        </div>
                    </div>) 
                : null
            }
            </div>
        );
    }
}

export default DeleteModal;