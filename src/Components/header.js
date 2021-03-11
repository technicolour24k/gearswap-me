import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {ExternalLink} from './pageObjects';
import {Home} from './Pages/Home';


function Header() {
  return (
    <Router>
        <nav>
            <div id="name">
                <ExternalLink url="https://docs.windower.net/addons/gearswap/reference/" LinkText="Gearswap User References" /> |
                <ExternalLink url="https://www.lua.org/start.html" LinkText="LUA.org" />
            </div>
            <div id="navigation">
                <ExternalLink url="https://windower.net/" LinkText="Windower.net" />
            </div>
        </nav>
        
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
        </Switch>
        
    </Router>
  );
}

export default Header;
