const loadingStatus = (state=false,action)=>{
    const {type} = action;

    switch(type){
        case 'TOGGLE_LOADING':
            return !state;
        default:
            return state;
    }
}

export default loadingStatus;