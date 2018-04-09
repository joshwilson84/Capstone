import React, { Component } from 'react';
import uuid from 'uuid';
import $ from 'jquery';
import { pseudoRandomBytes } from 'crypto';

class AddItem extends Component {
  constructor(){
    super();
    this.state={
      newItem:{},
      newApi:{}

    }
  }
  static defaultProps = {
    categories: ["UPC code", "Note/Reminder", "Other"]
  }







  handleSubmit(e){
    
    if(this.refs.note.value === ''){
      alert("Submission cannot be blank")

    }else if(this.refs.date.value === ''){
      alert("Submission cannot be blank")

    }else{
      this.setState({
        newItem: {
          id: uuid.v4(),
          category: this.refs.category.value,
          date: this.refs.date.value,
          note: this.refs.note.value,
          upccode: this.refs.upccode.value
        }}),
        $.ajax({
        url: 'http://api.walmartlabs.com/v1/items?apiKey=kck6cj86my363fghv43rfd7u&upc=035000521019',
          dataType: 'jsonp',
          success: function (data) {
            let parData = data.items
            this.setState({ newApi: parData }, function () {
              Object.assign(this.state.newItem, this.state.newApi),
              this.props.addAllItems(this.state.newItem),
              console.log(this.state.addAllItems)
            });
          }.bind(this),
          error: function (xhr, status, err) {
            console.log(err);
          }
        })
      }

    e.preventDefault();
  }; 
  



  render() {
    let categoryOptions = this.props.categories.map(category => {
      return <option key={category} value={category}>{category}</option>
    });
    return (
      <div>
        <h3>Add a new item</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>UPC code</label><br />
            <input type="text" ref="upccode" />
          </div>
          <div>
            <label>Date</label><br />
            <input type="text" ref="date" />
          </div>
          <div>
            <label>Note</label><br />
            <input type="text" ref="note" />
          </div>
          <div>
            <label>Category</label><br />
            <select ref="category">
              {categoryOptions}
            </select>
          </div>
          <input type="submit" value="Submit"/>

        </form>

      </div>
    );


  }
}

export default AddItem;
