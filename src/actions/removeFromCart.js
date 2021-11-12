const removeFromCart = (props)=>{
    return {
        type:'REMOVEFROMCART',
        payload:props.id,
    }
}
export default removeFromCart;