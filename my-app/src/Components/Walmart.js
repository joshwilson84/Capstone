import React, { Component } from 'react';
import WalmartItems from  './WalmartItems';

class Walmart extends Component {


  render() {
    let walmartItems;
    if (this.props.item) {
      walmartItems = this.props.item.map(items =>{
          //console.log(trackedItem);
          return(
            <WalmartItems key={items.itemId} items={items} />
          )
      });

    }
    return (
      <div className="Walmart">
      <h3>Things added</h3>
        {walmartItems}

      </div>
    );
  }
}




export default Walmart;
