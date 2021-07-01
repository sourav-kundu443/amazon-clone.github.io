import React from 'react';
import './Banner.css';
import { Link } from 'react-router-dom';
import data from '../data';

function Banner() {
    return (
        <div className="banner">
            <Link to="/prime">
                {
                    data.banner.map( (jack, i) => 
                        <img 
                            src={jack.bannerImage} alt="banner" key={i}
                            className="banner__image"
                        />
                    )
                }
            </Link>
        </div>
    )
}

export default Banner
