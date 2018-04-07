import React, { Component } from 'react';

class WalmartItems extends Component {


  render() {
    return (
      <li className="Walmart">
        <strong>{this.props.items.name}</strong>
        <br />
        <img src={this.props.items.thumbnailImage}/>

      </li>
    );
  }
}

export default WalmartItems;
