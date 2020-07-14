import React from 'react';
import ReactDOM from 'react-dom';

import GlobalContextWrapper from "./GlobalStates.jsx"
import Home from "./component/Home"

const Main = () => {
    return(
      <GlobalContextWrapper>
        <Home/>
      </GlobalContextWrapper>
    )
}

ReactDOM.render(<Main/>,document.getElementById('root'));
