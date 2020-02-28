import React from "react";
import Contacts from "./Contacts.json";
import Contact from "./ContactItem";

export default class ContactsComponent extends React.Component {
    constructor(){
        super();
        
        this.state = {
            allContacts: []
        }
    }

    componentDidMount(){
        console.log(Contacts);
        this.setState({
            allContacts: Contacts
        })

        if(this.state.allContacts !== ''){
            console.log('Nije prazan!')
        } else { console.log("Prazan je!")}
        console.log(this.state.allContacts);
    }

    addContact = () => {
        let testContact = {
            name: 'TestName',
            number: 11111,
            age: 111
        }

        console.log("lmao");

        this.setState({
            allContacts: [testContact, ...this.state.allContacts]
        })
    }

     render(){
         return(
             
             <div>
                
                <div className="contacts">
                    <button id="addcontact" onClick={this.addContact}>Add another !</button>
                    {
                        this.state.allContacts.map(item => (
                            <Contact className="contact" key={item.number} contact={item} />
                            //return (<p key={}> {item.name} </p>)
                        ))
                    }
                </div>
            </div>
         )
     }
}