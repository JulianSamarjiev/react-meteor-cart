import React, { Component, PropTypes } from 'react';

export default class Item extends Component {
  render() {
    return (
      <li>{this.props.item.text}</li>
    );
  }
}

Item.propTypes = {
  item: PropTypes.object.isRequired,
};
