import React, { Component } from 'react';

import Item from './Item.jsx';

export default class App extends Component {
  getItems() {
    return [
      { _id: 1, text: 'This is item 1' },
      { _id: 2, text: 'This is item 2' },
      { _id: 3, text: 'This is item 3' },
    ];
  }
  renderItems() {
    return this.getItems().map((item) => (
      <Item key={item._id} item={item} />
    ));
  }
  render() {
    return (
      <div>
        <header>
          <h1>React - Meteor Cart</h1>
        </header>

        <ul>
          {this.renderItems()}
        </ul>
      </div>
    );
  }
}
