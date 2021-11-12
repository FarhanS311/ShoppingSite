const productList = (state=[],action)=>{
    const {type, payload} = action;

    switch(type){
        case 'SET_PRODUCTLIST':
            return [...state,...payload];
        case 'RESET_PRODUCTLIST':
                return [];
        default:
            return state;
    }
}

export default productList