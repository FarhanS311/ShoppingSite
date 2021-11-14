import {useParams} from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import setProductList from '../../../actions/setProductList';
import resetProductList from '../../../actions/resetProductList';
import { useDispatch, useSelector } from "react-redux";
import ProductCard from '../product_card';
import classes from './products.module.css';
import hideModal from "../../../actions/hideModal";
import ProductModal from '../product_modal';
import toggleLoading from "../../../actions/toggleLoading";
import LoadingComp from "../../loading";
import unselectProduct from "../../../actions/unselectProduct";

const ProductList = ()=>{
    
    const {category}=useParams();
    const products = useSelector(state=>state.products);
    const dispatch = useDispatch();
    const isModalOpen = useSelector(state=>state.modalStatus);
    const isLoading = useSelector(state=>state.isLoading);

    const productCards = products.map(obj=>{
        return(
                // <Link to={`${url}/${obj.id}`} key={obj.id}>
                    <ProductCard {...obj} key={obj.id} />
                // </Link>
        )
    });
    
    useEffect(()=>{
        async function fetchProductList(){
            try{
                const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
                // console.log(response.data);
                // dispatch(resetProductList());
                dispatch(setProductList(response.data));
                dispatch(toggleLoading());
            }catch(error){
                console.log(error);
            }
        }
        dispatch(toggleLoading());
        fetchProductList();

        return ()=>{
            dispatch(resetProductList());
            dispatch(unselectProduct());
            dispatch(hideModal());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    return (
        <>
            <div className={classes.cards}>

                {isLoading? <LoadingComp/>: productCards}
            </div>
            {isModalOpen ? <ProductModal/>:''}
        </>
    )
}

export default ProductList;