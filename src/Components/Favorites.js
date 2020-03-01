import React from 'react';
import { connect } from 'react-redux';
import ContactItem from './ContactItem';

class Favorites extends React.Component {  
    componentDidMount(){
    }

    componentDidUpdate(){
        console.log('favoriti updateani')
    }

    render(){
        //Filter Contacts either by name or last name
        let filteredContacts = this.props.allContacts.filter(Contact => Contact.firstName.indexOf(this.props.search) !== -1
                                                                        || Contact.lastName.indexOf(this.props.search) !== -1);

       
        //Filter only the favorited results
        let favoriteContacts = filteredContacts.filter(item => item.isFavorite === true);

        return(
            <div className="contacts">
                {
                    favoriteContacts.map(item =>{
                        return <ContactItem className="contact" key={item.number} contact={item}/>
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