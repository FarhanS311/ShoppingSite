// import { Link,BrowserRouter as Router } from "react-router-dom";

const HeaderCart = (props)=>{
    const cartIconsStyle = {
        width:"70px",
        marginRight:"20px"
    }
    return (
        <img src="https://www.iconpacks.net/icons/2/free-shopping-cart-icon-2029-thumb.png" alt="cart icon" style={cartIconsStyle}/>
    )
}

export default HeaderCart;