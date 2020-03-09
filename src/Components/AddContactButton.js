import React from "react"
import { addContactAction } from "../redux/actions";
import { connect } from "react-redux";
import { FaPlus } from "react-icons/fa";
//import AddContact from "./AddContact";
import { Link } from "react-router-dom";

/*import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  */

class AddContactButton extends React.Component {
    addContact = () => {
        let testContact = {
            fullName: 'TestFirstName TestLastName',
            numbers: [{
                work: 12345,
            }],
            email: 'testfirstname.testlastname@gmail.com',
            age: 111,
            isFavorite: true,
            id: 12345678
        }
        addContactAction(testContact);
    }

    render(){
        return(
        <Link id="add-contact" to="/addcontact">
            <div>
                <FaPlus/>
                <div>Add new</div>
            </div>
        </Link>
        )
    }
}

export default connect()(AddContactButton);