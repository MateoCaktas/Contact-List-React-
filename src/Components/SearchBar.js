import React from "react";
import { FaSearch } from "react-icons/fa";

class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
    
    handleChange = (e) => {
      //this.setState({ search: e.target.value })
    }

    render(){
        return(
            <div className="search-bar">
                <FaSearch></FaSearch>
                <FaSearch></FaSearch>
                <FaSearch></FaSearch>
                <FaSearch></FaSearch>
                <input type="text" value={this.props.search} onChange={this.handleChange}></input>
            </div>
        )
    }
}

export default SearchBar;