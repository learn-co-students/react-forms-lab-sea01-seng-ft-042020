import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleChange = event => {
    this.setState({
      message: event.target.value
    })
  }

  remainingChars = () => {
    return this.props.maxChars -this.state.message.length
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          id="message"
          value={this.state.message}
          onChange={this.handleChange}
        />
        <p>Allowed: {this.props.maxChars}</p>
        <p>Remaining: {this.remainingChars()}</p>
      </div>
    );
  }
}

export default TwitterMessage;
