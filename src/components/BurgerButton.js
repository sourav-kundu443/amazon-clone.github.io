import React from 'react';
import './BurgerButton.css';

function BurgerButton() {
    const openMenu = () => {
        document.querySelector('.leftSection').classList.add('open');
        document.body.classList.toggle('lock-scroll');
    }
    return (
        <div className="burgerButton" onClick={ openMenu }>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default BurgerButton
