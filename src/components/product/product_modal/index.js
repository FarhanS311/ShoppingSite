import {useDispatch, useSelector} from 'react-redux';
import classes from './productModal.module.css';
import toggleModal from '../../../actions/toggleModal';
import unselectProduct from '../../../actions/unselectProduct';
import addToCart from '../../../actions/addToCart';

const ProductModal = ()=>{
    const product = useSelector(state=>state.product);
    const {id,title,price,category,description,image,rating} = product;
    const dispatch = useDispatch();
    const onModalCloseHandler=()=>{
        dispatch(toggleModal());
        dispatch(unselectProduct());
    }
    const onAddHandler = ()=>{
        dispatch(addToCart(product));
    }

    return (
        <div className={classes.background}>
            <div className={classes.container}>
                <div className={classes.imageContainer}>
                    <img src={image} className={classes.image}/>
                </div>
                <div className={classes.productInfo}>
                    <button onClick={onModalCloseHandler} className={classes.closeBtn}>X</button>
                    <h2>{title}</h2>
                    <div>Rating {rating.rate} -- {rating.count}</div>
                    <h5>in {category}</h5>
                    <p>{description}</p>
                    <div>${price}</div>
                    <button onClick={onAddHandler} className={classes.cartBtn}>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default ProductModal