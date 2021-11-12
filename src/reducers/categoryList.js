const categoryList = (state=[],action)=>{
    const {type, payload} = action;

    switch(type){
        case 'SET_CATEGORYLIST':
            return [...state,...payload];
        default:
            return state;
    }
}

export default categoryList