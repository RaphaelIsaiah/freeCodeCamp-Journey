// This file contains the React component that interacts with the Redux store
// src/components/DisplayMessages.jsx
import React from "react";
import { connect } from "react-redux";
import { addMessage } from "../../../actions";

class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }

  handleChange(e) {
    this.setState({
      input: e.target.value,
    });
  }

  submitMessage() {
    this.props.addMessage(this.state.input);
    this.setState({
      input: "",
    });
  }

  render() {
    const messages = this.props.messages.map((message, index) => (
      <li key={index}>{message}</li>
    ));

    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.input}
        />
        <button onClick={this.submitMessage}>Submit</button>
        <ul>{messages}</ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  messages: state.messages,
});

const mapDispatchToProps = {
  addMessage,
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayMessages);
