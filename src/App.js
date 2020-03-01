import React from 'react';
import './App.css';
import Favorites from "./Components/Favorites";
import ContactsComponent from "./Components/Contacts";
import Header from "./Components/Header";
import store from "./redux/store";
import { Provider } from "react-redux";
import AddContact from "./Components/AddContact";
//import SearchBar from "./Components/SearchBar";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default class App extends React.Component {
  constructor(){
    super();
  
    this.state = {
      search: ''
    }
  }
  handleChange = (e) => {
    this.setState({ search: e.target.value })
  }

  render(){
    return (
      <Provider store={store}>
        <Router>
          <Header/>
          <div>
            <nav>
              <ul style={{display: "flex", flex_direction: "row", justifyContent: 'center'}}>
                <div>
                  <Link to="/allcontacts">All contacts</Link>
                </div>
                <div>
                  <Link to="/Favorites">Favorites</Link>
                </div>
              </ul>
            </nav>
    
            <hr id="horizontal-line"/>
            {/*<SearchBar search={this.state.search}/>*/}
            <input type="text" value={this.state.search} onChange={this.handleChange}></input>
            <div>{this.state.search}</div>
            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}

            <Switch>
              <Route path="/allcontacts">
                <ContactsComponent search={this.state.search}/>
              </Route>
              <Route path="/Favorites">
                <Favorites search={this.state.search}/>
              </Route>
              <Route path="/individualContact/:id">
                <h2>Success!</h2>
              </Route>
              <Route path="/addcontact">
                <AddContact/>
              </Route>
              <Route path="/">
                <ContactsComponent search={this.state.search} />
              </Route>
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}