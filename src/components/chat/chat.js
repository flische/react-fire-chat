import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../../firebase';
import { connect } from 'react-redux';
import { updateChat } from '../../actions';
import { reduxForm, Field } from 'redux-form';
import Input from '../input';
import './chat.css';

class Chat extends Component {

    dbRef = db.ref('/');

    componentDidMount(){
        this.dbRef.on('value', this.props.updateChat);
    }
    componentWillUnmount(){
        this.dbRef.off();
    }
    sendMessage = async ({ message }) => {
        const newMessage = {
            name: localStorage.getItem('name'),
            message
        };

        await this.dbRef.push(newMessage);

        this.props.reset();
    }

    render(){
        const { log, handleSubmit } = this.props;

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
                <div className="row center">
                    <Link to="/" className="btn orange darken-4">Home</Link>
                </div>
                <p>Hello, {localStorage.getItem('name')}</p>
                <div className="row">
                    <form onSubmit={handleSubmit(this.sendMessage)} className="col s8 offset-s2">
                        <Field name="message" label="Message" component={Input}/>
                    </form>
                </div>
                <ul className="collection">
                    {ChatElements}
                </ul>
            </div>
        );
    }
}


Chat = reduxForm({
    form: 'text-message',
    validate: ({message}) => message ? {} : {message: 'No empty messages!'}
})(Chat);

function mapStateToProps(state){
    return {
        log: state.chat.log
    }
}

export default connect(mapStateToProps, { updateChat })(Chat);