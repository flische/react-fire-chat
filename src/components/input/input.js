import React, { Component } from 'react';
import './input.css';

class Input extends Component {
    state = {
        activeClass: ''
    };

    onFocus(){
        const { onFocus } = this.props.input;
        // console.log('Element was focused');
        this.setState({activeClass: 'active'});
        onFocus.apply(arguments); // this ensures that all of our onFocus changes get passed into redux form!
    }
    onBlur(event){
        const { onBlur } = this.props.input;
        // console.log('Blur: ', event.target.value); 
        if(!event.target.value){ // <-- we need to do a check to see if there is text in the input!
            this.setState({activeClass: ''});
        }
        onBlur.apply(arguments); // this ensures that all of our onBlur changes get passed into redux form!
    }

    render(){
        const { input, label, type, meta: { touched, error } } = this.props;

        return (
            <div className="row">
                <div className="input-field col s12">
                    <input 
                    {...input} // <-- this must go FIRST since we have to de-structure input form redux form 
                     type={type ? type  : 'text'}
                     onFocus={this.onFocus.bind(this)}
                     onBlur={this.onBlur.bind(this)}
                     />
                     <label className={this.state.activeClass}>{label}</label>
                </div>
                     <p className="red-text text-darken-2">{touched && error}</p>
            </div>
        );
    }
}

export default Input;