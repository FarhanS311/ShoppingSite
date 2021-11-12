const selectedProduct = (state={},action)=>{
    const {type, payload} = action;

    switch(type){
        case 'SELECT_PRODUCT':
            return {...state,...payload};
        case 'UNSELECT_PRODUCT':
                return {};
        default:
            return state;
    }
}

export default selectedProduct