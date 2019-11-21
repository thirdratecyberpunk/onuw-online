import React from "react";
import io from "socket.io-client";

class Chat extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            username: '',
            message: '',
            messages: []
        };

        this.socket = io('localhost:3000');

        this.socket.on('RECEIVE_MESSAGE', function(data){
            addMessage(data);
        });

        const addMessage = data => {
            this.setState({messages: [...this.state.messages, data]});
        };

        this.sendMessage = ev => {
            ev.preventDefault();
            var date = new Date();
            this.socket.emit('SEND_MESSAGE', {
                date: date.toTimeString(),
                id: this.state.username + Date.now(),
                author: this.state.username,
                text: this.state.message
            })
            this.setState({message: ''});
        }
    }
    render(){
        return (
            <div className="container">
                <div className="message-form">
                    <div className="card-title">Global Chat</div>
                    <hr/>
                    <ul id="messages">
                     {
                       this.state.messages.map((message) => <li key={message.id}><p className="username">{message.author}</p>{message.date} : {message.text} </li>)
                     }
                     </ul>
                </div>
                <div className="message-input">
                    <input type="text" placeholder="Username" value={this.state.username} onChange={ev => this.setState({username: ev.target.value})} className="form-control"/>
                    <br/>
                    <input type="text" placeholder="Message" className="form-control" value={this.state.message} onChange={ev => this.setState({message: ev.target.value})}/>
                    <br/>
                    <button onClick={this.sendMessage} className="sendMessageButton">Send</button>
                </div>
            </div>
        );
    }
}

export default Chat;
