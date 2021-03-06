'use strict';

import React from 'react';
import Button from '../../common/Button/component';

//include styles
require('./styles.scss');

class ItemCard extends React.Component {
  constructor() {
    super();
  }
  componentWillMount() {
    return;
  }
  componentDidMount(){
    return;
  }
  componentWillUnmount(){
    return;
  }
  sendActionWithProps(e) {
    console.log('SENDING ACTION WITH PROPS!');
    this.props.action(this.props.item, e)
  }
  transitionToPDP(e) {
    const item = this.props.item;
    this.props.onClick(item, e);
  }
  render () {
    const item = this.props.item;
    var _item;
    if (this.props.cart.cartItems){
      _item = this.props.cart.cartItems.filter(function(cartItem){
        //console.log(cartItem.tcin);
        return cartItem.tcin === item.tcin;
      })[0];
    }
    //console.log("ITEM IN CART", _item);
    let buttonState = _item ? "Remove From Cart" : "Add To Cart";
    let buttonClass = buttonState === "Remove From Cart" ? 'item-in-cart' : '' ;

    return (
      <div onClick={this.transitionToPDP.bind(this)} className="itemCard three columns">
        <img src={this.props.item.image} />
        <p className="itemCard--price">{this.props.item.price}</p>
        <Button className={buttonClass} onClick={this.sendActionWithProps.bind(this)} item={item}>{buttonState}</Button>
      </div>

    );
  }
}

ItemCard.displayName = "ItemCard";
ItemCard.defaultProps = {};

export default ItemCard;
