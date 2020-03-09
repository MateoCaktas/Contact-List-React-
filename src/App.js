import React from 'react';
import './App.css';
import Favorites from "./Components/Favorites";
import ContactsComponent from "./Components/Contacts";
import Header from "./Components/Header";
import store from "./redux/store";
import { Provider } from "react-redux";
import { FaSearch } from "react-icons/fa";
import EditContact from "./Components/EditContact";
import AddContact from "./Components/AddContact";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import DisplayContact from './Components/DisplayContact';

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
            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}

            <Switch>
              <Route path="/favorites">
              <nav>
              <ul className="menu-items">
                <div>                  
                  <NavLink className="link" activeClassName="link-active" exact to="/">All contacts</NavLink>
                </div>
                <div className="vertical-line">
                  |
                </div>
                <div>
                  <NavLink className="link" activeClassName="link-active" to="/favorites">Favorites</NavLink>
                </div>
              </ul>
            </nav>
    
            <hr className="horizontal-line"/>
              <div className="search-bar">
                  <FaSearch className="search-icon"></FaSearch>
                  <input className="search-input-field" type="text" value={this.state.search} onChange={this.handleChange}></input>
                </div>
                <Favorites search={this.state.search}/>
              </Route>
              <Route path="/individualContact/:id" render={(props) => <DisplayContact {...props} />}>
              </Route>
              <Route path="/editcontact/:id" render={(props) => <EditContact {...props} />}>
              </Route>
              <Route path="/addcontact">
                <AddContact/>
              </Route>
              <Route path="/">
              <nav>
              <ul className="menu-items">
                <div>                  
                  <NavLink className="link" activeClassName="link-active" exact to="/">All contacts</NavLink>
                </div>
                <div className="vertical-line">
                  |
                </div>
                <div>
                  <NavLink className="link" activeClassName="link-active" to="/favorites">Favorites</NavLink>
                </div>
              </ul>
            </nav>
    
            <hr className="horizontal-line"/>
                <div className="search-bar">
                  <FaSearch className="search-icon"></FaSearch>
                  <input className="search-input-field" type="text" value={this.state.search} onChange={this.handleChange}></input>
                </div>
                <ContactsComponent search={this.state.search}/>
              </Route>
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}