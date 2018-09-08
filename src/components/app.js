import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import { Route } from 'react-router-dom';
import Home from './home';
import Chat from './chat';
import SetName from './set_name';

const App = () => (
    <div className="container">
       <Route path="/" exact component={Home}></Route>
       <Route path="/chat" component={Chat}></Route>
       <Route path="/set-name" component={SetName}></Route>
    </div>
);

export default App;
