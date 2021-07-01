import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

// import BurgerButton from './BurgerButton';

import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem } from '@material-ui/core';

import CloseIcon from '@material-ui/icons/Close';
import ArrowForwardIOSIcon from '@material-ui/icons/ArrowForwardIos';


const useStyles = makeStyles((theme) => ({
    shoppingCategory: {
        padding: '0',
        textDecoration: 'none',
        textTransform: 'uppercase'
    },
    shoppingItem: {
        padding: '0'
    },
    forwardIcon: {
        blockSize: '15px'
    }
}));


function Sidebar() {
    const classes = useStyles();

    const removeMenu = () => {
        document.querySelector('.leftSection').classList.remove('open');
        document.body.classList.remove('lock-scroll');
    }
    return (
        <div className="leftSection">
            <div className="sidebar">

                <div className="leftSection_topPart">
                    <Link to='/login' className="signInLink"><h3>Hello, Sign in</h3></Link>
                    {/* <CancelIcon className="cancelIcon" onClick={ removeMenu } /> */}
                </div>
                <div className="leftSection_middlePart">
                    <List>
                        <ListItem className={classes.shoppingCategory}>
                            <span className="shoppingCategoryText">shop by category</span>
                        </ListItem>
                        <ListItem className={classes.shoppingItem}>
                            <Link to='/product' className="itemLink">
                                <p className="shoppingItemText">
                                    <span>Echo & Alexa</span>
                                    <ArrowForwardIOSIcon className={classes.forwardIcon} />
                                </p>
                            </Link>
                        </ListItem>
                        <ListItem className={classes.shoppingItem}>
                            <Link to='/product' className="itemLink">
                                <p className="shoppingItemText">
                                    <span>Kindle E-Readers & eBooks</span>
                                    <ArrowForwardIOSIcon className={classes.forwardIcon} />
                                </p>
                            </Link>
                        </ListItem>
                        <ListItem className={classes.shoppingItem}>
                            <Link to='/product' className="itemLink">
                                <p className="shoppingItemText">
                                    <span>Fire TV Stick</span>
                                    <ArrowForwardIOSIcon className={classes.forwardIcon} />
                                </p>
                            </Link>
                        </ListItem>
                        <ListItem className={classes.shoppingItem}>
                            <Link to='/product' className="itemLink">
                                <p className="shoppingItemText">
                                    <span>Audible Audiobooks</span>
                                    <ArrowForwardIOSIcon className={classes.forwardIcon} />
                                </p>
                            </Link>
                        </ListItem>
                        <ListItem className={classes.shoppingItem}>
                            <Link to='/amazonprime' className="itemLink">
                                <p className="shoppingItemText">
                                    <span>Amazon Prime Video</span>
                                    <ArrowForwardIOSIcon className={classes.forwardIcon} />
                                </p>
                            </Link>
                        </ListItem>
                        <ListItem className={classes.shoppingItem}>
                            <Link to='/amazonprime' className="itemLink">
                                <p className="shoppingItemText">
                                    <span>Amazon Prime Music</span>
                                    <ArrowForwardIOSIcon className={classes.forwardIcon} />
                                </p>
                            </Link>
                        </ListItem>
                    </List>
                    <div className="horizontalRow">
                        <hr />
                    </div>
                    <List>
                        <ListItem className={classes.shoppingItem}>
                            <Link to='/product' className="itemLink">
                                <p className="shoppingItemText">
                                    <span>Mobiles, Computers</span>
                                    <ArrowForwardIOSIcon className={classes.forwardIcon} />
                                </p>
                            </Link>
                        </ListItem>
                        <ListItem className={classes.shoppingItem}>
                            <Link to='/product' className="itemLink">
                                <p className="shoppingItemText">
                                    <span>TV, Appliances, Electronics</span>
                                    <ArrowForwardIOSIcon className={classes.forwardIcon} />
                                </p>
                            </Link>
                        </ListItem>
                        <ListItem className={classes.shoppingItem}>
                            <Link to='/product' className="itemLink">
                                <p className="shoppingItemText">
                                    <span>Men's Fashion</span>
                                    <ArrowForwardIOSIcon className={classes.forwardIcon} />
                                </p>
                            </Link>
                        </ListItem>
                        <ListItem className={classes.shoppingItem}>
                            <Link to='/product' className="itemLink">
                                <p className="shoppingItemText">
                                    <span>Women's Fashion</span>
                                    <ArrowForwardIOSIcon className={classes.forwardIcon} />
                                </p>
                            </Link>
                        </ListItem>
                        <ListItem className={classes.shoppingItem}>
                            <Link to='/product' className="itemLink">
                                <p className="shoppingItemText">
                                    <span>Home, Kitchen, Pets</span>
                                    <ArrowForwardIOSIcon className={classes.forwardIcon} />
                                </p>
                            </Link>
                        </ListItem>
                        <ListItem className={classes.shoppingItem}>
                            <Link to='/product' className="itemLink">
                                <p className="shoppingItemText">
                                    <span>Beauty, Health, Grocery</span>
                                    <ArrowForwardIOSIcon className={classes.forwardIcon} />
                                </p>
                            </Link>
                        </ListItem>
                        <ListItem className={classes.shoppingItem}>
                            <Link to='/product' className="itemLink">
                                <p className="shoppingItemText">
                                    <span>Sports, Fitness, Bags, Luggage</span>
                                    <ArrowForwardIOSIcon className={classes.forwardIcon} />
                                </p>
                            </Link>
                        </ListItem>
                        <ListItem className={classes.shoppingItem}>
                            <Link to='/product' className="itemLink">
                                <p className="shoppingItemText">
                                    <span>Toys, Baby Products, Kid's Fashion</span>
                                    <ArrowForwardIOSIcon className={classes.forwardIcon} />
                                </p>
                            </Link>
                        </ListItem>
                        <ListItem className={classes.shoppingItem}>
                            <Link to='/product' className="itemLink">
                                <p className="shoppingItemText">
                                    <span>Car, Motorbike, Industrial</span>
                                    <ArrowForwardIOSIcon className={classes.forwardIcon} />
                                </p>
                            </Link>
                        </ListItem>
                        <ListItem className={classes.shoppingItem}>
                            <Link to='/product' className="itemLink">
                                <p className="shoppingItemText">
                                    <span>Books</span>
                                    <ArrowForwardIOSIcon className={classes.forwardIcon} />
                                </p>
                            </Link>
                        </ListItem>
                        <ListItem className={classes.shoppingItem}>
                            <Link to='/product' className="itemLink">
                                <p className="shoppingItemText">
                                    <span>Movies, Music & Video Games</span>
                                    <ArrowForwardIOSIcon className={classes.forwardIcon} />
                                </p>
                            </Link>
                        </ListItem>
                        <ListItem className={classes.shoppingItem}>
                            <Link to='/product' className="itemLink">
                                <p className="shoppingItemText">
                                    <span>Gift Cards and Mobile Recharges</span>
                                    <ArrowForwardIOSIcon className={classes.forwardIcon} />
                                </p>
                            </Link>
                        </ListItem>
                        <ListItem className={classes.shoppingItem}>
                            <Link to='/product' className="itemLink">
                                <p className="shoppingItemText">
                                    <span>Flight Tickets</span>
                                </p>
                            </Link>
                        </ListItem>
                        <ListItem className={classes.shoppingItem}>
                            <Link to='/product' className="itemLink">
                                <p className="shoppingItemText">
                                    <span>Full Store Directory</span>
                                </p>
                            </Link>
                        </ListItem>
                    </List>
                    <div className="horizontalRowTwo">
                        <hr />
                    </div>
                    <List>
                        <ListItem className={classes.shoppingCategory}>
                            <span className="shoppingCategoryText">help & settings</span>
                        </ListItem>
                        <ListItem className={classes.shoppingItem}>
                            <Link to='/product' className="itemLink">
                                <p className="shoppingItemText">
                                    <span>Your Account</span>
                                </p>
                            </Link>
                        </ListItem>
                        <ListItem className={classes.shoppingItem}>
                            <Link to='/product' className="itemLink">
                                <p className="shoppingItemText">
                                    <span>Customer Service</span>
                                </p>
                            </Link>
                        </ListItem>
                        <ListItem className={classes.shoppingItem}>
                            <Link to='/product' className="itemLink">
                                <p className="shoppingItemText">
                                    <span>Help & Settings</span>
                                </p>
                            </Link>
                        </ListItem>
                    </List>
                </div>
            </div>
            <div className="sidebar-rightSection" onClick={ removeMenu }>
                <CloseIcon className="closeIcon" />
            </div>
        </div>
    )
}

export default Sidebar
