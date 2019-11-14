import React from 'react';
import ReactDOM from 'react-dom';
import socketIOClient from 'socket.io-client'

class MessageContainer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul id="messages">
       {
         this.props.messages.map((message) => <li key={message.id}>{message.text} </li>)
       }
       </ul>
    );
  }
}

export default MessageContainer;
