import '../styleStore.css';

import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useMatch, useResolvedPath } from "react-router-dom";
import { debounce } from 'lodash';

import products from '../products.json';

import cart from '../assets/Cart.png';
import cartwhite from '../assets/CartWhite.png';
import info from '../assets/info.png';

import HomePage from './HomePage';
import CartPage from './CartPage';
import ProductPage from './ProductPage';


export default function StorePage() {

    const [isHovered, setIsHovered] = useState(false);
    const [arrayDataItems, setArrayDataItems] = useState([]);
    const navigate = useNavigate();
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
        const items = products.map(product => (
            <div class="product" key={product.id} >
                <img src={`/images/${product.img}.png`} alt={product.title} class="Product-Image"
                    onClick={() => handleClick(product.id)}/>
                <p>{product.title}</p>
                <span>Price: ${product.price}</span>
                <div class="inside">
                    <div class="icon"> <img src={info} class="icon" /></div>
                    
                    <div class="contents">
                        
                        {product.description}
                    </div>
                </div>
                <CustomLink to={"/cart"}>
                    <img
                        src={isHovered ? cartwhite : cart}
                        alt="cart"
                        onMouseOver={() => setIsHovered(true)}
                        onMouseOut={() => setIsHovered(false)}
                        class="Cart-Image-Button"

                    /></CustomLink>
            </div>
            
        ));

        setArrayDataItems(items);
    }, []);


    const handleClick = (productId) => {
        navigate(`/product/${productId}`);
    };


    return (
        <div className="App-store">
            <h1 className='Ftext'>COLLECTION</h1>
            <div className="products">
                {arrayDataItems}
            </div>
        </div>

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
