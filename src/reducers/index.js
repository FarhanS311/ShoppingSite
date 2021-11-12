import { combineReducers } from "redux";
import categoryList from "./categoryList";
import productList from "./productList";
import modalStatus from "./modal";
import selectedProduct from "./selectedProduct";
import cart from "./cart";


const allReducers = combineReducers({
    categories: categoryList,
    products:productList,
    modalStatus:modalStatus,
    product:selectedProduct,
    cart:cart,
});

export default allReducers;