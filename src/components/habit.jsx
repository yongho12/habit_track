import React, { Component } from 'react';

class Habit extends Component {
  state = {
      count: 0,
  }

  handleIncrement = (event) => {
    console.log(event);
    this.setState({count: this.state.count +1 })
  }``

  handleDecrement = (event) => {
    console.log(event);
    const count = this.state.count -1
    this.setState({count: count < 0? 0: count })
  }

  render() {
    return (
      <>
        <span className="habit-name">Reading</span>
        <span className="habit-count">{this.state.count}</span>
        <button className="habit-button habit-increase" onClick={this.handleIncrement}>
          <i className="fas fa-plus-square"></i>
        </button>
        <button className="habit-button habit-decrease" onClick={this.handleDecrement}>
          <i className="fas fa-minus-square"></i>
        </button>
        <button className="habit-button habit-delete">
          <i className="fas fa-trash"></i>
        </button>
      </>
    );
  }
}

export default Habit;