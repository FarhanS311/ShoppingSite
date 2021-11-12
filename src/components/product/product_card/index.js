import classes from './productCard.module.css';
import selectProduct from '../../../actions/selectProduct';
import { useDispatch } from 'react-redux';
import toggleModal from '../../../actions/toggleModal';

const ProductCard = (props)=>{

    const dispatch = useDispatch();

    const toggleModalHandler = (product)=>{
        dispatch(toggleModal());
        dispatch(selectProduct(product));
    }

    const {  
        id,
        title,
        price,
        category,
        description,
        image} = props;

    return(
        <div className={classes.productCard} onClick={()=>{toggleModalHandler(props)}}>
            <img src={image} className={classes.cardImage}/>
            <h3>{title}</h3>
            <h4>${price}</h4>
        </div>
    )

}

export default ProductCard