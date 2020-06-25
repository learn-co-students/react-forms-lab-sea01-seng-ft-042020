import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      chars: 0,
      content: ""
    }
  }

  updateChars = (event) => {
    let newCount = this.state.chars + 1
    let newString = event.target.value
    this.setState({
      chars: newCount,
      content: newString
    })
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.content} onChange={this.updateChars} />
    <p>{this.props.maxChars - this.state.chars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
