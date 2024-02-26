import '../styleProduct.css'

import { Link, useMatch, useResolvedPath } from "react-router-dom"
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import products from '../products.json';
import { debounce } from 'lodash';



export default function ProductPage() {

  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [transform, setTransform] = useState('scale(1) translate(0, 0)');

  const handleMouseMove = debounce((e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const scaleX = 1.2; // Adjust the scale factor as needed
    const scaleY = 1.2; // Adjust the scale factor as needed

    const translateX = -((scaleX - 1) * x);
    const translateY = -((scaleY - 1) * y);

    setTransform(`scale(${scaleX}, ${scaleY}) translate(${translateX}px, ${translateY}px)`);
  }, 5); // Adjust the debounce time as needed

  const handleMouseLeave = () => {
    setTransform('scale(1) translate(0, 0)');
  };


  useEffect(() => {
    // Find the product with the matching ID
    const selectedProduct = products.find(product => product.id === parseInt(productId));
    setProduct(selectedProduct);
  }, [productId]);

  const addToCart = (product) => {
    setCartItems(prevItems => [...prevItems, product]);
    console.log(product);
  };

  const removeFromCart = (productToRemove) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productToRemove.id));
  };


  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
      <CustomLink to="/cart" class="link" />
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <div class="card">
        <div class="card__title">
          <div class="icon">
            <i class="fa fa-arrow-left"></i>
          </div>
        </div>
        <div class="card__body">
          <div class="half">
            <div class="featured_text">
              <h1>{product.title}</h1>
              <br />
              <p class="sub"></p>
              <p class="price">${product.price}</p>
            </div>
            <div class="image" onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}  style={{ width: '400px', overflow: 'hidden', position: 'relative' }}
              >
              <img src={`/images/${product.img}.png`} alt={product.title} id="zoom-image"  style={{
          width: '100%',
          display: 'block',
          transition: 'transform 0.1s ease',
          transformOrigin: '0 0',
          transform: transform,
          cursor: 'zoom-in',
        }}/>
            </div>
          </div>
          <div class="half">
            <div class="description">
              <p>{product.description}</p>
            </div>
          </div>
        </div>
        <div class="card__footer">

          <div class="action">
            <button type="button" onClick={handleAddToCart}>Add to cart</button>
            <CustomLink to="/store" class="link">Back</CustomLink>
          </div>
        </div>
      </div>
    </main>
  );
}



function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  const path = window.location.pathname

  return (
    <Link to={to} {...props}>
      {children}
    </Link>
  )
}