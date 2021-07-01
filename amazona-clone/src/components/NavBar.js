import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data';
import './NavBar.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import BurgerButton from './BurgerButton';
import Sidebar from './Sidebar';
// import { useStateValue } from '../StateProvider';


function Navbar() {
    // const [{basket}] = useStateValue();
    return (
        <div className="navbar">
            {/* Hamburger button */}
            <BurgerButton />
            <Sidebar />
            {/* Navbar logo image in the left most */}
            <Link to="/" className="navbar__logoLink">
                {
                    data.logo.map((jack, i) =>
                        <img
                            src={jack.image} alt="logo" key={i}
                            className="navbar__logo"
                        />
                    )
                }
            </Link>
            {/* Navabr search box */}
            <div className="navbar__search">
                <input type="text" className="navbar__searchInput" />
                <SearchIcon className="navbar__searchIcon" />
            </div>
            {/* Navabar Three Links */}
            <div className="navbar__links">
                {/* First Link */}
                <Link to="/login" className="navbar__link">
                    <div className="navbar__linkOption">
                        <span className="navbar__linkOptionLineOne">hello</span>
                        <span className="navbar__linkOptionLineTwo">sign in</span>
                    </div>
                </Link>
                {/* Second Link */}
                <Link to="/returnorders" className="navbar__link">
                    <div className="navbar__linkOption">
                        <span className="navbar__linkOptionLineOne">return</span>
                        <span className="navbar__linkOptionLineTwo">& orders</span>
                    </div>
                </Link>
                {/* Third Link */}
                <Link to="/amazonprime" className="navbar__link">
                    <div className="navbar__linkOption">
                        <span className="navbar__linkOptionLineOne">your</span>
                        <span className="navbar__linkOptionLineTwo">prime</span>
                    </div>
                </Link>
                {/* Shopping Basket with count */}
                <Link to="/checkout" className="navbar__link">
                    <div className="navbar__basketOption">
                        <ShoppingBasket />
                        <span className="navbar__linkOptionLineTwo navbar__optionCount">0</span>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;