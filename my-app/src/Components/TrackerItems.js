import React, { Component } from 'react';
class TrackerItems extends Component {
  deletetrackedItem(id){
    this.props.onDelete(id)
  }


  render() {
    return (
      <li className="TrackerItems">
        {this.props.trackedItem.category} - {this.props.trackedItem.upccode} - {this.props.trackedItem.note}
         - {this.props.trackedItem.date}
         <br />  
         {this.props.trackedItem.name}
         <br />
        <a href={this.props.trackedItem.addToCartUrl} target='_blank'> 
          <img src={this.props.trackedItem.thumbnailImage}/>
        </a>
         <br />
         <button href="#" onClick={this.deletetrackedItem.bind(this, this.props.trackedItem.id)}>Remove Item</button>

      </li>
    );
  }
}

export default TrackerItems;
