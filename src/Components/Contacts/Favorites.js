import React from 'react';
import { connect } from 'react-redux';
import ContactItem from './ContactItem';
class Favorites extends React.Component {
    componentDidMount(){
        
    }

    componentDidUpdate(){
    }

    render(){
        //Filter Contacts by full name
        let filteredContacts = this.props.allContacts.filter(Contact => Contact.fullName.toLowerCase().indexOf(this.props.search.toLowerCase()) !== -1)
       
        //Filter only the favorited results
        let favoriteContacts = filteredContacts.filter(item => item.isFavorite === true);

        return(
            <div className="contacts">
                {
                    favoriteContacts.map(item =>{
                        return <ContactItem className="contact" key={item.email} contact={item} link={'/favorites'}/>
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