import React, { Component } from 'react';

class UserInput extends Component {

  state = {
    username: "",
    hometown: ""
  }

  handleNameChange = (ev) => {this.setState({username: ev.target.value})}

  handleTownChange = (ev) => {this.setState({hometown: ev.target.value})}

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: this.state
    })
    this.setState({username: "", hometown: ""}, () => {
      console.log(this.props.store.getState())
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Username: </label>
          <input onChange={this.handleNameChange} type="text" id="username" value={this.state.username} />
          <label>Hometown: </label>
          <input onChange={this.handleTownChange} type="text" id="hometown" value={this.state.hometown} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default UserInput;
