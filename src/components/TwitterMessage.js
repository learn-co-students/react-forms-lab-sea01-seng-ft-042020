import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleMessage = (event) => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    const { maxChars } = this.props
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} maxLength={maxChars} onChange={(event) => this.handleMessage(event)}/>
        <weak>Characters Left: {maxChars - this.state.message.length}</weak>
      </div>
    );
  }
}

export default TwitterMessage;
