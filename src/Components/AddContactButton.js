import React from "react"
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

/*import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  */

function AddContactButton() {
    return(
        <Link id="add-contact" to="/addcontact">
            <div className="add-contact-button">
                <FaPlus/>
                <div>Add new</div>
            </div>
        </Link>
        )
    }
export default AddContactButton;