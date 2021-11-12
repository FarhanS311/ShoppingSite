import {useParams} from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import setProductList from '../../../actions/setProductList';
import resetProductList from '../../../actions/resetProductList';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProductCard from '../product_card';
import classes from './products.module.css';
import toggleModal from '../../../actions/toggleModal';
import selectProduct from "../../../actions/selectProduct";
import ProductModal from '../product_modal';

const ProductList = ()=>{
    
    const {category}=useParams();
    const products = useSelector(state=>state.products);
    const dispatch = useDispatch();
    const isModalOpen = useSelector(state=>state.modalStatus);

    const productCards = products.map(obj=>{
        return(
                // <Link to={`${url}/${obj.id}`} key={obj.id}>
                    <ProductCard {...obj} />
                // </Link>
        )
    });
    
    useEffect(()=>{
        async function fetchProductList(){
            try{
                const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
                console.log(response.data);
                // dispatch(resetProductList());
                dispatch(setProductList(response.data));
            }catch(error){
                console.log(error);
            }
        }
        fetchProductList();

        return ()=>{dispatch(resetProductList());}
    },[]);

    return (
        <>
            <div className={classes.cards}>
                {productCards}
            </div>
            {isModalOpen ? <ProductModal/>:''}
        </>
    )
}

export default ProductList;