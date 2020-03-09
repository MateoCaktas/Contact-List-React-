import React from "react";
import Contact from "./ContactItem";
import { connect } from "react-redux";
import { addContactAction } from "../redux/actions";
import AddContactButton from "./AddContactButton";
import EditContact from "./EditContact";
class ContactsComponent extends React.Component {
    /*state = {
        search: ''
    }
    handleChange = (e) => {
        this.setState({ search: e.target.value })
    }
    
    <input type="text" value={this.state.search} onChange={this.handleChange}></input>*/
    componentDidMount(){
       // console.log(this.props.allContacts);        
    }

    addContact = () => {
        let testContact = {
            fullName: 'TestFirstName TestLastName',
            number: 11111,
            age: 111,
            isFavorite: true
        }
        addContactAction(testContact);
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
                    {/*
                        this.props.allContacts.map(item => (
                            <Contact className="contact" key={item.id} contact={item} />
                        ))*/
                    }
                </div>
           
         )
     }
}

const mapStateToProps = (state) => ({
    allContacts: state.allContacts
})

export default connect(mapStateToProps)(ContactsComponent);