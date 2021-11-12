const cart = (state=[],action)=>{
    const {type, payload} = action;

    switch(type){
        case 'ADDTOCART':
            return [...state,payload];
        case 'REMOVEFROMCART':
            return state.filter(obj=>obj.id!=payload);
        // case 'INCREASE':
        //         return [...state,{}];
        // case 'DECREASE':
        //         return [];
        default:
            return state;
    }
}

export default cart