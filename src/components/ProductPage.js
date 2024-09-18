import React, { Component } from 'react';
import ProductCard from './ProductCard';

class ProductPage extends Component {
  render() {
    const products = [
      { id: 1, name: 'Wireless Headphones', price: '$99.99', imageUrl: '/images/headphones.jpg' },
      { id: 2, name: 'Bluetooth Speaker', price: '$49.99', imageUrl: '/images/speaker.jpg' },
      { id: 3, name: 'Smart Watch', price: '$199.99', imageUrl: '/images/watch.jpg' },
    ];

    return (
      <div>
        <h1>Product List</h1>
        <div className="product-list">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              imageUrl={product.imageUrl}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default ProductPage;