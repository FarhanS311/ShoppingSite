import CategoryList from "../product/category_list";
import ProductList from "../product/product_list";
import Cart from "../cart";
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";


const Main = ()=>{
    return (
            <Routes>
                <Route exact path='/' element={<CategoryList/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/products/:category' element={<ProductList/>}/>
            </Routes>
    )
}

export default Main;