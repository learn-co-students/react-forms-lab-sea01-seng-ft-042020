import React, { Component } from "react";

class TwitterMessage extends Component {

  state = {
    message: ""
  }

  handleChange = (e) => {
    this.setState({
        message: e.target.value
    })
  }

  render() {
    let charNum = this.props.maxChars - this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleChange} value={this.state.message}/>
        <p>{charNum} chars left </p>
      </div>
    );
  }
}

export default TwitterMessage;
