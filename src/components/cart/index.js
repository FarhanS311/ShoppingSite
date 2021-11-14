import classes from './cart.module.css';
import { useDispatch, useSelector } from 'react-redux';
import removeFromCart from '../../actions/removeFromCart';
import changeQty from '../../actions/changeQty';

const Cart = ()=>{
    const cart = useSelector(state=>state.cart);
    const dispatch = useDispatch();

    const incrementHandler = (item,quantity)=>{
        dispatch(changeQty({...item,quantity:`${parseInt(quantity)+1}`}));
    }
    const decrementHandler = (item,quantity)=>{
        if(quantity!==1)
            dispatch(changeQty({...item,quantity:`${parseInt(quantity)-1}`}));
        else
            dispatch(removeFromCart(item.id));
    }

    const cartItems = cart.map((item)=>{
        const {id,title,price,quantity,image} = item;

        return (<div className={classes.container} key={id}>
            <div className={classes.imageContainer}>
                <img src={image} className={classes.image} alt={title}/>
            </div>
            <div className={classes.productInfo}>
                {/* <button onClick={onModalCloseHandler} className={classes.closeBtn}>X</button> */}
                <h2>{title}</h2>
                {/* <div>Rating {rating.rate} -- {rating.count}</div> */}
                {/* <h5>in {category}</h5> */}
                {/* <p>{description}</p> */}
                <div className={classes.details}>
                    <div>Qty:
                        <button onClick={()=>decrementHandler(item,quantity)} className={classes.minusBtn}>-</button>
                        {quantity}
                        <button onClick={()=>incrementHandler(item,quantity)} className={classes.plusBtn}>+</button>
                    </div>
                    <div>${price*quantity}</div>
                </div>
                {/* <button onClick={onAddHandler} className={classes.cartBtn}>Add to cart</button> */}
            </div>
        </div>);
    })

    const emptyCart = ()=>{
        return (
            <div className={classes.emptyCart}>
                <h1>Your cart is empty!</h1>
            </div>
        )
    }

    const TotalPrice = ()=>{
        let totalAmount = 0;
        for(let i=0; i<cart.length; i++){
            totalAmount+=cart[i].price*cart[i].quantity;
        }
        return(
            <div className={classes.total}>{Math.round(totalAmount*100)/100}</div>
        )
    }

    const CheckoutBtn = ()=>{
        return (
            <button className={classes.checkoutBtn}>
            Proceed to checkout
        </button>   
        )
    }

    return (
        <div className={classes.background}>
            {cart.length!==0 ? 
            <>
                {cartItems}
                <TotalPrice/>
                {/* <div className={classes.checkoutBtnContainer}> */}
                    <CheckoutBtn/>
                {/* </div> */}
            </>
            : emptyCart()}
        </div>
    )
}
export default Cart;