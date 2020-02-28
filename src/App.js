import React from 'react';
import './App.css';
import Favorites from "./Favorites";
import ContactsComponent from "./Contacts";
import Header from "./Header";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default class App extends React.Component {
  render(){
  return (
    <Router>
      <Header/>
      <div>
        <nav>
          <ul style={{display: "flex", flex_direction: "row", justifyContent: 'space-around'}}>
            <div>
              <Link to="/">Home</Link>
            </div>
            <div>
              <Link to="/allcontacts">All contacts</Link>
            </div>
            <div>
              <Link to="/Favorites">Favorites</Link>
            </div>
            <div>
              <Link to="/individualContact">Individual Contact</Link>
            </div>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

        <Switch>
          <Route path="/allcontacts">
            <AllContacts />
          </Route>
          <Route path="/Favorites">
            <Favorites />
          </Route>
          <Route path="/individualContact/:id">
            <h2>Success!</h2>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
          }
}

function Home() {
  return <h2>Home</h2>;
}

function AllContacts() {
  return <ContactsComponent/>;
}
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/