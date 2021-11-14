const cart = (state=[],action)=>{
    const {type, payload} = action;

    switch(type){
        case 'ADDTOCART':
            return [...state,payload];
        case 'REMOVEFROMCART':
            return state.filter(obj=>obj.id!==payload);
        case 'INCREMENT_DECREMENT':
                return state.map((obj)=>{
                    if(obj.id===payload.id){
                        return {...obj,quantity:payload.quantity};
                    }
                    else{
                        return obj;
                    }
                });
        // case 'DECREAMENT':
        //         return [];
        default:
            return state;
    }
}

export default cart