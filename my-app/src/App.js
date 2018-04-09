import React, { Component } from 'react';
import './App.css';
import Tracker from './Components/Tracker';
import AddItem from './Components/AddItem';
import uuid from 'uuid';
import $ from 'jquery';

class App extends Component {
  constructor(){
    super();
    this.state = {
      trackedItems: []




    }
  }

  /*getItems(){
    $.ajax({
      url: 'http://api.walmartlabs.com/v1/items?apiKey=kck6cj86my363fghv43rfd7u&upc='+'{newItem.upc}',
      dataType: 'jsonp',
      //cache: false,
      //crossDomain: true,
      headers:(
          'Access-Control-Allow-Headers: x-requested-with'
      ),
      //headers: Access-Control-Request-Headers: x-requested-with
      success: function(data){
          let parData = data.items
          this.setState({trackedItems: parData}, function(){
          console.log(this.state);
          });
      }.bind(this),
      error: function(xhr, status, err){
          console.log(err);
      }
    });

  }*/

  getTrackedItems(){
    this.setState({trackedItems: [
    ]});
  }

  componentWillMount(){
    this.getTrackedItems();
    //this.getItems();

  }

  componentDidMount(){
    this.getTrackedItems();

  }


  handleAddItem(trackedItem){
    let trackedItems = this.state.trackedItems;
    trackedItems.push(trackedItem);
    this.setState({trackedItems: trackedItems});
  }
  handleDeleteItem(id){
    let trackedItems = this.state.trackedItems;
    let index = trackedItems.findIndex(x => x.id === id);
    trackedItems.splice(index, 1);
    this.setState({trackedItems: trackedItems});
  }

  render() {
    return (
      <div className="App">
       <AddItem  addAllItems = {this.handleAddItem.bind(this)} />
       <Tracker trackedItems={this.state.trackedItems} onDelete={this.handleDeleteItem.bind(this)} />

      </div>
    );
  }
}

export default App;
