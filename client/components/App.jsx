import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import { Items } from '../../api/items.js';

import Item from './Item.jsx';

class App extends Component {
  handleSubmit(event) {
    event.preventDefault();

    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

    Items.insert({
      text,
      createdAt: new Date(),
    });

    ReactDOM.findDOMNode(this.refs.textInput).value = '';
  }
  renderItems() {
    return this.props.items.map((item) => (
      <Item key={item._id} item={item} />
    ));
  }
  render() {
    return (
      <div>
        <header>
          <h1>React - Meteor Cart</h1>
        </header>

        <form onSubmit={this.handleSubmit.bind(this)} >
          <input
            type="text"
            ref="textInput"
            placeholder="Type to add a cart item"
          />
        </form>

        {this.renderItems()}
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
