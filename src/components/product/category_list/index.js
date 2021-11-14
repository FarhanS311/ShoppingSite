import { useEffect } from "react";
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import setCategoryList from '../../../actions/setCategoryList';
import toggleLoading from '../../../actions/toggleLoading';
import CategoryCard from "../category_card";
import classes from './category_list.module.css'
import {Link} from "react-router-dom";
import LoadingComp from "../../loading";


const CategoryList = ()=>{

    // console.log('categorylist')

    const categories = useSelector(state=>state.categories);
    const isLoading = useSelector(state=>state.isLoading);

    const dispatch = useDispatch();

    const categoryCards = categories.map((title,index)=>{
        return(
                <Link to={`/products/${title}`} key={index} className={classes.categoryLink}>
                    <CategoryCard title={title}/>
                </Link>
        )
    });

    useEffect(()=>{
        async function fetchCategories(){
            try{
                const response = await axios.get('https://fakestoreapi.com/products/categories');
                // console.log(response.data);
                dispatch(setCategoryList(response.data));
                dispatch(toggleLoading());
            }catch(error){
                console.log(error);
            }
        }
        if(!categories.length){
            dispatch(toggleLoading());
            fetchCategories();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);



    return (
            <div className={classes.cards}>
                {isLoading ? <LoadingComp/> : categoryCards}
            </div>
    )

}

export default CategoryList;