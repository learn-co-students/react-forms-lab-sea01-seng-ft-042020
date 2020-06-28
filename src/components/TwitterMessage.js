import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      maxChars: props.maxChars,
    };
  }
  handleChange = (event) => {
    let inputLength = event.target.value.length;
    let maxLength = this.props.maxChars
    this.setState({
        [event.target.name]: event.target.value,
        maxChars:  maxLength - inputLength,

    });console.log(event.target.name)
  };

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          onChange={(event) => this.handleChange(event)}
          type="text"
          name="message"
          id="message"
          value={this.state.message}
        />
        <p name="maxChars">characters remaining: {this.state.maxChars} </p>
      </div>
    );
  }
}

export default TwitterMessage;
