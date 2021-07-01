import React from 'react'
import './Product.css';
import { Link } from 'react-router-dom';
import data from '../data';

function Product() {
    return (
        <div className="product">
            {
                data.storeProducts.map( product => 
                    <div className="product__parent">
                        <div className="product__info">
                            <Link to={"/product/" + product.id} className="product__title">
                                <p>{product.title}</p>
                            </Link>
                            <p className="product__price">
                                <small>M.R.P.:&nbsp;</small>
                                <strong>
                                    <strike>${product.price}</strike>
                                </strong>
                                <div className="product__discountedPrice">
                                    <small>Price:</small>
                                    <strong className="product__discountedPriceValue">&nbsp;${product.discountPrice}</strong>
                                </div>
                            </p>
                            <div className="product__rating">
                                <span>⭐⭐⭐⭐⭐</span>
                            </div>
                        </div>
                        <Link to={'/product/' + product.id} className="product__linkImage">
                            <img src={product.image} className="product__image" alt="product" />
                        </Link>
                        <button className="product__addToCartBtn">Add to Cart</button>
                    </div>
                )
            }
                    
        </div>
    )
}

export default Product
