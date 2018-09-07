import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './chat.css';

class Chat extends Component {
    render(){
        return (
            <div>
                <h1 className="center">Chat Room</h1>
                <div className="row right-align">
                    <Link to="/" className="btn orange darken-4">Home</Link>
                </div>
            </div>
        );
    }
}

export default Chat;