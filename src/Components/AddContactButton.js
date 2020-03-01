import React from "react"
import { addContactAction } from "../redux/actions";
import { connect } from "react-redux";
import { FaPlus } from "react-icons/fa"
import AddContact from "./AddContact";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  

class AddContactButton extends React.Component {
    addContact = () => {
        let testContact = {
            firstName: 'TestFirstName',
            lastName: 'TestLastName',
            number: 11111,
            age: 111,
            isFavorite: true
        }
        addContactAction(testContact);
    }

    render(){
        return(
            <button id="add-contact" onClick={this.addContact}>
                <FaPlus />
                <div>Add new contact</div>
            </button>
        )
    }
}

export default connect()(AddContactButton);