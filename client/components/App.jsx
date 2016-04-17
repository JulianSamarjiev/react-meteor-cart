import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import { Items } from '../../api/items.js';

import Item from './Item.jsx';

class App extends Component {
  handleSubmit(event) {
    event.preventDefault();

    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
    const quantity = ReactDOM.findDOMNode(this.refs.quantityInput).value.trim();
    const price = ReactDOM.findDOMNode(this.refs.priceInput).value.trim();

    Items.insert({
      text,
      quantity,
      price,
      createdAt: new Date(),
    });

    ReactDOM.findDOMNode(this.refs.textInput).value = '';
    ReactDOM.findDOMNode(this.refs.quantityInput).value = '';
    ReactDOM.findDOMNode(this.refs.priceInput).value = '';
  }
  renderItems() {
    return this.props.items.map((item) => (
      <Item key={item._id} item={item} />
    ));
  }
  render() {
    return (
      <div className="container">
        <header className="text-center">
          <h2>React - Meteor Cart</h2>
        </header>

        <div className="items">
          {this.renderItems()}
        </div>

        <div className="form-add">
          <form className="form-inline" onSubmit={this.handleSubmit.bind(this)} >
            <input
              type="text"
              ref="textInput"
              placeholder="Item name"
              required
              className="form-control"
            />
            <input
              type="number"
              min="1"
              max="9"
              ref="quantityInput"
              placeholder="Item quantity"
              required
              className="form-control"
            />
            <input
              type="number"
              min="1"
              max="1000"
              ref="priceInput"
              placeholder="Price"
              required
              className="form-control"
            />
            <button className="btn btn-default" type="submit">Add</button>
          </form>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  items: PropTypes.array.isRequired,
};

export default createContainer(() => {
  Meteor.subscribe('items');
  return {
    items: Items.find({}).fetch(),
  };
}, App);
