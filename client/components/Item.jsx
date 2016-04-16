import React, { Component, PropTypes } from 'react';

export default class Item extends Component {
  render() {
    return (
      <div>
        {this.props.item.text}
      </div>
    );
  }
}

Item.propTypes = {
  item: PropTypes.object.isRequired,
};
