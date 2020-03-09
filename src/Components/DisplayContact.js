import React from "react";
import userImage from "../User_Circle.png"
import { FaHeart, FaPencilAlt, FaRegHeart } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { IoMdArrowBack } from "react-icons/io";
import { FiPhone } from "react-icons/fi";
import { changeFavoriteAction } from "../redux/actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class DisplayContact extends React.Component {  
    constructor(props){
        super(props);

        this.state = {
            id:this.props.location.state.contact.id,
            isFavorite: this.props.location.state.contact.isFavorite,
            urlHistory: this.props.location.state.link
        }
    }

    changeFavorite = (id) => {
        changeFavoriteAction(id);
    
        this.setState({
            isFavorite: this.props.location.state.contact.isFavorite
        })
    }

    render(){
        let { fullName, numbers, email } = this.props.location.state.contact;

        return(
        <div className="specific-contact-profile-container">
            <img className="specific-contact-image" src={userImage} alt="contact-profile"></img>
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
                            (this.state.isFavorite ? <FaHeart className="icon specific-icon-heart" onClick={()=> this.changeFavorite(this.state.id)} style={{float:'right',color: "#80cbc4"}}/>
                            : <FaRegHeart className="icon specific-icon-heart" onClick={()=> this.changeFavorite(this.state.id)} style={{float:'right', color: "#9ca4ab"}}/>)
                        }
                        <Link to={{
                            pathname: `/editcontact/${this.state.id}`,
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
                        <div className="text-icon-mail">
                            <div className="second-column-number">email</div>
                            <div className="third-column-number">{email}</div>
                        </div>
                    </div>
                    { /* phone */}
                    <div className="specific-contact-number">
                        <FiPhone className="icon-phone"/>
                        <div className="contact-numbers">
                        
                        {
                        numbers.map(number =>{
                            return(
                                <div className="number-info" key={number.key}>
                                    <div className="second-column-number">{number.key}</div>
                                    <div className="third-column-number">{number.value}</div>
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