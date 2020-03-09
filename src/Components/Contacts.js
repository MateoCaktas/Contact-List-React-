import React from "react";
import Contact from "./ContactItem";
import { connect } from "react-redux";
import AddContactButton from "./AddContactButton";
class ContactsComponent extends React.Component {

    componentDidMount(){
    }

     render(){
         //Filter contacts by first name or last name
        let filteredContacts = this.props.allContacts.filter(Contact => Contact.fullName.toLowerCase().indexOf(this.props.search.toLowerCase()) !== -1);

         return(        
                <div className="contacts">
                    <AddContactButton/>
                    {
                        filteredContacts.map(item => (
                            <Contact className="contact" key={item.id} contact={item} link={'/'}/>
                        ))
                    }              
                </div>
         )
     }
}

const mapStateToProps = (state) => ({
    allContacts: state.allContacts
})

export default connect(mapStateToProps)(ContactsComponent);