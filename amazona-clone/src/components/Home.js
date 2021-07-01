import React from 'react';
import Navbar from './NavBar';
import './Home.css';
import Banner from './Banner';
import Product from './Product';
import Footer from './Footer';

function Home(props) {
    return(
        <div className="home">
            <Navbar />
            <Banner />
            <div className="home__row">
                <Product 
                // id={products.map( x => x.id )}
                // title={products.map(x => x.title)}
                // price={products.map(x => x.price)}
                />
            </div>
            <Footer />
        </div>
    )
}

export default Home;