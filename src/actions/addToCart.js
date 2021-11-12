const addToCart = (props)=>{
    return {
        type:'ADDTOCART',
        payload:{...props, quantity:"1"},
    }
}
export default addToCart;