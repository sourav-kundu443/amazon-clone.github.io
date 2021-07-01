import React from 'react';
import './ProductDetails.css';
import Navbar from './NavBar';
import data from '../data';
import { Link } from 'react-router-dom';
import Product from './Product';
import Footer from './Footer';

import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ShopIcon from '@material-ui/icons/Shop';
import LockIcon from '@material-ui/icons/Lock';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';


function ProductDetails(props) {
    // console.log(props.match.params.num);
    const product = data.storeProducts.find(x => x.id == props.match.params.num)
    // console.log(product);
    return (
        <div className="productDetails">
            <Navbar />
            <div className="productDetails__parent">
                <div className="productDetails__imageSection">
                    <img src={product.image} className="productDetails__image1" alt={"product" + product.id} />
                </div>
                <div className="productDetails__descriptionSection">
                    <h2 className="productTitle">{product.title}</h2>
                    <p className="productRating">⭐⭐⭐⭐⭐</p>
                    <hr />
                    <div className="price">
                        <p className="productPrice">
                            <small>M.R.P.:&nbsp;&nbsp;
                            <span>
                                    <strike>$&nbsp;{product.price}</strike>
                                </span>
                            </small>
                        </p>
                        <p className="productDiscountedPrice">
                            <small>price:&nbsp;&nbsp;
                            <span className="discountValue">
                                    $&nbsp;{product.discountPrice}
                                </span>
                            </small>
                        </p>
                    </div>

                    <hr />
                    <ul className="productInfo">
                        <li className="productBrand">
                            <p className="productBrandText">Brand name:-&nbsp;{product.company}</p>
                        </li>
                        <li className="productDescription">
                            <p className="productDescriptionText">{product.info}</p>
                        </li>
                    </ul>
                </div>
                <div className="productDetails__cartSection">
                    <div className="socialMediaSection">
                        <Link to="/" className="socialMediaIcon">
                            <p className="shareText">Share</p>
                            <EmailOutlinedIcon className="socialIcon emailIcon" />
                            <FacebookIcon className="socialIcon facebookIcon" />
                            <TwitterIcon className="socialIcon twitterIcon" />
                            <PinterestIcon className="socialIcon pinterestIcon" />
                        </Link>
                    </div>
                    <div className="rightCard">
                        <p>Quantity:
                        <select>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                            </select>
                        </p>
                        <div className="innerCard">
                            <button className="btn cartButton"><AddShoppingCartIcon className="btnIcons" />Add to cart</button>
                            <button className="btn buyNowButton"><ShopIcon className="btnIcons" />Buy Now</button>
                            <Link to="/seurity" className="cardLinks">
                                <LockIcon className="linksIcons" />
                                <p>secure transaction</p>
                            </Link>
                            <div className="gift">
                                <input type="radio" name="gift" />
                                Add gift options
                            </div>
                            <hr className="horizontalLine" />
                            <Link to="/address" className="cardLinks">
                                <LocationOnOutlinedIcon className="linksIcons" />
                                <p>Select Delevery location</p>
                            </Link>
                            <hr className="horizontalLine" />
                            <button className="wishList">Add to Wish List</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Product />
            </div>
            <Footer />
        </div>
    )
}

export default ProductDetails;