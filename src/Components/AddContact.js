import React from "react";
import { connect } from "react-redux";
class AddContact extends React.Component {
    constructor(props){
        super(props);

        this.state = {
        }
    }
    componentDidMount(){
        if(this.props.test){
            console.log('Pa ovo ima propse!');
        } else { console.log("Ma ovo nema propse!")}
    }
    componentDidUpdate(){
        console.log('Updated!');
    }
    render(){
        if(this.props.test){
            var testvariable = 'success';
        };
        //let { contactId, contactFullName } = this.props.location;
        return( 
        <div>
            <div>Test {testvariable}</div>         
            <div>Props {this.props.test}</div>   
        </div>
        )
    }
}

const mapStateToProps = (state) => ({
    currentContact: state.currentContact
})

export default connect(mapStateToProps)(AddContact);