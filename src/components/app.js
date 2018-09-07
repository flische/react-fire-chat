import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import { Route } from 'react-router-dom';
import Home from './home';
import Chat from './chat';

const App = () => (
    <div className="container">
       <Route to="/" exact component={Home}></Route>
       <Route to="/chat" component={Chat}></Route>
    </div>
);

export default App;
