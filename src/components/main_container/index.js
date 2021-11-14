import CategoryList from "../product/category_list";
import ProductList from "../product/product_list";
import Cart from "../cart";
import {
    Routes,
    Route,
  } from "react-router-dom";
import classes from './mainContainer.module.css'


const Main = ()=>{
    return (
            <div className={classes.container}>
                <Routes>
                    <Route exact path='/' element={<CategoryList/>}/>
                    <Route path='/cart' element={<Cart/>}/>
                    <Route path='/products/:category' element={<ProductList/>}/>
                </Routes>
            </div>
    )
}

export default Main;