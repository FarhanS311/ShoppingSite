import { useEffect } from "react";
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import setCategoryList from '../../../actions/setCategoryList';
import CategoryCard from "../category_card";
import classes from './category_list.module.css'
import {Link} from "react-router-dom";


const CategoryList = ()=>{

    // console.log('categorylist')

    const categories = useSelector(state=>state.categories);
    const dispatch = useDispatch();

    const categoryCards = categories.map((title,index)=>{
        return(
                <Link to={`/products/${title}`} key={index}>
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
            }catch(error){
                console.log(error);
            }
        }
        if(!categories.length){
            fetchCategories();
        }
    },[]);



    return (
            <div className={classes.cards}>
                {categoryCards}
            </div>
    )

}

export default CategoryList;