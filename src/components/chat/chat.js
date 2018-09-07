import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../../firebase';
import { connect } from 'react-redux';
import { updateChat } from '../../actions';
import './chat.css';

class Chat extends Component {

    dbRef = db.ref('/');

    componentDidMount(){
        this.dbRef.on('value', this.props.updateChat);
    }
    componentWillUnmount(){
        this.dbRef.off();
    }

    render(){
        const { log } = this.props;

        const ChatElements = Object.keys(log).map(k => {
            const { name, message } = log[k];

            return (
                <li key={k} className="collection-item">
                    <b>{name}:</b> {message}
                </li>
            )
        });

        return (
            <div>
                <h1 className="center">Chat Room</h1>
                <div className="row right-align">
                    <Link to="/" className="btn orange darken-4">Home</Link>
                </div>
                <ul className="collection">
                    {ChatElements}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        log: state.chat.log
    }
}


export default connect(mapStateToProps, { updateChat })(Chat);