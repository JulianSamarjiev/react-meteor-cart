import React, { Component, PropTypes } from 'react';

import { Items } from '../../api/items.js';

export default class Item extends Component {
  deleteThisItem() {
    Items.remove(this.props.item._id);
  }
  render() {
    let totalPrice = this.props.item.quantity * this.props.item.price;

    return (
      <div className="item">
        <div className="row">
          <div className="col-md-2">
            <img className="img-responsive img-rounded" src={'http://placehold.it/400x200&text=image'} />
          </div>
          <div className="col-md-2">
            <span>{this.props.item.text}</span>
          </div>
          <div className="col-md-2">
            <span>{this.props.item.quantity}</span>
          </div>
          <div className="col-md-2">
            <span>{this.props.item.price}</span>
          </div>
          <div className="col-md-2">
            <span>{totalPrice}</span>
          </div>
          <div className="col-md-2">
            <button className="btn btn-danger" onClick={this.deleteThisItem.bind(this)}>X</button>
          </div>
        </div>
      </div>
    );
  }
}

Item.propTypes = {
  item: PropTypes.object.isRequired,
};
