import React from 'react';
import { connect } from 'react-redux';
import ContactItem from './ContactItem';
import EditContact from "./EditContact";
class Favorites extends React.Component {  
    componentDidMount(){
    }

    componentDidUpdate(){
    }

    render(){
        //Filter Contacts either by name or last name
        let filteredContacts = this.props.allContacts.filter(Contact => Contact.fullName.indexOf(this.props.search) !== -1)
       
        //Filter only the favorited results
        let favoriteContacts = filteredContacts.filter(item => item.isFavorite === true);

        return(
            <div className="contacts">
                {
                    favoriteContacts.map(item =>{
                        return <ContactItem className="contact" key={item.id} contact={item} link={'/favorites'}/>
                    })                                     
                }

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    allContacts: state.allContacts
})

export default connect(mapStateToProps)(Favorites);