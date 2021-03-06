import React, { Component } from "react";

class RestaurantInput extends Component {
  constructor() {
    super();
    this.state = {
      restaurantName: ""
    };
  }

  handleChange = event => {
    this.setState({ restaurantName: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.store.dispatch({
      type: "ADD_RESTAURANT",
      restaurantName: this.state
    });
    this.setState({
      restaurantName: ""
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.restaurantName}
            onChange={this.handleChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default RestaurantInput;
