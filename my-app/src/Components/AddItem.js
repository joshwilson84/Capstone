import React, { Component } from 'react';
import uuid from 'uuid';
import $ from 'jquery';

class AddItem extends Component {
  constructor(){
    super();
    this.state={

    }
  }
  static defaultProps = {
    categories: ["UPC code", "Note/Reminder", "Other"]
  }







  handleSubmit(e){
    e.preventDefault();
    if(this.refs.note.value === ''){
      alert("Submission cannot be blank")

    }else if(this.refs.date.value === ''){
      alert("Submission cannot be blank")

    }else{
      $.ajax({
          url: 'http://api.walmartlabs.com/v1/items?apiKey=kck6cj86my363fghv43rfd7u&upc=035000521019',
          dataType: 'jsonp',
          //cache: false,
          //crossDomain: true,
          headers:(
              'Access-Control-Allow-Headers: x-requested-with'
          ),
          //headers: Access-Control-Request-Headers: x-requested-with
          success: function(data){
            let parData = data.items
            console.log(this.state);
            },
          error: function(xhr, status, err){
            console.log(err);
          }
        }),
        function(){
          this.props.apiitem(this.state.data)
        }.bind(this),




          this.setState({newItem:{
            id: uuid.v4(),
            category: this.refs.category.value,
            date: this.refs.date.value,
            note: this.refs.note.value,
            upccode: this.refs.upccode.value

          }})
        }.bind(this);
      }
}

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