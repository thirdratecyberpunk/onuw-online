import React from 'react';
import ReactDOM from 'react-dom';
import MessageContainer from '../components/MessageContainer.js';
import MessageForm from '../components/MessageForm.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {players: [], text: ''};
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <React.Fragment>
        <MessageContainer />
        <MessageForm />
      </React.Fragment>
    );
  }
}

export default App;
