import React from "react";

class Form extends React.Component {
  state = {
    userName: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.userName);
  };

  handleOnChange = event => {
    this.setState({ userName: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Github name"
          value={this.state.userName}
          onChange={this.handleOnChange}
          required
        />
        <button>Add Card</button>
      </form>
    );
  }
}

export default Form;
