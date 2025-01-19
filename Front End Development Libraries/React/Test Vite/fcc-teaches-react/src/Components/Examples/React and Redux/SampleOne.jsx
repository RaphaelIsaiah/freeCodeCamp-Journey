import React from "react";

class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      messages: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  // Add handleChange() and submitMessage() methods here

  handleChange(e) {
    this.setState({
      input: e.target.value,
    });
  }

  submitMessage() {
    this.setState(
      (state) => ({
        input: "",
        messages: [...state.messages, state.input],
      }),
      () => {
        // Log the updated state after submission
        console.log(this.state);
      }
    );
  }

  render() {
    const messages = this.state.messages.map((message, index) => {
      return <li key={index}>{message}</li>;
    });
    return (
      <div>
        <h2>Type in a new Message:</h2>
        {/* Render an input, button, and ul below this line */}
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.input}
        />

        <button onClick={this.submitMessage}>Submit</button>

        <ul>{messages}</ul>
        {/* Change code above this line */}
      </div>
    );
  }
}

export default DisplayMessages;
