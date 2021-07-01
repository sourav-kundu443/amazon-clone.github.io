import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import data from '../data';

function Footer() {
    return (
        <div className="footer">
            <div className="footer__backToTopButton">
                <span>Back to Top</span>
            </div>
            <div className="footer__whole">

                <footer className="footer__container">
                    <div className="footer__sections">
                        <h1 className="footer__headingOne">Get to Know Us</h1>
                        <Link to='/about' className="footer__paragraph">
                            <p>About Us</p>
                        </Link>
                        <Link to='/careers' className="footer__paragraph">
                            <p>Careers</p>
                        </Link>
                        <Link to='/updates' className="footer__paragraph">
                            <p>Press Releases</p>
                        </Link>
                        <Link to='/aboutus' className="footer__paragraph">
                            <p>Amazon Cares</p>
                        </Link>
                        <Link to='/prime' className="footer__paragraph">
                            <p>Gift a Smile</p>
                        </Link>
                    </div>
                    <div className="footer__sections">
                        <h1 className="footer__headingOne">Connect with Us</h1>
                        <Link to='/login' className="footer__paragraph">
                            <p>Facebook</p>
                        </Link>
                        <Link to='/login' className="footer__paragraph">
                            <p>Twiter</p>
                        </Link>
                        <Link to='/login' className="footer__paragraph">
                            <p>Instagram</p>
                        </Link>
                    </div>
                    <div className="footer__sections">
                        <h1 className="footer__headingOne">Make Money with Us</h1>
                        <Link to='/careers' className="footer__paragraph">
                            <p>Sell on Amazon</p>
                        </Link>
                        <Link to='/careers' className="footer__paragraph">
                            <p>Sell under Amazon Accelerator</p>
                        </Link>
                        <Link to='/careers' className="footer__paragraph">
                            <p>Become an Affiliate</p>
                        </Link>
                        <Link to='/careers' className="footer__paragraph">
                            <p>Fulfillment by Amazon</p>
                        </Link>
                        <Link to='/careers' className="footer__paragraph">
                            <p>Advertise Your Products</p>
                        </Link>
                        <Link to='/careers' className="footer__paragraph">
                            <p>Amazon Pay on Marchants</p>
                        </Link>
                    </div>
                    <div className="footer__sections">
                        <h1 className="footer__headingOne">Let Us Help You</h1>
                        <Link to="/help" className="footer__paragraph">
                            <p>COVID-19 and Amazon</p>
                        </Link>
                        <Link to="/login" className="footer__paragraph">
                            <p>Your Account</p>
                        </Link>
                        <Link to="/help" className="footer__paragraph">
                            <p>Returns Centers</p>
                        </Link>
                        <Link to="/help" className="footer__paragraph">
                            <p>100% Purchase Protection</p>
                        </Link>
                        <Link to="/help" className="footer__paragraph">
                            <p>Amazon App Download</p>
                        </Link>
                        <Link to="/help" className="footer__paragraph">
                            <p>Amazon Assistant Download</p>
                        </Link>
                        <Link to="/help" className="footer__paragraph">
                            <p>Help</p>
                        </Link>
                    </div>
                </footer>
                <hr className="footer__hr" />
                <div className="footer__logoAndButton">
                    <Link to="/" className="footer__logoLink">
                        {
                            data.logo.map((jack, i) =>
                                <img
                                    src={jack.image} alt="logo" key={i}
                                    className="footer__logo"
                                />
                            )
                        }
                    </Link>
                    <button className="language__button">English</button>
                </div>
                <div className="footer__countryList">
                    <p className="country">Australia</p>
                    <p className="country">Brazil</p>
                    <p className="country">Italy</p>
                    <p className="country">India</p>
                    <p className="country">Germany</p>
                    <p className="country">Canada</p>
                    <p className="country">Japan</p>
                    <p className="country">Mexico</p>
                    <p className="country">France</p>
                    <p className="country">Netherlands</p>
                    <p className="country">Singapore</p>
                    <p className="country">Spain</p>
                    <p className="country">United States</p>
                    <p className="country">United Kingdom</p>
                    <p className="country">United Arab Emitates</p>
                </div>
            </div>
            <div className="footer__lowerContainer">
                <div className="footer__lowerContainerTexts">

                    <div className="footer__lowerContainerSection">
                        <Link to='/books' className="link">
                            <p className="bold">AbeBooks</p>
                            <p className="small">Books, art</p>
                            <p className="small">& collections</p>
                        </Link>
                        <Link to='/books' className="link">
                            <p className="bold">Shopbop</p>
                            <p className="small">Designer</p>
                            <p className="small">Fashion Brands</p>
                        </Link>
                    </div>
                    <div className="footer__lowerContainerSection">
                        <Link to='/books' className="link">
                            <p className="bold">Amazon Web Services</p>
                            <p className="small">Scalable Cloud</p>
                            <p className="small">Computing Services</p>
                        </Link>
                        <Link to='/books' className="link">
                            <p className="bold">Amazon Bussiness</p>
                            <p className="small">Everything For</p>
                            <p className="small">Your Bussiness</p>
                        </Link>
                    </div>
                    <div className="footer__lowerContainerSection">
                        <Link to='/books' className="link">
                            <p className="bold">Audible</p>
                            <p className="small">Download</p>
                            <p className="small">Audio Books</p>
                        </Link>
                        <Link to='/books' className="link">
                            <p className="bold">Prime Now</p>
                            <p className="small">2-Hour Delivery</p>
                            <p className="small">on Everyday Items</p>
                        </Link>
                    </div>
                    <div className="footer__lowerContainerSection">
                        <Link to='/books' className="link ">
                            <p className="bold">DPReview</p>
                            <p className="small">Digital</p>
                            <p className="small">Photography</p>
                        </Link>
                        <Link to='/books' className="link">
                            <p className="bold">Amazon Prime Music</p>
                            <p className="small">60 million songs</p>
                        </Link>
                    </div>
                    <div className="footer__lowerContainerSection">
                        <Link to='/books' className="link">
                            <p className="bold">IMDb</p>
                            <p className="small">Movies, TV</p>
                            <p className="small">& Celebrities</p>
                        </Link>
                    </div>
                </div>
                <div className="footer__footer">
                    <Link to="/condition" className="footer__downLink">
                        <span>Condition of Use & Sale</span>
                    </Link>
                    <Link to="/condition" className="footer__downLink">
                        <span>Privacy Notice</span>
                    </Link>
                    <Link to="/condition" className="footer__downLink">
                        <span>Interest-Based Ads</span>
                    </Link>
                    <p>@ 1996-2020, Amazon.com, inc. or its affiliates</p>
                </div>
            </div>
        </div>
    )
}
export default Footer;