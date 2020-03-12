import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { FaPhone } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { IoMdArrowBack, IoIosAddCircleOutline } from "react-icons/io";
import { MdPersonOutline } from "react-icons/md";
import userImage from "../../Images/User_Circle.png";
import { TiDeleteOutline } from "react-icons/ti";
import { addContactAction } from "../../redux/actions";
import { emailConditional, fullNameConditional, numbersConditional } from "../Conditions";

class AddContact extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            fullName: '',
            numbers: [],
            email: '',
            imagePath: 'User_Circle.png',
            isFavorite: false,
            link: '/',
            conditionsMet: false
        }
    }
    componentDidMount(){
    }
    componentDidUpdate(){
    // added !this.state.conditionsMet to avoid "Maximum depth exceeded" -> This results in a behaviour that is not 100% wanted
        if(emailConditional(this.state.email) && fullNameConditional(this.state.fullName) && numbersConditional(this.state.numbers) && !this.state.conditionsMet){
            this.setState({
                conditionsMet: true
            })
        }
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmit = () => {
        let contact = {
            fullName: this.state.fullName,
            numbers: this.state.numbers,
            email: this.state.email,
            isFavorite: this.state.isFavorite,
            imagePath: this.state.imagePath
        }
        addContactAction(contact);
    }

    deleteNumber = (keyWord) => {
        this.setState({
            numbers: this.state.numbers.filter(number => number.key !== keyWord)
        })
    }

    addNumber = () => {
        this.setState({
            numbers: this.state.numbers.concat([{ key: '', value: ''}])
        })
    }

    onChangeNumberKey = index => event =>{
        const newKey = this.state.numbers.map((number, id) => {
            if(index !== id) return number;
            return { ...number, key: event.target.value };
        })

        this.setState({ numbers: newKey })
    }

    onChangeNumberValue = index => event =>{
        const newValue = this.state.numbers.map((number, id) => {
            if(index !== id) return number;
            return { ...number, value: event.target.value };
        })

        this.setState({ numbers: newValue })
    }

    isEnabled = () => {
        if(emailConditional(this.state.email) && fullNameConditional(this.state.fullName) && numbersConditional(this.state.numbers)){
            this.setState({
                conditionsMet: true
            })
            return true;
        }
        
        return false;
    }
    render(){

        return( 
            <form className="edit-user-info">
                <div className="image-container-2">
                <img className="edit-contact-image" src={userImage} alt="contact-profile"></img>
                </div>
                <div className="edit-user-info-details">
                    <div className="add-user-info-header">
                        <Link style={{color: '#80cbc4'}} to={this.state.link}>
                            <IoMdArrowBack style={{width: '30px', height:'auto'}}></IoMdArrowBack>
                        </Link>
                    </div>
                    
                    <div className="edit-user-fullname">
                        <label className="icon-label">
                            <MdPersonOutline style={{marginRight: '10px'}}></MdPersonOutline>
                            fullName
                        </label>
                        <input className="edit-user-fullname-input"
                        name='fullName'
                        placeholder='Full name'
                        value={this.state.fullName}
                        onChange={e => this.onChange(e)}/>

                    </div>

                    <div className="edit-user-email">
                        <label className="icon-label">
                            <AiOutlineMail style={{marginRight: '10px'}}/>
                            email
                        </label>
                        <input className="edit-user-email-input"
                            name="email"
                            placeholder='Email'
                            value={this.state.email}
                            onChange={e => this.onChange(e)}/>
                    </div>
                    
                    <div className="edit-user-numbers">
                        <div className="icon-label">
                            <FaPhone style={{marginRight: '10px'}}></FaPhone>
                            numbers
                        </div>
                        {
                            this.state.numbers.map((number,index) => {
                                return (
                                     <div className="edit-user-number-input" key={index}>                                       
                                        <input className="edit-user-number-key-input"
                                            name={number.key}
                                            placeholder='Type of number'
                                            value={number.key}
                                            onChange={this.onChangeNumberKey(index)}/>

                                        <input className="edit-user-number-value-input"
                                            name={number.value}
                                            placeholder='Number value'
                                            value={number.value}
                                            onChange={this.onChangeNumberValue(index)}/>

                                        <TiDeleteOutline onClick={() => this.deleteNumber(number.key)} className="icon-delete-number"></TiDeleteOutline>
                                </div>                                
                                )
                            })
                        }
                        <div style={{display:'flex', color:'#75C7CD',alignItems: 'center'}}>
                        <IoIosAddCircleOutline className="icon-add-number" onClick={this.addNumber}/>
                        <span>Add number</span>
                        </div>
                    </div>
                    <div className="edit-user-info-buttons">
                        <Link to={`${this.state.link}`}>
                            <button className="edit-user-info-button edit-user-cancel">Cancel</button>
                        </Link>
                        <Link to={`${this.state.link}`}>
                            <button disabled={!this.state.conditionsMet} className="edit-user-info-button edit-user-save" onClick={this.onSubmit}>Save</button>
                        </Link>
                    </div>
                </div>
            </form>
            
        )
    }
}

export default connect()(AddContact);