import React, { Component } from 'react';

class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 0,
    };
  }

  handleAddToCart = () => {
    this.setState((prevState) => ({
      quantity: prevState.quantity + 1,
    }));
  };

  render() {
    const { name, price, imageUrl } = this.props;
    const { quantity } = this.state;

    return (
      <div className="product-card">
        <img src={imageUrl} alt={name} />
        <h2>{name}</h2>
        <p>{price}</p>
        <button onClick={this.handleAddToCart}>Add to Cart</button>
        <p>Quantity: {quantity}</p>
      </div>
    );
  }
}

export default ProductCard;