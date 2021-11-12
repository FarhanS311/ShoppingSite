import classes from './cart.module.css';
import { useSelector } from 'react-redux';

const Cart = ()=>{
    const cart = useSelector(state=>state.cart);

    const cartItems = cart.map((item)=>{
        const {id,title,price,quantity,category,description,image,rating} = item;

        return (<div className={classes.container}>
            <div className={classes.imageContainer}>
                <img src={image} className={classes.image}/>
            </div>
            <div className={classes.productInfo}>
                {/* <button onClick={onModalCloseHandler} className={classes.closeBtn}>X</button> */}
                <h2>{title}</h2>
                {/* <div>Rating {rating.rate} -- {rating.count}</div> */}
                {/* <h5>in {category}</h5> */}
                {/* <p>{description}</p> */}
                <div className={classes.details}>
                    <span>${price}</span>
                    <span>Qty:{quantity}</span>
                </div>
                {/* <button onClick={onAddHandler} className={classes.cartBtn}>Add to cart</button> */}
            </div>
        </div>);
    })

    console.log("in cart");

    return (
        <div className={classes.background}>
            {cartItems}
        </div>
    )
}
export default Cart;