import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {ExternalLink} from './pageObjects';
import Home from './Pages/Home';
import Ethos from './Pages/Ethos';
import Portfolio from './Pages/Portfolio';
import ContactUs from './Pages/Contact';


function Header() {
  return (
    <Router>
        <nav>
            <div id="name">
                <ExternalLink url="https://www.google.co.uk" LinkText="Lua Maker" />
            </div>
            <div id="navigation">
                <Link to="/">Home</Link>
                {/* <Link to="/ethos">Our Ethos</Link>
                <Link to="/portfolio">Our Portfolio</Link>
                <Link to="/contact">Contact</Link> */}
            </div>
        </nav>
        
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/ethos">
                <Ethos />
            </Route>
            <Route path="/portfolio">
                <Portfolio />
            </Route>
            <Route path="/contact">
                <ContactUs />
            </Route>
        </Switch>
        
    </Router>
  );
}

export default Header;
