import {useDispatch, useSelector} from 'react-redux';
import classes from './productModal.module.css';
import hideModal from '../../../actions/hideModal';
import unselectProduct from '../../../actions/unselectProduct';
import addToCart from '../../../actions/addToCart';
import removeFromCart from '../../../actions/removeFromCart';

const ProductModal = ()=>{

    const product = useSelector(state=>state.product);
    // const addButton = useSelector(state=>state.showAddButton);
    const cart = useSelector(state=>state.cart);

    const addButtonStatus = ()=>{
        return !(cart.find(item=>item.id===product.id));
    }

    const {title,price,category,description,image,rating} = product;
    const dispatch = useDispatch();
    const onModalCloseHandler=()=>{
        dispatch(hideModal());
        dispatch(unselectProduct());
    }
    const onAddHandler = ()=>{
        dispatch(addToCart({...product,quantity:'1'}));
        // dispatch(toggleAddButton());
    }
    const onRemoveHandler = ()=>{
        dispatch(removeFromCart(product.id));
        // dispatch(toggleAddButton());
    }

    return (
        <div className={classes.background}>
            <div className={classes.container}>
                <div className={classes.imageContainer}>
                    <img src={image} className={classes.image} alt={title}/>
                </div>
                <div className={classes.productInfo}>
                    <button onClick={onModalCloseHandler} className={classes.closeBtn}>X</button>
                    <h2>{title}</h2>
                    <div>Rating {rating.rate} -- {rating.count} ratings</div>
                    <h5>in {category}</h5>
                    <p>{description}</p>
                    <div>${price}</div>
                    {addButtonStatus() ?
                    <button onClick={onAddHandler} className={classes.cartBtn}>Add to cart</button> :
                    <button onClick={onRemoveHandler} className={classes.cartBtn}>Remove from cart</button> }
                </div>
            </div>
        </div>
    )
}

export default ProductModal