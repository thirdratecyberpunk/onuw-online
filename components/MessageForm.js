import React from 'react';
import ReactDOM from 'react-dom';

class MessageForm extends React.Component{
  render(){
    return (
      <form action="">
        <input id="m" autoComplete="off" /><button>Send</button>
      </form>
    );
  }
}

export default MessageForm;
