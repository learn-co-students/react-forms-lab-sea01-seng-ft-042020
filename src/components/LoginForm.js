import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
       username: "jeff",
       password: "jeff"
    };
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log(this.state)
  }

  handleSubmit = event => {
      event.preventDefault();
      console.log(event)
      this.state.username && this.state.password ? this.props.handleLogin(this.state) : null }
  

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <div>
          <label>
            Username
            <input onChange={(e) => this.handleInputChange(e)} id="username" name="username" type="text" value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={(e) => this.handleInputChange(e)} id="password" name="password" type="password" value={this.state.password}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
