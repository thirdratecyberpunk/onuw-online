import React from 'react';
import ReactDOM from 'react-dom';

class MessageForm extends React.Component{
  constructor(props) {
    super(props);
    this.handleChange = props.handleChange();
    this.handleSubmit = props.handleSubmit();
    this.post = props.post;
  }

  render(){
    return (
      <form action="">
        <input id="m" autoComplete="off" /><button
        onClick={this.handleClick}>Send</button>
      </form>
    );
  }
}

export default MessageForm;
