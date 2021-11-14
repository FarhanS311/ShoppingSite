const removeFromCart = (props)=>{
    return {
        type:'REMOVEFROMCART',
        payload:props,
    }
}
export default removeFromCart;