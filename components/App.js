import React from 'react';
import ReactDOM from 'react-dom';
import MessageContainer from '../components/MessageContainer.js';
import MessageForm from '../components/MessageForm.js';
import socketIOClient from 'socket.io-client';

class App extends React.Component {
  // constructing the component
  constructor(props){
    super(props);
    this.state = {
      endpoint: "localhost:4001",
      items: [
        {
          id: Date.now(),
          text: "Welcome to ONUW-Online!"
        },
        {
          id: Date.now() + 1,
          text: "Testing!"
        }
      ],
    };
  }

  // function to handle a submission from the message form

  // sending sockets
  send() {
    const socket = socketIOClient(this.state.endpoint);
    socket.emit('chat message', "Testing");
  }

  // called when the component is mounted onto the tree
  componentDidMount() {
    const socket = socketIOClient(this.state.endpoint);
    socket.on('chat message', function(msg){
      socket.emit('chat message', msg);
      console.log('message: ' + msg);
    });
  }

  //
  handleChange(){
    console.log("testing handleChange");
  }

  handleSubmit(){
    console.log("testing handleSubmit");
  }

  // rendering the HTML contents
  render() {
    const socket = socketIOClient(this.state.endpoint);
    return (
      <React.Fragment>
        <MessageContainer messages={this.state.items}/>
        <MessageForm handleChange={this.handleChange}
        post={this.state.post} handleSubmit={this.handleSubmit}/>
      </React.Fragment>
    );
  }
}

export default App;
