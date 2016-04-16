import React, { Component, PropTypes } from 'react';

import { Items } from '../../api/items.js';

export default class Item extends Component {
  deleteThisItem() {
    Items.remove(this.props.item._id);
  }
  render() {
    return (
      <div>
        <span>{this.props.item.text}</span>
        <span onClick={this.deleteThisItem.bind(this)}>X</span>
      </div>
    );
  }
}

Item.propTypes = {
  item: PropTypes.object.isRequired,
};
