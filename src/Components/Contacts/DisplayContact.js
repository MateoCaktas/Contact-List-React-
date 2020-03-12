import React from "react";
import { FaHeart, FaPencilAlt, FaRegHeart } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { IoMdArrowBack } from "react-icons/io";
import { FiPhone } from "react-icons/fi";
import { changeFavoriteAction } from "../../redux/actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class DisplayContact extends React.Component {  
    constructor(props){
        super(props);

        this.state = {
            email:this.props.location.state.contact.email,
            isFavorite: this.props.location.state.contact.isFavorite,
            urlHistory: this.props.location.state.link
        }
    }

    changeFavorite = (email) => {
        changeFavoriteAction(email);
    
        this.setState({
            isFavorite: this.props.location.state.contact.isFavorite
        })
    }

    render(){
        let { fullName, numbers, email, imagePath } = this.props.location.state.contact;

        return(
        <div className="specific-contact-profile-container">
            <div className="image-container">
            <img className="specific-contact-image" src={require(`../../Images/${imagePath}`)} alt="contact-profile"></img>
            </div>
            <div className="specific-contact-info">
                {/* Header above the outline */}
                <div className="specific-contact-header">
                    <Link className="arrow-back" to={`${this.state.urlHistory}`}>
                        <IoMdArrowBack className="icon specific-icon-back"></IoMdArrowBack>
                    </Link>
                    <div className="specific-contact-full-name">
                        {fullName}
                    </div>
                    <div className="specific-header-icons" >
                        {
                            (this.state.isFavorite ? <FaHeart className="icon specific-icon-heart" onClick={()=> this.changeFavorite(this.state.email)} style={{float:'right',color: "#80cbc4"}}/>
                            : <FaRegHeart className="icon specific-icon-heart" onClick={()=> this.changeFavorite(this.state.email)} style={{float:'right', color: "#9ca4ab"}}/>)
                        }
                        <Link to={{
                            pathname: `/editcontact/${this.state.email}`,
                            state: {
                                contact: this.props.location.state.contact,
                                link: this.props.location.state.link
                                }
                            }} className="pencil-link">

                            <FaPencilAlt className="icon specific-icon-pencil"/>
                        </Link>
                    </div>
                </div>

                <div className="specific-contact-details"> 
                    { /* email */}               
                    <div className="specific-contact-email">
                        <AiOutlineMail className="icon-mail"/>
                            <span className="subgroup">email</span>
                        <div className="third-column-number">{email}</div>
                    </div>
                    { /* phone */}
                    <div className="specific-contact-number">
                        <FiPhone className="icon-phone"/>
                        <span className="subgroup">numbers</span>
                        <div className="contact-numbers">
                        {
                        numbers.map(number =>{
                            return(
                                <div className="number-info" key={number.key}>
                                    <div className="second-column-number">{number.key}</div>
                                    <div className="number-value">{number.value}</div>
                                </div>
                        )})
                    }      
                        </div>                  
                    </div>                    
                </div>
            </div>
        </div>
        )
    }
}


export default connect()(DisplayContact);