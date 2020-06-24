import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      maxChars: props.maxChars,
      input: ""
    };
  }

  handleChange = (e) => {
    this.setState({
      maxChars: this.state.maxChars - 1,
      input: e.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>{this.state.maxChars}</strong>
        <input onChange={event => this.handleChange(event)} type="text" name="message" id="message" value={this.state.input}/>
      </div>
    );
  }
}

export default TwitterMessage;
