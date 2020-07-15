import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import GlobalContextWrapper from "./GlobalStates.jsx"
import Home from "./component/Home"
import Gallery from "./component/Gallery"

const Main = () => {
    return(
      <GlobalContextWrapper>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/gallery" component={Gallery}/>
          </Switch>
        </Router>
      </GlobalContextWrapper>
    )
}

ReactDOM.render(<Main/>,document.getElementById('root'));
