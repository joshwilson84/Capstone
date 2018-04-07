import React, { Component } from 'react';
class TrackerItems extends Component {
  deletetrackedItem(id){
    this.props.onDelete(id)
  }


  render() {
    return (
      <li className="TrackerItems">
        {this.props.trackedItem.category} - {this.props.trackedItem.upccode} - {this.props.trackedItem.note}
         - {this.props.trackedItem.date} - {this.props.trackedItem.name}
         <br />
         <img src={this.props.trackedItem.thumbnailImage}/>
         <br />
         <button href="#" onClick={this.deletetrackedItem.bind(this, this.props.trackedItem.id)}>Remove Item</button>

      </li>
    );
  }
}

export default TrackerItems;
