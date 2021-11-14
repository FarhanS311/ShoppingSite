import classes from './productCard.module.css';
import selectProduct from '../../../actions/selectProduct';
import { useDispatch } from 'react-redux';
import showModal from '../../../actions/showModal';

const ProductCard = (props)=>{

    const dispatch = useDispatch();

    const toggleModalHandler = (product)=>{
        dispatch(showModal());
        dispatch(selectProduct(product));
    }

    const {  
        title,
        price,
        image} = props;

    return(
        <div className={classes.productCard} onClick={()=>{toggleModalHandler(props)}}>
            <img src={image} className={classes.cardImage} alt={title}/>
            <div className={classes.cardName}>{title}</div>
            <div className={classes.cardPrice}>${price}</div>
        </div>
    )

}

export default ProductCard