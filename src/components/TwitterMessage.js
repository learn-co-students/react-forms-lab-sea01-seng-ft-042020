import React from "react";

class TwitterMessage extends React.Component {

  state = {
    characters: this.props.maxChars,
    content: ''
  }


  handleInput = (event) => {

    this.setState({
      characters: this.state.characters - 1,
      content: event.target.value
    })
  }


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleInput} value={this.state.content} />
        <h1>{this.state.characters}</h1>
      </div>
    );
  }
}

export default TwitterMessage;
