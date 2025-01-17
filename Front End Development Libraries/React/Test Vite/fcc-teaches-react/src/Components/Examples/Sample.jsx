import React from "react";

class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
    // Change code below this line
    this.handleChange = this.handleChange.bind(this);
    // Change code above this line
  }
  // Change code below this line
  handleChange(event) {
    const value = event.target.value;

    this.setState({ input: value });
  }
  // Change code above this line
  render() {
    return (
      <div>
        {/* Change code below this line */}
        <input
          id="controlledInput"
          type="text"
          onChange={this.handleChange}
          value={this.state.input}
          placeholder="Type something..."
        />
        {/* Change code above this line */}
        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>
      </div>
    );
  }
}

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      submit: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value,
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    // Change code below this line
    const value = this.state.input;
    this.setState({
      submit: value,
    });

    // Change code above this line
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {/* Change code below this line */}
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.input}
          />
          {/* Change code above this line */}
          <button type="submit">Submit!</button>
        </form>
        {/* Change code below this line */}
        <h1>{this.state.submit}</h1>
        {/* Change code above this line */}
      </div>
    );
  }
}

export default MyForm;
