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
        //let { contactFullName, contactNumber } = this.props.location;
        let { fullName, numbers, email } = this.props.location.state.contact;
        console.log(numbers);
        
        for(const number in numbers){
            if(numbers[number].home)
                console.log(numbers[number].home);
            else if(numbers[number].work)
                console.log(numbers[number].work);
        }

    
      /*  for(let [key, value] of Object.entries(numbers)){
            console.log(`${key} with value ${value}`);
            console.log(value);
        }*/

        /*{(this.props.location.isFavorite ? <FaHeart className="icon specific-icon-heart"/>
        : <FaRegHeart className="icon specific-icon-heart" />)}*/

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
                        <Link to="/">
                            <FaPencilAlt className="icon specific-icon-pencil"></FaPencilAlt>
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
                             if(number.home){
                                return (
                                <div className="number-info" key={number.home}>
                                    <div className="second-column-number">Home</div>
                                    <div className="third-column-number">{number.home}</div>
                                </div>
                                )
                            }
                            else if(number.work){
                                return (
                                <div className="number-info" key={number.work}>
                                    <div className="second-column-number">Work</div>
                                    <div className="third-column-number">{number.work}</div>
                                </div>
                                )
                            }
                            return null;
                        })          
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