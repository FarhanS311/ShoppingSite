import React from 'react';
import HeaderCart from '../cart/header_cart';
import classes from './header.module.css';
import { Link } from "react-router-dom";


const Header = (props) =>{
    return (
        <div className={classes.header}>
                <Link to='/' className={classes.title}>
                    <h1 >Good Store</h1>
                </Link>
                <Link to='/cart'>
                    <HeaderCart />
                </Link>
        </div>
    );
}

export default Header;