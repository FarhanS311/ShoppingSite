// import { Link,BrowserRouter as Router } from "react-router-dom";
import { useSelector } from 'react-redux';
import classes from './headerCart.module.css';

const HeaderCart = ()=>{
    const totalItems = useSelector(state=>state.cart.length);
    return (
        <div className={classes.container}>
        <img src="https://www.iconpacks.net/icons/2/free-shopping-cart-icon-2029-thumb.png" alt="cart icon" className={classes.cartImage}/>
        {totalItems>0 ? (<div className={classes.totalItems}>{totalItems}</div>):''}
        </div>
    )
}

export default HeaderCart;