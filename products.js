import React from 'react';
import './Products.css';
import image4 from '../images/image4.jpeg';
import image5 from '../images/image5.jpeg';
import image6 from '../images/image6.jpeg';


const products = [
  { name: 'T-Shirt', price: '$25',image: image4 },
  { name: 'Mug', price: '$15', image: image5 },
  { name: 'Hoodie', price: '$50', image: image6 },
];

const Products = () => {
  return (
    <section className="products-section">
      <h2>Our Products</h2>
      <div className="products">
        {products.map((product, index) => (
          <div key={index} className="product-item">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
