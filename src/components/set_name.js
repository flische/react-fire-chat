import React from 'react';
import { reduxForm, Field } from 'redux-form';
import Input from './input';

const SetName = props => {
    function handleSubmit(values){ // we want to save the name into localStorage (that way it remains set on page refresh)
        localStorage.setItem('name', values.name);

        props.history.push('/chat');
    }

    return (
        <div>
            <h1 className="center">Como te llamas?</h1>
            <form onSubmit={props.handleSubmit(handleSubmit)} className="col s8 offset-s2">
                <Field name="name" label="Name" component={Input}/>
                <div className="row center">
                    <button className="btn orange darken-3">Set Name</button>
                </div>
            </form>
        </div>
    );
}

function validate({name}){
    return name ? {} : {name: 'Please enter your name'};
}

export default reduxForm({
    form: 'set-name',
    validate
})(SetName);