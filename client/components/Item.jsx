import React, { Component, PropTypes } from 'react';

import { Items } from '../../api/items.js';

export default class Item extends Component {
  deleteThisItem() {
    Items.remove(this.props.item._id);
  }
  render() {
    return (
      <div className="item">
        <div className="row">
          <div className="col-md-2">
            <img className="img-responsive" src={'http://placehold.it/400x200&text=image'} />
          </div>
          <div className="col-md-2">
            <span>{this.props.item.text}</span>
          </div>
          <div className="col-md-2">
            <span>1</span>
          </div>
          <div className="col-md-2">
            <span>100</span>
          </div>
          <div className="col-md-2">
            <span>100</span>
          </div>
          <div className="col-md-2">
            <button className="item-delete-btn" onClick={this.deleteThisItem.bind(this)}>X</button>
          </div>
        </div>
      </div>
    );
  }
}

Item.propTypes = {
  item: PropTypes.object.isRequired,
};
